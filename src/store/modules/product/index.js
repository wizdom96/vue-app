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
      {
        id: 'p4',
        image:
        'https://previews.123rf.com/images/olegdudko/olegdudko1712/olegdudko171200069/90959547-a-box-full-of-toys-and-sports-equipment-for-a-holiday-charity-drive-isolated-on-white-with-reflectio.jpg',
        title: 'Toys',
        description: 'Box full of toys!',
        price: 70,
      }, 
      {
        id: 'p5',
        image:
        'https://images-na.ssl-images-amazon.com/images/I/61Jigwd1kKL._AC_SL1500_.jpg',
        title: 'Ball',
        description: 'Football ball',
        price: 8.99,
      },    
      {
        id: 'p6',
        image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wCPjaoEbRnSh6XSraqmDiNnUz8kGb_lbOg&usqp=CAU',
        title: 'Sunglasses',
        description: 'asd',
        price: 15.99,
      },    
      {
        id: 'p7',
        image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdbKSvxPUGmWQiqeaFz2p1ZRSwFSZMfTxwA&usqp=CAU',
        title: 'Radio',
        description: 'Top deal!',
        price: 129.99,
      },  
      {
        id: 'p8',
        image:
        'https://www.america-today.com/dw/image/v2/BBPV_PRD/on/demandware.static/-/Sites-at-master-catalog/default/dw449987fd/images/product/jeans-levis-519-extreme-skinny-men-blue-1112508052-331-b.jpg?sw=1200&sh=1200&sm=fit&sfrm=png',
        title: 'Jeans',
        description: 'Top Levis jeans!',
        price: 58.99,
      },   
      {
        id: 'p9',
        image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpHDYFBVyFUy8iCyc094zupi3xvCN1l8DoA&usqp=CAU',
        title: 'Dell laptop',
        description: 'Power',
        price: 569.99,
      },  
      {
        id: 'p10',
        image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7U7PJYztqZGABqvaQky4chR-9dq7H9hNOMQ&usqp=CAU',
        title: 'Hat',
        description: 'Top Deal!',
        price: 45.59,
      },  
    ],
  };
},
  getters:getters,
  mutations:mutations,
  actions:actions
})
