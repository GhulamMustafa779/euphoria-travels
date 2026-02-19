import ContactForm from '@/components/pages/contact/ContactForm'
import Location from '@/components/pages/contact/Location'
import React from 'react'

const ContactPage = () => {
    return (
        <div className='flex flex-col items-center'>
            <ContactForm />
            <Location />
        </div>
    )
}

export default ContactPage