"use client";

import { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import ErrorText from '../ui/ErrorText';

interface OutlinedPhoneInputProps {
    value: string;
    name: string;
    placeholder: string;
    onChange: (name: string, value: string) => void;
    error?: string;
    width?: string;
    defaultCountry?: string;
}

const OutlinedPhoneInput = ({
    value,
    name,
    placeholder,
    onChange,
    error,
    width = 'full',
    defaultCountry = 'us',
}: OutlinedPhoneInputProps) => {
    const [localPhoneValue, setLocalPhoneValue] = useState(value);

    useEffect(() => {
        setLocalPhoneValue(value);
    }, [value]);

    return (
        <div className={`flex flex-col gap-1 ${width === 'full' ? 'w-full' : `w-[${width}]`}`}>
            <div className={`outlined-phone-input-wrapper ${error ? 'outlined-phone-input-wrapper-error' : ''}`}>
                <PhoneInput
                    country={defaultCountry}
                    value={localPhoneValue}
                    onChange={(phone, countryData, _event, formattedValue) => {
                        const dialCode = String((countryData as { dialCode?: string } | undefined)?.dialCode || '').replace(/\D/g, '');
                        const numericPhone = String(phone || '').replace(/\D/g, '');
                        const hasUserEnteredNumber = numericPhone.length > dialCode.length;
                        const nextValue = hasUserEnteredNumber ? (formattedValue || (phone ? `+${phone}` : '')) : '';
                        setLocalPhoneValue(nextValue);
                        onChange(name, nextValue);
                    }}
                    placeholder={placeholder}
                    enableSearch
                    inputProps={{ name }}
                    containerClass='outlined-phone-input-container'
                    inputClass='outlined-phone-input-field'
                    buttonClass='outlined-phone-input-flag-button'
                    dropdownClass='outlined-phone-input-dropdown'
                />
            </div>
            {error && <ErrorText text={error} />}
        </div>
    );
};

export default OutlinedPhoneInput;
