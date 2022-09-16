<script setup>
import { RouterLink, RouterView } from 'vue-router'
import RightSidebar from './components/RightSidebar.vue';
// Registering Syncfusion license key
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkxiX39Wc3BRQGFdU0M=');


</script>

<template>
  <RightSidebar />
  
  <RouterView />
</template>

 <style>
 @import './assets/app.scss'
 </style>


