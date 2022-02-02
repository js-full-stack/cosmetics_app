import styled from 'styled-components'
import colors from '../../constants/colors'

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px 0;

  font-size: 18px;
  font-weight: 500;

  li {
    display: flex;
    align-items: center;
    gap: 0 8px;
  }

  li > a {
    color: ${colors.gray};
  }

  li:hover > a {
    color: ${colors.accentBlue};
  }

  li:hover > svg > path {
    fill: ${colors.accentBlue};
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    align-items: flex-start;
    gap: 10px 0;
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 0 30px;
    font-size: 14px;

    li {
      gap: 0 10px;
    }
  }
`

export default ContactsList
