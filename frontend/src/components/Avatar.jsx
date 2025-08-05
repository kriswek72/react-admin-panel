const Avatar = ({ name }) => {
  const initial = name?.charAt(0)?.toUpperCase() || '?';

  const getColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 60%)`;
  };

  return (
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: getColor(name),
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '1rem',
      textTransform: 'uppercase'
    }}
    title={name}>
      {initial}
    </div>
  );
};

export default Avatar;
// Usage example:
// <Avatar name="Krzysztof Wnukowski" />
// <Avatar name="Jan Kowalski" />
// <Avatar name="Anna Nowak" />