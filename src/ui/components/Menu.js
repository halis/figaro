
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

export class Menu extends PureComponent {
  render() {
    const handleLink = linkName => (e) => {
      this.props.menuClick(linkName);
      // e.preventDefault();
      e.stopPropagation();
      return false;
    };

    return (
      <div id="menu">
        <div className="pure-menu">
          <Link className="pure-menu-heading" to="/" onClick={handleLink(('home'))}>Figaro</Link>
          <ul className="pure-menu-list">
            <li className={`pure-menu-item${this.props.selectedMenuItem === 'home' ? ' pure-menu-selected' : ''}`}>
              <Link className="pure-menu-link" to="/" onClick={handleLink(('home'))}>Home</Link>
            </li>
            <li className={`pure-menu-item${this.props.selectedMenuItem === 'data' ? ' pure-menu-selected' : ''}`}>
              <Link className="pure-menu-link" to="/data" onClick={handleLink(('data'))}>Data Builder</Link>
            </li>
            <li className={`pure-menu-item${this.props.selectedMenuItem === 'api' ? ' pure-menu-selected' : ''}`}>
              <Link className="pure-menu-link" to="/api" onClick={handleLink(('api'))}>Api Builder</Link>
            </li>
            <li className={`pure-menu-item${this.props.selectedMenuItem === 'ui' ? ' pure-menu-selected' : ''}`}>
              <Link className="pure-menu-link" to="/ui" onClick={handleLink(('ui'))}>UI Builder</Link>
            </li>
          </ul>
        </div>
      </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));
