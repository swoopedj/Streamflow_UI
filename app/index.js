import SiteData from './models/site_list_data.js';
import SiteCard from './site_card.js';
import SiteDetail from './site_detail.js';
import Modal from 'react-modal';
import ModalStyles from './modal_styles.js'

var React = require('react');
var ReactDOM = require('react-dom');

const SiteList = React.createClass({
  getInitialState: function() {
    return { 
      modalIsOpen: false,
      modalData: null,
      sites: this.props.site_list
    };
  },
 
  openModal: function(i) {
    this.setState({modalIsOpen: true, modalData: this.state.sites[i]});
  },
 
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  renderSiteList: function() {
    console.log("modal data: ", this.state)
    const list = this.state.sites.map((site, index) => {
      return (
        <li key={index} onClick={()=> this.openModal(index)}><SiteCard data={site}/></li>
      )
    })
    return (
      <ul>
        {list}
      </ul>
    );
  },

  render: function() {
    return (
      <div>
        {this.renderSiteList()}
        <Modal 
          isOpen={this.state.modalIsOpen} 
          onRequestClose={this.closeModal} 
          contentLabel="Modal" 
          className="site_modal"
          overlayClassName="modal_overlay">
          <SiteDetail data={this.state.modalData} />
        </Modal>
      </div>
    );
  }
})


ReactDOM.render(
  <SiteList site_list={SiteData} />,
  document.getElementById('site_card_test')
);


