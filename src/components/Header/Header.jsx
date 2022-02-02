import { useState } from 'react'
import useMedia from 'use-media'
import HeaderWrap from './styledComponents'
import Modal from '../Modal/Modal'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import { ReactComponent as BurgerMenuIcon } from '../../images/svg/burger-menu.svg'

export default function Header() {
  const isMobile = useMedia({ maxWidth: 767 })

  const [showMenu, setShowMenu] = useState(false)

  return (
    <HeaderWrap>
      <Logo />
      {isMobile ? (
        <>
          <button type="button" onClick={() => setShowMenu(true)}>
            <BurgerMenuIcon />
          </button>
          <Modal showMenu={showMenu} setShowMenu={setShowMenu}>
            <Navigation setShowMenu={setShowMenu} />
          </Modal>
        </>
      ) : (
        <Navigation />
      )}
    </HeaderWrap>
  )
}
