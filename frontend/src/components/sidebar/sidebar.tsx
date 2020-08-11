import React from 'react';
import styles from './sidebar.module.css';

const sidebar: React.FC = () => (
  <div className={styles.sidebar} data-testid="sidebar">
    sidebar Component
  </div>
);

export default sidebar;
