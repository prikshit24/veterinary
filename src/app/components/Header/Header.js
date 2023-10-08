import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src='./logo.png' style={{ height: 50, width: 60 }} />
        <div className={styles.logoText}>
          <h3>Pet Lovers</h3>
          <h5>we care for your pet</h5>
        </div>
      </div>
      <div className={styles.list}>
        <ul>
          <li className={styles.listItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/login">Dashboard</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="tel:9998887654" className={styles.contact}>999-888-7654</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header