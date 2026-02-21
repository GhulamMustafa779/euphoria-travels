"use client";

import OutlinedInput from '@/components/shared/OutlinedInput';
import OutlinedSelectInput from '@/components/shared/OutlinedSelectInput';
import SectionTitle from '@/components/ui/SectionTitle'
import SubTitle from '@/components/ui/SubTitle'
import ContactType from '@/libs/types/contact.type';
import { countries } from '@/libs/constants/coutries.constant';
import { useState } from 'react'
import OutlinedTextArea from '@/components/shared/OutlinedTextArea';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-+()]{10,}$/;

type ContactErrors = Partial<Record<keyof ContactType, string>>;

const validateContact = (data: ContactType): ContactErrors => {
    const errors: ContactErrors = {};
    if (!data.firstName?.trim()) errors.firstName = 'First name is required';
    if (!data.lastName?.trim()) errors.lastName = 'Last name is required';
    if (!data.email?.trim()) {
        errors.email = 'Email is required';
    } else if (!EMAIL_REGEX.test(data.email.trim())) {
        errors.email = 'Please enter a valid email address';
    }
    if (!data.phone?.trim()) {
        errors.phone = 'Phone number is required';
    } else if (!PHONE_REGEX.test(data.phone.trim())) {
        errors.phone = 'Please enter a valid phone number (at least 10 digits)';
    }
    if (!data.country?.trim()) errors.country = 'Please select a country';
    if (!data.message?.trim()) errors.message = 'Message is required';
    return errors;
};

const ContactForm = () => {
    const [contact, setContact] = useState<ContactType>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        message: ''
    });
    const [errors, setErrors] = useState<ContactErrors>({});
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateContact(contact);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setStatus('sending');
        setStatusMessage('');
        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contact),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setStatus('error');
                setStatusMessage(data.error ?? `Request failed (${res.status})`);
                return;
            }
            setStatus('success');
            setStatusMessage('Message sent successfully. We\'ll get back to you soon.');
            setContact({ firstName: '', lastName: '', email: '', phone: '', country: '', message: '' });
        } catch {
            setStatus('error');
            setStatusMessage('Something went wrong. Please try again.');
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContact(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof ContactType]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <section className='mt-[150px] mb-[90px] flex flex-col items-center'>
            <SectionTitle bgText='Contact' title='Contact Us' />
            <SubTitle text='Got questions about our company or a particular service? Send us a message, and our team will be glad to assist you.' />
            <form onSubmit={handleSubmit} className='max-w-[550px] px-3 flex flex-col gap-4 items-center'>
                <div className='flex flex-col sm:flex-row gap-2'>
                    <OutlinedInput type='text' name='firstName' placeholder='First Name' value={contact.firstName} onChange={handleInput} error={errors.firstName} />
                    <OutlinedInput type='text' name='lastName' placeholder='Last Name' value={contact.lastName} onChange={handleInput} error={errors.lastName} />
                </div>
                <OutlinedInput type='email' name='email' placeholder='Email' value={contact.email} onChange={handleInput} error={errors.email} />
                <div className='flex flex-col sm:flex-row gap-2'>
                    <OutlinedInput type='text' name='phone' placeholder='Phone Number' value={contact.phone} onChange={handleInput} error={errors.phone} />
                    <OutlinedSelectInput options={countries} name='country' placeholder='Select Country' value={contact.country} onChange={handleInput} error={errors.country} />
                </div>
                <OutlinedTextArea name='message' placeholder='Message' value={contact.message} onChange={handleInput} error={errors.message} />
                {statusMessage && (
                    <p className={`text-sm w-full text-center ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                        {statusMessage}
                    </p>
                )}
                <button
                    type='submit'
                    disabled={status === 'sending'}
                    className='text-center bg-indigo text-white w-full h-[45px] rounded-full cursor-pointer hover:bg-orange hover:text-blond disabled:opacity-60 disabled:cursor-not-allowed'
                >
                    {status === 'sending' ? 'Sending...' : 'Submit'}
                </button>
            </form>
        </section>
    )
}

export default ContactForm