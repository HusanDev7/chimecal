<script setup>
import { ref, onMounted } from "vue";
import Loading from "@/components/loading/Loading.vue";
import HeaderLayout from "./layouts/headerLayout/HeaderLayout.vue";
import FooterLayout from "./layouts/footerLayout/FooterLayout.vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
  return {
    loading,
  };
});
</script>

<template>
  <div class="wrapper">
    <transition name="fade" mode="out-in">
      <div v-if="loading" key="loading">
        <Loading />
      </div>
      <div v-else key="content" class="view">
        <HeaderLayout />
        <main>
          <RouterView />
        </main>
        <FooterLayout />
      </div>
    </transition>
  </div>
</template>