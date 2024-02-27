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
  
          <pageDashbord2_composant @open_modal="togglemodaleTicket()" @open_modal_Deconnection="togglemodaleDeconnection()"></pageDashbord2_composant>
  
        </div>
                <!-- la boite de dialogue qui souve au click -->
                <modaleTicket v-bind:revele="revele" v-bind:togglemodaleTicket="togglemodaleTicket"></modaleTicket>    
      </div>
      <div>
        <ModaleDeconnexion  v-bind:reveleDeconnection="reveleDeconnection" v-bind:togglemodaleDeconnection="togglemodaleDeconnection"></ModaleDeconnexion>
       </div>
        <nav class="w-full fixed bottom-0 left-0 right-0 ">
            <Navbarre @open_modal="togglemodaleTicket()" @open_modal_Deconnection="togglemodaleDeconnection()"></Navbarre>
        </nav>
    </section>
  </template>
  
  <script>
  import ASIDE2 from "@/components/aside2.vue";
  import Navbarre from "@/components/NavBarre.vue";
  import HEADER from "@/components/header.vue";
  import modaleTicket from "@/components/modaleTicket.vue";
  import modaleDeconnection from "@/components/ModaleDeconnexion.vue";
  import pageDashbord2_composant from "@/components/pageDashbord2_composant.vue";
  
  export default {

    name: 'home2',
  data(){
    return{
      revele:false
    } 
  },
  methods: {
    togglemodaleTicket: function(){
      this.revele = !this.revele
    },
    togglemodaleDeconnection: function(){
      this.reveleDeconnection = !this.reveleDeconnection
    }
  },


  components: {
      ASIDE2,
      Navbarre,
      HEADER,
      modaleTicket,
      modaleDeconnection,
      pageDashbord2_composant,
    },
    
  };
  </script>
  