
/* eslint max-len: off */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import Main from './Main';
import Header from './Header';
import Content from './Content';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export class Home extends React.Component {
  render() {
    return (
      <Main>
        <Header h1="Hello World" h2="Yolo for really, really real" />
        <Content
          heading="This is the new shit"
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat neque sit amet hendrerit blandit. Sed sit amet massa id magna ultrices elementum.

            Nulla maximus posuere purus, quis pretium lorem accumsan et. Proin mollis congue urna, eget rhoncus elit porta venenatis. Aenean quis aliquam erat.`}
        />
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  state,
  selectedMenuItem: state.app.menu.selectedItem,
});

const mapDispatchToProps = dispatch => (bindActionCreators({
  menuClick: data => ({ type: 'menuClick', data })
}, dispatch));

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
