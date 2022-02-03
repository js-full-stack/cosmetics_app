import styled from 'styled-components'
import colors from '../../../constants/colors'
import banner from '../../../images/banner.jpg'
import carouselOne from '../../../images/carousel_1.jpeg'

const WrapHero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

  background-image: linear-gradient(
      rgba(47, 48, 58, 0.75),
      rgba(47, 48, 58, 0.75)
    ),
    url('${banner}');

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  h1 {
    max-width: 380px;
    margin: 0 auto;
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 0.06em;
    line-height: 1.61;
    text-align: center;
    text-transform: uppercase;
    color: ${colors.white};
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    h1 {
      max-width: 420px;
      font-size: 36px;
    }
  }

  @media (min-width: 1200px) {
    height: 600px;

    h1 {
      max-width: 540px;
      font-size: 46px;
    }
  }
`

const CarouselOne = styled.div`
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.75),
      rgba(47, 48, 58, 0.75)
    ),
    url('${carouselOne}');
`

export { WrapHero, CarouselOne }
