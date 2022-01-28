<template>
<q-card>
  <form  class="q-pa-md">
    <br><br><br><br><br><br><br><br><br><br>
    <div class="q-pa-md">
    <div class="q-gutter-md" >
      <span>Reason for discarding</span>
      <q-input v-model="text" label="Reason could be sold,cannot be fixed,lost stolen etc."/>
      
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
