import React, { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from '../ui/input';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { ScrollArea } from "@/components/ui/scroll-area"
import Chat from './Chat';
import { useTheme } from '../theme-provider';






const chats = [
    {
        key: 1,
        pinned: true,
        time: '9:34 PM',
        chatName: 'Cosmic Evolution',
        details: 'Some 115 billion years ago the unverse emerged from a hot, dense sea of vlocano and then after that the thing is that nd then after that the thing is that nd then after that the thing is that',
    },
    {
        key: 2,
        pinned: false,
        time: '9:34 PM',
        chatName: 'Cosmic Evolution',
        details: 'Some 115 billion years ago the unverse emerged from a hot, dense sea of vlocano and then after that the thing is that nd then after that the thing is that nd then after that the thing is that',
    },
    {
        key: 3,
        pinned: false,
        time: '9:34 PM',
        chatName: 'Cosmic Evolution',
        details: 'Some 115 billion years ago the unverse emerged from a hot, dense sea of vlocano and then after that the thing is that nd then after that the thing is that nd then after that the thing is that',
    },
    {
        key: 4,
        pinned: false,
        time: '9:34 PM',
        chatName: 'Cosmic Evolution',
        details: 'Some 115 billion years ago the unverse emerged from a hot, dense sea of vlocano and then after that the thing is that nd then after that the thing is that nd then after that the thing is that',
    },
    {
        key: 5,
        pinned: false,
        time: '9:34 PM',
        chatName: 'Cosmic Evolution',
        details: 'Some 115 billion years ago the unverse emerged from a hot, dense sea of vlocano and then after that the thing is that nd then after that the thing is that nd then after that the thing is that',
    },
    {
        key: 6,
        pinned: false,
        time: '9:34 PM',
        chatName: 'Cosmic Evolution',
        details: 'Some 115 billion years ago the unverse emerged from a hot, dense sea of vlocano and then after that the thing is that nd then after that the thing is that nd then after that the thing is that',
    },
    {
        key: 7,
        pinned: false,
        time: '9:34 PM',
        chatName: 'Cosmic Evolution',
        details: 'Some 115 billion years ago the unverse emerged from a hot, dense sea of vlocano and then after that the thing is that nd then after that the thing is that nd then after that the thing is that',
    },
]

const ChatSidebar = () => {
    const { theme } = useTheme()
    console.log('dsadasdsa', theme);
    return (
        <>
            <div className='flex justify-between items-center' >
                <p className='text-[23px] font-bold'>My Chats</p>
                <div className='flex gap-2.5'>
                    <div className={`relative w-[35px] h-[35px] flex items-center justify-center transition-colors duration-300 rounded-lg cursor-pointer  bg-green-600 text-white`}>
                        <AddIcon />
                    </div>
                    <div className={`relative w-[35px] h-[35px] flex items-center justify-center transition-colors duration-300 rounded-lg cursor-pointer ${theme == 'dark' ? 'bg-[#4c4c4c] text-white' : 'bg-[#F9F9F9] text-black'} `}>
                        <MoreHorizIcon className='w-10 dark:text-white text-black ' />
                    </div>
                </div>
            </div>
            <Tabs defaultValue="chats" className="pt-5 pb-2 ">
                <TabsList className={`w-[100%] py-4 px-0 h-[49px]    justify-around ${theme == 'dark' ? 'bg-[#4c4c4c] text-white' : 'bg-[#EEEEEE] text-black'}`}>
                    <TabsTrigger value="chats" className={` w-[122px] h-[40px] gap-2 text-xs text-green-500 flex items-center  transition-colors duration-300  ${theme == 'dark' && 'data - [state = active]:bg-[#1E1F22]'}`} ><ChatIcon />CHATS <span className='bg-gray-400  rounded-sm p-1'>24</span></TabsTrigger>
                    <TabsTrigger value="saved" className='w-[122px] h-[40px] gap-1 text-xs text-green-500 flex items-center  transition-colors duration-300 data-[state=active]:bg-[#FFFFFF]'><BookmarkIcon />SAVED <span className='bg-[#8A8A8A] rounded-sm p-1'>24</span></TabsTrigger>
                </TabsList>
                {/* <TabsContent value="chats">chats here</TabsContent>
                <TabsContent value="saved">saved chat here</TabsContent> */}
            </Tabs>
            <div className='flex justify-between'>
                <div className="relative w-[83%]">
                    <Input
                        className="pl-10 pr-4 border rounded-[8px] h-9"
                        type="text"
                        placeholder="Search..."
                    />

                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 " aria-hidden="true" />
                    </div>
                </div>
                <div className={`relative w-[35px] h-[35px] flex items-center justify-center transition-colors duration-300 rounded-lg cursor-pointer  ${theme == 'dark' ? 'bg-[#4c4c4c] text-white' : 'bg-[#F9F9F9] text-black'}`}>
                    <FilterListIcon className={`w-10 dark:text-white text-[#23C69E] `} />
                </div>
            </div>
            {/* <div> */}
            <ScrollArea className="flex w-full pt-4 justify-center pr-3">
                {chats.map((item) => <Chat key={item.key} chat={item} />)}
            </ScrollArea>
            {/* </div> */}


        </>
    )
}

export default ChatSidebar