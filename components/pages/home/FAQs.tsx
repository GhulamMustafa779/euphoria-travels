"use client";

import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle'
import SubTitle from '@/components/ui/SubTitle'
import { Plus, Minus } from 'lucide-react'

const questions: { question: string, answer: string }[] = [
    {
        question: "Do you offer customised tours?",
        answer: "Yes, we specialize in customized tours tailored to your preferences, schedule, and budget. Simply share your requirements, and we’ll design the perfect itinerary for you."
    },
    {
        question: "Do you offer customised tours?",
        answer: "Yes, we specialize in customized tours tailored to your preferences, schedule, and budget. Simply share your requirements, and we’ll design the perfect itinerary for you."
    },
    {
        question: "Do you offer customised tours?",
        answer: "Yes, we specialize in customized tours tailored to your preferences, schedule, and budget. Simply share your requirements, and we’ll design the perfect itinerary for you."
    },
    {
        question: "Do you offer customised tours?",
        answer: "Yes, we specialize in customized tours tailored to your preferences, schedule, and budget. Simply share your requirements, and we’ll design the perfect itinerary for you."
    },
]

interface QuestionProps {
    question: { question: string, answer: string };
    isOpen: boolean;
}

const Question = ({ question, isOpen }: QuestionProps) => {
    return (
        <div className='flex flex-col gap-2 w-full border border-orange rounded-[24px] p-3'>
            <div className='flex justify-between items-center gap-5'>
                <h2 className='text-[16px] font-helvetica font-bold text-orange'>{question.question}</h2>
                <div className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    {isOpen ? <Minus width={20} height={20} className='text-orange' /> : <Plus width={20} height={20} className='text-orange' />}
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className='text-[16px] font-helvetica text-indigo pt-2'>{question.answer}</p>
            </div>
        </div>
    )
}

const FAQs = () => {
    const [isOpen, setIsOpen] = useState<number | null>(null);
    const handleClick = (index: number) => {
        if (isOpen === index) {
            setIsOpen(null);
        } else {
            setIsOpen(index);
        }
    }
    return (
        <section className='my-[80px] flex flex-col items-center'>
            <SectionTitle bgText='Questions' title='Frequently Asked Questions' />
            <SubTitle text='We&apos;ve put together answers to the most commonly asked questions to help you plan with confidence. Whether you&apos;re looking for details about our services, booking process, or travel customization options, you&apos;ll find helpful information here. If you don&apos;t see what you&apos;re looking for, feel free to reach out—we&apos;re always happy to assist.' />
            <div className='max-w-[600px] w-full mt-5 flex flex-col gap-4 p-5 md:p-0'>
                {
                    questions.map((ques, index) => {
                        return (
                            <div key={index} onClick={() => handleClick(index)}>
                                <Question question={ques} isOpen={isOpen === index} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default FAQs