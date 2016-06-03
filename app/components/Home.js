var React = require('react');
var transparentBg = require('../styles/index.js').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <div className="jumbotron" style={transparentBg}>
          <h1>
            Github Battle
          </h1>
          <p className='lead'>
            Some fancy motto
          </p>
          <Link to='/playerOne'>
            <button type='button' className='btn btn-lg btn-success'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = Home;