<template>
            <div class="w-full flex-col ">
                
                <button v-on:click="$emit('open_modal')"   class="  px-2.5 py-[5px] bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] inline-flex">
                    <div  class="w-5 h-5 relative md:block hidden">
                        <svg class="w-6 h-6 text-white pb-1 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M5 12h14m-7 7V5"/>
                          </svg>
                    </div>
                    <div  class="text-white text-[15px] font-normal font-['Roboto'] md:block hidden">
                        New Ticket

                    </div>
                </button>
                <div class="h-[646px] p-5 bg-white rounded-[10px] flex-col  gap-5 flex">

                    <div class=" h-[556px] flex-col  gap-5 flex ">

                        <div class="self-stretch h-[498px] flex-col justify-start items-start gap-2.5 flex">
    
                            <div class=" flex flex-row justify-between w-full">
    
                                <div class="flex-col justify-between items-start inline-flex TicketAll">
                                    <div class="text-neutral-700 text-xl font-medium font-['Roboto']">Tickes</div>
                                    <div class="text-neutral-400 text-xs font-normal font-['Roboto']">All tickets</div>
                                </div>
    
                                <div class="  rounded-[10px]   md:border-neutral-200    inline-flex ">
    

                                        <div class="rounded-[10px] border border-neutral-200 inline-flex ">
                                            <div class="flex mr-1">
                                                <div class="w-8 h-2 p-2">
                                                    <svg class="w-7 h-6 text-neutral-400 dark:text-white" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
                                                    <path fill-rule="evenodd"
                                                        d="M21.7 21.7a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 0 1 1.4-1.4l3.5 3.5c.4.4.4 1 0 1.4Z"
                                                        clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <input type="text" name="text" alt="name" id="find" placeholder="find"
                                                class="text-stone-300 text-[15px] font-normal outline-none border-none" />
                                            </div>
                                        </div>
                                     
    
                                    
                                    <div class=" h-[40px] px-4 ml-2 pb-6 rounded-[10px] border border-neutral-200  inline-flex">
                                            <div class="justify-center items-center gap-2.5 flex">
                                                <div class="w-6 h-8 py-14 relative">
                                                    <svg class="w-6 h-6 border-neutral-200 text-neutral-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M5 3a2 2 0 0 0-1.5 3.3l5.4 6v5c0 .4.3.9.6 1.1l3.1 2.3c1 .7 2.5 0 2.5-1.2v-7.1l5.4-6C21.6 5 20.7 3 19 3H5Z"/>
                                                      </svg>
                                                      
                                                </div>
                                            </div>
                                     </div>
                                 </div>
                            </div>
    
                            <div class=" flex flex-col justify-between w-full">


                                <!-- <table class="table-auto">
                                    <tbody class="flex flex-col">
                                        <th>
                                                <div class="flex justify-between">
                                                    <div class="flex justify-between pb-6 font-bold ">
                                                        <span class="font-bold pr-2 ">Profil</span>
                                                        <span class="font-bold">Name</span>
                                                    </div>
                                                    <div class="flex justify-center pb-6 font-bold ">Description</div>
                                                    <div class="flex justify-center pb-6 font-bold ">Since</div>
                                                    <div class="flex justify-center pb-6 font-bold ">State</div>
                                                    <div class="flex justify-center pb-6 font-bold ">Action</div>
                                                </div>
                                            </th>
                                        <tr v-for="x of [1, 2, 3]"  class="flex flex-between">

                                        <td>
                                            <div class="justify-start items-center gap-2.5 flex-col ">

                                            <div class=" inline-flex justify-around">
                                                    <div class="w-[30px] h-[30px] rounded-full bg-violet-800"></div>
                                                <div class="text-neutral-700 font-semibold text-sm">
                                                    Alida
                                                </div>

                                            </div>

                                            </div>
                                        </td>

                                        <td class="md:block hidden">
                                            <div class="justify-start items-center gap-2.5 flex-col ">
                                                    
                                                <div class="text-neutral-700 font-semibold text-sm">
                                                    Malcolm Lockyer
                                                </div>

                                            </div>
                                        </td>

                                        <td>
                                            <div class="justify-start items-center gap-2.5 flex-col ">
                                                    
                                                <div class="text-neutral-700 font-semibold text-sm">
                                                    Now
                                                </div>

                                            </div>
                                        </td>

                                        <td class="">
                                            <div class="h-[50px] px-[5px] items-center gap-2.5 flex justify-end">
                                            <div class="px-2.5 py-[5px] bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                <div class="justify-start items-center gap-[5px] flex">
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor" viewBox="0 0 16 3">
                                                    <path
                                                        d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                    </svg>
                                                </div>
                                                <div class=" md:text-neutral-700 md:text-[15px] md:font-normal md:block hidden">
                                                    <span>more</span>
                                                    
                                                </div>
                                                </div>
                                            </div>

                                            
                                            <div class="px-2.5 py-[5px] bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                <div class="w-5 h-5 relative">
                                                <svg class="w-[18px] h-[18px] text-white dark:text-white" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1"
                                                    d="M1 5.917 5.724 10.5 15 1.5" />
                                                </svg>
                                                </div>
                                                <div class="text-white text-[15px] font-normal md:block hidden">
                                                Validate
                                                </div>
                                            </div>
                                            <div
                                                class="px-2.5 py-[5px] yellow_color rounded-[20px] justify-start items-center gap-[5px] flex bg-yellow-200">
                                                <div class="w-5 h-5 relative">
                                                <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18 18 6m0 12L6 6" />
                                                </svg>
                                                </div>
                                                <div class="text-neutral-700 text-[15px] font-normal md:block hidden">
                                                Cancel
                                                </div>
                                            </div>
                                            </div>
                                        </td>
                                        </tr>
                                    </tbody>
                                </table> -->

                                <table class="table-auto">
                                    <thead>
                                        <tr class="pb-6">
                                            <th>
                                                <span class="font-bold ">Profil</span>
                                            </th>
                                            <th>
                                                <span class="font-bold">Name</span>
                                            </th>
                                            <th class="">
                                                <div class="hidden md:block font-bold ">Description</div>
                                            </th>
                                            <th>
                                                <div class=" font-bold ">Since</div>
                                            </th>
                                            <th>
                                                <div class=" font-bold ">State</div>
                                            </th>
                                            <th>
                                                <div class=" font-bold ">Action</div>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody v-if="showElement" class="enregistrement1">
                                        <tr>
                                            <td class="autre">
                                                <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 ">
                                                    <img class="h-[50px] rounded-full" src="../../image/Crystal_Clear.png" /> 
                                                    
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class="  text-neutral-700 font-semibold text-sm">
                                                    Alida
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class="hidden md:block text-neutral-700 font-semibold text-sm">
                                                    Malcolm Lockyer
                                                </div>
                                            </td>
                                            <td class="autre">
                                                                                                    
                                                <div class=" text-neutral-700 font-semibold text-sm">
                                                    Now 
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class="  self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                                    <div class="bg-yellow-400 bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                        <div class="w-5 h-5 relative">
                                                            <svg class="w-4 h-6 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">pending</div>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>
                                             <div class="h-[50px] items-center gap-2.5 flex justify-end action">
                                                <button class="px-2.5 py-[5px] bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                    <div class="justify-start items-center gap-[5px] flex">
                                                    <div class="w-5 h-5 relative">
                                                        <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor" viewBox="0 0 16 3">
                                                        <path
                                                            d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                        </svg>
                                                    </div>
                                                    <div class=" md:text-neutral-700 md:text-[15px] md:font-normal md:block hidden">
                                                        <span>more</span>
                                                        
                                                    </div>
                                                    </div>
                                                </button>

                                            
                                                <button class="px-2.5 py-[5px] bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                    <div class="w-5 h-5 relative">
                                                    <svg class="w-[18px] h-[18px] text-white dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1"
                                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                                    </svg>
                                                    </div>
                                                    <div class="text-white text-[15px] font-normal md:block hidden">
                                                    Validate
                                                    </div>
                                                </button>
                                                <button @click="removeElement" id="cancel1" class=" px-2.5 py-[5px] md:visible invisible rounded-[20px] justify-start items-center gap-[5px] flex bg-yellow-200">
                                                    <div class="w-5 h-5 relative">
                                                    <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M6 18 18 6m0 12L6 6" />
                                                    </svg>
                                                    </div>
                                                    <div class="text-neutral-700 text-[15px] font-normal md:block hidden">
                                                    Cancel
                                                    </div>
                                                </button>
                                            </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="autre">
                                                <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 inline-flex">
                                                    <img class="h-[50px] rounded-full" src="../../image/images.jfif" /> 
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class="  text-neutral-700 font-semibold text-sm">
                                                    Alida
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class="hidden md:block text-neutral-700 font-semibold text-sm">
                                                    Malcolm Lockyer
                                                </div>
                                            </td>
                                            <td class="autre">
                                                                                                    
                                                <div class=" text-neutral-700 font-semibold text-sm">
                                                    Now 
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class=" self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                                    <div class="yellow2_color bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                        <div class="w-5 h-5 relative">
                                                            <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">pending</div>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>
                                             <div class="h-[50px] items-center gap-2.5 flex justify-end action">
                                                <div class="px-2.5 py-[5px] bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                    <div class="justify-start items-center gap-[5px] flex">
                                                    <div class="w-5 h-5 relative">
                                                        <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor" viewBox="0 0 16 3">
                                                        <path
                                                            d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                        </svg>
                                                    </div>
                                                    <div class=" md:text-neutral-700 md:text-[15px] md:font-normal md:block hidden">
                                                        <span>more</span>
                                                        
                                                    </div>
                                                    </div>
                                                </div>

                                            
                                                <div class="px-2.5 py-[5px] bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                    <div class="w-5 h-5 relative">
                                                    <svg class="w-[18px] h-[18px] text-white dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1"
                                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                                    </svg>
                                                    </div>
                                                    <div class="text-white text-[15px] font-normal md:block hidden">
                                                    Validate
                                                    </div>
                                                </div>
                                                <div
                                                    class="px-2.5 py-[5px] yellow_color rounded-[20px] justify-start items-center gap-[5px] flex bg-yellow-200">
                                                    <div class="w-5 h-5 relative">
                                                    <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M6 18 18 6m0 12L6 6" />
                                                    </svg>
                                                    </div>
                                                    <div class="text-neutral-700 text-[15px] font-normal md:block hidden">
                                                    Cancel
                                                    </div>
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="autre">
                                                <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 ">
                                                    <img class="h-[50px] rounded-full" src="../../image/Crystal_Clear.png" /> 
                                                    
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class="  text-neutral-700 font-semibold text-sm">
                                                    Alida
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class="hidden md:block text-neutral-700 font-semibold text-sm">
                                                    Malcolm Lockyer
                                                </div>
                                            </td>
                                            <td class="autre">
                                                                                                    
                                                <div class=" text-neutral-700 font-semibold text-sm">
                                                    Now 
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class=" self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                                    <div class="yellow2_color bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                        <div class="w-5 h-5 relative">
                                                            <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">pending</div>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>
                                             <div class="h-[50px] items-center gap-2.5 flex justify-end action">
                                                <div class="px-2.5 py-[5px] bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                    <div class="justify-start items-center gap-[5px] flex">
                                                    <div class="w-5 h-5 relative">
                                                        <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor" viewBox="0 0 16 3">
                                                        <path
                                                            d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                        </svg>
                                                    </div>
                                                    <div class=" md:text-neutral-700 md:text-[15px] md:font-normal md:block hidden">
                                                        <span>more</span>
                                                        
                                                    </div>
                                                    </div>
                                                </div>

                                            
                                                <div class="px-2.5 py-[5px] bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                    <div class="w-5 h-5 relative">
                                                    <svg class="w-[18px] h-[18px] text-white dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1"
                                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                                    </svg>
                                                    </div>
                                                    <div class="text-white text-[15px] font-normal md:block hidden">
                                                    Validate
                                                    </div>
                                                </div>
                                                <div
                                                    class="px-2.5 py-[5px] yellow_color rounded-[20px] justify-start items-center gap-[5px] flex bg-yellow-200">
                                                    <div class="w-5 h-5 relative">
                                                    <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M6 18 18 6m0 12L6 6" />
                                                    </svg>
                                                    </div>
                                                    <div class="text-neutral-700 text-[15px] font-normal md:block hidden">
                                                    Cancel
                                                    </div>
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="autre">
                                                <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 inline-flex">
                                                    <img class="h-[50px] rounded-full" src="../../image/images.jfif" /> 
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class="  text-neutral-700 font-semibold text-sm">
                                                    Alida
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class=" hidden md:block text-neutral-700 font-semibold text-sm">
                                                    Malcolm Lockyer
                                                </div>
                                            </td>
                                            <td class="autre">
                                                                                                    
                                                <div class=" text-neutral-700 font-semibold text-sm">
                                                    Now 
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class=" self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                                    <div class="yellow2_color bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                        <div class="w-5 h-5 relative">
                                                            <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">pending</div>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>
                                             <div class="h-[50px] items-center gap-2.5 flex justify-end action">
                                                <div class="px-2.5 py-[5px] bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                    <div class="justify-start items-center gap-[5px] flex">
                                                    <div class="w-5 h-5 relative">
                                                        <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor" viewBox="0 0 16 3">
                                                        <path
                                                            d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                        </svg>
                                                    </div>
                                                    <div class=" md:text-neutral-700 md:text-[15px] md:font-normal md:block hidden">
                                                        <span>more</span>
                                                        
                                                    </div>
                                                    </div>
                                                </div>

                                            
                                                <div class="px-2.5 py-[5px] bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                    <div class="w-5 h-5 relative">
                                                    <svg class="w-[18px] h-[18px] text-white dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1"
                                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                                    </svg>
                                                    </div>
                                                    <div class="text-white text-[15px] font-normal md:block hidden">
                                                    Validate
                                                    </div>
                                                </div>
                                                <div
                                                    class="px-2.5 py-[5px] yellow_color rounded-[20px] justify-start items-center gap-[5px] flex bg-yellow-200">
                                                    <div class="w-5 h-5 relative">
                                                    <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M6 18 18 6m0 12L6 6" />
                                                    </svg>
                                                    </div>
                                                    <div class="text-neutral-700 text-[15px] font-normal md:block hidden">
                                                    Cancel
                                                    </div>
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="autre">
                                                <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 ">
                                                    <img class="h-[50px] rounded-full" src="../../image/Crystal_Clear.png" /> 
                                                    
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class="  text-neutral-700 font-semibold text-sm">
                                                    Alida
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class="hidden md:block text-neutral-700 font-semibold text-sm">
                                                    Malcolm Lockyer
                                                </div>
                                            </td>
                                            <td class="autre">
                                                                                                    
                                                <div class=" text-neutral-700 font-semibold text-sm">
                                                    Now 
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class=" self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                                    <div class="yellow2_color bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                        <div class="w-5 h-5 relative">
                                                            <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">pending</div>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>
                                             <div class="h-[50px] items-center gap-2.5 flex justify-end action">
                                                <div class="px-2.5 py-[5px] bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                    <div class="justify-start items-center gap-[5px] flex">
                                                    <div class="w-5 h-5 relative">
                                                        <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor" viewBox="0 0 16 3">
                                                        <path
                                                            d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                        </svg>
                                                    </div>
                                                    <div class=" md:text-neutral-700 md:text-[15px] md:font-normal md:block hidden">
                                                        <span>more</span>
                                                        
                                                    </div>
                                                    </div>
                                                </div>

                                            
                                                <div class="px-2.5 py-[5px] bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                    <div class="w-5 h-5 relative">
                                                    <svg class="w-[18px] h-[18px] text-white dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1"
                                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                                    </svg>
                                                    </div>
                                                    <div class="text-white text-[15px] font-normal md:block hidden">
                                                    Validate
                                                    </div>
                                                </div>
                                                <div
                                                    class="px-2.5 py-[5px] yellow_color rounded-[20px] justify-start items-center gap-[5px] flex bg-yellow-200">
                                                    <div class="w-5 h-5 relative">
                                                    <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M6 18 18 6m0 12L6 6" />
                                                    </svg>
                                                    </div>
                                                    <div class="text-neutral-700 text-[15px] font-normal md:block hidden">
                                                    Cancel
                                                    </div>
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td class="autre">
                                                <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 inline-flex">
                                                    <img class="h-[50px] rounded-full" src="../../image/images.jfif" /> 
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class="  text-neutral-700 font-semibold text-sm">
                                                    Alida
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class=" hidden md:block text-neutral-700 font-semibold text-sm">
                                                    Malcolm Lockyer
                                                </div>
                                            </td>
                                            <td class="autre">
                                                                                                    
                                                <div class=" text-neutral-700 font-semibold text-sm">
                                                    Now 
                                                </div>
                                            </td>
                                            <td class="autre">
                                                <div class=" self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                                    <div class="yellow2_color bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                        <div class="w-5 h-5 relative">
                                                            <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">pending</div>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>
                                             <div class="h-[50px] items-center gap-2.5 flex justify-end action">
                                                <div class="px-2.5 py-[5px] bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                    <div class="justify-start items-center gap-[5px] flex">
                                                    <div class="w-5 h-5 relative">
                                                        <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor" viewBox="0 0 16 3">
                                                        <path
                                                            d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                        </svg>
                                                    </div>
                                                    <div class=" md:text-neutral-700 md:text-[15px] md:font-normal md:block hidden">
                                                        <span>more</span>
                                                        
                                                    </div>
                                                    </div>
                                                </div>

                                            
                                                <div class="px-2.5 py-[5px] bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex">
                                                    <div class="w-5 h-5 relative">
                                                    <svg class="w-[18px] h-[18px] text-white dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1"
                                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                                    </svg>
                                                    </div>
                                                    <div class="text-white text-[15px] font-normal md:block hidden">
                                                    Validate
                                                    </div>
                                                </div>
                                                <div
                                                    class="px-2.5 py-[5px] yellow_color rounded-[20px] justify-start items-center gap-[5px] flex bg-yellow-200">
                                                    <div class="w-5 h-5 relative">
                                                    <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M6 18 18 6m0 12L6 6" />
                                                    </svg>
                                                    </div>
                                                    <div class="text-neutral-700 text-[15px] font-normal md:block hidden">
                                                    Cancel
                                                    </div>
                                                </div>
                                            </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
    
                            </div>
                        </div>






                        <div class="  elementZap ">

                            <div class="element10 ">

                                <div class=" flex ">
                                    <div class="w-6 h-6 ">
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 6c0 1.7-3.1 3-7 3S5 7.7 5 6m14 0c0-1.7-3.1-3-7-3S5 4.3 5 6m14 0v6M5 6v6m0 0c0 1.7 3.1 3 7 3s7-1.3 7-3M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>
                                          </svg>
                                    </div>
                                    <div class="text-neutral-700 text-[15px] font-normal  font-['Roboto']">elements</div>
                                </div>
                                <div class="rounded-[10px] l-2 flex-col justify-center items-start inline-flex">
                                    <div class="self-stretch h-[38px] px-2.5 py-[7px] rounded-[10px] border border-neutral-200 justify-between items-center inline-flex">
                                        <div class="justify-center items-center gap-2.5 flex">
                                            <div class="text-stone-300 text-[15px] font-normal font-['Roboto']">10</div>
                                        </div>
                                        <div class="w-6 h-6 relative"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="element11">
                                <div class="px-2.5 py-[5px] bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                    <div class="justify-start items-center gap-[5px] flex">
                                        <div class="w-5 h-5 relative">
                                            
                                        </div>
                                        <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Prev</div>
                                    </div>
                                </div>
                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">1/15</div>
                                <div class="px-2.5 py-[5px] bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                    <div class="justify-start items-center gap-[5px] flex">
                                        <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Next</div>
                                    </div>
                                    <div class="w-5 h-5 relative"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
</template>

<style>


   .table-auto{
    width: auto;
    cursor: pointer;
   }
   .action{
   width: 90%;
   }
   .autre{
    padding-left: 4%;
   }
   .elementZap{
    display: flex;
    flex-direction: column;
   }

    .element10,.element11{
        display: flex;
        justify-content: space-between;
        width: auto;
    }


@media (min-width: 768px) {
    .elementZap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   }

   .element10{
        display: flex;
        justify-content: flex-start;
    }

}

</style>



<script>


export default { 

    name:"pageDashbord2_composant",
    data(){
        return {
            showElement : true
        }
    },

props: {
label: { required: true, type: String },
emits:['open_modal']

},
methodes: {
    removeElement(){
        this.showElement = false
    }
}
};

    // let cancel1 = document.getElementById("cancel1");
    // let enregistrement1 = document.querySelector(".enregistrement1");
    // cancel1.addEventListener("click", () => {
    // if(getComputedStyle(enregistrement1).display != "none"){
    //     enregistrement1.style.display = "none";
    // } else {
    //     enregistrement1.style.display = "block";
    // }
    // });

</script>