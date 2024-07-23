<script setup>
import List from "@/components/icon/List.vue";
import { ref, computed } from "vue";

const questions = ref([
  {
    question: "Yer atmosferasi har doim hozirgi tarkibda bo‘lganmi?",
    answer: 2, // Javob: C
    options: [
      "A) Ha, har doim bir xil tarkibda",
      "B) Yo‘q, vaqt o‘tishi bilan o‘zgarib turgan",
      "C) Yo‘q, vaqt o‘tishi bilan evolyutsiya jarayonida o‘zgarib turgan",
      "D) Ha, faqat tabiiy jarayonlar sababli o‘zgargan"
    ],
    selected: null,
  },
  {
    question: "Dastlabki Yer atmosferasida qanday gazlar mavjud edi?",
    answer: 2, // Javob: C
    options: [
      "A) Kislorod va azot",
      "B) Metan va karbonat angidrid",
      "C) Azot, ammiak, metan, suv bug‘lari",
      "D) Karbonat angidrid va kislorod"
    ],
    selected: null,
  },
  {
    question: "Ultrabinafsha nurlar ta’sirida nima sodir bo‘ladi?",
    answer: 1, // Javob: B
    options: [
      "A) Ammiak azot va vodorodga ajraladi",
      "B) Suv bug‘lari vodorod va kislorodga ajraladi",
      "C) Kislorod uglerod oksidi bilan reaktsiyaga kirishadi",
      "D) Karbonat angidrid hosil bo‘ladi"
    ],
    selected: null,
  },
  {
    question: "Atmosferaning dastlabki tarkibi qanday edi?",
    answer: 3, // Javob: D
    options: [
      "A) Zamonaviy havo tarkibiga o‘xshash",
      "B) Faqat kislorod va azotdan iborat",
      "C) Ammiak va metan ustun",
      "D) Asosiy tarkibiy qism azotdan iborat"
    ],
    selected: null,
  },
  {
    question: "Atmosferaning tabiiy ifloslanish manbalari qaysilar?",
    answer: 0, // Javob: A
    options: [
      "A) O‘rmonlarning yonishi, vulqon otilishi, biokimyoviy reaksiyalar",
      "B) Sanoat chiqindilari, transport ishi",
      "C) Kimyoviy o‘g‘itlardan foydalanish",
      "D) Chiqindilarni qayta ishlash"
    ],
    selected: null,
  },
  {
    question: "Ifloslanishni kamaytirish uchun qanday usullar qo‘llaniladi?",
    answer: 1, // Javob: B
    options: [
      "A) Muqobil energiyadan foydalanish",
      "B) Transport ishi tarkibini o‘zgartirish",
      "C) Kimyoviy o‘g‘itlardan foydalanishni oshirish",
      "D) Havoni ifloslantiruvchi moddalarni kamaytirish"
    ],
    selected: null,
  },
  {
    question: "Havoni ifloslanishni kamaytirish usullari qaysilar?",
    answer: 0, // Javob: A
    options: [
      "A) Sanoat chiqindilarini kamaytirish, yashil maydonlar ulushini oshirish",
      "B) Faqat kimyoviy o‘g‘itlardan foydalanishni kamaytirish",
      "C) Avtomobil qatnovlarini oshirish",
      "D) Havoni ifloslantiruvchi moddalarni ko‘paytirish"
    ],
    selected: null,
  },
  {
    question: "Havoda qanday fizikalaviy ifloslanish turlari mavjud?",
    answer: 1, // Javob: B
    options: [
      "A) Kimyoviy va bakterial ifloslanish",
      "B) Chang zarralari va radionuklidlar",
      "C) Mexanik va issiqlik ifloslanish",
      "D) Radiofaol va organik ifloslanish"
    ],
    selected: null,
  },
  {
    question: "Havo tarkibida qanday tasodifiy komponentlar mavjud bo‘lishi mumkin?",
    answer: 2, // Javob: C
    options: [
      "A) Kislorod va azot",
      "B) Karbondioksid va metan",
      "C) Chang zarralari va radioaktiv moddalar",
      "D) Ammiak va aldegidlar"
    ],
    selected: null,
  },
  {
    question: "Inson nafas olish jarayonida har kuni qancha havo yutadi?",
    answer: 3, // Javob: D
    options: [
      "A) 10 kg",
      "B) 15 kg",
      "C) 20 kg",
      "D) 25 kg"
    ],
    selected: null,
  },
  {
    question: "Bir avtomobil 100 km masofani kamroq bosib o‘tsa, odam qancha vaqt nafas oladi?",
    answer: 2, // Javob: C
    options: [
      "A) 100 kun",
      "B) 200 kun",
      "C) 347 kun 14 soat 52 daqiqa",
      "D) 50 kun"
    ],
    selected: null,
  },
  {
    question: "Atmosferaning tabiiy ifloslanishining asosiy manbalari qanday?",
    answer: 0, // Javob: A
    options: [
      "A) O‘rmon yonishi va vulqon otilishi",
      "B) Sanoat chiqindilari",
      "C) Transport vositalari chiqindilari",
      "D) Kimyoviy o‘g‘itlar"
    ],
    selected: null,
  },
  {
    question: "Havoni ifloslanishidan qanday himoya qilish mumkin?",
    answer: 1, // Javob: B
    options: [
      "A) Chiqindilarni kamaytirish",
      "B) Muqobil energiyalardan foydalanish",
      "C) Kimyoviy o‘g‘itlardan foydalanishni oshirish",
      "D) Transport ishi tarkibini o‘zgartirish"
    ],
    selected: null,
  },
  {
    question: "Havoning ifloslanishi qanday tabiiy va sun’iy omillar tomonidan yuzaga keladi?",
    answer: 2, // Javob: C
    options: [
      "A) Tabiiy ifloslanish faqat biologik jarayonlardan",
      "B) Sun’iy ifloslanish faqat sanoat chiqindilaridan",
      "C) Tabiiy va antropogen omillar",
      "D) Faqat sun’iy omillar"
    ],
    selected: null,
  },
  {
    question: "Yer atmosferasida qaysi gazlar mavjud?",
    answer: 2, // Javob: C
    options: [
      "A) Faol kislorod, azot, metan",
      "B) Ammiak, metan, karbonat angidrid",
      "C) Azot, kislorod, karbonat angidrid",
      "D) Argon, karbonat angidrid, kislorod"
    ],
    selected: null,
  },
  {
    question: "Atmosferaning ifloslanishining biologik turlari qanday?",
    answer: 1, // Javob: B
    options: [
      "A) Kimyoviy va fizik ifloslanish",
      "B) Viruslar, patogen bakteriyalar, qo‘ziqorin sporalari",
      "C) Radioaktiv moddalar va chang zarralari",
      "D) Sanoat chiqindilari va avtomobil gazlari"
    ],
    selected: null,
  }
]);


