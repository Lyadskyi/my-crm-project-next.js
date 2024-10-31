import React from 'react';
import styles from './test-label.module.css';

export interface TestLabelProps {
  children: React.ReactNode;
}

export default function TestLabel({ children }: TestLabelProps) {
  return <span className={styles.label}>{children}</span>;
}
