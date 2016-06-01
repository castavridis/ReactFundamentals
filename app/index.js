var USER_DATA = {
  name: 'Little Bug',
  username: 'lil_bug',
  image: 'http://www.strapya-world.com/images/medium/390/390-891760_2_MED.jpg'
}

var React = require('react');
var ReactDOM = require('react-dom');

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
        <a href={'#' + this.props.username}>
          {this.props.username}
        </a>
      </div>
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
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);