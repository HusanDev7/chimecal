<script setup>
import Atom from "@/components/icon/Atom.vue";
</script>

<template>
    <div class="container">
      <nav class="navbar">
        <RouterLink to="/menu"
          ><h4 class="navbar__logo">All Kimyogar</h4>
          <Atom class="logo-icon" />
        </RouterLink>
        <ul class="navbar__list">
          <li class="navbar__list-item">
            <RouterLink to="/info"
              ><h3 class="navbar__info">Mualiflar</h3></RouterLink
            >
          </li>
        </ul>
        <!-- if I add dark light mode i dont no  -->
      </nav>
    </div>
</template>
