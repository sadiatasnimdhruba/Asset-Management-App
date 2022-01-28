<template>
<div>
 <div class="flex flex-center">
   <br><br><br><br><br><br><br><br><br><br>
  <img src="~assets/laptop.png" style="width: 100px; height: 90px"
    />
</div>

<div class="q-pa-md" style="max-width: 400px">
   <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        type="email"
        v-model="email" 
        label="Email"
        hint="email@example.com"
        clearable
        />

      <q-input filled type="password" v-model="password" label="Password">
              <template v-slot:append>
                 <q-icon 
                 :name="isPwd ? 'visibility_off' : 'visibility'" 
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"/>
              </template>

      </q-input>

      

      <div>
        <q-btn color="black" label="LOGIN" type="submit"/>
     </div>
    </q-form>
       <div class="q-pa-md">
    Don't have account with us? <a> REGISTER</a>
  <br>
    Don't remember password? <a> REQUEST PASSWORD</a>
  </div>

  </div>
  
</div>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.email = null
      this.password = null
      this.accept = false
    }
  }
}
</script>
<style scoped>
a{
  color:rgb(14, 63, 138);
}
</style>