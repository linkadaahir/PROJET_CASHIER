<script setup>
import { computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: 'primary'
    }
})

const buttonClass = computed(() => {
    switch (props.color) {
        case 'secondary':

            return 'bg-secondary';
        case 'warning':

            return 'bg-warning';
        default:
            return 'bg-primary text-white';
    }
})
</script>

<template>
    <button :class="['px-3 py-1 rounded-full ', buttonClass]" v-bind="$attrs">
        <slot />
    </button>
</template>