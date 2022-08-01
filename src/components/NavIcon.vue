<script setup>
 defineProps({

            title: {
              type: String,
              required: true
            },
            color: {
              type: String,
              required: true
            },

});

</script>

<template>
  <button
   :title="title"
   :colo="color"
   >
  </button>
   
</template>


 
<!-- <style scoped>
.sidebar {
    transition: 0.3s ease;
 }
 .collapse__icon{
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    transition: 0.2s linear;
    color: aqua;
 }

 .rotate__icon {
    transform: rotate(180deg);
    transition: 0.2s linear; 
 }
</style> -->