<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-select v-model="category" :options="options" label="CATEGORY" />
      <q-input v-model="date" type="date" label="DATE" />
    
      <q-input v-model="catid" label="CATEGORY ID" />
      <q-input v-model="procode" label="PRODUCT CODE" />
      <q-input v-model="brand" label="BRAND" />
      <q-input v-model="model" label="MODEL" />
      <q-input v-model="desc" label="DESCRIPTION" />
 
  <div class="q-gutter-sm">
      <q-checkbox v-model="right" label="Mark Discarded" />
      <q-input v-model="desc" label="Reason for discarding" />
      <q-checkbox v-model="right1" label="Mark Defective" />
      <q-input v-model="desc" label="Reason for discarding" />
   
      
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
      category: '',
      date: '',
      brand: '',
      model:'',
      desc:'',
      catid:'',
      procode:'',
      options: [
        'Laptop', 'Mouse', 'Monitor', 'headphone'
      ]
    }
  }
}
</script>