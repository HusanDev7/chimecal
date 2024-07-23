<script setup>
const props = defineProps({
    size: {
        type: Number,
        default: 40,
    },
    color: {
        type: String,
        default: "#fff",
    },
});
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" class="rotate-icon">
        <g fill="none">
            <circle cx="12" cy="12" r="1" :fill="color" />
            <path
                :stroke="color"
                d="M16.5 12c0 2.7-.548 5.12-1.412 6.848C14.21 20.604 13.09 21.5 12 21.5s-2.21-.896-3.088-2.652C8.048 17.12 7.5 14.7 7.5 12s.548-5.12 1.412-6.847C9.79 3.396 10.91 2.5 12 2.5s2.21.896 3.088 2.653C15.952 6.879 16.5 9.299 16.5 12Z" />
            <path
                :stroke="color"
                d="M14.25 15.897c-2.339 1.35-4.709 2.086-6.636 2.201c-1.96.118-3.297-.405-3.841-1.348c-.545-.944-.33-2.362.753-4.001c1.063-1.61 2.885-3.296 5.224-4.646c2.339-1.35 4.709-2.086 6.636-2.201c1.96-.118 3.297.405 3.841 1.348c.545.943.33 2.362-.753 4c-1.063 1.612-2.885 3.297-5.224 4.647Z" />
            <path
                :stroke="color"
                d="M14.25 8.103c-2.339-1.35-4.709-2.086-6.636-2.201c-1.96-.118-3.297.405-3.841 1.348c-.545.943-.33 2.362.753 4c1.063 1.612 2.885 3.297 5.224 4.647c2.339 1.35 4.709 2.086 6.636 2.201c1.96.118 3.297-.405 3.841-1.348c.545-.943.33-2.362-.753-4c-1.063-1.612-2.885-3.297-5.224-4.647Z" />
        </g>
    </svg>
</template>

<style scoped>
.rotate-icon {
    animation: rotate 3s infinite linear;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
