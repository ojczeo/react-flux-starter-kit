"use strict";

// $ = jQuery = require('jquery');
var React = require('react');
var Homepage = require('./components/homepage');
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function(win) {

  var App = React.createClass({
    render: function() {
      var Child;

      switch(this.props.route) {
        case 'about': Child = About; break;
        case 'authors': Child = Authors; break;
        default: Child = Homepage;
      }

      return (
        <div>
          <Header />
          <Child />
        </div>
      );
    }
  });

  function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
  }

  win.addEventListener("hashchange", render);
  render();

  // React.render(<Homepage />, document.getElementById('app'));
})(window);


// module.exports = App;
