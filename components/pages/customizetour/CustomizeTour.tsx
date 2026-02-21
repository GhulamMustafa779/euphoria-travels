"use client";

import { useState, useEffect } from 'react';
import OutlinedInput from '@/components/shared/OutlinedInput';
import OutlinedSelectInput from '@/components/shared/OutlinedSelectInput';
import SectionTitle from '@/components/ui/SectionTitle';
import SubTitle from '@/components/ui/SubTitle';
import { countries } from '@/libs/constants/coutries.constant';
import { genders } from '@/libs/constants/gender.constant';
import { currencies } from '@/libs/constants/currency.constant';
import { tourTypes } from '@/libs/constants/tour-type.constant';
import { tourServices } from '@/libs/constants/tour-services.constant';
import OutlinedTextArea from '@/components/shared/OutlinedTextArea';
import OutlinedSelectDate from '@/components/ui/OutlinedSelectDate';
import OutlinedMutliSelect from '@/components/ui/OutlinedMutliSelect';

type FormErrors = Partial<Record<keyof typeof initialFormData, string>>;

const initialFormData = {
    firstName: '',
    lastName: '',
    gender: '',
    nationality: '',
    email: '',
    phone: '',
    startLocation: '',
    endLocation: '',
    currency: '',
    tourType: '',
    groupSize: '',
    noOfRooms: '',
    noOfDays: '',
    startDate: '',
    perPersonBudget: '',
    moreDetails: '',
    selectedServices: [] as string[],
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NUMBER_REGEX = /^\d+$/;

const CustomizeTour = () => {
    const [isGroup, setIsGroup] = useState<boolean>(false);
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const validate = (): FormErrors => {
        const err: FormErrors = {};

        if (!formData.firstName?.trim()) err.firstName = 'First name is required';
        if (!formData.lastName?.trim()) err.lastName = 'Last name is required';
        if (!formData.gender?.trim()) err.gender = 'Please select gender';
        if (!formData.nationality?.trim()) err.nationality = 'Nationality is required';
        if (!formData.email?.trim()) err.email = 'Email is required';
        else if (!EMAIL_REGEX.test(formData.email)) err.email = 'Please enter a valid email';
        if (!formData.phone?.trim()) err.phone = 'Phone number is required';
        else if (formData.phone.replace(/\D/g, '').length < 8) err.phone = 'Phone must be at least 8 digits';

        const hasServices = formData.selectedServices.length > 0 && formData.selectedServices.some(s => s?.trim() !== '');
        if (!hasServices) err.selectedServices = 'Please select at least one service';

        if (!formData.startLocation?.trim()) err.startLocation = 'Start location is required';
        if (!formData.endLocation?.trim()) err.endLocation = 'End location is required';
        if (!formData.currency?.trim()) err.currency = 'Please select currency';
        if (!formData.tourType?.trim()) err.tourType = 'Please select tour type';

        if (isGroup) {
            if (!formData.groupSize?.trim()) err.groupSize = 'Group size is required';
            else if (!NUMBER_REGEX.test(formData.groupSize) || parseInt(formData.groupSize, 10) < 1) err.groupSize = 'Enter a valid number (1 or more)';
            if (!formData.noOfRooms?.trim()) err.noOfRooms = 'Number of rooms is required';
            else if (!NUMBER_REGEX.test(formData.noOfRooms) || parseInt(formData.noOfRooms, 10) < 1) err.noOfRooms = 'Enter a valid number (1 or more)';
        }

        if (!formData.noOfDays?.trim()) err.noOfDays = 'Number of days is required';
        else if (!NUMBER_REGEX.test(formData.noOfDays) || parseInt(formData.noOfDays, 10) < 1) err.noOfDays = 'Enter a valid number (1 or more)';
        if (!formData.startDate?.trim()) err.startDate = 'Start date is required';
        if (!formData.perPersonBudget?.trim()) err.perPersonBudget = 'Per person budget is required';
        else if (!/^\d+(\.\d+)?$/.test(formData.perPersonBudget) || parseFloat(formData.perPersonBudget) < 0) err.perPersonBudget = 'Enter a valid amount';

        setErrors(err);
        return err;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const name = e.target.name as keyof FormErrors;
        setFormData({ ...formData, [name]: e.target.value });
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSelectedServicesChange = (values: string[]) => {
        setFormData({ ...formData, selectedServices: values });
        if (errors.selectedServices) setErrors((prev) => ({ ...prev, selectedServices: undefined }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) return;

        setStatus('sending');
        setStatusMessage('');
        try {
            const payload = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                gender: formData.gender,
                nationality: formData.nationality,
                email: formData.email,
                phone: formData.phone,
                startLocation: formData.startLocation,
                endLocation: formData.endLocation,
                currency: formData.currency,
                tourType: formData.tourType,
                groupSize: formData.groupSize || undefined,
                noOfRooms: formData.noOfRooms || undefined,
                noOfDays: formData.noOfDays,
                startDate: formData.startDate,
                perPersonBudget: formData.perPersonBudget,
                selectedServices: formData.selectedServices.filter(Boolean).join(', '),
                message: formData.moreDetails?.trim() || 'No additional details provided',
                subject: `Custom Tour Request from ${formData.firstName} ${formData.lastName}`,
            };
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setStatus('error');
                setStatusMessage(data.error ?? `Request failed (${res.status})`);
                return;
            }
            setStatus('success');
            setStatusMessage('Your custom tour request has been sent. We\'ll get back to you soon.');
            setFormData(initialFormData);
        } catch {
            setStatus('error');
            setStatusMessage('Something went wrong. Please try again.');
        }
    };

    useEffect(() => {
        if (formData.tourType === 'Group') {
            setIsGroup(true);
        } else {
            setIsGroup(false);
        }
    }, [formData.tourType]);

    return (
        <div className='flex flex-col items-center py-[150px]'>
            <SectionTitle bgText='Customize' title='Customize Your Tour' />
            <SubTitle text='Plan a tour tailored to your preferences—whether you&apos;re traveling with friends, family, a group of like-minded explorers, or on your own. Simply share a few basic details in the form, and we&apos;ll take care of the rest' />
            <form className='max-w-[600px] w-full mt-5 flex flex-col gap-5 p-5 md:p-0 form' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2'>
                    <div className='mb-3'>
                        <span className='text-[24px] font-helvetica text-indigo'>Contact Details</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col md:flex-row gap-[10px]'>
                            <OutlinedInput type='text' value={formData.firstName} name='firstName' placeholder='First Name' onChange={handleChange} error={errors.firstName} />
                            <OutlinedInput type='text' value={formData.lastName} name='lastName' placeholder='Last Name' onChange={handleChange} error={errors.lastName} />
                        </div>
                        <div className='flex flex-col md:flex-row gap-[10px]'>
                            <OutlinedSelectInput options={genders} value={formData.gender} name='gender' placeholder='Select Gender' onChange={handleChange} error={errors.gender} />
                            <OutlinedSelectInput options={countries} value={formData.nationality} name='nationality' placeholder='Nationality' onChange={handleChange} error={errors.nationality} />
                        </div>
                        <OutlinedInput type='email' value={formData.email} name='email' placeholder='Email' onChange={handleChange} error={errors.email} />
                        <OutlinedInput type='tel' value={formData.phone} name='phone' placeholder='Phone' onChange={handleChange} width='300px' error={errors.phone} />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='mb-3'>
                        <span className='text-[24px] font-helvetica text-indigo'>Services You Want</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <OutlinedMutliSelect
                            options={tourServices}
                            name='selectedServices'
                            placeholder='You can select multiple options'
                            selectedOptions={formData.selectedServices}
                            onSelectedOptionsChange={handleSelectedServicesChange}
                            error={errors.selectedServices}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='mb-3'>
                        <span className='text-[24px] font-helvetica text-indigo'>Tour Details</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col md:flex-row gap-[10px]'>
                            <OutlinedInput type='text' value={formData.startLocation} name='startLocation' placeholder='Start Location' onChange={handleChange} error={errors.startLocation} />
                            <OutlinedInput type='text' value={formData.endLocation} name='endLocation' placeholder='End Location' onChange={handleChange} error={errors.endLocation} />
                        </div>
                        <OutlinedSelectInput options={tourTypes} value={formData.tourType} name='tourType' placeholder='Tour Type' onChange={handleChange} width='300px' error={errors.tourType} />
                        {isGroup && <div className='flex flex-col md:flex-row gap-[10px]'>
                            <OutlinedInput type='text' value={formData.groupSize} name='groupSize' placeholder='Group Size' onChange={handleChange} error={errors.groupSize} />
                            <OutlinedInput type='text' value={formData.noOfRooms} name='noOfRooms' placeholder='No of Rooms' onChange={handleChange} error={errors.noOfRooms} />
                        </div>}
                        <div className='flex flex-col md:flex-row gap-[10px]'>
                            <OutlinedInput type='text' value={formData.noOfDays} name='noOfDays' placeholder='No of Days' onChange={handleChange} error={errors.noOfDays} />
                            <OutlinedSelectDate value={formData.startDate} name='startDate' placeholder='Start Date' onChange={handleChange} error={errors.startDate} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='mb-3'>
                        <span className='text-[24px] font-helvetica text-indigo'>Tour Budget</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col md:flex-row gap-[10px]'>
                            <OutlinedInput type='text' value={formData.perPersonBudget} name='perPersonBudget' placeholder='Per Person Budget' onChange={handleChange} error={errors.perPersonBudget} />
                            <OutlinedSelectInput options={currencies} value={formData.currency} name='currency' placeholder='Currency' onChange={handleChange} error={errors.currency} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='mb-3'>
                        <span className='text-[24px] font-helvetica text-indigo'>More Details</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <OutlinedTextArea value={formData.moreDetails} name='moreDetails' placeholder='Any Preferences?' onChange={handleChange} />
                    </div>
                </div>
                {statusMessage && (
                    <p className={`text-sm text-center ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                        {statusMessage}
                    </p>
                )}
                <button
                    type='submit'
                    disabled={status === 'sending'}
                    className='bg-indigo text-white px-4 py-2 rounded-full disabled:opacity-60 disabled:cursor-not-allowed'
                >
                    {status === 'sending' ? 'Sending...' : 'Submit'}
                </button>
            </form>
        </div>
    )
}

export default CustomizeTour