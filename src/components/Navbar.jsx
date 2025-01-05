import React from 'react'
import Image from 'next/image'

export default function Navbar() {
    return (
        <main className='flex h-[80px] w-full bg-[#578E7E]'>
            <div className='flex justify-center items-center w-full mx-32'>
                <div className='flex between items-center w-full'>
                    <div className='flex gap-3 items-center'>
                        <Image width={60} height={60} alt='Logo' src={"/logo.png"} draggable={false} />
                        <h1 className='text-3xl font-medium font-outfit text-white '>Orphan Oldage Home</h1>
                    </div>
                    <div className='flex gap-3'>
                    </div>
                </div>
            </div>
        </main>
    )
}
