import styled from 'styled-components'
import colors from '../../constants/colors'

const ModalBackdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.white};
  transform: scale(0);
  transition: all 0.5s;
  z-index: 1;

  &.active {
    transform: scale(1);
  }
`

export default ModalBackdrop
