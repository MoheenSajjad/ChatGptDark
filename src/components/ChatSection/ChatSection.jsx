import React from 'react'
import { ScrollArea } from '../ui/scroll-area'
import Message from './Message'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SendIcon from '@mui/icons-material/Send';
import MicNoneIcon from '@mui/icons-material/MicNone';

const ChatSection = () => {

    const messages = [
        {
            id: 1,
            response: false,
            date: '24 Sep',
            time: '11:34 Pm',
            msg: "how to you define usability testing define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  in UX design?"

        },
        {
            id: 2,
            response: true,
            date: '24 Sep',
            time: '11:34 Pm',
            msg: "usability testing  define usability testing  define usability testing  define usability testing  in UX design?"
        }, {
            id: 1,
            response: false,
            date: '24 Sep',
            time: '11:34 Pm',
            msg: "how to you define usability testing define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  in UX design?"

        },
        {
            id: 2,
            response: true,
            date: '24 Sep',
            time: '11:34 Pm',
            msg: "usability testing  define usability testing  define usability testing  define usability testing  in UX design?"
        }, {
            id: 1,
            response: false,
            date: '24 Sep',
            time: '11:34 Pm',
            msg: "how to you define usability testing define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  in UX design?"

        },
        {
            id: 2,
            response: true,
            date: '24 Sep',
            time: '11:34 Pm',
            msg: "usability testing  define usability testing  define usability testing  define usability testing  in UX design?"
        }, {
            id: 1,
            response: false,
            date: '24 Sep',
            time: '11:34 Pm',
            msg: "how to you define usability testing define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  in UX design?"

        },
        {
            id: 2,
            response: true,
            date: '24 Sep',
            time: '11:34 Pm',
            msg: "usability testing  define usability testing  define usability testing  define usability testing  in UX design?"
        }, {
            id: 1,
            response: false,
            date: '24 Sep',
            time: '11:34 Pm',
            msg: "how to you define usability testing define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  define usability testing  in UX design?"

        },
        {
            id: 2,
            response: true,
            date: '24 Sep',
            time: '11:34 Pm',
            msg: "usability testing  define usability testing  define usability testing  define usability testing  in UX design?"
        },

    ]
    return (
        <>
            <ScrollArea className='pb-2'>
                <div className='pl-4 h-[468px] pr-3'>
                    {messages.map((msg) => <Message key={msg.id} message={msg} />)}
                </div>
            </ScrollArea>
            <div className='w-[100%] flex items-center gap-4 pl-1'>
                <div className='relative w-[90%]'>
                    <div className='absolute w-10 h-10 rounded-[6px] dark:bg-[#404450] top-3 left-3 flex items-center justify-center'><AutoFixHighIcon /></div>
                    <input placeholder='Ask questions, or type ‘/’ for commands' className=' w-[100%] h-16 rounded-[8px] dark:bg-[#4B4F5B] px-16' />
                    <SendIcon className='absolute right-[6px] top-[18px] text-gray-700' />
                </div>
                <div className='dark:bg-[#4B4F5B] bg-[#FFFFFF] h-16 w-16 rounded-[8px] flex items-center justify-center'><MicNoneIcon /></div>
            </div>
        </>
    )
}

export default ChatSection