// ////////////////////////////////////////////////////////////////////////////const quizCompleted = ref(false);

const quizCompleted = ref(false);
const currentQuestion = ref(0);
const score = ref(0);

const getCurrentQuestion = computed(
  () => questions.value[currentQuestion.value]
);

const setAnswer = (event, index) => {
  const isChecked = event.target.checked;
  const currentQ = getCurrentQuestion.value;

  if (!Array.isArray(currentQ.selected)) {
    currentQ.selected = [];
  }

  if (isChecked) {
    currentQ.selected.push(index);
  } else {
    currentQ.selected = currentQ.selected.filter((item) => item !== index);
  }
};

const nextQuestion = () => {
  const currentQ = getCurrentQuestion.value;

  if (currentQ.selected !== null) {
    const selectedAnswers = currentQ.selected.sort().join(",");
    const correctAnswers = Array.isArray(currentQ.answer)
      ? currentQ.answer.sort().join(",")
      : currentQ.answer.toString();

    if (selectedAnswers === correctAnswers) {
      score.value++;
    }
  }

  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
  } else {
    quizCompleted.value = true;
  }
};

const currentPage = computed(() => currentQuestion.value + 1);
const totalPages = computed(() => questions.value.length);
const remainingQuestions = computed(() => totalPages.value - currentPage.value);
</script>

<template>
  <div class="container">
    <!-- Навигация и управление -->
    <div class="control">
      <!-- Навигационная панель -->
      <div class="control-navbar">
        <div class="control-navbar__item"><List /> Savollar roʻyxati</div>
      </div>

      <!-- Отображение баллов и прогресса -->
      <div class="control-navbar__item">
        <!-- Оставшиеся вопросы -->
        <h4 class="control-navbar__question">Sahifalar:</h4>
        <span class="control-navbar-question">{{ currentPage }}</span> |
        <span class="control-navbar-ovarall">{{ totalPages }}</span>

        <div class="control-count">
          <h4 class="control-navbar__question">Ball:</h4>
          <span class="control-navbar-question">{{ score }}</span> |
          <span class="control-navbar-ovarall">150</span>
        </div>
      </div>
    </div>

    <!-- Контент теста -->
    <div class="control-box">
      <div class="quiz" v-if="!quizCompleted">
        <h3 class="quiz-question">{{ getCurrentQuestion.question }}</h3>
        <div class="quiz__select">
          <!-- Варианты ответов и выбор -->
          <div class="quiz__select__item">
            <label
              class="quiz__checkbox-label"
              v-for="(option, index) in getCurrentQuestion.options"
              :key="index"
              :class="`option ${
                getCurrentQuestion.selected &&
                getCurrentQuestion.selected.includes(index)
                  ? index === getCurrentQuestion.answer
                    ? 'Tog\'ri'
                    : 'Noto\'g\'ri'
                  : ''
              }`"
            >
              <input
                type="checkbox"
                :checked="
                  getCurrentQuestion.selected &&
                  getCurrentQuestion.selected.includes(index)
                "
                :disabled="
                  getCurrentQuestion.selected &&
                  getCurrentQuestion.selected.length > 0 &&
                  !getCurrentQuestion.selected.includes(index)
                "
                :name="getCurrentQuestion.index"
                @change="setAnswer($event, index)"
                class="quiz__checkbox"
              />
              <span class="quiz__select__item-title">{{ option }}</span>
            </label>
          </div>
        </div>
        <!-- Кнопки навигации -->
        <div class="quiz-btn-cont">
          <button
            class="quiz-btn"
            @click="nextQuestion"
            :disabled="!getCurrentQuestion.selected"
          >
            {{
              currentPage === totalPages
                ? "Yakunlash"
                : getCurrentQuestion.selected === null
                ? "Javobni tanlang"
                : "Keyingi savol"
            }}
          </button>
        </div>
      </div>

      <!-- Экран завершения теста -->
      <div class="quiz-two" v-else>
        <h3 class="quiz-two-text">Ummumiy natijalar.</h3>
        <h4 class="quiz-two-title">
          To'g'ri javoblar:
          <span class="control-navbar-question">{{ score }} ta</span> |
          <span class="control-navbar-ovarall">{{ totalPages }} ta</span> dan
        </h4>
        <h4 class="quiz-two-title">
          Olingan ballar:
          <span class="control-navbar-question">{{ score }}</span> ball
          <span class="control-navbar-ovarall">150 ta</span> dan
        </h4>

        <!-- Ссылка на возвращение в меню -->
        <RouterLink to="/menu/">
          <button class="quiz-two-btn-2">Bosh sahifaga qaytish.</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
