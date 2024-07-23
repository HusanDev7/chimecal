<template>
  <div class="container">
    <video class="home-video" loop autoplay muted playsinline>
      <source src="@/assets/video/particlas.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео тег.
    </video>
    <div class="home">
      <h1 class="home-title">
        Axborot texnologiyalari orqali o'quvchilarning umumo'quv ko'nikmalarini
        shakillantirish.
      </h1>
      <RouterLink to="/menu"
        ><button class="home-next">Kirish</button></RouterLink
      >
    </div>
  </div>
</template>
