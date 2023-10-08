'use client'

import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './dashboard.module.css'
import PetsData from './components/PetsData/PetsData';
import Services from './components/Services/Services';
import { useRouter } from 'next/navigation';

function Dashboard() {
  const { push } = useRouter();

  const [showPets, setShowPets] = useState(true);

  useEffect(() => {
    const userEmail = localStorage.getItem('email')
    if(!userEmail){
      localStorage.clear();
      push("/login");
    }
  },[])

  return (
    <div className={styles.container}>
      <Sidebar setShowPets={setShowPets} />
      {showPets ? <PetsData /> : <Services />}
    </div>
  )
}

export default Dashboard;