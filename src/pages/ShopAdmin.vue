<template>
  <div class="is-title-bar">
   <div class="level">
      <div class="level-left">
         <div class="level-item">
            <h1 class="title"> Profile </h1>
         </div>
      </div>
      <div class="level-right">
      </div>
   </div>
</div>


<div class="tile is-ancestor">
   <div class="tile is-parent">
      <div class="card tile is-child">
         <header class="card-header">
            <p  class="card-header-title"><span class="icon"><i class="mdi mdi-account-circle default"></i></span> Edit Profile </p>
            <!---->
         </header>
         <div class="card-content">
            <form @click.prevent>
               <hr>
               <div class="field is-horizontal" data-v-ec1c9ef6="">
                  <div class="field-label is-normal"><label class="label">Name</label></div>
                  <div class="field-body">
                     <div class="field">
                        <!---->
                        <div class="control">
                           <input type="text" v-model="username" autocomplete="on" name="name" placeholder="required field" class="input"><!----><!----><!---->
                        </div>
                     </div>
                  </div>
                  <!---->
               </div>
               <div class="field is-horizontal" data-v-ec1c9ef6="">
                  <div class="field-label is-normal"><label class="label">E-mail</label></div>
                  <div class="field-body">
                     <div class="field">
                        <!---->
                        <div class="control">
                           <input type="email"  v-model="email" autocomplete="on" name="email" placeholder="required field" class="input"><!----><!----><!---->
                        </div>
                     </div>
                  </div>
                  <!---->
               </div>
               <hr>
               <div class="field is-horizontal" >
                  <div class="field-label is-normal">
                     <!---->
                  </div>
                  <div class="field-body">
                     <div class="field">
                        <!---->
                        <div class="control"><button type="submit" @click="updateInfo" class="button is-primary"> Update </button></div>
                        <!---->
                     </div>
                  </div>
                  <!---->
               </div>
            </form>
         </div>
      </div>
   </div>
   <div class="tile is-parent">
      <div data-v-ec1c9ef6="" class="card tile is-child">
         <header data-v-ec1c9ef6="" class="card-header">
            <p data-v-ec1c9ef6="" class="card-header-title"><span data-v-ec1c9ef6="" class="icon"><i class="mdi mdi-account default"></i></span> Profile </p>
            <!---->
         </header>
         <div data-v-ec1c9ef6="" class="card-content">
            <div data-v-ec1c9ef6="" class="image is-user-avatar has-max-width is-aligned-center"><img data-v-ec1c9ef6="" src="https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&amp;options[accessoriesChance]=93" alt="John Doe"></div>
            <hr data-v-ec1c9ef6="">
            <div class="field" data-v-ec1c9ef6="">
               <label class="label">{{ profile.username }}</label>
               <div class="control is-clearfix">
                  <input type="text" autocomplete="on" readonly="readonly" class="input is-static"><!----><!----><!---->
               </div>
               <!---->
            </div>
            <hr data-v-ec1c9ef6="">
            <div class="field" data-v-ec1c9ef6="">
               <label class="label"> {{ profile.email }}</label>
               <div class="control is-clearfix">
                  <input type="text" autocomplete="on" readonly="readonly" class="input is-static"><!----><!----><!---->
               </div>
               <!---->
            </div>
         </div>
      </div>
   </div>
</div>
</template>
<script>
import swal from 'sweetalert';

export default {
  computed:{
    data(){
      return{
        username: '',
        email: ''
      }
    },
    profile() {
      return this.$store.getters['user'];
    },
  },
  methods:{
    updateInfo(){
       if(this.username === undefined || this.email === undefined){
          swal("Fail!", "You must fill all required fields.", "error");
       } else {
         this.$store.dispatch('updInfo', {
            username: this.username,
            email: this.email
         });
         this.username = '';
         this.email = '';
         swal(
					"Updated Succesfully!",
               "",
					"success"
				);
      }

       }
      
  }
}
</script>
<style scoped>
.image img {
    width: 300px;
}

</style>