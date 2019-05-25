export const addToCart = items => ({
    type: 'ADD_TO_CART',
    ids,
    idsToCount,
    total
  })

  export const removeFromCart = items => ({
    type: 'REMOVE_FROM_CART',
    ids,
    idsToCount,
    total
  })