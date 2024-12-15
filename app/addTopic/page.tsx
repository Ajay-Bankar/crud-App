'use client'


import { Button } from '@/components/ui/button';
import { headers } from 'next/headers';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"




const AddTopic = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!title || !description) {
            alert('Title and Description are required');
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/topics', {

                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ title, description }),
            });

            if (res.ok) {
                router.push('/')
            } else {
                throw new Error('failed to create topic');
            }
        } catch (error) {
            console.log(error);

        }

    }
    return (
        <form onSubmit={handleSubmit}
            className=' flex flex-col gap-2'>
            <Input
                onChange={(e) => setTitle(e.target.value)}
                className='font-medium'
                type="text"
                placeholder='Topic title'
            />

            <Textarea
                onChange={(e) => setDescription(e.target.value)}
                className='font-medium'

                placeholder='Description'
            />

            <Button
                variant={'default'}
                type='submit'
                className=' bg bg-green-600 font-bold text-white py-3 px-6 w-fit'>
                Add Topic
            </Button>
        </form>
    )
}

export default AddTopic
