<template>
	<div class="columns is-multiline is-mobile" style="padding-top:30px">
			<div class="column is-one-quarter">
				<div class="field">
					<label class="label">Search Products</label>
          <div class="control">
                <form>
                  <input type="search" @input="search" :value="searchTerm" placeholder="Filter items" />
                </form>
           </div>
       </div>
    </div>
 </div>
</template>

<script>
export default {
  props: ['searchTerm'],
  emits: ['search'],
  methods: {
    search(event) {
      this.$emit('search', event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  font: inherit;
  width: 100%;
  display: block;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #00006b;
  background-color: #eeeeff;
}
</style>