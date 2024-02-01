import React from 'react';
import styles from './Button.module.scss';

export default function Button({ onClick, classes }) {
  return (
    <button onClick={onClick}>
      <span className='material-symbols-outlined' style={classes}>
        favorite
      </span>
    </button>
  );
}
