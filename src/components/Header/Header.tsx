import React from 'react';
import InsightsLogo from './InsightsLogo';

const Header: React.FC = () => {
    return (
        <header className='bg-white border-b border-gray-200 fixed z-30 w-full shadow-sm' data-testid='header'>
            <nav className="flex items-center justify-between h-16">
                <InsightsLogo />
                <div className="flex flex-auto border-l border-blue-400 px-3 ml-3 overflow-hidden">
                    <div className="flex flex-col">
                        <div className='text-lg'>Monitoring Dashboard</div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;