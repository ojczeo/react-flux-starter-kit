"use strict";

var React = require('react');

var Input = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    error: React.PropTypes.string
  },
  
  render: function() {
    var wrapperClass = function() {
      var cssClass = 'form-group';
      if (this.props.error && this.props.error.length > 0) {
        cssClass += " " + 'has-error';
      }

      return cssClass;
    };

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input type='text'
          name='lastName'
          className='form-control'
          placeholder='Last Name'
          ref='lastName'
          value={this.props.author.lastName}
          onChange={this.props.onChange}
        />
        <div className="input">{this.props.error}</div>
      </div>
    );
  }
});

module.exports = Input;
