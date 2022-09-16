<script setup>
import { Navbar, Footer, Sidebar, ThemeSettings }  from  '@/components'
import SettingsIcon from './icons/settingsIcon.vue';
import { TooltipComponent } from '@syncfusion/ej2-vue-popups';
const activeMenu = true;
</script>


<template>
    <div class="flex relative dark:bg-main-dark-bg">
        <div class="fixed right-4 bottom-4" style="zIndex:1000">
            <TooltipComponent content="Settings" position="Top">
                <button
                type="button"
                style="background: blue; borderRadius:50%"
                class="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                    <SettingsIcon />
                </button>
            </TooltipComponent>
            
        </div>

        <div v-if="activeMenu"  class="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"
         > 
          <Sidebar />
        </div>

        <div v-else
        class="w-0 dark:bg-secondary-dark-bg"
        > 
          <Sidebar />
        </div>

        <div 
        class="" 
        :class="[
                  'dark:bg-main-dark-bg  bg-main-bg w-full min-h-screen md:ml-72'? activeMenu : 
                  'dark:bg-main-dark-bg  bg-main-bg w-full min-h-screen flex-2'
                ]"
        >  
            <div class="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
             
             <Navbar />
            </div>
        </div>
</div>

</template>