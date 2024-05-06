import React, { useEffect, useState } from 'react'
import PushPinIcon from '@mui/icons-material/PushPin';
import ChatGPTIcon from '@/assets/Images/ChatGPTIcon.png'
import gptIconWhite from '@/assets/Images/gptIconWhite.png'
import gptIconGreen from '@/assets/Images/gptIconGreen.png'
import { useTheme } from '../theme-provider';

const Chat = ({ chat }) => {
    const { theme } = useTheme()
    const [selected, setSelected] = useState(0);



    return (
        <div className={`relative p-2 mb-1 rounded-md pt-2 pb-4 bg-transparent`} style={{ backgroundColor: theme == 'dark' ? chat.key === selected && '#1E1F22' : chat.key === selected && '#E3FEF7' }} onClick={() => setSelected(chat.key)}>
            {chat.pinned ? <PushPinIcon className='absolute text-[gold] rotate-45 top-[13px] left-[5px]' /> : <img src={theme === 'dark' ? gptIconWhite : ChatGPTIcon} alt='logo' className='absolute top-[13px] left-[5px] h-5 text-white' />}
            <div className='flex justify-between pl-7 items-center'>
                <p className="font-medium text-xl">Cosmic Evolution</p>
                <span className='text-[#ABABAB] text-sm'>9:34 PM</span>
            </div>
            <p className='text-[#ABABAB] pl-7 text-xs'>Some 115 billion years ago the universe emerged from a hot, dense sea of volcano and then after</p>
        </div>
    )
}

export default Chat
