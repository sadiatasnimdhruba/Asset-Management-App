<template>
  <div class="q-pa-md">
    <div class="">
 

      <q-list>
        <q-item  to="User-equipments" clickable v-ripple v-for="userList in user" :key="userList.uid">
          <q-item-section avatar>
            <q-avatar size="60px">
              <img :src="userList.avatar">
            </q-avatar>
          </q-item-section>
          <q-item-section>{{ userList.name }}</q-item-section>
          </q-item>
      </q-list>
          <div class="q-pa-md q-gutter-sm fixed-bottom-right" >
    <q-btn @click="prompt = true" id="add" round color="primary" icon="add" class="q-ma-md"/>
    
    </div>
     <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">ADD USERS</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="firstname" autofocus @keyup.enter="prompt = false" label="FIRST NAME" />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input dense v-model="lastname" autofocus @keyup.enter="prompt = false" label="LAST NAME" />
        </q-card-section>
        

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Save" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>
  </div>
</template>

<script>
const userData = [
  {
    uid: 1,
    name: "Reza Khan",
    avatar: require("../assets/asset-1.png"),
  },
  {
    uid: 2,
    name: "John Doe",
    avatar: require("../assets/pic_sid189-0-norm.png"),
  },
  {
    uid: 3,
    name: "Dong-Seok Han",
    avatar: require("../assets/idphoto.png"),
  },
  {
    uid: 4,
    name: "Nur Rony",
    avatar: require("../assets/Nikola-Vukovic-772x1030.png"),
  },
  {
    uid: 5,
    name: "Sandra deibart",
    avatar: require("../assets/images (3).png"),
  },
];
export default {
 data() {
    return {
      
      user: userData,
      alert: false,
      confirm: false,
      prompt: false,

      firstname: '',
      lastname:''
      
    }
  }
}
</script>
