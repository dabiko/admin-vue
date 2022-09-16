<script setup>
import router from '../router'
import { RouterLink } from 'vue-router'
import BoLogo from './icons/BoLogo.vue';
import  CancelIcon from './icons/CancelIcon.vue'; 
import { TooltipComponent } from '@syncfusion/ej2-vue-popups';
import { links } from  '../data/dummy'
import { collapsed, toggleSidebar, sidebarWidth } from '../stores/menuState';
import { AppLogo, CloseMenu} from '@/components/icons';

 
//const activeClass = router.linkActiveClass
const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2'
const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
 

const isActive = true;

</script>

 <template>
    <div :style="{width:sidebarWidth}" class="sidebar ml-0 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 ">
        
        <div class="" :class="{ 'flex justify-between items-center': isActive }">
            <RouterLink to="/" 
                @click="activeMenu=true"
                class="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                >
               <AppLogo @click="toggleSidebar" /> <span>QG-BO</span>
            </RouterLink>

           <TooltipComponent content="Close" position="Right">
                <button :class="{'rotate__icon': collapsed}" class="collapse__icon" @click="toggleSidebar">
                    <CloseMenu />
                </button>
           </TooltipComponent>
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
                    
                    :class="[active ? activeLink : normalLink]"
                    >
                    <img  style=" width: 6%;" class="" :src=" subMenu.icon " alt="Icon">
                    <span class="capitalize">{{ subMenu.name }}</span>
                </RouterLink>
            </div>

        </div>
        
    </div>
 </template>
 <style scoped>
 .sidebar {
    transition: 0.3s ease;
 }
 /* .collapse__icon{
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    transition: 0.2s linear;
    color: aqua;
 } */

 .rotate__icon {
    transform: rotate(180deg);
    transition: 0.2s linear; 
 }
 </style>