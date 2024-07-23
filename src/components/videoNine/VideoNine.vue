<script setup>
const videoTitle = "Oksidlarning namunalari bilan tanishish";
const videoDescription = "Bu videoda Oksidlarning namunalari bilan tanishish haqida ma'lumot berilagan.";
</script>

<template>
    <div class="container">
        <div class="video">
            <div class="video-item">
                <video class="video-mp4" src="@/assets/video/9.mp4" controls></video>
            </div>
            <div class="video-item">
                <h3 class="video-item-title">{{ videoTitle }}</h3>
                <p class="video-item-text">{{ videoDescription }}</p>
                <button class="video-btn"><a href="https://davriy.sinaps.uz/">D.I.M Davriy jadvalni korish</a></button>
            </div>
        </div>
    </div>
</template>
