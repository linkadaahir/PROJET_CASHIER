<template>
            <div class="w-full flex-col">
                
                <div class="px-2.5 py-[5px] bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] inline-flex">
                    <div class="w-5 h-5 relative">
                        <svg class="w-6 h-6 text-white pb-1 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M5 12h14m-7 7V5"/>
                          </svg>
                    </div>
                    <div class="text-white text-[15px] font-normal font-['Roboto']">
                        New Ticket

                    </div>
                </div>
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
    
                            <div class=" flex justify-between w-full">
    
                                <div class=""> 
                                    <div class="flex-col  inline-flex">
                                        <div class="">
                                             <div ><strong>Profile</strong></div>
                                            
                                        </div>
                                        <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 ">
                                            <img class="h-[50px] rounded-full" src="../../image/Crystal_Clear.png" /> 
                                            
                                        </div>
                                        <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 inline-flex">
                                            <img class="h-[50px] rounded-full" src="../../image/images.jfif" /> 
                                        </div>
                                        <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 disparu">
                                            <img class="h-[50px] rounded-full" src="../../image/Crystal_Clear.png" /> 
                                        </div>
                                        <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 inline-flex disparu">
                                            <img class="h-[50px] rounded-full" src="../../image/images.jfif" /> 
                                        </div>
                                        <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 ">
                                            <img class="h-[50px] rounded-full" src="../../image/Crystal_Clear.png" />  
                                        </div>
                                        <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 inline-flex">
                                            <img class="h-[50px] rounded-full" src="../../image/images.jfif" /> 
                                        </div>
                                        <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 ">
                                            <img class="h-[50px] rounded-full" src="../../image/Crystal_Clear.png" /> 
                                        </div>
                                        <div class="h-[50px] pr-2.5 justify-start items-center gap-2.5 inline-flex">
                                            <img class="h-[50px] rounded-full" src="../../image/images.jfif" /> 
                                           
                                        </div>
                                    </div>
                                    <div class="grow shrink basis-0 flex-col name Name2 inline-flex">
                                        <div class="w-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                            <div class=" tableaux_titre">
                                                <div ><strong>Name</strong></div>
                                            </div>
                                        </div>
                                        <div class="w-[72px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                            <div class="justify-start items-center gap-[89px] inline-flex">
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Laurence</div>
                                            </div>
                                        </div>
                                        <div class="w-11 px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                            <div class="justify-start items-center gap-[89px] inline-flex">
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Alida</div>
                                            </div>
                                        </div>
                                        <div class="w-[72px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex disparu">
                                            <div class="justify-start items-center gap-[89px] inline-flex">
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto'] ">Laurence</div>
                                            </div>
                                        </div>
                                        <div class="w-[72px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex disparu">
                                            <div class="justify-start items-center gap-[89px] inline-flex">
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Laurence</div>
                                            </div>
                                        </div>
                                        <div class="w-[72px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                            <div class="justify-start items-center gap-[89px] inline-flex">
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Laurence</div>
                                            </div>
                                        </div>
                                        <div class="w-[72px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                            <div class="justify-start items-center gap-[89px] inline-flex">
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Laurence</div>
                                            </div>
                                        </div>
                                        <div class="w-[72px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                            <div class="justify-start items-center gap-[89px] inline-flex">
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Laurence</div>
                                            </div>
                                        </div>
                                        <div class="w-[72px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                            <div class="justify-start items-center gap-[89px] inline-flex">
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Laurence</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" flex-col Description comment inline-flex">
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class=" tableaux_titre">
                                            <div ><strong>Description</strong></div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Lorem ipsum dolor</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">dolor sit amet</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex disparu">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">sit amet</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex disparu">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">sit amet</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">sit amet</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">sit amet</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">sit amet</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">sit amet</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class=" flex-col Since date inline-flex">
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class=" tableaux_titre">
                                            <div ><strong>Since</strong></div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-400 text-[15px] font-normal font-['Roboto']">now</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-400 text-[15px] font-normal font-['Roboto']">10h30</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex disparu">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-400 text-[15px] font-normal font-['Roboto']">sunday</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex disparu">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-400 text-[15px] font-normal font-['Roboto']">sunday</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-400 text-[15px] font-normal font-['Roboto']">sunday</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-400 text-[15px] font-normal font-['Roboto']">sunday</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-400 text-[15px] font-normal font-['Roboto']">sunday</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class="justify-start items-center gap-[89px] inline-flex">
                                            <div class="text-neutral-400 text-[15px] font-normal font-['Roboto']">sunday</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="state">
                                    <div class="grow shrink basis-0 flex-col State inline-flex">
                                    <div class="self-stretch h-[50px] px-[5px] py-2.5 flex-col State justify-center items-start gap-2.5 flex">
                                        <div class=" tableaux_titre">
                                            <div ><strong>State</strong></div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                        <div class="yellow2_color bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="w-5 h-5 relative">
                                                <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                </svg>
                                            </div>
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">pending</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                        <div class="yellow2_color bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="w-5 h-5 relative">
                                                <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                </svg>
                                            </div>
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">pending</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex disparu">
                                        <div class="yellow2_color bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="w-5 h-5 relative">
                                                <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                </svg>
                                            </div>
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">pending</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex disparu">
                                        <div class="yellow2_color bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="w-5 h-5 relative">
                                                <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                </svg>
                                            </div>
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">pending</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                        <div class="px-[5px] py-0.5 green2_color bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="w-5 h-5 relative">
                                                <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                </svg>
                                            </div>
                                            <div class="text-[15px] font-normal font-['Roboto']">validated</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                        <div class="px-[5px] py-0.5 red2_color bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="w-5 h-5 relative">
                                                <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                </svg>
                                            </div>
                                            <div class=" text-[15px] font-normal font-['Roboto']">cancelled</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                        <div class="px-[5px] py-0.5 green2_color bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="w-5 h-5 relative">
                                                <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                </svg>
                                            </div>
                                            <div class=" text-[15px] font-normal font-['Roboto']">validated</div>
                                        </div>
                                    </div>
                                    <div class="self-stretch h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                        <div class="yellow2_color bg-opacity-10 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="w-5 h-5 relative">
                                                <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                </svg>
                                            </div>
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">pending</div>
                                        </div>
                                    </div>
                                </div>

                                </div>

                            
                                <div class="flex-col Actions status inline-flex ">
                                    <div class="w-[62px] px-[5px] py-2.5 flex-col justify-center items-start gap-2.5 flex">
                                        <div class=" tableaux_titre">
                                            <div ><strong>Actions</strong></div>
                                        </div>
                                    </div>
                                    <div class="Actions_groupe gap-2.5 inline-flex action">
                                        <div class="px-2.5 py-[5px]  bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex ">
                                            <div class="px-2.5 py-[5px] gris_colorr  rounded-[20px] justify-start items-center gap-[5px] flex">
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                    </svg>
                                                </div>
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">more</div>
                                            </div>
                                        </div>
                                        <div class="px-2.5 py-[5px]  bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="w-5 h-5 relative">
                                                <svg class="w-[25px] h-[25px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                  </svg>
                                            </div>
                                            <div class="text-white text-[15px] font-normal font-['Roboto']">Validate</div>
                                        </div>
                                        <div class="px-2.5 py-[5px]  bg-yellow-200 rounded-[20px] justify-start items-center gap-[5px] flex action">
                                            <div class="w-5 h-5 relative">
                                                  <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6m0 12L6 6"/>
                                                  </svg>
                                            </div>
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Cancel</div>
                                        </div>
                                    </div>
                                    <div class="Actions_groupe gap-2.5 inline-flex">
                                        <div class="px-2.5 py-[5px]  bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="px-2.5 py-[5px] gris_colorr  rounded-[20px] justify-start items-center gap-[5px] flex">
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                    </svg>
                                                </div>
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto'] action">more</div>
                                            </div>
                                        </div>
                                        <div class="px-2.5 py-[5px]  bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex action">
                                            <div class="w-5 h-5 relative">
                                                <svg class="w-[25px] h-[25px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                  </svg>
                                            </div>
                                            <div class="text-white text-[15px] font-normal font-['Roboto']">Validate</div>
                                        </div>
                                        <div class="px-2.5 py-[5px]  bg-yellow-200  rounded-[20px] justify-start items-center gap-[5px] flex action">
                                            <div class="w-5 h-5 relative">
                                                  <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6m0 12L6 6"/>
                                                  </svg>
                                            </div>
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Cancel</div>
                                        </div>
                                    </div>
                                    <div class="Actions_groupe gap-2.5 inline-flex">
                                        <div class="px-2.5 py-[5px]  bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="px-2.5 py-[5px] gris_colorr  rounded-[20px] justify-start items-center gap-[5px] flex disparu">
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                    </svg>
                                                </div>
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto'] action">more</div>
                                            </div>
                                        </div>
                                        <div class="px-2.5 py-[5px]  bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex action">
                                            <div class="w-5 h-5 relative">
                                                <svg class="w-[25px] h-[25px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                  </svg>
                                            </div>
                                            <div class="text-white text-[15px] font-normal font-['Roboto']">Validate</div>
                                        </div>
                                        <div class="px-2.5 py-[5px]  bg-yellow-200  rounded-[20px] justify-start items-center gap-[5px] flex action">
                                            <div class="w-5 h-5 relative">
                                                  <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6m0 12L6 6"/>
                                                  </svg>
                                            </div>
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Cancel</div>
                                        </div>
                                    </div>
                                    <div class="Actions_groupe gap-2.5 inline-flex">
                                        <div class="px-2.5 py-[5px]  bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="px-2.5 py-[5px] gris_colorr  rounded-[20px] justify-start items-center gap-[5px] flex disparu">
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                    </svg>
                                                </div>
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto'] action">more</div>
                                            </div>
                                        </div>
                                        <div class="px-2.5 py-[5px]  bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex action">
                                            <div class="w-5 h-5 relative">
                                                <svg class="w-[25px] h-[25px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                  </svg>
                                            </div>
                                            <div class="text-white text-[15px] font-normal font-['Roboto']">Validate</div>
                                        </div>
                                        <div class="px-2.5 py-[5px]  bg-yellow-200  rounded-[20px] justify-start items-center gap-[5px] flex action">
                                            <div class="w-5 h-5 relative">
                                                  <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6m0 12L6 6"/>
                                                  </svg>
                                            </div>
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Cancel</div>
                                        </div>
                                    </div>
                                    <div class="h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                        <div class="px-2.5 py-[5px] bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="px-2.5 py-[5px]  gris_colorr rounded-[20px] justify-start items-center gap-[5px] flex">
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                    </svg>
                                                </div>
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto'] action">more</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                        <div class="px-2.5 py-[5px] bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="px-2.5 py-[5px]  gris_colorr rounded-[20px] justify-start items-center gap-[5px] flex">
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                    </svg>
                                                </div>
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto'] action">more</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="h-[50px] px-[5px] justify-start items-center gap-2.5 inline-flex">
                                        <div class="px-2.5 py-[5px] bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="px-2.5 py-[5px]  gris_colorr rounded-[20px] justify-start items-center gap-[5px] flex">
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                    </svg>
                                                </div>
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto'] action">more</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="Actions_groupe gap-2.5 inline-flex">
                                        <div class="px-2.5 py-[5px]  bg-neutral-100 rounded-[20px] justify-start items-center gap-[5px] flex">
                                            <div class="px-2.5 py-[5px] gris_colorr  rounded-[20px] justify-start items-center gap-[5px] flex">
                                                <div class="w-5 h-5 relative">
                                                    <svg class="w-4 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                                    </svg>
                                                </div>
                                                <div class="text-neutral-700 text-[15px] font-normal font-['Roboto'] action">more</div>
                                            </div>
                                        </div>
                                        <div class="px-2.5 py-[5px]  bg-teal-400 rounded-[20px] justify-start items-center gap-[5px] flex action">
                                            <div class="w-5 h-5 relative">
                                                <svg class="w-[25px] h-[25px] text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                  </svg>
                                            </div>
                                            <div class="text-white text-[15px] font-normal font-['Roboto']">Validate</div>
                                        </div>
                                        <div class="px-2.5 py-[5px]  bg-yellow-200  rounded-[20px] justify-start items-center gap-[5px] flex action">
                                            <div class="w-5 h-5 relative">
                                                  <svg class="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6m0 12L6 6"/>
                                                  </svg>
                                            </div>
                                            <div class="text-neutral-700 text-[15px] font-normal font-['Roboto']">Cancel</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>






                        <div class=" inline-flex justify-between">
                            <div class="justify-start items-center gap-[26px] flex elment10 ">
                                <div class=" rounded-[10px] gris_color justify-start items-center gap-2.5 flex">
                                    <div class="w-6 h-6 relative">
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
                            <div class="justify-start items-center gap-2.5 flex">
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



<script>


export default {
    name:"pageDashbord2_composant",
    props: {
    label: { required: true, type: String },
  },
};
</script>