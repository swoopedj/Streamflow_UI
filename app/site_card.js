var React = require('react');

var SiteName = React.createClass({
  render: function () {
    return (
        <div className="site_name">
          <span>{this.props.site_name}</span>
        </div>
      )
  }
})

var SiteId = React.createClass({
  render: function () {
    return (
        <div className="site_id">
          <span>{this.props.site_id}</span>
        </div>
      )
  }
})

var GageHeight = React.createClass({
  render: function () {
    return (
        <div className="g_height">
          <span>GH: {this.props.gage_height}</span>
        </div>
      )
  }
})

var Distance = React.createClass({
  render: function () {
    return (
        <div className="site_distance">
          <span>{this.props.distance} mi</span>
        </div>
      )
  }
})

var SiteCard = React.createClass({
  render: function () {
    return (
      <a href={this.props.data.detail_link}>
        <div className="site_card">
          <SiteName site_name={this.props.data.site_name} />
          <SiteId site_id={this.props.data.site_id} />
          <Distance distance={this.props.data.distance} />
          <GageHeight gage_height={this.props.data.gage_height} />
        </div>
      </a>
    )
  }
})

export default SiteCard