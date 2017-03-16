var USER_DATA = {
	name: "Dylan SHWOOPS",
	username: "dylanshwerps",
	image: "http://www.absoluteanime.com/neon_genesis_evangelion/misato.jpg"
}

var React = require('react');
var ReactDOM = require('react-dom');

// var HelloWorld = React.createClass({
// 	render: function() {
// 		return (
// 			<div> Hello {this.props.name} </div>
// 		)
// 	}
// });

var ProfilePic = React.createClass({
	render: function () {
		return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
	}
})

var ProfileLink = React.createClass({
	render: function () {
		return (
			<div>
			  <a href={'https://github.com/' + this.props.username}>
			    {this.props.username}
              </a>
            </div>

			)
	}
});

var ProfileName = React.createClass({
	render: function () {
		return (
			<div>{this.props.name})</div>
	    )
	}
});

var Avatar = React.createClass({
	render: function () {
		return (
          <div>
            <ProfilePic imageUrl={this.props.image} />
            <ProfileName name={this.props.name} />
            <ProfileLink username={this.props.username} />
          </div>

		)
	}
})

ReactDOM.render(
  <Avatar use={USER_DATA}/>,
  document.getElementById('app')
);

