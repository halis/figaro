
import React from 'react';
import Footer from './Footer';

export default class Main extends React.PureComponent {
  render() {
    return (
      <div className="main">
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
