<template>
    <search-filter @search="updateSearch" :search-term="enteredSearch"></search-filter>

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
import SearchFilter from '../components/search/SearchFilter.vue'

export default {
  data(){
    return{
      enteredSearch: '',
      activeSearch:'',
    };
  },
  computed:{
  products() {
     
       return this.$store.getters['prods/getProducts'].filter(element => {
             if(this.activeSearch !== ''){
                return(element.title.toLowerCase().match(this.activeSearch.toLowerCase()))
             } else {
               return this.$store.getters['prods/getProducts'];
             }
        });
    },
  },
  methods: {
    updateSearch(val){
      return this.enteredSearch = val;
    }
  },

   watch: {
    enteredSearch(val) {
      setTimeout(() => {
        if (val === this.enteredSearch) {
          this.activeSearch = val;
        }
      }, 300);
    }
  },
  components: {
    ProductItem,
    SearchFilter
  },
};
</script>

<style scoped>
 
</style>