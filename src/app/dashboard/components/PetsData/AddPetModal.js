'use client'

import React, { useState } from 'react'
import styles from './pets.module.css'
import InputField from '@/app/components/InputField'
import { validateEmail, validatePhone, validatefield } from '@/app/helpers/validations/FormValidation';

function AddPetModal({ pets, setPets, setAddPetModal }) {

    const [formData, setFormData] = useState({
        petName: '',
        category: '',
        ownerName: '',
        email: '',
        phone: '',
    });

    const [errors, setErrors] = useState({
        forPet: '', forCat: '', forOwner: '', forEmail: '', forPhone: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const petErr = validatefield(formData.petName);
        const catErr = validatefield(formData.category);
        const ownerErr = validatefield(formData.ownerName);
        const emailErr = validateEmail(formData.email);
        const phoneErr = validatePhone(formData.phone);

        if (petErr) {
            setErrors((prevErrorTxt) => ({
                ...prevErrorTxt,
                forPet: "Please enter pet's name",
            }));
        }
        if (catErr) {
            setErrors((prevErrorTxt) => ({
                ...prevErrorTxt,
                forCat: "Please enter categpry",
            }));
        }
        if (ownerErr) {
            setErrors((prevErrorTxt) => ({
                ...prevErrorTxt,
                forOwner: "Please enter owner name",
            }));
        }
        if (emailErr) {
            setErrors((prevErrorTxt) => ({
                ...prevErrorTxt,
                forEmail: "Please enter valid email",
            }));
        }
        if (phoneErr) {
            setErrors((prevErrorTxt) => ({
                ...prevErrorTxt,
                forPhone: "Please enter valid Phone Number",
            }));
        }

        if (!petErr && !catErr && !ownerErr && !emailErr && !phoneErr) {
            addPet(formData);
            setFormData({
                petName: '',
                category: '',
                ownerName: '',
                email: '',
                phone: '',
            });
            setAddPetModal(false)
        }
    };

    const addPet = (newPet) => {
        const newId = pets[pets.length - 1].id + 1
        const addNewPet = [...pets, { id: newId, ...newPet }]
        setPets(addNewPet);

        localStorage.setItem('petsData', JSON.stringify(addNewPet))
    };

    const onPetNameChange = (e) => {
        setFormData({ ...formData, petName: e.target.value });
        setErrors({ ...errors, forPet: '' })
    }
    const onCatChange = (e) => {
        setFormData({ ...formData, category: e.target.value });
        setErrors({ ...errors, forCat: '' })
    }
    const onOwnerNameChange = (e) => {
        setFormData({ ...formData, ownerName: e.target.value });
        setErrors({ ...errors, forOwner: '' })
    }
    const onEmailChange = (e) => {
        setFormData({ ...formData, email: e.target.value });
        setErrors({ ...errors, forEmail: '' })
    }
    const onPhoneChange = (e) => {
        setFormData({ ...formData, phone: e.target.value });
        setErrors({ ...errors, forPhone: '' })
    }

    return (
        <div className={styles.backShadow}>
            <div className={styles.modal}>
                <div onClick={() => setAddPetModal(false)} className={styles.close}>
                    <img src="./close.png" />
                </div>
                <form>
                    <InputField placeholder="Pet Name" type="text" name="petName" value={formData.petName} onChange={onPetNameChange} error={errors.forPet} />
                    <InputField placeholder="Category (Dog, Cat, Mouse ...)" type="text" name="category" value={formData.category} onChange={onCatChange} error={errors.forCat} />
                    <InputField placeholder="Owner Name" type="text" name="ownerName" value={formData.ownerName} onChange={onOwnerNameChange} error={errors.forOwner} />
                    <InputField placeholder="Email" type="email" name="email" value={formData.email} onChange={onEmailChange} error={errors.forEmail} />
                    <InputField placeholder="Phone" type="phone" name="phone" value={formData.phone} onChange={onPhoneChange} error={errors.forPhone} />
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                        <button
                            className={styles.button}
                            onClick={(e) => handleSubmit(e)}
                        >
                            ADD
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPetModal
