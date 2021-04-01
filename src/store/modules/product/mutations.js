export default {

  deleteProd(state, payload){
        const prodId = payload.id
        const index = state.products.findIndex( el => el.id === prodId )
        state.products =  state.products.slice(0,index).concat(state.products.slice(index+1));
      },

  editProd(state, payload) {
			state.products = state.products.map((i) => {
				if (i.id == payload.id) {
					return payload;
				}
				return i;
			});
},
  addProd(state, payload) {
    payload.product.id = Math.floor(Math.random() * 100);
    state.products.unshift(payload.product);

},
}