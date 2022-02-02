import styled from 'styled-components'
import colors from '../../constants/colors'

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  @media (min-width: 768px) {
    height: 80px;
  }

  button {
    border: none;
    outline: none;
    background: transparent;
    margin-top: 3px;

    &:hover > svg > path {
      fill: ${colors.accentBlue};
    }
  }
`
export default HeaderWrap
