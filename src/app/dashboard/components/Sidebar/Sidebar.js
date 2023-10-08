'use client'

import React from 'react';
import styles from './sidebar.module.css';
import { useRouter } from 'next/navigation';

function Sidebar({ setShowPets }) {

    const { push } = useRouter();

    const onLogout = () => {
        localStorage.removeItem('email');
        push("/login");
    }

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.logoContainer}>
                <img src='./logo.png' style={{ height: 50, width: 60 }} />
                <div className={styles.logoText}>
                    <h3>Pet Lovers</h3>
                    <h5>we care for your pet</h5>
                </div>
            </div>
            <ul className={styles.menu}>
                <li onClick={() => setShowPets(true)}><img src='./sidebarIcons/pets.png' />Pets</li>
                <li onClick={() => setShowPets(false)}><img src='./sidebarIcons/services.png' />Services</li>
                <li onClick={() => { onLogout(); setShowPets(true) }}><img src='./sidebarIcons/logout.png' />Logout</li>
            </ul>
        </div>
    )
}

export default Sidebar
