import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

const workingData = [
    { day: 'Monday:', time: '8:00 AM – 6:00 PM' },
    { day: 'Tuesday:', time: '8:00 AM – 6:00 PM' },
    { day: 'Wednesday:', time: '8:00 AM – 6:00 PM' },
    { day: 'Thursday:', time: '8:00 AM – 6:00 PM' },
    { day: 'Friday:', time: '8:00 AM – 6:00 PM' },
    { day: 'Saturday:', time: '8:00 AM – 6:00 PM' },
    { day: 'Sunday:', time: 'Closed' },
]

const contactData = [
    { icon: './contactIcons/phone.png', value: '999-888-7654' }
]

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.section1}>
                <div className={styles.logoContainer}>
                    <img src='./logo.png' style={{ height: 50, width: 60 }} />
                    <div className={styles.logoText}>
                        <h3>Pet Lovers</h3>
                        <h5>we care for your pet</h5>
                    </div>
                </div>

                <p className={`title14 textGrey mb40`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa veniam similique, quaerat, dolorum quae a blanditiis voluptate voluptatum debitis eius sequi, repellendus impedit commodi soluta?
                </p>

                <p className={`title16 textGrey mb10`}>
                    Follow us on:
                </p>

                <ul className={styles.socialList}>
                    <li><img src='./socialMediaIcon/fb.png' /></li>
                    <li><img src='./socialMediaIcon/insta.png' /></li>
                    <li><img src='./socialMediaIcon/linkedIn.png' /></li>
                    <li><img src='./socialMediaIcon/x.png' /></li>
                </ul>
            </div>

            <div className={styles.section2}>
                <h3>WORKING HOURS</h3>
                {workingData.map((data, index) => {
                    return (
                        <div key={index} className={styles.workingListRow}>
                            <div><p className={`title14 textGrey`}>{data.day}</p></div>
                            <div><p className={`title14 textGrey`}>{data.time}</p></div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.section3}>
                <h3>Contact</h3>
                <div className={styles.contactRow}>
                    <img src='./contactIcons/phone.png' />
                    <Link href="tel:9998887654" className={`title16 textWhite`}>999-888-7654</Link>
                </div>
                <div className={styles.contactRow}>
                    <img src='./contactIcons/mail.png' />
                    <Link href="mailto: petlovers@yopmail.com" className={`title16 textWhite`}>petlovers@yopmail.com</Link>
                </div>
                <div className={styles.contactRow}>
                    <img src='./contactIcons/loc.png' />
                    <p className={`title16 textWhite`}>F-123, Sector-74 Mohali</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
