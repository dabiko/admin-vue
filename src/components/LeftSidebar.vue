<script setup>
import settingsIcon from './icons/settingsIcon.vue';
//import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { Navbar, Footer, Sidebar, ThemeSettings }  from  '@/components'
import { 
    Ecommerce, Orders, Calendar, Employees, 
    Stacked, Pyramid, Customers, Kanban, 
    Line, Area, Bar, Pie, Financial, 
    ColorPicker, ColorMapping, Editor 
} from '@/views';


const activeMenu = true;
</script>

<template>
    <div class="flex relative dark:bg-main-dark-bg">
        <div class="fixed right-4 bottom-4" style="zIndex:1000">
            <!-- <h1>Add TooltipPlugin here</h1> -->
                <button
                type="button"
                style="background: blue; borderRadius:50%"
                class="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                    <settingsIcon />
                </button>
            <!-- <h1> TooltipPlugin Ends here</h1> -->
            
        </div>

        <div v-if="activeMenu"
            class="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"
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
        :class="{ 
                  'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full': activeMenu , 
                  'dark:bg-main-dark-bg  bg-main-bg w-full min-h-screen flex-2'  :!activeMenu
                }"
        >  
            <!-- Navigation Bar -->

            <div class="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
        </div>



    </div>
</template>