<script setup>
import List from "@/components/icon/List.vue";
import { ref, computed } from "vue";

const questions = ref([
  {
    question: "Kislorod yerning qaysi qobig’ida eng ko’p miqdorda uchraydi?",
    answer: 1, // Javob: B
    options: ["A) Litosfera", "B) Atmosfera", "C) Gidrosfera", "D) Biosfera"],
    selected: null,
  },
  {
    question:
      "Qaysi olim kislorodni yangi modda sifatida batafsil izohlab bergan?",
    answer: 1, // Javob: B
    options: ["A) Boyle", "B) Priestly", "C) Lavoisier", "D) Dalton"],
    selected: null,
  },
  {
    question:
      "Ikki yoki undan ortiq moddadan bitta yangi modda olinishi kimyoviy reaksiyaning qaysi turiga mansub?",
    answer: 1, // Javob: B
    options: ["A) Singlet", "B) Sintez", "C) Degradatsiya", "D) Almashinuv"],
    selected: null,
  },
  {
    question: "Yer yuzida eng ko’p tarqalgan elementni aniqlang.",
    answer: 2, // Javob: C
    options: ["A) Temir", "B) Silikon", "C) Kislorod", "D) Vodorod"],
    selected: null,
  },
  {
    question: "Havodagi qaysi gaz (lar) himoya ekrani vazifasini bajaradi?",
    answer: 2, // Javob: C
    options: ["A) Kislorod", "B) Azot", "C) Ozon", "D) Karbondioksid"],
    selected: null,
  },
  {
    question: "Inert gazlarning qaysi biri havo tarkibida hajm jihatdan ko’p?",
    answer: 2, // Javob: C
    options: ["A) Neon", "B) Argon", "C) Xenon", "D) Kripton"],
    selected: null,
  },
  {
    question:
      "X metall 1774-yil 30-sentabrda K. Sheele kashf etgan gaz bilan ta’sirlashmaydi, lekin 1875-yil M.Van Marum kashf etgan gaz bilan ta’sirlashadi. X metalni aniqlang",
    answer: 2, // Javob: C
    options: ["A) Temir", "B) Mis", "C) Rux", "D) Alyuminiy"],
    selected: null,
  },
  {
    question:
      "0°C da 1 litr suvda 49 ml eriydigan gaz o’simlik biomassasini necha foiz qismini tashkil etadi?",
    answer: 1, // Javob: B
    options: ["A) 2.5%", "B) 4.5%", "C) 10%", "D) 20%"],
    selected: null,
  },
  {
    question: "Reaksiyaning issiqlik miqdori nima?",
    answer: 2, // Javob: C
    options: ["A) 1%", "B) 10%", "C) 2.5%", "D) 5%"],
    selected: null,
  },
  {
    question:
      "Havoning doimiy tarkibi qismi hisoblanadigan gazlarning qaysi bir(lar)i suyuq havodan ajratib olinadi?",
    answer: 2, // Javob: C
    options: ["A) Kislorod", "B) Azot", "C) Argon", "D) Karbondioksid"],
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
