var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className='container--main'>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;