import { useEffect } from 'react'
import PropTypes from 'prop-types'

import ModalBackdrop from './styledComponents'

export default function Modal({ children, showMenu, setShowMenu }) {
  const closeModalByEscape = (e) => {
    if (e.key === 'Escape') {
      setShowMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', closeModalByEscape)

    return () => {
      window.removeEventListener('keydown', closeModalByEscape)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ModalBackdrop className={showMenu && 'active'}>
     {children}
    </ModalBackdrop>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
}
