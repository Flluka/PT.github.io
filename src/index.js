import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './Photo.js';
import Line from './Line.js';
import Tabular from './Tabular.js';
import styles from './index.css';

const App = () => {
  const info = {
    email: 'smith.peder@gmail.com',
    phone: '+47 97 60 83 81'
  };

  const social = {
    face: 'https://www.facebook.com/SmithPeder',
    linked: 'https://www.linkedin.com/in/peder-smith-219494114/',
    git: 'https://github.com/SmithPeder'
  };

  const socialImages = Object.keys(social).map(key => (
    <Photo src={`src/img/${key}.png`} link={social[key]} />
  ));

  return (
    <div>
      <Photo title="Peder Smith" src="src/img/me.png" size="large" />
      <Line txt="About me" />
      <p className={styles.info}>
        Civil engineering freshman at Norwegian University of Science and
        Technology pursuing a master's degree in Communication Technology.
        Interested in everything related to technology and programming.
        Alongside university I volunteer as a developer on the open-source
        website{' '}
        <a href="https://www.abakus.no" target="_blank">
          abakus.no
        </a>{' '}
        for the student organization Abakus which I am a part of.
      </p>
      <Line txt="Contact me" />
      <Tabular info={info} />
      <Line txt="Find me" />
      <div className={styles.imgrow}>{socialImages}</div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
