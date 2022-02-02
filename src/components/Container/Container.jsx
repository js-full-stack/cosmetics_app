import PropTypes from 'prop-types'

import WrapContainer from './styledComponents'

export default function Container({ children }) {
  return <WrapContainer>{children}</WrapContainer>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}
