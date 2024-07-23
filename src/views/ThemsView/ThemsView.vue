<script setup>
import { ref, computed } from "vue";
import Next from "@/components/icon/Next.vue";
import Search from "@/components/icon/Search.vue";

const thems = [
  {
    id: 1,
    name: "Kimyo fani va uning vazifalari",
    link: "/docs/1-Kimyo.pdf",
  },
  {
    id: 2,
    name: "Modda va uning xossalari",
    link: "/docs/2-Modda.pdf",
  },
  {
    id: 3,
    name: "Kimyo xonasidagi jihozlar bilan ishlashda mehnat xafsizligi qoidalari",
    link: "/docs/3-Kimyo.pdf",
  },
  {
    id: 4,
    name: "Amaliy mashg'ulot",
    link: "/docs/4-Amaliy.pdf",
  },
  {
    id: 5,
    name: "Sof modda va aralashmalar",
    link: "/docs/5-Sof.pdf",
  },
  {
    id: 6,
    name: "Amaliy mashg'ulot",
    link: "/docs/6-Amaliy.pdf",
  },
  {
    id: 7,
    name: "Moddalarning agregat holatining o'rganishi",
    link: "/docs/7-Moddalarning.pdf",
  },
  {
    id: 8,
    name: "Fizik va kimyoviy hodisalar",
    link: "/docs/8-Fizik.pdf",
  },
  {
    id: 9,
    name: "IV-Amaliy mashh'ulot",
    link: "/docs/9-I.pdf",
  },
  {
    id: 10,
    name: "Masalalar yechish",
    link: "/docs/10-Masalalar.pdf",
  },
  {
    id: 11,
    name: "Atom",
    link: "/docs/IV-bob.11-.pdf",
  },
  {
    id: 12,
    name: "Atom va uning tuzilishi va proton neytron va elektronlar",
    link: "/docs/12-Atom.pdf",
  },
  {
    id: 13,
    name: "kimyoviy element kimyoviy belgi",
    link: "/docs/13-Kimyoviy.pdf",
  },
  {
    id: 14,
    name: "kimyoviy elementning nisbiy atom massasi",
    link: "/docs/14-Kimyoviy.pdf",
  },
  {
    id: 15,
    name: "Izotoplar Izobarlar Izotonlar",
    link: "/docs/15-Izotoplar.pdf",
  },
  {
    id: 16,
    name: "kimyoviy formula Valentlik.",
    link: "/docs/16-Kimyoviy.pdf",
  },
  {
    id: 17,
    name: "Molekula. Nisbiy molekular massa",
    link: "/docs/17-Molekula..pdf",
  },
  {
    id: 18,
    name: "Oddiy va murakkab moddalar",
    link: "/docs/18-Oddiy.pdf",
  },
  {
    id: 19,
    name: "Modda miqdori Avogadro doimiysi. Moddaning molyar massasi",
    link: "/docs/19-Modda.pdf",
  },
  {
    id: 20,
    name: "Valentlikka oid mashqlar yechish",
    link: "/docs/20-Valentlikka.pdf",
  },
  {
    id: 21,
    name: "Amaliy mashg'ulot",
    link: "/docs/21-Amaliy.pdf",
  },
  {
    id: 22,
    name: "Kimyoviy reaksiya tenglamalarini tuzish",
    link: "/docs/22-Kimyoviy.pdf",
  },
  {
    id: 23,
    name: "Kimyoviy reaksiya tuzishga oid mashqlar",
    link: "/docs/23-24-Kimyoviy.pdf",
  },
  {
    id: 24,
    name: "Bobga doir testlar yechish mashqlar bajarish",
    link: "/docs/23-24-Kimyoviy.pdf.pdf",
  },
  {
    id: 25,
    name: "Kimyoviy elementlaring tasniflashi",
    link: "/docs/23-24-Kimyoviy.pdf",
  },
  {
    id: 26,
    name: "Kimyoviy elementlar tabiy oilalari",
    link: "/docs/III-bob. 2-Kimyoviy.pdf",
  },
  {
    id: 27,
    name: "Kimyoviy elementlar davriy jadvali",
    link: "/docs/III-bob.pdf",
  },
  {
    id: 28,
    name: "Bobga doir testlar yechish mashqlar bajarish",
    link: "/docs/III-bob. 4-Bobga.pdf",
  },
  {
    id: 29,
    name: "Havo va uning tarkibi",
    link: "/docs/IV-bob.pdf",
  },
  {
    id: 30,
    name: "Havoning ifloslanishiga ta'sir etuvchi omillar",
    link: "/docs/IV-bob.pdf",
  },
  {
    id: 31,
    name: "Kislorodning umumiy tavsifi",
    link: "/docs/IV-bob.3.pdf",
  },
  {
    id: 32,
    name: "Kislorodning fizik xossalari va ishlatilishi",
    link: "/docs/IV-bob.4-Kislorod.pdf",
  },
  {
    id: 33,
    name: "Kislorodning fizik xossalari va iahlatilishi",
    link: "/docs/IV-bob.3.pdf",
  },
  {
    id: 34,
    name: "Kislorodning kimyoviy xosssalari",
    link: "/docs/IV-bob.5.pdf",
  },
  { id: 35, name: "Yonish", link: "/docs/IV-bob.6-yonis.pdf" },
  {
    id: 36,
    name: "Amaliy mashg'ulot",
    link: "/docs/VI-7-Su.pdf",
  },
  {
    id: 37,
    name: "Ozon va uning ishlatilishi",
    link: "/docs/IV-bob.8-Ozon.pdf",
  },
  {
    id: 38,
    name: "Kislorod va Ozoning biologik ahamiyati",
    link: "/docs/IV-bob.9-Kislorod.pdf",
  },
  { id: 39, name: "Oksidlar", link: "/docs/IV-bob.9-Kislorod.pdf" },
  {
    id: 40,
    name: "Bobga doir masala va mashqlar",
    link: "/docs/IV-bob.10.pdf",
  },
  { id: 41, name: "Vodorod", link: "/docs/V-bob.1-Vodorod.pdf" },
  {
    id: 42,
    name: "Amaliy mashg'ulot",
    link: "/docs/V-bob.2-Amaliy.pdf",
  },
  {
    id: 43,
    name: "Kislotalar",
    link: "/docs/V-bob.4.pdf",
  },
  {
    id: 44,
    name: "Kislotali yomg'irlar",
    link: "/docs/V-bob.7-Kislota.pdf",
  },
  {
    id: 45,
    name: "Mashq va massalara yechish",
    link: "/docs/V-bob.8-Mashq.pdf",
  },
  {
    id: 46,
    name: "Suvning tarkibi",
    link: "/docs/VI-1-Suvning.pdf",
  },
  {
    id: 47,
    name: "Suvning agregat holatlari va tabiatda aylanishi",
    link: "/docs/VI-2-Suvning.pdf",
  },
  {
    id: 48,
    name: "Suvning fizik xossalari",
    link: "/docs/VI-3-Suvnin.pdf",
  },
  {
    id: 49,
    name: "Suvning kimyoviy xossalari",
    link: "/docs/VI-4-Suvning.pdf",
  },
  {
    id: 50,
    name: "Amaliy mashg'ulot",
    link: "/docs/VI-5-Amaliy.pdf",
  },
  {
    id: 51,
    name: "Neytrallanish reaksiyalari",
    link: "/docs/VI-6-Neytrall.pdf",
  },
  {
    id: 52,
    name: "Suvning ifloslanishi va uni tozalash usullari",
    link: "/docs/VI-7-Su.pdf",
  },
  {
    id: 53,
    name: "Massalalar yechish",
    link: "/docs/VI-8-Masalalar.pdf",
  },
  {
    id: 54,
    name: "Massalalar yechish",
    link: "/docs/VI-8-Masalalar.pdf",
  },
  {
    id: 55,
    name: "Tirik organizmdagi kimyoviy elementlar va ularning ahamiyati",
    link: "/docs/VII-1-Tirik.pdf",
  },
  {
    id: 56,
    name: "Oqsillar Yog'lar Uglevodlar",
    link: "/docs/VII-2-Oqsillar.pdf",
  },
  { id: 57, name: "Vitaminlar", link: "/docs/VII-3-Vitaminlar.pdf" },
  {
    id: 58,
    name: "Minerallarning inson hayotidagi ahamiyati",
    link: "/docs/VII-4-Minerallarning.pdf",
  },
  {
    id: 59,
    name: "Olma tarkibini aniqlash",
    link: "/docs/VII-5-Olma.pdf",
  },
  {
    id: 60,
    name: "Geologik kimyoviy birikmalar",
    link: "/docs/VIII-1-Geologik.pdf",
  },
  {
    id: 61,
    name: "O'zbekistondagi foydali qazilmalar va konlar",
    link: "/docs/VIII-1-Geologik.pdf",
  },
  {
    id: 62,
    name: "Foydali qazilmalarni ishlab chiqarishdagi ekologik aspektlar",
    link: "/docs/VIII-2-O‘zbekiston.pdf",
  },
  {
    id: 63,
    name: "Amaliy mashg'ulot Ekologik izni kamaytirish",
    link: "/docs/VIII-3-Foydali.pdf",
  },
];


const searchQuery = ref("");
const query = ref("");

const filteredThems = computed(() => {
  return thems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
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
            <input
              class="thems-search-inp"
              type="text"
              v-model="query"
              placeholder="Qidiruv"
              @keypress.enter="updateSearch"
              required
            />
            <button class="thems-btn" @click="updateSearch"><Search /></button>
          </div>
        </div>
      </div>
      <div class="thems-box" v-for="item in filteredThems" :key="item.id">
        <a :href="item.link" class="thems-box-item">
          <h3 class="thems-box-title">{{ item.name }}</h3>
          <Next />
        </a>
      </div>
    </div>
  </div>
</template>
