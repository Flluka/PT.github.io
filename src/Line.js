import React, { Component } from 'react';
import styles from './Line.css';

class Line extends Component {
  render() {
    const { txt } = this.props;
    return (
      <div className={styles.root}>
        {txt && <h1 className={styles.txt}>{txt}</h1>}
        <hr className={styles.line} />
      </div>
    );
  }
}

export default Line;
