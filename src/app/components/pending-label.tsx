import React from 'react';
import styles from './pending-label.module.css';

export interface PendingLabelProps {
  children: React.ReactNode;
}

console.log(styles);

export default function PendingLabel({ children }: PendingLabelProps) {
  return <span className={styles.label}>{children}</span>;
}
