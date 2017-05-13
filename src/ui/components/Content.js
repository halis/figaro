
import React from 'react';

const Content = ({ heading, text }) => (
  <div className="content">
    <h2 className="content-subhead">{heading}</h2>
    { text.split(/\n\n+/g).map((x, i) => <p key={`paragraph-${i}`}>{x}</p>) }
  </div>
);

export default Content;
