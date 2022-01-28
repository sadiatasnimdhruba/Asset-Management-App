<template>
  
     <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-select v-model="category" :options="options" label="CATEGORY" />
      <q-input v-model="date" label="DATE" />
      <q-input v-model="brand" label="BRAND" />
      <q-input v-model="model" label="MODEL" />
      <q-input v-model="desc" label="DESCRIPTION" />
 
  <div class="q-gutter-sm">
      <q-checkbox v-model="right" label="Mark Discarded" />
      <br><span style="color:grey">Reason for Discarding</span><br>
      <span>Not fixable,HDD is gone,This HDD is not available in the market</span>
      <q-separator color="grey" />
      <q-checkbox v-model="right1" label="Mark Defective" />
      <br><span style="color:grey">Reason for Discarding</span><br>
      <span>Not fixable,HDD is gone,This HDD is not available in the market</span>
    </div>
       </div>
    <div class="q-pa-md q-gutter-sm row justify-end">
    <q-btn  class="btn-fixed-width" color="white" text-color="black" label="Cancel" />
    <q-btn align="left" class="btn-fixed-width" color="primary" label="Save" />
    
  </div>
  </div>
 
</template>

<script>
export default {
  data () {
    return {
      right: false,
      right1: false,
      category: 'Laptop',
      date: '29/12/2021',
      brand: 'lenevo',
      model:'X1 carbon',
      desc:'i5 664-U 8GB,128GB,1080p,Touch',
      options: [
        'Laptop', 'Mouse', 'Monitor', 'headphone'
      ]
    }
  }
}
</script>
