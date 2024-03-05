<script setup>
import { ref } from 'vue';
import BaseIcon from './BaseIcon.vue';
const isFocus = ref(false)
defineProps({
    icon: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
})
</script>

<template>
    <div>
        <label for="" v-if="label"></label>
        <!-- content -->
        <div :class="['px-3 py-2 rounded-lg border-2 flex', isFocus ? 'border-primary' : '']">
            <div class="mr-2" v-if="icon">
                <BaseIcon :name="icon" />
                <!-- icon -->
            </div>
            <input class="outline-0 p-0 focus:outline-0 border-none w-full text-xs"  @focusin="isFocus = true" @focusout="isFocus = false"
                :placeholder="placeholder" :type="type">
        </div>
    </div>
</template>