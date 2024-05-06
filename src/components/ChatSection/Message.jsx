import React from 'react'
import EditIcon from '@/assets/Images/Edit.png'
import YouIcon from '@/assets/Images/YouIcon.png'
import ChatGptGreen from '@/assets/Images/ChatGptGreen.png'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import RefreshIcon from '@mui/icons-material/Refresh';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ModeToggle from '../mode-toggle';
import { Button } from '../ui/button';


const Message = ({ message }) => {
    return (
        <div className='mb-7'>
            <div className='pl-7 flex gap-3 items-center'>
                <span className='font-medium text-base'>{message.response ? 'Response' : 'You'}</span>
                <span className='font-normal text-xs dark:text-[#ABABAB]'>{message.date} <FiberManualRecordIcon style={{ fontSize: 7 }} /> {message.time}</span>
            </div>
            <div className={` bg-white items-center ${message.response ? 'bg-[#D8EFE9] dark:bg-[#28303F]' : 'bg-[#FFFFFF] dark:bg-[#4B4F5B]'} rounded-2xl p-3 pl-7 gap-4`}>
                <div className='relative inline-flex'>
                    <p className='dark:text-[#EEEEEE] text-[#1E1F22] pr-6'>{message.msg}</p>
                    <img src={EditIcon} alt='edit' className={`w-4 h-4 absolute top-[-3px] right-[-1px]`} />
                    <img src={message.response ? ChatGptGreen : YouIcon} alt='you' className='absolute top-[-32px] left-[-38px] w-9' />
                </div>

                {message.response &&
                    <div className='flex items-center justify-between'>
                        <div>
                            <ModeToggle emoji={true} />
                        </div>
                        <div className='flex gap-2'>
                            <Button className='h-8 p-2 dark:bg-[#202633] bg-[#B0D7CD] dark:text-[#EEEEEE] text-[#1E1F22]'><RefreshIcon fontSize='small' className='mr-2' />   Generate Response</Button>
                            <Button className='h-8 p-2 dark:bg-[#202633] bg-[#B0D7CD] dark:text-[#EEEEEE] text-[#1E1F22]'><ContentCopyIcon fontSize='small' className='mr-2' /> Copy</Button>
                            <Button className='h-8 p-2 dark:bg-[#202633] bg-[#B0D7CD] dark:text-[#EEEEEE] text-[#1E1F22]'><BookmarkBorderIcon fontSize='small' /></Button>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default Message