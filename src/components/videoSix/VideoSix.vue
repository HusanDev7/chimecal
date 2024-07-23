<script setup>
const videoTitle = "Neytrallanish reaksiyasi";
const videoDescription = "Bu videoda Neytrallanish reaksiyasi haqida ma'lumot beriladi.";
</script>

<template>
    <div class="container">
        <div class="video">
            <div class="video-item">
                <!-- <video class="video-mp4" src="@/assets/video/6.mp4" controls></video> -->
            </div>
            <div class="video-item">
                <h3 class="video-item-title">{{ videoTitle }}</h3>
                <p class="video-item-text">{{ videoDescription }}</p>
                <button class="video-btn"><a href="https://davriy.sinaps.uz/">D.I.M Davriy jadvalni korish</a></button>
            </div>
        </div>
    </div>
</template>
