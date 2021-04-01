export default {
    addProductToCart(context, payload) {
        context.commit('addProduct', payload);
      },  

      removeProduct(context, payload) {
        context.commit('removeProduct', payload);
      }, 
  };
  