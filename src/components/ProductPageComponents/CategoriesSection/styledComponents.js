import styled, { keyframes } from 'styled-components'
import colors from '../../../constants/colors'

const cardAnimation = keyframes`
  from {
    height: 200px;
  }

  to {
    width: 0;
    height: 0;
    margin: 0;
    font-size: 0;
  }
`

const TopLine = styled.div`
  border-top: 1.5px solid ${colors.grayLine};
`

const Categories = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 8px;

  padding-top: 60px;
  margin-bottom: 46px;

  @media (min-width: 768px) and (max-width: 1199px) {
    margin: 0 79px;
    margin-bottom: 14px;
  }

  @media (min-width: 1200px) {
    margin: 0 60px;
    margin-bottom: 56px;
  }

  button {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.63;
    padding: 6px 22px;
    border: none;
    color: ${colors.primaryTextBlack};
    background: ${colors.grayBackgroundButton};
    cursor: pointer;
    transition: all 0.5s;

    &:hover,
    &:focus {
      background: ${colors.accentBlue};
      color: ${colors.white};
    }
  }
`

const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  div {
    width: calc(33.333333% - 72px);
    margin: 36px;
    height: 200px;
    line-height: 200px;
    font-size: 36px;
    text-align: center;
    transition: all 0.4s;
    overflow: hidden;
  }

  .decor {
    background: yellow;
  }

  .eyes {
    background: green;
  }

  .face {
    background: pink;
  }

  .anime {
    position: absolute;
    top: -300%;
    transform: scale(0.5);
    opacity: 0;
  }

  .hide {
    animation: ${cardAnimation};
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
  }
`

export { TopLine, Categories, CardGroup }
