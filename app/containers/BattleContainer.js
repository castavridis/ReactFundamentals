var React = require('react');

var BattleContainer = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>{this.props.route.header}</h1>
          <p>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = BattleContainer;