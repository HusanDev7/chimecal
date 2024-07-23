<script setup>
import { ref, computed } from "vue";
import Next from "@/components/icon/Next.vue";
import Search from "@/components/icon/Search.vue";

const thems = [
    {
        id: 1,
        name: "Kimyo laboratorya xonasida ishlatiladigan asboblar va jihozlar",
        link: "/video-1",
    },

    {
        id: 2,
        name: "Ishqoriy yer mettalarning suvga tasiri",
        link: "/video-2",
    },

    {
        id: 3,
        name: "Kislorodning olinishi",
        link: "/video-3",
    },

    {
        id: 4,
        name: "Kislotaning metallar bilan o'zaro tasiri",
        link: "/video-4",
    },

    {
        id: 5,
        name: "Miss (II) gidroksiding qizdirilganda parchalanishi",
        link: "/video-5",
    },

    {
        id: 6,
        name: "Neytrallanish reaksiyasi",
        link: "/video-6",
    },

    {
        id: 7,
        name: "Kislota ertmalaring indikatorlarga tasiri",
        link: "/video-7",
    },

    {
        id: 8,
        name: "Kislotalarning metall oksidlari bilan o'zaro tasiri",
        link: "/video-8",
    },

    {
        id: 9,
        name: "Oksidlarning namunalari bilan tanishish",
        link: "/video-9",
    },

    {
        id: 10,
        name: "Vodorodning olinish",
        link: "/video-10",
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
                        <input class="thems-search-inp" type="text" v-model="query" placeholder="Qidiruv" @keypress.enter="updateSearch" required />
                        <button class="thems-btn" @click="updateSearch"><Search /></button>
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
