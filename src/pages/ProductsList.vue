<template>
		<div class="columns is-multiline is-mobile" style="padding-top:30px">
         <div class="column is-one-quarter" v-bind:key="prod.id" v-for="prod in products">
      <product-item
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
      </div>
      </div>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';

export default {
  computed:{
  products() {
      return this.$store.getters['prods/getProducts'];
    },
  },
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
 
</style>