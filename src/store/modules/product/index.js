import getters from './getters'
import mutations from './mutations'
import actions from './actions'
export default({
    namespaced:true,
  state() {
  return {
  products: [
      {
        id: 'p1',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51e7WSnlg-L._SX258_BO1,204,203,200_.jpg',
        title: 'Book Collection',
        description:
          'A collection of must-read books. All-time classics included!',
        price: 99.99,
      },
      {
        id: 'p2',
        image:
          'https://target.scene7.com/is/image/Target/GUEST_8545837b-a3f0-4b9c-81b1-9bc76e889b03?wid=325&hei=325&qlt=80&fmt=webp',
        title: 'Tent',
        description: 'A tent for the ambitious outdoor tourist.',
        price: 89.99,
      },  
      {
        id: 'p3',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/1200px-Roasted_coffee_beans.jpg',
        title: 'Coffe',
        description: 'Best Coffe ever!',
        price: 23.88,
      },    
    ],
  };
},
  getters:getters,
  mutations:mutations,
  actions:actions
})
