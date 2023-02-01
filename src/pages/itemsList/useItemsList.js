import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getProducts } from '../../services/api'

export const useItemsList = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate();

    const handleProductChoose = (id) => {
        navigate(`/about/${id}`)
    }

    useEffect(() => {
        const fetch = async () => {
            setIsLoading(true)

            try {
                const items = await getProducts()
                setItems(items)
            } catch (error) {
                setIsError(true)
            }

            setIsLoading(false)
        }
        fetch()
    }, [])

    return {
        items, isLoading, isError, handleProductChoose
    }
}