import { useTheme } from '../../theme/use-theme'

import './theme-button.scss'

function ThemeButton() {
   const { theme, setTheme } = useTheme()
   
   const handleLightThemeClick = () => { setTheme('light')}
   const handleDarkThemeClick = () => { setTheme('dark')}

   return (
      <div className='theme-buttons'>
         <button className='button' onClick={handleLightThemeClick}>Light</button>
         <button className='button' onClick={handleDarkThemeClick}>Dark</button>
      </div>
   )
}

export default ThemeButton