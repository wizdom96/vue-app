<template>
   
					<div class="card-image">
						<figure class="image is-4by3">
							<img
								style="height:250px; width:250px; padding:10px; border: 1px solid gray"
								:src="image"
								:alt="title"
							/>
						</figure>
					</div>
					<div class="card-content">
						<div class="media">
							<div class="media-content">
								<p class="title is-4">{{ title }}</p>
								<p class="subtitle is-6">{{ description }}</p>
                      <button @click="addToCart">Add to Cart</button>
								<!-- <router-link
									tag="button"
									:to="'/details/' + id"
									class="button is-info"
									>Check menu</router-link
								> -->
							</div>
						</div>
					</div>
</template>

<script>

export default {
  props: ['id', 'image', 'title', 'price', 'description'],
 methods: {
 addToCart() {
   this.$store.dispatch('cart/addProductToCart', {
          id: this.id,
          image: this.image,
          title: this.title,
          price: this.price,
        });
    },  
  }
};

</script>
<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}
</style>