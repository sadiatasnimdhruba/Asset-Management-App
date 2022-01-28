<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-list  v-for="cat in categories" :key="cat.cid">
        <q-item>
          <q-item-section>
            <q-item to="/equipments">
            <b>{{cat.categoryname}}</b>
            </q-item>
            </q-item-section>
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
const categoryData=[
  {
     cid:1,
     categoryname:'Laptop'
  },
  {
     cid:2,
     categoryname:'Mouse'
  },
  {
     cid:3,
     categoryname:'Headphone'
  },
  {
     cid:4,
     categoryname:'Monitor'
  }
]

export default {                                          
  data() {
    return {
      
      categories: categoryData
      
    }
  }

}
</script>
