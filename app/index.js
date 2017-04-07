import Avatar from './avatar.js';
import SiteData from './models/site_data.js';
import SiteCard from './site_card.js';

var AvatarData = {
	name: "Dylan SHWOOPS",
	username: "dylanshwerps",
	image: "http://www.absoluteanime.com/neon_genesis_evangelion/misato.jpg"
}

var React = require('react');
var ReactDOM = require('react-dom');

const SiteList = React.createClass({
  render: function () {
    console.log('this.props.site_list: ', this.props.site_list)
    const list = this.props.site_list.map(site => {
      return (
        <li><SiteCard data={site} /></li>
      )
    })
    // debugger;
    return (
      <ul>
        {list}
      </ul>
     
    )
  }
})


ReactDOM.render(
  <Avatar user={AvatarData} />,
  document.getElementById('avatar_test')
);

ReactDOM.render(
  <SiteList site_list={SiteData} />,
  document.getElementById('site_card_test')
);


