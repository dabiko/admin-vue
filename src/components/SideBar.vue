<script setup>
import { RouterLink } from 'vue-router'
import BoLogo from './icons/BoLogo.vue';
import  CancelIcon from './icons/CancelIcon.vue'; 
//import { TooltipPlugin } from "@syncfusion/ej2-vue-popups";
import { links } from  '../data/dummy'


const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2'
const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'


const active = true;

</script>

 <template>
    <div class="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        <div class="" :class="{ 'flex justify-between items-center': active }">
            <RouterLink to="/" 
                @click={}
                class="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                >
               <BoLogo /> <span>QG-BO</span>
            </RouterLink>
            <ejs-tooltip :content="name">

            </ejs-tooltip>
            <!-- add tooltip here -->
            <button class="" @click="{}">
                <CancelIcon />
            </button>
            <!-- end tooltip here -->
        </div>
        <div class="mt-10">
            <div v-for="mainMenu in links" 
                 :key="mainMenu.title">
                <p class="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {{ mainMenu.title }}
                </p>
                <RouterLink  v-for="subMenu in mainMenu.links" 
                    :key="subMenu.name"
                    :to="subMenu.name"
                    @click={}
                    class="isActive"
                    :class="[isActive ? activeLink : normalLink]"
                    >
                    <img  style=" width: 6%;" class="" :src=" subMenu.icon " alt="Icon">
                    <span class="capitalize">{{ subMenu.name }}</span>
                </RouterLink>
            </div>

        </div>
        
    </div>
 </template>
