import './styles/index.css'

const Item = ({ product, items, chooseProduct }) => {

  return (
    <div className='item-wrapper' onClick={() => chooseProduct(product.id)}>
      <h2>{product.name}</h2>
      <h3>colors:</h3>
      <div className='item-pics'>
        {items.map(item => item.images.map(image => {
         return <img key={image} className='item-pic' src={image} alt='pic'/>
        }))}
      </div>
    </div>
  )
}

export default Item
