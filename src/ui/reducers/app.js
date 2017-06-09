
import R from 'ramda';

const getSelectedItem = () => {
  if (window.location.href.endsWith('/data-builder')) return 'data';
  if (window.location.href.endsWith('/api-builder')) return 'api';
  if (window.location.href.endsWith('/ui-builder')) return 'ui';
  return 'home';
};

const initialState = {
  menu: {
    selectedItem: getSelectedItem(),
  },
};

const menuClick = (state, action) => R.merge(state, {
  menu: { selectedItem: action.data }
});

const handlers = { menuClick };

const app = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }
  const handler = handlers[action.type];
  if (handler) {
    return handler(state, action);
  }

  return state;
};

export default app;
