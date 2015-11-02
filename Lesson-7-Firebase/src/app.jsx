var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var List = require('./list');
var rootUrl = require('./config');

var App = React.createClass({
  mixins: [ReactFire],
  getInitialState: function() {
    return {
      items: {},
      loaded: false
    };
  },

  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/');
    this.bindAsObject(this.fb, 'items');
    this.fb.on('value', this.handleDataLoaded);  
  },

  render: function() {
    console.log(this.state);

    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
      <h2 className="text-center">
        React.js To-Do List
      </h2>
      <Header itemsStore={this.firebaseRefs.items} />
      <hr />
        <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
          <List items={this.state.items} />
          {this.deleteButton()}
        </div>
      </div>
    </div>
  },

  handleDataLoaded: function() {
    this.setState({loaded: true});
  },

  deleteButton: function() {
    if (!this.state.loaded) {
      return
    } else {
      return <div className="text-center clear-complete">
        <hr />
        <button 
          type="button"
          onClick={this.onDeleteDoneClick}
          className="btn btn-default"
        >
          Clear Completed To-Do Items
        </button>
      </div>
    }
  },

  onDeleteDoneClick: function() {
    for (var key in this.state.items) {
      if (this.state.items[key].done === true) {
        this.fb.child(key).remove();
      }
    }
  }

});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
