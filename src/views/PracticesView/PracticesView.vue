<script setup>
import { ref, computed } from "vue";
import Next from "@/components/icon/Next.vue";
import Search from "@/components/icon/Search.vue";

const thems = [
    {
        id: 1,
        name: "Atom va uning tuzilishi, proton, neytron va elektronlar",
        link: "/atomic",
    },
];

const searchQuery = ref("");
const query = ref("");

const filteredThems = computed(() => {
    return thems.filter((item) => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const updateSearch = () => {
    searchQuery.value = query.value;
    searchQuery.value ? (query.value = "") : false;
};
</script>

<template>
    <div class="container">
        <div class="thems">
            <div class="thems-search">
                <div class="thems-search-item">
                    <h3 class="thems-info">Malumotlar: {{ filteredThems.length }}</h3>
                </div>
                <div class="thems-search-item">
                    <div class="thems-search-box">
                        <input class="thems-search-inp" type="text" v-model="query" placeholder="Qidiruv"
                            @keypress.enter="updateSearch" required />
                        <button class="thems-btn" @click="updateSearch">
                            <Search />
                        </button>
                    </div>
                </div>
            </div>
            <div class="thems-box" v-for="item in filteredThems" :key="item.id">
                <RouterLink :to="item.link" class="thems-box-item">
                    <h3 class="thems-box-title">{{ item.name }}</h3>
                    <Next />
                </RouterLink>
            </div>
        </div>
    </div>
</template>
