<template>
   <div class="q-pa-md">
    <div class="q-gutter-md">

      <q-input v-model="search" debounce="500" label="Search" hint="Numeric product number">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div><br><br>
    <div class="q-pa-sm bg-grey-13"> Product Details</div>
       <q-list  v-for="equipmentDetails in equipments" :key="equipmentDetails.eqid">
        <q-item>
          <q-item-section><b>{{equipmentDetails.title}}</b>{{equipmentDetails.brand}}<br>
          {{equipmentDetails.desc}}
          <br>
          <q-btn flat label="ASSIGN"  style="background: blue; color: white;width:20%" v-close-popup />
          </q-item-section>
         </q-item>
     </q-list>

   </div>
</template>

<script>
const equipmentData=[
  {
     eqid:1,
     title:'LAPTOP',
     brand:'Lenevo X1 Carbon',
     desc:'i5 664-U4,8GB,128GB,1080p,touch'
  },
  {
     eqid:2,
     title:'LAPTOP',
     brand:'Lenevo X240',
     desc:'i5 664-U4,8GB,128GB,1080p,touch'
  }
]
export default {
  data () {
    return {
      equipments: equipmentData,
      search: ''
    }
  }
}
</script>
