"use strict";

$ = jQuery = require('jquery');
var React = require('react');
var Homepage = require('./components/homepage');
var About = require('./components/about/aboutPage');

(function(win) {

  var App = React.createClass({
    render: function() {
      var Child;

      switch(this.props.route) {
        case 'about': Child = About; break;
        default: Child = Homepage;
      }

      return (
        <div>
          <Child />
        </div>
      );
    }
  });

  function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
  }

  win.addEventListener("hasChange", render);
  render();

  React.render(<Homepage />, document.getElementById('app'));
})(window);


// module.exports = App;
