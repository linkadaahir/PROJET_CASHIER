<template>

  

    <div  v-if="reveleDeconnection" class="bloc_ModaleTicket fixed left-0 right-0 top-0 bottom-0 z-[999999] bg-opacity-40 rounded-[100px] backdrop-blur-sm justify-center items-center gap-2.5 inline-flex">


      <div class="w-[325px] bg-white p-5 rounded-[30px] flex-col justify-start items-start gap-5 inline-flex">
        <div class="self-stretch justify-between items-end inline-flex">
          <div class="text-neutral-700 text-xl font-normal font-['Roboto']">
            Disconnect
          </div>
          <div v-on:click="togglemodaleDeconnection" class="croix_modale w-6 h-6 relative ">
            <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18 18 6m0 12L6 6" />
            </svg>
          </div>
        </div>

        <div class="flex justify-start items-start  gap-2.5 flex py-2 ">
            <strong class="text-2xl ">Did you really want to leave ?</strong> 
        </div>

        <div class="self-stretch flex-col justify-start items-end gap-11 flex">

          <div class="self-stretch h-[30px] flex-col justify-start items-end gap-2.5 flex">
            <div class="justify-start items-start gap-2.5 inline-flex">
              <div class="px-2.5 py-[5px] bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex">
                <div class="w-5 h-5 relative">
                  <a href="">
                    <svg class="w-[18px] h-[18px] text-white dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1"
                      d="M1 5.917 5.724 10.5 15 1.5" />
                  </svg>
                  </a>

                </div>
                <a href="">
                  <div class="text-white text-[15px] font-normal font-['Roboto']">
                  Save
                </div>
                </a>

              </div>
              
              <div v-on:click="togglemodaleDeconnection" class="px-2.5 py-[5px] bg-yellow-200 rounded-[20px] justify-start items-center gap-[5px] flex">              
                <div class="w-5 h-5 relative">
                  <a href="#">
                    <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M6 18 18 6m0 12L6 6" />
                  </svg>
                  </a>

                </div>
                <a href="">
                  <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">
                  Cancel
                </div>
                </a>


              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>



</template>

<script>


export default {
  name: "modaleDeconnection",
  props: ["reveleDeconnection", "togglemodaleDeconnection"]
};   
</script>

<style>
</style>