<script setup></script>

<template>
    <div class="container">
        <div class="menu">
            <RouterLink to="/thems/">
                <div class="menu-item item-1" data-aos="fade-up" data-aos-duration="1000">
                    <h3 class="menu-item__title">Mundarija</h3>
                </div>
            </RouterLink>
            <RouterLink to="/control-work/">
                <div class="menu-item item-2" data-aos="fade-up" data-aos-duration="1500">
                    <h3 class="menu-item__title">Nazorat ishlari</h3>
                </div>
            </RouterLink>
            <RouterLink to="/practices/">
                <div class="menu-item item-3" data-aos="fade-up" data-aos-duration="1800">
                    <h3 class="menu-item__title">Amaliy mashg'ulotlar</h3>
                </div>
            </RouterLink>
            <RouterLink to="/labs/">
                <div class="menu-item item-4" data-aos="fade-up" data-aos-duration="2200">
                    <h3 class="menu-item__title">Labaratoriya mashg'ulotlari</h3>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
