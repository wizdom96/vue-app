import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from '../pages/ProductsList.vue';
import UserCart from '../pages/UserCart.vue';
import ShopAdmin from '../pages/ShopAdmin.vue';
import Details from '../pages/Details.vue'
import EditProducts from '../pages/EditProducts.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/products/edit', component: EditProducts },
    { path: '/cart', component: UserCart },
    { path: '/admin', component: ShopAdmin },
    { path: '/details/:id', component: Details },
  ]
});

export default router;