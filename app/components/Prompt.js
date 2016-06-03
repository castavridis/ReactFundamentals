/*
  Presentational component handles the actual presentation, in this case, HTML
 */
var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles/').transparentBg;

// Stateless Functional Component
function Prompt(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <div className="jumbotron" style={transparentBg}>
            <h1>{props.header}</h1>
            <form onSubmit={props.onSubmitUser}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Github Username"
                  onChange={props.onUpdateUser}
                  value={props.username}
                  type="text"/>
              </div>
              <button
                className="btn btn-block btn-success"
                type="submit">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
/* 
  propTypes are great for team development, they can show which parameters
  are used by a component and throw errors if the wrong type is used
*/
Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};


// Standard Component
var Prompt_OLD = React.createClass({
  propTypes: {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  },
  render: function () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="jumbotron" style={transparentBg}>
              <h1>{this.props.header}</h1>
              <form onSubmit={this.props.onSubmitUser}>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Github Username"
                    onChange={this.props.onUpdateUser}
                    value={this.props.username}
                    type="text"/>
                </div>
                <button
                  className="btn btn-block btn-success"
                  type="submit">
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Prompt;