import React from 'react';
import styles from './dashboard.module.css';

const dashboard: React.FC = () => (
  <div className={styles.dashboard} data-testid="dashboard">
    dashboard Component
  </div>
);

export default dashboard;
