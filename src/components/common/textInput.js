"use strict";

var React = require('react');

var Input = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    error: React.PropTypes.string
  },

  componentWillMount: function() {
    // console.log(this.props, "props!");
    this.setState({
      name: this.props.name,
      placeholder: this.props.label,
      value: this.props.value,
      label: this.props.label
    });
  },

  render: function() {
    // console.log(this.state, "state!");
    var wrapperClass = function() {
      var cssClass = 'form-group';
      if (this.props.errors && this.props.errors.length > 0) {
        cssClass += " " + 'has-error';
      }

      return cssClass;
    };

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input type='text'
          name={this.props.name}
          className='form-control'
          placeholder={this.props.label}
          ref='{this.props.name}'
          value={this.props.value}
          onChange={this.props.onChange}
        />
      <div className="input">{this.props.error}</div>
      </div>
    );
  }
});

module.exports = Input;
