const cart = (state = {}, action) => {
  console.log("init", state);
    switch (action.type) {
      case 'ADD_TO_CART':
       return addToCart(action);

      case 'REMOVE_FROM_CART':
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      default:
        return state.cart || {};
    }
  }

  function addToCart(state, action) {
    const oldCart = state.cart || {
        ids: [],
        idToDetails: { }, //id to details, details { count}
        total: 0
    };
    if (oldCart.idToDetails[action.id]) {
        oldCart.idToDetails[action.id].count++;
        
    } else {
        oldCart.ids.push(action.id);
        oldCart.idToDetails[action.id] = { count: 1 };
    }
    oldCart.total++;
    return Object.assign({}, oldCart);
  }
  
  export default cart;