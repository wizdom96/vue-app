<template>
  <div class="modal-backdrop">
    <div class="modal">
    <form @click.prevent="editRecord">
        <div class="field">
            <label class="label"></label>
            <div class="control">
                <input class="input" v-model="product.title">
         </div>
    </div>
        <div class="field">
            <label class="label">Image Link</label>
            <div class="control">
                <input class="input" v-model="product.image">
            </div>
        </div>
        <div class="field">
            <label class="label">Price</label>
            <div class="control">
                <input class="input" v-model="product.price">
            </div>
        </div>
        <div class="field">
            <label class="label">Description</label>
            <div class="control">
                <input class="input" v-model="product.description">
            </div>
        </div>
    
            <button class="button is-success" @click="saveEdit">Save</button><br>
            <button class="button is-danger" @click="close">Close Modal</button>

</form>
      
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert';

  export default {
    props:['item'],
    data: function(){
      let product = {
        id: 0,
        title: '',
        price:'',
        description: '',
        image: ''
      }
      return product;
    },

    watch: {
        item: {
                immediate: true,
                handler() {
                    this.product = this.item;
                }
            }
      },
    methods: {
    close() {
        this.$emit('close');
      },
   
     saveEdit() {
       if(this.item.id === undefined ){
         if (
					this.product.title == undefined ||
						this.product.price == undefined ||
						this.product.image == undefined
				) {
					swal("Fail!", "You must fill all required fields.", "error");
        }else{
       this.$store.dispatch('prods/addProd', {product: this.item});
       swal(
					"Added Succesfully!",
          "Record has been added",
					"success"
				);
       this.$emit('close');
       }
       }else{
       if (
					this.product.title == "" ||
						this.product.price == 0 ||
						this.product.image == ""
				) {
					swal("Fail!", "You must fill all required fields.", "error");
        }else{
       this.$store.dispatch('prods/editProd', {product: this.item});
       swal(
					"Updated Succesfully!",
					"Record has been updated",
					"success"
				);
       this.$emit('close');
       }
       }
   },
    }
  }
</script>
<style scoped>
 
  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border:1px solid grey;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

</style>