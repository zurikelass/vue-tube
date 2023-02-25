<script setup>
import HorizontalMenu from '../components/navigation/HorizontalMenu.vue'
</script>
<template>
    <header>
        <HorizontalMenu />
    </header>
    <div class="container mx-auto px-4">
        <slot />
    </div>
</template>