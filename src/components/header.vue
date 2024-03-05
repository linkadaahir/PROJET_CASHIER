<template>

<div class="w-full flex items-center justify-between">
          <div class="items-center gap-5 flex">
            <div class="flex-col justify-center inline-flex">
              <div class="text-black text-xl font-bold">Welcome</div>
              <div class="text-neutral-400 text-xs font-medium">
                Home / Dashboard
              </div>
            </div>
            <img
              class="w-[10px] h-[10px] welcome"
              src="../../image/Booki.png"
            />
          </div>

          <div class="justify-between items-center gap-2.5 inline-flex bg-neutral-200 p-1.5 rounded-[40px]"
          >
            <div class="text-black text-[15px] font-normal ">
              {{ userProfile?.name }}
            </div>
            <div
              class="bg-teal-400 flex justify-center items-center p-2.5 text-white bordure rounded-[100px]"
            >
              <svg
                class="h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 14 18"
              >
                <path
                  d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
                />
              </svg>
            </div>
          </div>
        </div>

</template>

<script>


export default {
    props: {
    label: { required: true, type: String },
  },

  mounted() {
    this.loadUserProfile();
  },

  data(){
    return {
      userProfile:{
        name:"",
        email: ""
      }
    }
  },

  methods: {

    loadUserProfile(){
      let localUser = JSON.parse(localStorage.getItem('profile'))
      if(localUser?.user_profile?.length > 0) {
        this.userProfile = {
          name: localUser?.user_profile[0]?.discriminator,
          email: localUser?.user_profile[0]?.email

        }
      }
    }

  }
};
</script>