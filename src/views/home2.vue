<template>
    <section class="h-[100vh] w-[100vw] flex p-4 md:p-[20px] gap-8 overflow-hidden">
      <aside class="w-[180px] md:w-[210px] h-full hidden md:block bg-white">
        <ASIDE2></ASIDE2>
      </aside>
  
      <div class="flex-1">
        <header>
          <HEADER></HEADER>
        </header>
        <!--ou le dashbord des pages sont importes-->
        <div class="bg-white rounded-[20px] flex-col p-2 overflow-y-scroll">
  
          <pageDashbord2_composant></pageDashbord2_composant>
  
        </div>
                <!-- la boite de dialogue qui souve au click -->
                <modaleTicket ></modaleTicket>
        
      </div>
    </section>
  </template>
  
  <script>
  import ASIDE2 from "@/components/aside2.vue";
  import HEADER from "@/components/header.vue";
  import modaleTicket from "@/components/modaleTicket.vue";
  import pageDashbord2_composant from "@/components/pageDashbord2_composant.vue";
  
  export default {
  
    components: {
      ASIDE2,
      HEADER,
      modaleTicket,
      pageDashbord2_composant,
    },
    
  };
  </script>
  