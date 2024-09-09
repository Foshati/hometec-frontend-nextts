import { Navbar } from '@/components/layout/navbar/navbar';
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <main className="flex flex-col items-center w-full">
            <Navbar/>
            {children}
        </main>
    )
};

export default MarketingLayout
