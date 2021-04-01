export default {
    deleteProd(context, payload) {
        context.commit('deleteProd', payload);
      },  
    
      editProd(context, payload) {
        context.commit('editProd', payload);
      },  
      addProd(context, payload) {
        context.commit('addProd', payload);
      },  
    }
