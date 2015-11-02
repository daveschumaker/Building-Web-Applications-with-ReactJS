var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    // setState is a very important method that changes a value of the state
    // and forces our component to re-render.
    // NOTE: We never want to directly manipulate the state object. We should always use setState method.
    this.setState({open: !this.state.open});
  },

  handleItemClick: function(item) {
    this.setState({
      open: false,
      itemTitle: item
    });
  },

  getInitialState: function() {
    return {open: false};
  },

  render: function() {
    var list = this.props.items.map(function(item) {
      return <ListItem 
              item={item} 
              whenItemClicked={this.handleItemClick}
              className={this.state.itemTitle === item ? "active" : ""}
              />
    }.bind(this))

    return <div className="dropdown">
      <Button 
        whenClicked={this.handleClick} 
        className="btn-default" 
        title={this.state.itemTitle || this.props.title} 
        subTitleClassName="caret" 
      />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "")} >
        {list}
      </ul>
    </div>
  }
})