<template>
 <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-list  v-for="equipmentDetails in equipments" :key="equipmentDetails.eqid">
        <q-item>
          <q-item-section>{{equipmentDetails.brand}}<br>{{equipmentDetails.desc}}</q-item-section>
         <q-item-section>
        <div  class="row justify-end"> 
      <q-tabs>
        <q-btn icon="more_vert" class="q-mr-xs">
                  <q-menu>
          <q-list>
            <q-item  clickable v-close-popup>
              <q-item-section>Edit</q-item-section>
            </q-item>
             <q-separator />
              <q-item  clickable v-close-popup>
              <q-item-section>Delete</q-item-section>
            </q-item>
             <q-separator />
            <q-item  @click="discard = true" clickable v-close-popup> 
              <q-item-section>Discard Item</q-item-section>
            </q-item>
            <q-separator />
            <q-item  @click="markDefective = true" clickable v-close-popup >
              <q-item-section>Mark Defective</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        </q-btn>
      </q-tabs>
        </div>
      </q-item-section>
        </q-item>
         <q-separator color="grey" />
         
      </q-list>

    </div>
  </div>
</template>

<script>
const equipmentData=[
  {
     eqid:1,
     brand:'Lenevo X1 Carbon',
     desc:'i5 664-U4,8GB,128GB,1080p,touch'
  },
  {
     eqid:2,
     brand:'Lenevo X240',
     desc:'i5 664-U4,8GB,128GB,1080p,touch'
  },
  {
     eqid:3,
     brand:'Dell XPS 13',
     desc:'i5 664-U4,8GB,128GB,1080p,touch'
  },
  {
    eqid:4,
     brand:'Lenevo X1-Carbon',
     desc:'i5 664-U4,8GB,128GB,1080p,touch'
  },
   {
     eqid:5,
     brand:'Lenevo X1-Carbon',
     desc:'i5 664-U4,8GB,128GB,1080p,touch'
  }
]

export default {                                          
  data() {
    return {
    
      equipments: equipmentData,
      
    }
  }

}
</script>
