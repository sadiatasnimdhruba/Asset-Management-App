<template>
 <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input
        clearable
        clear-icon="close"
        filled
        color="purple-12"
        v-model="text"
        label="FIRST NAME"
      />
          <q-input
        clearable
        clear-icon="close"
        filled
        color="purple-12"
        v-model="text1"
        label="LAST NAME"
      />
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
      text: 'Reza',
      text1: 'khan'
    }
  }
}
</script>
