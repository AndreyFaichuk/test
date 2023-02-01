import React from 'react'

import './styles/index.css'
import Item from './components/Item'
import { useItemsList } from './useItemsList'

const ItemsList = () => {
  const { items, isError, isLoading, handleProductChoose } = useItemsList()

  if(isLoading){
    return <h1 className='itemList-info'>Loading...</h1>
  }

  if(isError){
    return <h1 className='itemList-info'>Something went wrong...</h1>
  }

  return (
    <div className='itemList-wrapper'>
      {items.map(item => {
        return <Item 
        key={item.id} 
        product={item} 
        items={item.colors}
        chooseProduct={handleProductChoose}/>
      })}
    </div>
  )
}

export default ItemsList