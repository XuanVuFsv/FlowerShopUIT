import { createContext, useContext, useEffect, useState } from 'react'
import http from '../services/http'
const CartContext = createContext({
  order: null,
  items: [],
  refresh: () => {},
})

export const CartProvider = ({ children }) => {
  const [val, setVal] = useState({ order: null, items: [] })

  const [reload, setReload] = useState(false)

  useEffect(() => {
    const getCurrentCart = async () => {
      const { data: cart } = await http.get('/cart/')
      console.log('🚀', cart)
      setVal({
        ...cart,
        items: cart?.items?.map((o) => ({
          ...o?.info,
          count: o?.quantity,
          id: o?.info?._id,
          price: +o?.info?.price,
          src: `${process.env.REACT_APP_BASE_URL}${o?.info?.image}`,
        })),
        refresh: () => setReload((s) => !s),
      })
    }
    getCurrentCart()

    window.addEventListener('storage', (e) => {
      console.log('====================================')
      console.log({ e })
      console.log('====================================')
      setReload((s) => !s)
    })
    return () => {}
  }, [reload])
  return <CartContext.Provider value={val}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  const value = useContext(CartContext)

  return value
}
