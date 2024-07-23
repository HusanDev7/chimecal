<script setup>
import List from "@/components/icon/List.vue";
import { ref, computed } from "vue";
const questions = ref([
  {
    question: "Respublikamizning qaysi konlaridan marmar qazib olinadi?",
    answer: 1, // Javob: B
    options: ["A) Qoraqalpog'iston konlari", "B) Toshkent konlari", "C) Farg'ona konlari", "D) Samarqand konlari"],
    selected: null,
  },
  {
    question: "Al2O3 ning ekvivalentini hisoblang?",
    answer: 1, // Javob: B
    options: ["A) 27", "B) 54", "C) 36", "D) 18"],
    selected: null,
  },
  {
    question: "Ortoborat kislotaning ekvivalentini aniqlang?",
    answer: 1, // Javob: B
    options: ["A) 37", "B) 19", "C) 38", "D) 20"],
    selected: null,
  },
  {
    question: "Inson organizmi umumiy massasining qancha (%) qismini tuz tashkil etadi?",
    answer: 2, // Javob: C
    options: ["A) 2%", "B) 4%", "C) 6%", "D) 8%"],
    selected: null,
  },
  {
    question: "Qizil qon tuzi va sariq qon tuzi tarkibidagi atomlar yig’indisini aniqlang.?",
    answer: 2, // Javob: C
    options: ["A) 52", "B) 76", "C) 88", "D) 100"],
    selected: null,
  },
  {
    question: "Inert gazlarning qaysi biri havo tarkibida hajm jihatdan ko’p?",
    answer: 2, // Javob: C
    options: ["A) Neon", "B) Argon", "C) Xenon", "D) Kripton"],
    selected: null,
  },
  {
    question: "X metall 1774-yil 30-sentabrda K. Sheele kashf etgan gaz bilan ta’sirlashmaydi, lekin 1875-yil M.Van Marum kashf etgan gaz bilan ta’sirlashadi. X metalni aniqlang",
    answer: 2, // Javob: C
    options: ["A) Temir", "B) Mis", "C) Rux", "D) Alyuminiy"],
    selected: null,
  },
  {
    question: "0°C da 1 litr suvda 49 ml eriydigan gaz o’simlik biomassasini necha foiz qismini tashkil etadi?",
    answer: 1, // Javob: B
    options: ["A) 2.5%", "B) 4.5%", "C) 10%", "D) 20%"],
    selected: null,
  },
  {
    question: "Reaksiyaning issiqlik miqdori nima?",
    answer: 2, // Javob: C
    options: ["A) 1% (J/mol)", "B) 10% (J/mol)", "C) 2.5% (J/mol)", "D) 5% (J/mol)"],
    selected: null,
  },
  {
    question: "Havoning doimiy tarkibi qismi hisoblanadigan gazlarning qaysi bir(lar)i suyuq havodan ajratib olinadi?",
    answer: 2, // Javob: C
    options: ["A) Kislorod", "B) Azot", "C) Argon", "D) Karbondioksid"],
    selected: null,
  },
  {
    question: "Suvning o‘rta kattalikdagi molekulasi qanday struktura ko‘rsatadi?",
    answer: 1, // Javob: B
    options: ["A) Lineer", "B) Burchakli", "C) Tetraedral", "D) Egiluvchan"],
    selected: null,
  },
  {
    question: "Yupqa va yuqori zichlikdagi gazlar qaysi holatlarda ko‘proq uchraydi?",
    answer: 3, // Javob: D
    options: ["A) Suyuqlikda", "B) Qattiqlikda", "C) Gasda", "D) Suyuqlik va gazda"],
    selected: null,
  },
  {
    question: "Suv qanday holatda kristallanishi mumkin?",
    answer: 0, // Javob: A
    options: ["A) Muz holida", "B) Suyuq holatda", "C) Gaz holatda", "D) Qo‘shilgan holatda"],
    selected: null,
  },
  {
    question: "Havo tarkibidagi eng katta gazlar nisbati qaysi?",
    answer: 1, // Javob: B
    options: ["A) Karbondioksid", "B) Azot", "C) Ozon", "D) Argon"],
    selected: null,
  },
  {
    question: "Kislorod molekulasi qanday bog‘lanishga ega?",
    answer: 2, // Javob: C
    options: ["A) Yagona bog‘lanish", "B) Ikkita bog‘lanish", "C) Uchta bog‘lanish", "D) To‘rt bog‘lanish"],
    selected: null,
  },
  {
    question: "Kimyoviy reaksiyalar turlari qaysilar?",
    answer: 0, // Javob: A
    options: ["A) Sintez, decompozitsiya, almashinuv", "B) Egiluvchanlik, kimyoviy xususiyat", "C) Molekular ta’sir", "D) Kimyoviy va fizik o‘zgarishlar"],
    selected: null,
  },
  {
    question: "Kimyoviy formulalarni qanday ifodalaymiz?",
    answer: 1, // Javob: B
    options: ["A) Raqamli ifoda", "B) Simvolik ifoda", "C) Grafik ifoda", "D) Matnli ifoda"],
    selected: null,
  },
  {
    question: "Kimyoviy elementlarning klassifikatsiyasi qanday amalga oshiriladi?",
    answer: 2, // Javob: C
    options: ["A) Fizik xususiyatlariga qarab", "B) Biologik faoliyatiga qarab", "C) Atomning yadrosiga qarab", "D) Rangiga qarab"],
    selected: null,
  },
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
