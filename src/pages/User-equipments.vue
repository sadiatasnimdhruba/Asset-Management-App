<template>
  <div>
 <div class="flex flex-center">
   <br><br><br><br><br><br><br><br>
  <img src="../assets/asset-1.png" style="width: 100px; height: 90px"
    />
</div>
 <div class="q-pa-md q-gutter-sm" >
    <q-btn @click="edit = true" id="edit" round color="primary" icon="edit" class="q-ma-md"/>  
    </div>
    <div class="q-pa-md q-gutter-sm fixed-bottom-right" >
    <q-btn to="/assign-equipments" round color="primary" icon="add" class="q-ma-md"/>  
    </div>
    <q-dialog v-model="edit" persistent>
                  <q-card style="min-width: 350px">
                          
        <q-card-section class="q-pt-none">
          <q-input dense v-model="firstname" label="FIRST NAME" autofocus @keyup.enter="edit = false" />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input dense v-model="lastname" label="LAST NAME" autofocus @keyup.enter="edit = false" />
        </q-card-section>
      <q-card-section class="q-pt-none">
          <q-input dense v-model="img"  filled type="file" label="IMAGE" hint="Please Choose A Picture"
         autofocus @keyup.enter="edit = false" />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Save" v-close-popup />
        </q-card-actions>
                  </q-card>
    </q-dialog>

<div class="q-pa-md bg-grey-13"> EQUIPMENTS</div>
     <q-list>

         <q-item v-for="equipmentList in equipment" :key="equipmentList.eid">
          <q-item-section><b>{{equipmentList.category}}</b>
          {{equipmentList.brand}}<br>{{equipmentList.desc}}
         
          </q-item-section>
        <q-separator />
      <q-item-section>
        <div  class="row justify-end"> 40days
      <q-tabs>
        <q-btn icon="more_vert" class="q-mr-xs">
                  <q-menu>
          <q-list>
            <q-item  clickable v-close-popup>
              <q-item-section>Restock to Inventory</q-item-section>
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
         
      </q-list>
       

  </div>
</template>

<script>
const userEquipment=[
  {
    eid: 1,
    category: "Laptop",
    brand: "Lenevo X1 carbon",
    desc: "i5 664-U 8gb,128GB,1080p,Touch"
  },
  {
    eid: 2,
    category: "Mouse",
    brand: "Logitec",
    desc: "iWireless pointing"
  },
  {
    eid: 3,
    category: "Headphone",
    brand: "Lenevo",
    desc: "bluetooth headset"
  },
]
export default {
   data() {
    return {
      
      equipment: userEquipment,
      discard: false,
      markDefective: false,
      edit:false,
      reason:'',
      defect:'',
      firstname: 'Reza',
      lastname: 'Khan',
      img: require("../assets/asset-1.png")
      
    }
  }
}
</script>
