"use strict";

var React = require('react');

var Header = React.createClass({
  handleClick: function(e) {
    console.log("clicked");
  },
  render: function() {

    return (
      <nav className="navbar navbar-default">
        <div className='container-fluid'>
          <a href="/" className="navbar-brand">
            <img src="../../images/logo.png" />
          </a>
          <ul className="nav navbar-nav">
            <li><a onClick={this.handleClick} href="/">Home</a></li>
            <li><a onClick={this.handleClick} href="/#authors">Authors</a></li>
            <li><a onClick={this.handleClick} href="/#about">About</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
