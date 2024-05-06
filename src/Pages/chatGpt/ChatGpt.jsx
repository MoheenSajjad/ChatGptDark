import React, { useState } from 'react'
import NavigationSidebar from '@/components/navigation/NavigationSidebar'
import ChatSidebar from '@/components/ChatSidebar/ChatSidebar'
import ChatSection from '@/components/ChatSection/ChatSection'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useTheme } from '@/components/theme-provider';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const ChatGpt = () => {
    const { theme } = useTheme()
    const [show, setshow] = useState(false)


    return (
        <>
            <div className=" dark:bg-[#282A2E]">
                <div className={`lg:flex h-full w-[72px] z-30 flex-col fixed inset-y-0 ${show ? 'flex' : 'hidden'}`}>
                    <NavigationSidebar />
                </div>
                <div className={`lg:pl-[77px] ${show && 'pl-[77px]'} h-full`}>
                    <div className="h-full">

                        <div className={`lg:flex h-full w-[320px] px-5 py-3 z-30 flex-col fixed inset-y-0  bg-transparent ${show ? 'flex bg-[#282A2E]' : 'hidden'}`}>
                            <CancelIcon style={{ display: show ? 'flex' : 'none', position: 'absolute', zIndex: 200, right: -6, top: 3, color: '#ff000059' }} onClick={() => setshow(!show)} />
                            <div className="flex flex-col h-full text-primary w-full ">
                                <ChatSidebar />
                            </div>
                        </div>
                        <div className="h-full lg:pl-[331px] bg-transparent p-4">
                            <div className='h-[25px] flex justify-between items-center mb-6'>
                                <div className='flex items-center gap-3'>
                                    <div onClick={() => setshow(!show)} className={`relative w-[35px] h-[35px] items-center flex lg:hidden justify-center transition-colors duration-300 rounded-lg cursor-pointer ${theme == 'dark' ? 'bg-[#4c4c4c] text-white' : 'bg-[#F9F9F9] text-black'} `}>
                                        <MenuIcon />
                                    </div>
                                    <p className='text-2xl leading-6 font-bold'>Cosmic Evolution</p>
                                </div>

                                <div className='flex justify-between gap-3'>
                                    <div className={`relative w-[35px] h-[35px] flex items-center justify-center transition-colors duration-300 rounded-lg cursor-pointer ${theme == 'dark' ? 'bg-[#4c4c4c] text-white' : 'bg-[#F9F9F9] text-black'} `}>
                                        <MoreHorizIcon className='w-10 dark:text-white text-black ' />
                                    </div>
                                    <div className={`relative w-[35px] h-[35px] flex items-center justify-center transition-colors duration-300 rounded-lg cursor-pointer ${theme == 'dark' ? 'bg-[#4c4c4c] text-white' : 'bg-[#F9F9F9] text-black'} `}>
                                        <SearchIcon className='w-10 dark:text-white text-black ' />
                                    </div>
                                </div>
                            </div>
                            <div className='dark:bg-[#3F424A] bg-[#F5F5F5] rounded-lg'>
                                <div className='py-[16px] px-[50px]'>
                                    <ChatSection />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <NavigationSidebar /> */}


        </>
    )
}

export default ChatGpt