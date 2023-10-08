import React from 'react';
import styles from './services.module.css'

function Services() {

    const services = [
        { name: 'Surgery', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime earum recusandae autem suscipit quae.', price: '₹10000' },
        { name: 'Nail Cutting', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime earum recusandae autem suscipit quae.', price: '₹500' },
        { name: 'Pet Shower', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime earum recusandae autem suscipit quae.', price: '₹2000' },
        { name: 'Vaccinations', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime earum recusandae autem suscipit quae.', price: '₹1500' },
        { name: 'Pet Sitting', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime earum recusandae autem suscipit quae.', price: '₹5000' },
        { name: 'Laser Therapy', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime earum recusandae autem suscipit quae.', price: '₹4000' },
    ]

    return (
        <div>
            <div className={styles.header}>
                <h1>Services</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Service</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td >{data.name}</td>
                                <td >{data.detail}</td>
                                <td >{data.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Services
