<template>
  <section class="h-[100vh] w-[100vw] flex p-4 md:p-[20px]  gap-8">
    <aside class="w-[180px] md:w-[210px] h-full hidden md:block bg-white">
      <ASIDE></ASIDE>
    </aside>

    <div class="flex-1">
      <header>
        <HEADER></HEADER>
      </header>
      <!--ou le dashbord des pages sont importes-->
      <div class="bg-white rounded-[20px] flex-col m-5">

        <pageDashbord1_composant></pageDashbord1_composant>

      </div>
              <!-- la boite de dialogue qui souve au click -->
            <modaleTicket v-bind:revele="revele"></modaleTicket>
      
    </div>
  </section>
</template>

<script>
import ASIDE from "@/components/aside.vue";
import HEADER from "@/components/header.vue";
import modaleTicket from "@/components/modaleTicket.vue";
import pageDashbord1_composant from "@/components/pageDasbord1_composant.vue";

export default {
  name: 'home',
  data(){
    return{
      revele:false
    } 
  },


  components: {
    ASIDE,
    HEADER,
    modaleTicket,
    pageDashbord1_composant,
  },
  
}
</script>
   