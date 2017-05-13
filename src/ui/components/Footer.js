
import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="legal pure-g">
      <div className="pure-u-1 u-sm-1-2">
        <p className="legal-license">
          All code on this site is licensed under the <a href="https://github.com/halis/figaro/blob/master/LICENSE">GNU GENERAL PUBLIC LICENSE, Version 2</a> unless otherwise stated.
        </p>
      </div>

      <div className="pure-u-1 u-sm-1-2">
        <ul className="legal-links">
          <li><a href="https://github.com/halis/figaro">GitHub Project</a></li>
          <li><a href="https://halistechnology.com">Homepage</a></li>
        </ul>

        <p className="legal-copyright">
          © {new Date().getFullYear()} Halis Technology Solutions, LLC All rights reserved.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
