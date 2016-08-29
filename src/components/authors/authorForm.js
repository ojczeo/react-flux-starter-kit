"use strict";

var React = require('react');

var AuthorForm = React.createClass({

  render: function() {
    return (
      <form>
        <h1>Manage Author</h1>
        <label htmlFor="firstName">First name</label>
        <input type='text'
          name='firstName'
          className='Form-control'
          placeholder='First Name'
          ref='firstName'
          value=''
        />
        <br />

        <label htmlFor="lastName">Last name</label>
        <input type='text'
          name='lastName'
          className='Form-control'
          placeholder='Last Name'
          ref='lastName'
          value=''
        />
        <br />

        <input type="submit" value="Save" className="btn btn-default" />
      </form>
    );
  }
});

module.exports = AuthorForm;
