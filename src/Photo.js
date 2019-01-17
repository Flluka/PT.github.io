import React, { Component } from 'react';
import styles from './Photo.css';

class Photo extends Component {
  render() {
    const { title, src, size, link } = this.props;

    return size === 'large' ? (
      <div className={styles.root}>
        <img className={styles.large} src={src} />
        <h1>{title}</h1>
      </div>
    ) : (
      <a href={link} target="_blank">
        <img className={styles.small} src={src} />
      </a>
    );
  }
}

export default Photo;
