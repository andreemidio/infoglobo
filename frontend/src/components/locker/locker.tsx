import React from 'react';
import styles from './locker.module.css';

const locker: React.FC = () => (
  <div className={styles.locker} data-testid="locker">
    locker Component
  </div>
);

export default locker;
