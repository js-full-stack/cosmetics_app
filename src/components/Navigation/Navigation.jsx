import useMedia from 'use-media'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import Logo from '../Logo/Logo'
import NavigationWrapper from './styledComponents'
import { ReactComponent as CrossIcon } from '../../images/svg/close.svg'
import Container from '../Container/Container'
import Contacts from '../Contacts/Contacts'

export default function Navigation({ setShowMenu }) {
  const isMobile = useMedia({ maxWidth: 767 })

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
              to="/contacts"
              className={({ isActive }) =>
                isActive ? ' active-nav-link' : 'nav-link'
              }
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </NavigationWrapper>
      <Contacts />
    </>
  )
}

Navigation.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
}
