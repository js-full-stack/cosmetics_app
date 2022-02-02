import styled from 'styled-components'
import colors from '../../constants/colors'

const NavigationWrapper = styled.nav`
  .nav-header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px 0;

    font-size: 18px;
    font-weight: 500;
    line-height: 1.18;

    margin: 60px 0;

    li {
      cursor: pointer;

      .nav-link {
        color: ${colors.primaryTextBlack};
      }
      .active-nav-link {
        color: ${colors.accentBlue};
        border-bottom: 4px solid ${colors.accentBlue};
        padding-bottom: 8px;
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 0 50px;

      font-size: 14px;
      margin: 0;
    }
  }
`

export default NavigationWrapper
