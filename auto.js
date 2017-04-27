
const Nightmare = require('nightmare');

const nightmare = Nightmare({
  show: true,
  switches: {
    'ignore-certificate-errors': true,
  },
});

nightmare
  .goto('https://duckduckgo.com')
  .type('#search_form_input_homepage', 'github nightmare')
  .click('#search_button_homepage')
  .wait('#zero_click_wrapper .c-info__title a')
  .evaluate(() => document
    .querySelector('#zero_click_wrapper .c-info__title a').href
  )
  .end()
  .then((result) => {
    console.info(result);
  })
  .catch((error) => {
    console.error('Search failed:', error);
  });
