Search = React.createClass({

  getInitialState() {
    return {
      searchingText: ''
    };
  },

  handleChange: function(event) {
    var searchingText = event.target.value;
    this.setState({
      searchingText: searchingText
    });

    if (searchingText.length > 2) {
      this.props.onSearch(searchingText);
    }
  },

  handleKeyUp: function(event) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchingText);
    }
  },

  render: function() {

    var styles = {
      fontSize: '1.0em',
      width: '90%',
      maxWidth: '300px'
    };

    return (
      <input
        type="text"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        placeholder="Type something"
        style={styles}
        value={this.state.searchTerm}
      />
    );
  }
});
