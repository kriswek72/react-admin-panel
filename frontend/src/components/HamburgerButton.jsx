const HamburgerButton = ({ isOpen, toggle }) => (
  <button
    onClick={toggle}
    aria-label="Menu"
    style={{
      width: '40px',
      height: '40px',
      position: 'fixed',
      top: '1rem',
      left: '1rem',
      zIndex: 1000,
      background: 'transparent',
      border: 'none',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }}
  >
    <div style={{
      width: '24px',
      height: '2px',
      backgroundColor: 'var(--text)',
      position: 'relative',
      transition: 'all 0.3s ease-in-out',
      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'
    }}>
      <div style={{
        content: '""',
        position: 'absolute',
        top: isOpen ? '0' : '-8px',
        width: '24px',
        height: '2px',
        backgroundColor: 'var(--text)',
        transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
        transition: 'all 0.3s ease-in-out'
      }} />
      <div style={{
        content: '""',
        position: 'absolute',
        bottom: isOpen ? '0' : '-8px',
        width: '24px',
        height: '2px',
        backgroundColor: 'var(--text)',
        opacity: isOpen ? 0 : 1,
        transition: 'all 0.2s ease-in-out'
      }} />
    </div>
  </button>
);
export default HamburgerButton;