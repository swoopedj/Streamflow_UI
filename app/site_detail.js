//Site Detail card pops up as modal window when list item clicked on
//Contains:
//Title Bar [Site Name, Address,  site ID]
//Site Info [lat long, watershed]
//Data [current GH, Q, Precip, change in GH and Q over the past hour]
//Expand Graph [link to expand GH graph] --> make request for this when initial modal opens
var React = require('react');

var TitleBar = React.createClass({
  render: function() {
    return (
      <div className="title_bar">
        <span>{this.props.site_name}</span>
        <span className="site_id">{this.props.site_id}</span>
      </div>
    )
  }
})

var CurrentConditions = React.createClass({
  render: function() {
    return (
      <span>This is where current condition info will go</span>
    )
  }
})

var SiteInfo = React.createClass({
  render: function() {
    return (
      <span>This is where location info will go</span>
    )
  }
})

var HydroGraph = React.createClass({
  render: function() {
    return (
      <div className="graph_wrapper">
        <img src={this.props.gh_graph_link} />
      </div>
    )
  }
})

var ShowGraph = React.createClass({
  render: function() {
    return (
      <a>Show Hydrograph</a>
    )
  }
})




var SiteDetail = React.createClass({
  render: function () {
    return (
        <div className="site_detail">
          <TitleBar site_name={this.props.data.site_name} site_id={this.props.data.site_id} />
          <CurrentConditions gage_height={this.props.data.gage_height} />
          <SiteInfo lat={this.props.data.latitude} long={this.props.data.longitude} />
          <ShowGraph />
          <HydroGraph graph_link={this.props.data.gh_graph_link} />
        </div>
    )
  }
})

export default SiteDetail;