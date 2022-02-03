import PropTypes, { bool } from 'prop-types'
import useMedia from 'use-media'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import NavigationWrapper from './styledComponents'
import { ReactComponent as CrossIcon } from '../../images/svg/close.svg'
import Container from '../Container/Container'
import Contacts from '../Contacts/Contacts'

export default function Navigation({ setShowMenu }) {
  const isMobile = useMedia({ maxWidth: 767 })
  const { pathname } = useLocation()
  const [prevLocation, setPrevLocation] = useState('')

  useEffect(() => {
    setPrevLocation(pathname)
    if (pathname !== prevLocation) {
      setShowMenu(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, prevLocation])

  return (
    <>
      <NavigationWrapper>
        {isMobile && (
          <Container>
            <div className="nav-header-wrapper">
              <Logo />
              <button type="button" onClick={() => setShowMenu(false)}>
                <CrossIcon />
              </button>
            </div>
          </Container>
        )}

        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? ' active-nav-link' : 'nav-link'
              }
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? ' active-nav-link' : 'nav-link'
              }
            >
              Товары
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/actions"
              className={({ isActive }) =>
                isActive ? ' active-nav-link' : 'nav-link'
              }
            >
              Акции
            </NavLink>
          </li>
        </ul>
      </NavigationWrapper>
      <Contacts />
    </>
  )
}

Navigation.propTypes = {
  setShowMenu: PropTypes.func,
}

Navigation.defaultProps = {
  setShowMenu: () => bool,
}
