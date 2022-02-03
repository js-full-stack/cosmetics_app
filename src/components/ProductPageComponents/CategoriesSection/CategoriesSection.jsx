import { useRef, useEffect } from 'react'
import Container from '../../Container/Container'

import { TopLine, Categories, CardGroup } from './styledComponents'

export default function CategoriesSection() {
  const cardsCurrentRef = useRef(null)

  useEffect(() => {
    const cardsRef = document.querySelectorAll('.card')
    cardsCurrentRef.current = cardsRef
  }, [])

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category)
      const isShowAll = category.toLowerCase() === 'all'
      if (isItemFiltered && !isShowAll) {
        item.classList.add('anime')
      } else {
        item.classList.remove('anime')
        item.classList.remove('hide')
      }
    })
  }

  const onEndAnimationHide = () => {
    cardsCurrentRef.current.forEach((card) => {
      if (card.classList.contains('anime')) {
        card.classList.add('hide')
      }
    })
  }

  const getValueButton = (e) => {
    const currentCategory = e.target.dataset.filter
    filter(currentCategory, cardsCurrentRef.current)
  }
  return (
    <>
      <TopLine />
      <Container>
        <Categories>
          <button
            onClick={getValueButton}
            className="card-button"
            type="button"
            data-filter="all"
          >
            Все средства
          </button>
          <button
            onClick={getValueButton}
            className="card-button"
            type="button"
            data-filter="decor"
          >
            Декоративная косметика
          </button>
          <button
            onClick={getValueButton}
            className="card-button"
            type="button"
            data-filter="face"
          >
            Для лица
          </button>
          <button type="button">Для волос</button>
          {/* <button type="button">Для тела</button> */}
          <button
            onClick={getValueButton}
            className="card-button"
            type="button"
            data-filter="eyes"
          >
            Для глаз
          </button>
          {/* <button type="button">Для полости рта</button> */}
        </Categories>
        <CardGroup>
          <div onTransitionEnd={onEndAnimationHide} className="card decor">
            Декоративная
          </div>
          <div onTransitionEnd={onEndAnimationHide} className="card decor">
            Декоративная
          </div>
          <div onTransitionEnd={onEndAnimationHide} className="card face">
            Для лица
          </div>
          <div onTransitionEnd={onEndAnimationHide} className="card eyes">
            Для глаз
          </div>
          <div onTransitionEnd={onEndAnimationHide} className="card face">
            Для лица
          </div>
          <div onTransitionEnd={onEndAnimationHide} className="card face">
            Для лица
          </div>
          <div onTransitionEnd={onEndAnimationHide} className="card eyes">
            Для глаз
          </div>
          <div onTransitionEnd={onEndAnimationHide} className="card face">
            Для лица
          </div>
          <div onTransitionEnd={onEndAnimationHide} className="card decor">
            Декоративная
          </div>
        </CardGroup>
      </Container>
    </>
  )
}
