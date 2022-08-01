<script setup>
import avatar from '../data/avatar.jpg';
import { BurgaIcon, SearchIcon, ShoppingCart, MessageIcon, NotifIcon, ArrowDownIcon} from '@/components/icons';
import { collapsed, toggleSidebar } from '../stores/menuState';



</script>

 <template>
    <div class="flex justify-between p-2 md:ml-6 md:mr-6 relative">
        <button
          type="button"
          @click="{}"
          style= "color" 
          class="relative text-xl rounded-full p-3 hover:bg-light-gray"
         >
        <span
          style="background: dotColor"
          class="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        ></span>
        <img  style="color:red" 
              :class="{'rotate__icon': collapsed }" 
              class="collapse__icon"
              @click="toggleSidebar" 
              :src="BurgaIcon" 
              alt="Burga Menu" />
        
    </button>
    
        <div class="flex  ">
            <button @click="{}">
            <img style=" width: 15px;" :src="ShoppingCart" alt="Cart" />
            </button>

            <button @click="{}">
            <img style=" width: 15px;;" :src="MessageIcon" alt="Message" />
            </button>

            <button @click="{}">
            <img style=" width: 15px;;" :src="NotifIcon" alt="Notification" />
            </button>

            
            <div class="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                @canplay="{}"
            >
                <img
                class="rounded-full w-8 h-8"
                :src="avatar"
                alt="user-profile"
                />
                <p>
                <span class="text-gray-400 text-14">Hi,</span>{{' '}}
                <span class="text-gray-400 font-bold ml-1 text-14">
                    Dabiko
                </span>
                </p>
                 <img style=" width: 15px;" :src="ArrowDownIcon" alt="drop arrow"
                 class="text-gray-400 text-14"
                 />
                
            </div>

        </div>
    </div>
 </template>