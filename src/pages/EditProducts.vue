<template>
	<div>
		<h1 class="title has-text-centered">
			Edit Products  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<a
		class="button is-big is-primary"
		@click="showModal({})"
		>Add Product</a>
		</h1>
		<br />
		<div class="columns" style="padding-top:30px">
			<div class="column is-three-fifths" style="margin-left:auto;margin-right:auto;">
				<table v-if="products.length !== 0" class="table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Description</th>
							<th>Image Link</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="prod in products"
							:key="prod.id"
						>
							<td>{{ prod.title }}</td>
							<td>{{ prod.description }}</td>
							<td><img :src="prod.image" style="height:150px;width:200px"></td>
							<td>{{ prod.price }}</td>
							<td>
								<p class="buttons">
									<a
										class="button is-small is-primary"
										@click="showModal(prod, 'edit')"
										>Edit</a
									>    
									<a
										class="button is-small is-danger"
										@click="deleteProduct(prod.id)"
										>Delete</a
									>
								</p>
							</td>
						</tr>
					</tbody>
				</table>
            </div>
		</div>
	</div>
<modal	:item="this.item" v-show="isModalVisible" @close="closeModal"></modal>
</template>

<script>
import Modal from '../components/modals/Modal.vue';
import swal from 'sweetalert';

export default {
    data() {
      return {
        isModalVisible: false,
		item :{},
		condition: false
      }
    },
	computed: {
		products() {
			return this.$store.getters['prods/getProducts'];
      }  
	},
    components:{
        Modal
    },
    methods:{
        showModal(obj) {
        this.isModalVisible = true;
		this.item = obj;
		
      },
      closeModal() {
        this.isModalVisible = false;
		
      },
        
        deleteProduct(id){swal({
				title: "Are you sure?",
                text: "Once deleted, you will not be able to recover Product",
                icon: "warning",
                buttons: true,
                dangerMode: true,
			}).then((willDelete) => {
                    if (willDelete) {
                         (this.$store.dispatch('prods/deleteProd', {
                            id: id 
                         }));
             swal("Product has been deleted!", {
             icon: "success",
         });
    } 
      })
     },
   },
};
</script>
<style>
.editing {
	background-color: #fff8db;
}
</style>
