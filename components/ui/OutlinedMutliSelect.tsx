'use client';

import { useRef, useEffect, useState } from 'react';
import OptionType from '@/libs/types/option.type';
import ErrorText from './ErrorText';

interface OutlinedMutliSelectProps {
    options: OptionType<string>[];
    name: string;
    placeholder: string;
    selectedOptions: string[];
    onSelectedOptionsChange: (values: string[]) => void;
    error?: string;
    width?: string;
}

const OutlinedMutliSelect = ({
    options,
    name,
    placeholder,
    selectedOptions,
    onSelectedOptionsChange,
    error,
    width = 'full',
}: OutlinedMutliSelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleOption = (value: string) => {
        if (selectedOptions.includes(value)) {
            onSelectedOptionsChange(selectedOptions.filter((v) => v !== value));
        } else {
            onSelectedOptionsChange([...selectedOptions, value]);
        }
    };

    const removeOption = (value: string, e: React.MouseEvent) => {
        e.stopPropagation();
        onSelectedOptionsChange(selectedOptions.filter((v) => v !== value));
    };

    const getLabel = (value: string) => options.find((o) => o.value === value)?.label ?? value;

    return (
        <div
            ref={containerRef}
            className={`flex flex-col gap-1 ${width === 'full' ? 'w-full' : `w-[${width}]`}`}
        >
            <div className="relative">
                <button
                    type="button"
                    name={name}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className={`w-full text-left border ${error ? 'border-red-500' : 'border-indigo'} bg-transparent rounded-full py-[8px] px-[20px] min-w-[260px] outline-none text-medium-grey text-[16px] focus:ring-0 focus:ring-offset-0`}
                >
                    <span className={selectedOptions.length === 0 ? 'text-medium-grey' : 'text-grey'}>
                        {selectedOptions.length === 0 ? placeholder : `${selectedOptions.length} selected`}
                    </span>
                </button>

                {isOpen && (
                    <div className="absolute z-10 mt-1 w-full border border-indigo bg-white rounded-2xl shadow-lg py-2 max-h-[240px] overflow-y-auto">
                        {options.map((option, index) => {
                            const isSelected = selectedOptions.includes(option.value);
                            return (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => toggleOption(option.value)}
                                    className={`w-full px-5 py-2 text-left text-[16px] hover:bg-indigo/10 transition-colors flex items-center gap-2 ${isSelected ? 'bg-indigo/10 text-indigo font-medium' : 'text-grey'
                                        }`}
                                >
                                    <span
                                        className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-indigo border-indigo' : 'border-medium-grey'
                                            }`}
                                    >
                                        {isSelected && (
                                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </span>
                                    {option.label}
                                </button>
                            );
                        })}
                        {options.length === 0 && (
                            <div className="px-5 py-3 text-medium-grey text-sm">No options</div>
                        )}
                    </div>
                )}
            </div>

            {selectedOptions.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2 px-1">
                    {selectedOptions.map((value) => (
                        <span
                            key={value}
                            className="inline-flex items-center gap-1.5 rounded-full bg-pine text-white text-sm font-medium py-1.5 pl-3 pr-1.5 border border-indigo/30"
                        >
                            {getLabel(value)}
                            <button
                                type="button"
                                onClick={(e) => removeOption(value, e)}
                                className="rounded-full p-0.5 hover:bg-indigo/20 text-indigo focus:outline-none focus:ring-2 focus:ring-indigo/50 transition-colors"
                                aria-label={`Remove ${getLabel(value)}`}
                            >
                                <svg className="w-4 h-4 cursor-pointer bg-white hover:bg-indigo/5 rounded-full p-0.5 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </span>
                    ))}
                </div>
            )}

            {error && <ErrorText text={error} />}
        </div>
    );
};

export default OutlinedMutliSelect;
