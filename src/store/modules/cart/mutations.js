export default {
    addProduct(state, payload) { 
      payload.price = parseFloat(payload.price)
      const checkItem = state.items.findIndex(
        (item) => item.productId === payload.id
      );
      if (checkItem >= 0) {
       state.items[checkItem].qty++;
       state.total+=payload.price      
    
      } else {
        const newItem = {
          productId: payload.id,
          title: payload.title,
          image: payload.image,
          price: payload.price,
          qty: 1
        }
        state.items.push(newItem);
        state.total+=payload.price
        state.qty ++;
     
      }
  },

  removeProduct(state, payload){
    const prodId = payload.prodId
    const index = state.items.findIndex(
      (item) => item.productId === prodId
    );
    const item = state.items[index];
    let filtered = state.items.filter(function(value){ 
      return value.productId !== prodId;
  });    
      state.items =  filtered;
      state.total -= (item.qty * item.price); 
      state.qty --;
  }
  
}
  