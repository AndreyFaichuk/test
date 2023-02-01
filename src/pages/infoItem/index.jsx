import { useParams } from 'react-router'

import { useInfoItem } from './useInfoItem'
import Select from '../../components/common/Select'
import Slider from '../../components/common/Slider'

import './styles/index.css'

 const InfoItem = () => {
    const { id }  = useParams()
    const { 
        item, 
        isError, 
        isLoading, 
        colorOptions = [], 
        handleSelectColorChange, 
        imagesAndInfo = {}, 
        handleSelectSizeChange,
        getAvailableSizes,
        selectSizeValue,
        selectValue,
        handleFakeOrder,
        handleRedirectBack
    } = useInfoItem(id)

    if(isLoading){
        return <h1 className='itemList-info'>Loading...</h1>
    }
    
    if(isError){
        return <h1 className='itemList-info'>Something went wrong...</h1>
    }

  return (
    <div className='infoItem-wrapper'>
        <button className='infoItem-buttonBack' onClick={handleRedirectBack}>Back to the list</button>
        <h2>{item.name}</h2>
        <div className='infoItem-pickWrapper'>
            <h3>Choose an available color</h3>
            <Select value={selectValue} options={colorOptions} onChange={handleSelectColorChange}/>
        </div>
        {selectValue && 
            <>
                <div className='infoItem-desc'>
                    <p>Description: {imagesAndInfo.description}</p>
                    <p>Price: {imagesAndInfo.price}</p>
                </div>
                <div className='itemInfo-sliderWrapper'>
                    {imagesAndInfo?.images?.length && <Slider slideImages={imagesAndInfo.images}/>}
                </div>
                <div className='infoItem-pickWrapper'>
                    <h3>Choose an available size</h3>
                    <Select value={selectSizeValue} options={getAvailableSizes()} onChange={handleSelectSizeChange}/>
                </div>
                <button onClick={handleFakeOrder}>Buy</button>
            </>}
    </div>
  )
}

export default InfoItem
