import Logo from '../../components/logotype/Logotype'
import Wrapper from '../../components/wrapper/Wrapper'
import ThemeButton from '../../components/buttons/theme-button'

import './Header.scss'

function Header() {
  return (
    <div className='header'>
      <Logo />
      <Wrapper />
      <ThemeButton />
    </div>
  )
}

export default Header