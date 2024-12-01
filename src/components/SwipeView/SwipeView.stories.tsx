import { ReactChild, ReactFragment, ReactPortal } from 'react'
import { Meta } from '@storybook/react'

import SwipeView from '../SwipeView'

import styles from './SwipeView.stories.module.css'

export default {
  title: 'Components/SwipeView',
  component: SwipeView,
  argTypes: {}
} as Meta<typeof SwipeView>

type optionsArgs = {
  image: string | undefined
  title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
  subtitle: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
}

const options = [
  {
    id: '1',
    image: '/marketplace/product-category-taxonomy-covers/appliances.jpeg',
    title: 'Card 1',
    subtitle: 'Sub title and more'
  },
  {
    id: '2',
    image: '/marketplace/product-category-taxonomy-covers/beauty.jpeg',
    title: 'Card 2',
    subtitle: 'Sub title and more'
  },
  {
    id: '3',
    image: '/marketplace/product-category-taxonomy-covers/books.jpeg',
    title: 'Card 3',
    subtitle: 'Sub title and more'
  },
  {
    id: '4',
    image: '/marketplace/product-category-taxonomy-covers/electronics.jpeg',
    title: 'Card 4',
    subtitle: 'Sub title and more'
  },
  {
    id: '5',
    image: '/marketplace/product-category-taxonomy-covers/furniture.jpeg',
    title: 'Card 5',
    subtitle: 'Sub title and more'
  },
  {
    id: '6',
    image: '/marketplace/product-category-taxonomy-covers/grocery-and-liquor.jpeg',
    title: 'Card 6',
    subtitle: 'Sub title and more'
  },
  {
    id: '7',
    image: '/marketplace/product-category-taxonomy-covers/home-and-living.jpeg',
    title: 'Card 7',
    subtitle: 'Sub title and more'
  },
  {
    id: '8',
    image: '/marketplace/product-category-taxonomy-covers/kids-and-baby.jpeg',
    title: 'Card 8',
    subtitle: 'Sub title and more'
  },
  {
    id: '9',
    image: '/marketplace/product-category-taxonomy-covers/men.jpeg',
    title: 'Card 9',
    subtitle: 'Sub title and more'
  },
  {
    id: '10',
    image: '/marketplace/product-category-taxonomy-covers/restaurant-and-hospitality.jpeg',
    title: 'Card 10',
    subtitle: 'Sub title and more'
  },
  {
    id: '11',
    image: '/marketplace/product-category-taxonomy-covers/sports-and-outdoor.jpeg',
    title: 'Card 10',
    subtitle: 'Sub title and more'
  },
  {
    id: '12',
    image: '/marketplace/product-category-taxonomy-covers/toys.jpeg',
    title: 'Card 10',
    subtitle: 'Sub title and more'
  },
  {
    id: '13',
    image: '/marketplace/product-category-taxonomy-covers/women.jpeg',
    title: 'Card 10',
    subtitle: 'Sub title and more'
  }
]

const cardElement = (options: optionsArgs[]) => {
  return options.map((option, i) => {
    return (
      <div key={i} className={styles.cardElement}>
        <img className={styles.image} src={option.image} alt="" />
        <div>{option.title}</div>
        <div>{option.subtitle}</div>
      </div>
    )
  })
}

export const Default = () => {
  return (
    <>
      <SwipeView className={styles.container}>{cardElement(options)}</SwipeView>
    </>
  )
}
