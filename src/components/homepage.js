"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Homepage = React.createClass({
  render: function() {

    return (
      <div className="jumbotron">
        <h1>Administration</h1>
        <p>React, React Router Flux</p>
        <Link to='about' className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
});

module.exports = Homepage;
