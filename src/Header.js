import React, { PureComponent } from 'react';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
      	<span className="title"> MLB Scoreboard - May 31st, 2017 </span>
        <img
          src={require('./logos/MLB.png')}
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
export default Header;