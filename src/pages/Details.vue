<template>
	<div>
		<h4 class="title has-text-centered">
			{{ current.title }}
		</h4>
		<br />

		<div class="container">
			<div class="columns">
				<div class="column">
					<div class="card is-fullimage">
						<div class="card-image">
							<figure class="image is-4by3">
								<img :src="current.image" alt="img 404" />
							</figure>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card is-horizontal">
						<div class="card-image"></div>
						<div class="card-stacked">
							<div class="card-content">
								<div class="media-content">
									<p class="title is-4">{{ current.description }}</p>
									<p class="title is-4">${{ current.price }}</p>

									<br />
								</div>
							</div>
						</div>
					</div>
					<br />
					<a @click="navigate" class="button is-link" href="#" role="button"
						>Go To HomePage</a
					>
					&nbsp;&nbsp;&nbsp;
					<a class="button is-danger" @click="addToCart" role="button">Add to Cart</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		current() {
			return this.$store.getters['prods/getProducts'].find(x => x.id === this.$route.params.id);
    }
},
	methods: {
		navigate() {
			this.$router.push("/");
		},
		addToCart() {
			this.$store.dispatch('cart/addProductToCart', {
          id: this.current.id,
          image: this.current.image,
          title: this.current.title,
          price: this.current.price,
        });
    },  
	},
};
</script>
<style scoped>
img {
	height: 25em;
}
</style>
