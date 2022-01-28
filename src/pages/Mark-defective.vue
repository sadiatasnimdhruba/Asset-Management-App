<template>
  <q-card>
  <form  class="q-pa-md">
    <br><br><br><br><br><br><br><br><br><br>
    <div class="q-pa-md">
    <div class="q-gutter-md" >
      <span>Explain the defect</span>
      <q-input v-model="text" label="Explain what the issue is and what can be done if fixable?If not fixable,
      discard the item instead"/>
      
    </div>
    </div>  
    <div class="row justify-end">
      <q-btn label="CANCEL" class="q-mt-md" color="gray" text-color="gray"></q-btn>
      <q-btn label="SAVE" class="q-mt-md" color="blue"></q-btn>
    </div>
  </form>
</q-card>
</template>

<script>
export default {
    data () {
    return {
      text: ' '
  
    }
  }
}
</script>
