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

        <pageDashbord1_composant @open_modal="togglemodaleTicket()"></pageDashbord1_composant>

      </div>
              <!-- la boite de dialogue qui souve au click -->
            <modaleTicket v-bind:revele="revele" v-bind:togglemodaleTicket="togglemodaleTicket"></modaleTicket>
      
    </div>
    <nav class="w-full fixed bottom-0 left-0 right-0 bg-white sm:block md:hidden">
      <Navbarre></Navbarre>
    </nav>
  </section>
</template>

<script>
import ASIDE from "@/components/aside.vue";
import Navbarre from "@/components/NavBarre.vue";
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
  methods: {
    togglemodaleTicket: function(){
      this.revele = !this.revele
    }
  },


  components: {
    ASIDE,
    Navbarre,
    HEADER,
    modaleTicket,
    pageDashbord1_composant,
  },
  
}
</script>
   