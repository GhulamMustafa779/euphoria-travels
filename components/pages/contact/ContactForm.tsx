"use client";

import OutlinedInput from '@/components/shared/OutlinedInput';
import OutlinedSelectInput from '@/components/shared/OutlinedSelectInput';
import SectionTitle from '@/components/ui/SectionTitle'
import SubTitle from '@/components/ui/SubTitle'
import ContactType from '@/libs/types/contact.type';
import { countries } from '@/libs/constants/coutries.constant';
import { useState } from 'react'
import OutlinedTextArea from '@/components/shared/OutlinedTextArea';

const ContactForm = () => {
    const [contact, setContact] = useState<ContactType>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        message: ''
    })

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(contact);
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContact(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <section className='mt-[150px] mb-[90px] flex flex-col items-center'>
            <SectionTitle bgText='Contact' title='Contact Us' />
            <SubTitle text='Got questions about our company or a particular service? Send us a message, and our team will be glad to assist you.' />
            <form onSubmit={handleSubmit} className='max-w-[550px] px-3 flex flex-col gap-4 items-center'>
                <div className='flex flex-col sm:flex-row gap-2'>
                    <OutlinedInput type='text' name='firstName' placeholder='First Name' value={contact.firstName} onChange={handleInput} />
                    <OutlinedInput type='text' name='lastName' placeholder='Last Name' value={contact.lastName} onChange={handleInput} />
                </div>
                <OutlinedInput type='email' name='email' placeholder='Email' value={contact.email} onChange={handleInput} />
                <div className='flex flex-col sm:flex-row gap-2'>
                    <OutlinedInput type='text' name='phone' placeholder='Phone Number' value={contact.phone} onChange={handleInput} />
                    <OutlinedSelectInput options={countries} name='country' placeholder='Select Country' value={contact.country} onChange={handleInput} />
                </div>
                <OutlinedTextArea name='message' placeholder='Message' value={contact.message} onChange={handleInput} />
                <button type='submit' className='text-center bg-indigo text-white w-full h-[45px] rounded-full cursor-pointer hover:bg-orange hover:text-blond'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm