import React from 'react';
import styles from './navbar.module.css';

const navbar: React.FC = () => (
  <div className={styles.navbar} data-testid="navbar">
    navbar Component
  </div>
);

export default navbar;
