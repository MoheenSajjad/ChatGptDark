import { Switch } from "@/components/ui/switch";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { useTheme } from "./theme-provider";


const ModeToggle = ({ emoji }) => {
    console.log(emoji);
    const { theme, setTheme } = useTheme();

    const handleThemeToggle = () => {
        console.log('changing theme');
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const handelEmojiChange = () => {
        console.log('changin emoji');
    }
    return (
        <>
            <div className='dark_mode'>
                <input
                    className={`${emoji ? 'emoji_input' : 'dark_mode_input'}`}
                    type='checkbox'
                    id={emoji ? 'emoji-toggle' : 'darkmode-toggle'}
                    onChange={emoji ? handelEmojiChange : handleThemeToggle}
                />
                <label className={`${emoji ? 'emoji_label' : 'dark_mode_label'}`} for={`${emoji ? 'emoji-toggle' : 'darkmode-toggle'}`} style={{ rotate: emoji ? '0deg' : '-90deg' }}>

                    {emoji ? <>
                        <SentimentSatisfiedAltIcon alt="smile" id="smile" />
                        <SentimentVeryDissatisfiedIcon alt="sad" id="sad" />
                    </> :
                        <>
                            <LightModeIcon alt="sun" id="sun" />
                            <DarkModeIcon alt="moon" id="moon" />
                        </>}
                </label>
            </div>
        </>
    )
}

export default ModeToggle