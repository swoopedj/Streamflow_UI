import SiteData from './models/site_list_data.js';
import SiteCard from './site_card.js';
import SiteDetail from './site_detail.js';
import '../public/style.css'
import Modal from 'react-modal';
import React from 'react';
import ReactDOM from 'react-dom';

class SiteList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalData: null,
      sites: this.props.site_list
    }
  }
 
  openModal(i) {
    this.setState({modalIsOpen: true, modalData: this.state.sites[i]});
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  renderSiteList() {
    const list = this.state.sites.map((site, index) => {
      return (
        <li key={index} onClick={() => this.openModal(index)}>
          <SiteCard data={site} />
        </li>
      )
    })
    return (
      <ul>
        {list}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderSiteList()}
        <Modal 
          isOpen={this.state.modalIsOpen} 
          onRequestClose={this.closeModal} 
          contentLabel="Modal" 
          className="site_modal"
          overlayClassName="modal_overlay">
          <SiteDetail data={this.state.modalData} close={this.closeModal} />
          <a className="close_modal" onClick={this.closeModal} href="">CLOSE</a>
        </Modal>
      </div>
    );
  }
}


ReactDOM.render(
  <SiteList site_list={SiteData} />,
  document.getElementById('site_card_test')
);


