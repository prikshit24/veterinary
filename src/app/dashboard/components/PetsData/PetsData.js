'use client'

import React, { useEffect, useState } from 'react';
import styles from './pets.module.css'
import Link from 'next/link';
import AddPetModal from './AddPetModal';

function PetsData() {

    const [pets, setPets] = useState([
        { id: 1, petName: 'Bruno', category: 'Dog', ownerName: 'Jake', email: 'jake@yopmail.com', phone: '9998765432' },
        { id: 2, petName: 'Tuffy', category: 'Dog', ownerName: 'Ben', email: 'ben@yopmail.com', phone: '9998876543' },
        { id: 3, petName: 'Murphy', category: 'Dog', ownerName: 'John', email: 'john@yopmail.com', phone: '9998776543' },
        { id: 4, petName: 'Snow', category: 'Cat', ownerName: 'Ruby', email: 'ruby@yopmail.com', phone: '9998777543' },
        { id: 5, petName: 'Couper', category: 'Dog', ownerName: 'Ruby', email: 'ruby@yopmail.com', phone: '9998777543' },
        { id: 6, petName: 'Hammy', category: 'Mouse', ownerName: 'Ron', email: 'ron@yopmail.com', phone: '9998876544' },
    ])

    const [addPetModal, setAddPetModal] = useState(false);

    useEffect(() => {
        const petsData = localStorage.getItem('petsData')
        if (!petsData) {
            localStorage.setItem('petsData', JSON.stringify(pets))
        } else {
            setPets(JSON.parse(petsData))
        }
    }, [])

    const onAddClick = () => {
        setAddPetModal(true)
    }

    const deletePet = (id) => {
        const updatedPets = pets.filter(pet => pet.id !== id);
        setPets(updatedPets);
        localStorage.setItem('petsData', JSON.stringify(updatedPets))
    };

    return (
        <div>
            <div className={styles.header}>
                <h1>Pets</h1>
                <button onClick={() => onAddClick()}>Add</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Pet Name</th>
                        <th>Owner Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className={styles.petName}><span style={{ width: '40%' }}>{data.petName}</span> <span className={styles.category}>{data.category}</span></td>
                                <td className={styles.ownerName}><span>{data.ownerName}</span></td>
                                <td><Link href={`tel: ${data.phone}`} className={styles.contact}>{data.phone}</Link></td>
                                <td><Link href={`mailto: ${data.email}`} className={styles.contact}>{data.email}</Link></td>
                                <td onClick={() => deletePet(data.id)} style={{ textAlign: 'center', cursor: 'pointer' }}><img src="./delete.png" /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {addPetModal && <AddPetModal pets={pets} setPets={setPets} setAddPetModal={setAddPetModal} />}
        </div>
    )
}

export default PetsData;
