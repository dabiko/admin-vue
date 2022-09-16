<script setup>
import { ArrowDownIcon } from '@/components/icons';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
</script>


 <template>
    <div class="mt-24">
        <div class="flex flex-wrap lg:flex-nowrap justify-center ">
            <div class="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                <div>
                    <p class="font-bold text-gray-400">Earnings</p>
                    <p class="text-2xl">$63,448.78</p>
                </div>
            </div>
            <div className="mt-6">
                <Button
                color="white"
                bgColor="blue"
                text="Download"
                borderRadius="10px"
                />
            </div>
        </div>

    </div>
 </template>