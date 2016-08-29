// "use strict";

var React = require('react');
var Header = require('./components/common/header');
var RouterHandler = require('react-router');
$ = jQuery = require('jquery');


var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
