import React from 'react';
import topIntro from '../../assets/img/top_intro.jpeg';
import './scss/Top.scss';

function Top() {
  return (
    <div
      className="top-area"
      style={{
        backgroundImage: `url(${topIntro})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="name-area">
          <h2 className={`text text-${status}`}>
            <span style={{ color: '#FFDF00' }}>Welcome to my portfolio</span>
          </h2>

          <h3
            style={{
              textAlign: 'left',
              marginTop: 30,
              marginBottom: -20,
              color: '#888888',
            }}
          >
            My Name is
          </h3>
          <h1 className={`text text-${status}`}>
            <span style={{ color: '#FFDF00' }}>Lee</span> SangCheol
          </h1>
          <h2 className={`text text-${status}`}>
            Backend / Frontend Web Application Developer
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Top;
