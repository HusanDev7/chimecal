<script setup></script>

<template>
  <footer>
    <div class="footer">
      <span class="footer-line"></span>
      <p class="footer-info">
        Create in 2024 by <a href="https://t.me/husan_0_7">Husan</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 7px;
  background: #fff;
}

.footer-line {
  width: 100%;
  height: 0.5px;
  background: #9f9595;
}

.footer-info {
  font-size: 16px;
  margin: 10px 0;
}

.footer a {
  color: #2c9caf;
}
</style>
