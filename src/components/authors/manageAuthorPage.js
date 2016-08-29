'use strict';

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({

  mixins: [
    Router.Navigation
  ],

  componentWillMount: function() {
    this.setState({
      author: { id: "", firstName: "", lastName: "" },
      errors: {}
    });
  },

  setAuthorState: function(e) {
    var field = e.target.name;
    var value = e.target.value;
    this.state.author[field] = value;
    // console.log(e.target.name, e.target.value, "BE CAREFULL!");
    return this.setState({author: this.state.author});
  },

  authorFormIsValid: function() {
    var formIsValid = true;
    this.state.erros = {};

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = "First name must be at least 3 letters";
      formIsValid = false;
    } else {
      this.state.errors.firstName = null;
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = "Last name must be at least 3 letters";
      formIsValid = false;
    } else {
      this.state.errors.lastName = null;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;

  },

  saveAuthor: function(e) {
    e.preventDefault();
    if (!this.authorFormIsValid()) {
      return;
    }
    AuthorApi.saveAuthor(this.state.author);
    toastr.success('Author saved.');
    this.transitionTo('authors');
  },

  render: function() {
     return (
       <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          errors={this.state.errors} />
     );
  }
});

module.exports = ManageAuthorPage;
