import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { getProduct, getSizes } from '../../services/api'

export const useInfoItem = (id) => {
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [selectValue, setSelectValue] = useState('')
    const [selectSizeValue, setSelectSizeValue] = useState('')
    const [allSizes, setAllSizes] = useState([])
    const navigate = useNavigate();

    const handleRedirectBack = () => {
        navigate('/')
    }

    useEffect(() => {
        const fetch = async (id) => {
            setIsLoading(true)
            try {
                const item = await getProduct(id)
                const allSizes = await getSizes()

                setItem(item)
                setAllSizes(allSizes)
            } catch (error) {
                setIsError(true)
            }

            setIsLoading(false)
        }
        fetch(id)
    }, [id])

    const handleSelectColorChange = (e) => {
		setSelectValue(e.target.value);
        setSelectSizeValue('')
	}

    const handleSelectSizeChange = (e) => {
		setSelectSizeValue(e.target.value);
	}

    const colorOptions = item?.colors?.map(color => color.name)

    const imagesAndInfo = item?.colors?.find(color => color.name === selectValue)

    const getAvailableSizes = () => {
        if(!imagesAndInfo?.sizes.length) return ['there are no available sizes']

        return allSizes.map((size, index) => {
            const isAvailabe = size.id === imagesAndInfo?.sizes[index]

            return { label: size.label, number: size.number, isAvailabe } 
        })
    }

    const handleFakeOrder = () => {
        if(!selectSizeValue || !item.name){
            return toast.error('Please, choose color and size first!');
        }

        return toast.success(`Success, your order is: ${item.name}, size ${selectSizeValue}, with price ${imagesAndInfo.price}`);
    }

    return {
        item, 
        isLoading, 
        isError, 
        colorOptions, 
        handleSelectColorChange, 
        imagesAndInfo, 
        handleSelectSizeChange,
        getAvailableSizes,
        selectSizeValue,
        selectValue,
        handleFakeOrder,
        handleRedirectBack
    }
}