const ModalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border:'1px solid #ccc',
    background:'#00E06E',
    overflow:'auto',
    WebkitOverflowScrolling:'touch',
    borderRadius:'4px',
    outline:'none',
    padding:'0',
    height: '300px'
  }
};

export default ModalStyles