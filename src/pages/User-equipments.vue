<template>
  <div>
 <div class="flex flex-center">
   <br><br><br><br><br><br><br><br><br><br>
  <img src="../assets/asset-1.png" style="width: 100px; height: 90px"
    />
</div>
<div class="q-pa-md bg-grey-13"> EQUIPMENTS</div>
     <q-list>

         <q-item v-for="equipmentList in equipment" :key="equipmentList.eid">
          <q-item-section><b>{{equipmentList.category}}</b><br>
          <br>{{equipmentList.brand}}<br>{{equipmentList.desc}}
         
          </q-item-section>
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
      
      equipment: userEquipment
      
    }
  }
}
</script>
