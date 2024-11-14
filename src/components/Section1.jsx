import 'react';

const Section1 = () => {
  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: 'url(/images/mipan.jpeg)', 
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <h1>
        <span style={{ fontSize: '2em', textShadow: '10px 5px 10px rgba(0, 0, 0, 0.3)' }}>Panaderia Mi Pan</span>
        <br />
        <span style={{ fontSize: '1em' }}>Bienvenidos</span>
      </h1>
    </div>
  );
};

export default Section1;