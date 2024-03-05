<script setup>
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '../components/BaseButton.vue';


</script>

<template>
    <div class=" h-screen w-screen bg-white flex text-black ">
        <div class="m-auto">
            <img src="/public/assets/images/login_img.png" />
            <div>
                <div>
                    <h1 class="font-bold text-xl uppercase mb-5">cashier</h1>
                    <div class="">
                        <span class="block font-semibold">Welcome to the tiny cashier</span>
                        <span class="block text-gray-400 text-xs">Login with your username and your password</span>
                    </div>
                    <form class="space-y-5 mt-3">
                        <div class=" space-y-2">
                            <BaseInput type="email" placeholder="username" icon="user"/>
                            <BaseInput type="email" placeholder="password"/>
                        </div>

                        <div class="flex">
                            <BaseButton class="ml-auto">Login</BaseButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>