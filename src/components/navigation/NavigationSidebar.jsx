import React, { useState } from 'react';
import ModeToggle from '../mode-toggle'
import Logo from '@/assets/Images/Logo.png'
import ChatIcon from '@mui/icons-material/Chat';
import TuneIcon from '@mui/icons-material/Tune';
import ExploreIcon from '@mui/icons-material/Explore';
import SettingsIcon from '@mui/icons-material/Settings';
import profile from '@/assets/Images/UserProfile.png'
import signout from '@/assets/Images/signout.png'
import marker from '@/assets/Images/Marker.png'
import { Separator } from '../ui/separator';
import { useTheme } from '../theme-provider';

const navItems = [
    { id: 'chat', icon: <ChatIcon />, color: '#23C69E' },
    { id: 'tune', icon: <TuneIcon />, color: '#23C69E' },
    { id: 'explore', icon: <ExploreIcon />, color: '#23C69E' },
    { id: 'settings', icon: <SettingsIcon />, color: '#23C69E' }
];
const NavigationSidebar = () => {
    const { theme } = useTheme()
    const [activeNavItem, setActiveNavItem] = useState(null);

    const handleClick = (id) => {
        setActiveNavItem(id);
    };

    return (
        <div className={`flex h-full w-[72px] z-30 flex-col fixed inset-y-0 ${theme == 'light' && 'border - r border-solid border-gray-300'}`}>
            <div className="space-y-4 flex flex-col items-center justify-between h-full text-primary w-full dark:bg-[#1E1F22] bg-[#FFFFFF] py-3">
                <div className='flex flex-col items-center'>
                    <div className="mb-9 cursor-pointer">
                        <img src={Logo} alt='logo' className='h-[38px]' />
                    </div>
                    <div className='flex flex-col gap-6'>
                        {navItems.map(({ id, icon, color }) => (
                            <div
                                key={id}
                                className={`relative w-[38px] h-[38px] flex items-center justify-center transition-colors duration-300 rounded-lg cursor-pointer ${theme == 'dark' && activeNavItem != id && 'bg-[#4c4c4c] text-black'}  ${activeNavItem === id && `bg-green-600 text-white`}`}
                                onClick={() => handleClick(id)}
                                style={{ color: activeNavItem != id && color }}
                            >
                                {icon}
                                {activeNavItem === id && <div className="absolute -top-4.5 -left-3 w-2.5 "><img src={marker} alt='marker' /></div>}
                            </div>
                        ))}
                    </div>
                </div>


                <div className="pb-3 flex items-center justify-between flex-col gap-y-4 mt-auto">
                    <div className='flex flex-col gap-5  items-center'>
                        <img src={profile} alt='profile' className='cursor-pointer w-[48px]' />
                        <div
                            className={`w-[38px] h-[38px] flex items-center justify-center transition-colors duration-300 rounded-lg cursor-pointer ${theme == 'dark' ? 'bg-[#4c4c4c] text-black' : 'bg-[#F9F9F9] text-black'} }`}
                        >
                            <img src={signout} alt='signout' />
                        </div>
                        <Separator className='w-13 bg-slate-500' />
                    </div>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default NavigationSidebar