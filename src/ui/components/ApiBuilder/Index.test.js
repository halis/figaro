
import React from 'react';
import ApiBuilder from './Index';

describe('ApiBuilder component', () => {
  const opts = {

  };
  const el = mount(<ApiBuilder {...opts} />);

  it('Does not throw an exception when rendered', () => {
    expect(() => mount(<ApiBuilder />)).to.not.throw(Error);
  });

  it('Contains the expected elements', () => {
    expect(el.find('h1').length).to.equal(1);
    expect(el.find('h1').text()).to.equal('Api Builder');
    expect(document.title).to.equal('Api Builder');
  });
});
