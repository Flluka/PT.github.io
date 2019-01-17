import React, { Component } from 'react';
import styles from './Tabular.css';

class Tabular extends Component {
  render() {
    const { info } = this.props;
    const row = Object.keys(info).map(key => (
      <tr>
        <th>{key}</th>
        <th>
          {key == 'email' ? (
            <a href={`mailto:${info[key]}`} target="_blank">
              {info[key]}
            </a>
          ) : (
            info[key]
          )}
        </th>
      </tr>
    ));

    return <div className={styles.root}>{row}</div>;
  }
}

export default Tabular;
