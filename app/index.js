var USER_DATA = {
  name: 'Little Bug',
  username: 'lil_bug',
  image: 'http://www.strapya-world.com/images/medium/390/390-891760_2_MED.jpg'
};

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var ProfilePic = React.createClass({
  render: function () {
    var styles = {
      height: 100,
      width: 100
    }
    return <img src={this.props.imageUrl} style={styles} />
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link href={'#' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    );
  }
});

var Link = React.createClass({
  changeURL: function () {
    location.hash = this.props.href;
  },
  render: function () {
    return (
      <span
        style={
          {
            color: 'blue',
            cursor: 'pointer'
          }
        }
        onClick={
          this.changeURL
        }>
        {this.props.children}
      </span>
    );
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  }
});

ReactDOM.render(
  routes,
  document.getElementById('app')
)