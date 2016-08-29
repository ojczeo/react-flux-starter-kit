"use strict";

var React = require('react');

var About = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if(!confirm('Are you sure you read a page that\'s is boring')) {
        transition.about();
      } else {
        callback();
      }
    },
    willTransitionFrom: function(transition, component) {
      if(!confirm('Are you sure you leave a page that\'s is boring')) {
        transition.about();
      }
    }
  },
  render: function() {

    return (
      <div> About here </div>
    );
  }
});

module.exports = About;
