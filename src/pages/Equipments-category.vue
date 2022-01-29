<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
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
            <q-item  @click="edit = true" clickable v-close-popup>
              <q-item-section>Edit</q-item-section>
            </q-item>
             <q-separator />
              <q-item  @click="del = true" clickable v-close-popup> 
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
         <q-dialog v-model="del" persistent>
                  <q-card style="min-width: 350px">
        
         <q-card-section class="row items-center">
          <span class="q-ml-sm">Are you sure you want to delete this category and all equipment under it?  
          </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="CANCEL"  color="gray" text-color="black" v-close-popup />
          <q-btn flat label="DELETE"  style="background: red; color: white" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    
              <q-dialog v-model="edit" persistent>
                  <q-card style="min-width: 350px">
                          
        <q-card-section class="q-pt-none">
          <q-select dense v-model="category" :options="options" label="CATEGORY"
           autofocus @keyup.enter="edit = false"/>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="CANCEL"  color="gray" text-color="black" v-close-popup />
          <q-btn flat label="SAVE"  style="background: blue; color: white" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
         
      </q-list>


    </div>
     <div class="q-pa-md q-gutter-sm fixed-bottom-right" >
    <q-btn @click="prompt = true" id="add" round color="primary" icon="add" class="q-ma-md"/>  
    </div>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">CATEGORY NAME</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="catname" autofocus @keyup.enter="prompt = false" />
        </q-card-section>
      
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Save" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      
      categories: categoryData,
      prompt: false,
      del: false,
      firstname:'',
      catname:'',
      edit:false,
      category: 'Laptop',
      options: [
        'Laptop', 'Mouse', 'Monitor', 'headphone'
      ]
      
    }
  }

}
</script>
