import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from '../pages/ProductsList.vue';
import UserCart from '../pages/UserCart.vue';
import ShopAdmin from '../pages/ShopAdmin.vue';
import Details from '../pages/Details.vue';
import EditProducts from '../pages/EditProducts.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import NotFound from '../pages/404.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
    { path: '/admin', component: ShopAdmin },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/products/edit', component: EditProducts },
    { path: '/details/:id', component: Details },
    { path: '/:notFound(.*)', component: NotFound },
  ]
});

export default router;