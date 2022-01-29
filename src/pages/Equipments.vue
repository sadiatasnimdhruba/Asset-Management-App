<template>
 <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-list  v-for="equipmentDetails in equipments" :key="equipmentDetails.eqid">
        <q-item>
          <q-item-section>{{equipmentDetails.brand}}<br>{{equipmentDetails.desc}}</q-item-section>
         <q-item-section>
        <div  class="row justify-end"> 
      <q-tabs>
        <q-btn icon="more_vert" class="q-mr-xs">
                  <q-menu>
          <q-list>
              <q-item to="/edit-equipment">
                 Edit
               </q-item>
       
             <q-separator />
                <q-item  @click="del = true" clickable v-close-popup> 
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

            <q-dialog v-model="discard" persistent>
                  <q-card style="min-width: 350px">
        
         <q-card-section class="row items-center">
          <span>Reason for discarding</span>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="reason" label="Reason could be sold,cannot be fixed,lost stolen etc." 
          autofocus @keyup.enter="discard = false" />
        </q-card-section>
      

        <q-card-actions align="right">
          <q-btn flat label="CANCEL"  color="gray" text-color="black" v-close-popup />
          <q-btn flat label="SAVE"  style="background: blue; color: white" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
         
                     <q-dialog v-model="markDefective" persistent>
                  <q-card style="min-width: 350px">
        
         <q-card-section class="row items-center">
          <span>Explain the defect</span>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="defect" label="Explain what the issue is and what can be done if fixable?If not fixable,
      discard the item instead" 
          autofocus @keyup.enter="markDefective = false" />
        </q-card-section>
      

        <q-card-actions align="right">
          <q-btn flat label="CANCEL"  color="gray" text-color="black" v-close-popup />
          <q-btn flat label="SAVE"  style="background: blue; color: white" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

              <!--<q-dialog v-model="edit" persistent>
                  <q-card style="min-width: 350px">
                          
        <q-card-section class="q-pt-none">
          <q-select dense v-model="category" :options="options" label="CATEGORY"
           autofocus @keyup.enter="edit = false"/>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input dense v-model="date" label="DATE" autofocus @keyup.enter="edit = false" />
        </q-card-section>
      <q-card-section class="q-pt-none">
          <q-input dense v-model="brand" label="BRAND" autofocus @keyup.enter="edit = false" />
        </q-card-section>
      <q-card-section class="q-pt-none">
          <q-input dense v-model="model" label="MODEL" autofocus @keyup.enter="edit = false" />
        </q-card-section>
         <q-card-section class="q-pt-none">
          <q-input dense v-model="desc" label="DESCRIPTION" autofocus @keyup.enter="edit = false" />
        </q-card-section>

         <q-card-section class="q-pt-none">
          <div class="q-gutter-sm">
      <q-checkbox v-model="right" label="Mark Discarded" />
      <br><span style="color:grey">Reason for Discarding</span><br>
      <span>Not fixable,HDD is gone,This HDD is not available in the market</span>
      <q-separator color="grey" />
      <q-checkbox v-model="right1" label="Mark Defective" />
      <br><span style="color:grey">Reason for Discarding</span><br>
      <span>Not fixable,HDD is gone,This HDD is not available in the market</span>
    </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="CANCEL"  color="gray" text-color="black" v-close-popup />
          <q-btn flat label="SAVE"  style="background: blue; color: white" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>-->
      </q-list>

    </div>
    <div class="q-pa-md q-gutter-sm fixed-bottom-right" >
    <q-btn to="/add-equipment" round color="primary" icon="add" class="q-ma-md"/>  
    
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
      del: false,
      discard: false,
      reason:'',
      markDefective: false,
      defect:'',
      edit:false,

      /*right: true,
      right1: true,
      category: 'Laptop',
      date: '29/12/2021',
      brand: 'lenevo',
      model:'X1 carbon',
      desc:'i5 664-U 8GB,128GB,1080p,Touch',
      options: [
        'Laptop', 'Mouse', 'Monitor', 'headphone'
      ]*/
      
    }
  }

}
</script>
