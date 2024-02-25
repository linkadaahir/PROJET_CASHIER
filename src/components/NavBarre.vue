<template>
    <div class=" w-full flex items-center justify-between">

      <div class="flex-row gap-5 flex m-4">
        <div class="gap-5 px-2 group flex-col justify-center items-center text-teal-400  rounded-[15px] ">
            <a href="http://localhost:5173/home">
                    <svg
                class="w-8 h-8 group-hover:text-teal-400 text-neutral-400 justify-center"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                fill-rule="evenodd"
                d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z"
                clip-rule="evenodd"
                />
            </svg>

            <div class="text-neutral-400 group-hover:text-teal-400 text-xl font-bold">
                Hom
            </div>
            </a>

        </div>

        <div class="flex-row gap-5 flex m-4">
            <div class="gap-5 px-2 group flex-col justify-center items-center text-teal-400  rounded-[15px] ">
                <a href="http://localhost:5173/home2">
                                <svg
                            class="w-8 h-8 group-hover:text-teal-400 text-neutral-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            d="M4 5a2 2 0 0 0-2 2v2.5c0 .6.4 1 1 1a1.5 1.5 0 1 1 0 3 1 1 0 0 0-1 1V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2.5a1 1 0 0 0-1-1 1.5 1.5 0 1 1 0-3 1 1 0 0 0 1-1V7a2 2 0 0 0-2-2H4Z"
                            />
                        </svg>

                        <div
                            class="text-neutral-400 group-hover:text-teal-400 text-xl font-normal font-['Roboto']"
                        >
                            Tic
                        </div>
                </a>

            </div>
        </div>

</div>

      <div class="flex-row gap-5 flex justify-stretch ">
        <div class="left-0 top-[92px] flex-col justify-start items-center gap-2.5 inline-flex ">
            <div v-on:click="$emit('open_modal')"  class="p-5 bg-teal-400 text-white bordure rounded-[100px] justify-start items-start gap-2.5 inline-flex ">
             
                <div class="w-6 h-6 relative">
                  <svg class="w-6    h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"
                      d="M5 12h14m-7 7V5" />
                  </svg>
                </div>
             
            </div>
            <div class="text-[15px] font-medium">New</div>
        </div>
      </div>


      <div class="flex-row gap-5 flex justify-stretch w-1/3 ">


        <div class="gap-5 px-2 group flex-col justify-center items-center text-teal-400 cursor-pointer rounded-[15px] h-[40px] ml-4"
        >
        <svg
            class="group-hover:text-teal-400 w-8 h-8 text-neutral-400 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M13.5 2a7 7 0 0 0-.5 0 1 1 0 0 0-1 1v8c0 .6.4 1 1 1h8c.5 0 1-.4 1-1v-.5A8.5 8.5 0 0 0 13.5 2Z"
            />
            <path
              d="M11 6a1 1 0 0 0-1-1 8.5 8.5 0 1 0 9 9 1 1 0 0 0-1-1h-7V6Z"
            />
          </svg>

          <div
            class="text-neutral-400 group-hover:text-teal-400 text-xl font-normal font-['Roboto']"
          >
            <a href="http://localhost:5173/home2"
              >Tic</a
            >
          </div>
        </div>


        <div class="gap-5 px-2 group flex-col justify-center items-center text-teal-400 cursor-pointer rounded-[15px] h-[40px]"
        >
        <svg
          class="w-8 h-8 group-hover:text-teal-400 text-neutral-400 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M5 10.9a8.7 8.7 0 0 1 6.4-3.6V6a2 2 0 0 1 2.3-2c.4 0 .7.1 1 .3l5.5 4.3a2.1 2.1 0 0 1 0 3.3l-5.5 4.3a2 2 0 0 1-2 .3 2 2 0 0 1-1.2-1.9v-1C6 15 5.2 19 5.2 19.3a1 1 0 0 1-1 .8 1 1 0 0 1-1-.7A10.2 10.2 0 0 1 5 10.9Z"
          />
        </svg>

          <div
            class="text-neutral-400 group-hover:text-teal-400 text-xl font-normal font-['Roboto']"
          >
            <a href="http://localhost:5173/home2"
              >Tic</a
            >
          </div>
        </div>

      </div>


    </div>
</template>

<script>


export default {
  props: {
  label: { required: true, type: String },
},
};
</script>