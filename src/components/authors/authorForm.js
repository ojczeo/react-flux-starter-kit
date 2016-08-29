"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({

  render: function() {
    console.log("author form PROPS", this.props.author);
    return (
      <form>
        <h1>Manage Author</h1>
        <Input type='text'
          name='firstName'
          label="First name"
          value={this.props.author.firstName}
          onChange={this.props.onChange}
        />
        <Input type='text'
          name='lastName'
          label="Last name"
          value={this.props.author.lastName}
          onChange={this.props.onChange}
        />

        <input
          type="submit"
          value="Save"
          className="btn btn-default"
          onClick={this.props.onSave} />
      </form>
    );
  }
});

module.exports = AuthorForm;
