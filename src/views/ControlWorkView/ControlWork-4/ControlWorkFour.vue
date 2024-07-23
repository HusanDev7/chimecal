<script setup>
import List from "@/components/icon/List.vue";
import { ref, computed } from "vue";

const questions = ref([
  {
    question: "Karrali nisbatlar qonuni muallifi kim?",
    answer: 1, // Javob: B
    options: ["A) Avogadro", "B) Dalton", "C) Lomonosov", "D) Mendelyeev"],
    selected: null,
  },
  {
    question: "Avagadro qonuni faqat qanday holatdagi moddalarga ta’sir etadi?",
    answer: 1, // Javob: B
    options: ["A) Qattiq", "B) Gaz", "C) Suyuqlik", "D) Plazma"],
    selected: null,
  },
  {
    question:
      "Quyidagilarning qaysilari kimyoviy hodisa hisoblanmaydi? 1)mis idishning havoda qorayishi; 2)suvning muzlashi; 3)kislotaga asos ta’sir etishi; 4)qumni sement bilan aralashtirish; 5)havoni sovutib kislorod olish; 6)metallning havoda oksidlanishi",
    answer: 1, // Javob: B
    options: ["A) 1, 2, 3", "B) 2, 4", "C) 4, 5", "D) 1, 3, 6"],
    selected: null,
  },
  {
    question:
      "Kimyoviy reaksiyalarning kimyoviy formulalar yordamida ifodalanishi nima deb ataladi?",
    answer: 2, // Javob: C
    options: ["A) Ionlash", "B) Dispersiya", "C) Tenglama", "D) Elektroliz"],
    selected: null,
  },
  {
    question: "Yer yuzida eng ko’p tarqalgan elementni aniqlang.",
    answer: 2, // Javob: C
    options: ["A) Kremniy", "B) Aluminiy", "C) Kislorod", "D) Vodorod"],
    selected: null,
  },
  {
    question:
      "1772-1789-yillarda qaysi olim yopiq idishda olib borilgan tajribalarda umumiy massa o‘zgarmasligini kuzatgan?",
    answer: 2, // Javob: C
    options: ["A) Boyle", "B) Newton", "C) Lavoisier", "D) Priestly"],
    selected: null,
  },
  {
    question:
      "Quyidagi fikrlarning qaysilarida kimyoviy element haqida fikr yuritilayotganini aniqlang. 1)Temirda magnitga tortilish xususiyati mavjud; 2)Xlorofil tarkibida magniy mavjud; 3)Fransiy, galliy va seziy oddiy sharoitda qattiq; 4)qalqonsimon bez tarkibida yod mavjud; 5)ftorning nisbiy elektromanfiyligi eng katta qiymatga ega",
    answer: 2, // Javob: C
    options: ["A) 1, 2, 3", "B) 3, 4, 5", "C) 1, 4, 5", "D) 2, 3, 4"],
    selected: null,
  },
  {
    question:
      "Quyidagi fikrlarning qaysilari to’g’ri? 1) fizik jarayonlarda molekula ham, atomlar ham saqlanib qoladi; 2) fizik jarayonlarda molekula saqlanmaydi, atomlar saqlanadi; 3)kimyoviy jarayonlarda molekulasa qlanmaydi, atomlar saqlanadi; 4)kimyoviy jarayonlarda molekula ham, atomlar ham saqlanmaydi.",
    answer: 1, // Javob: A
    options: ["A) 1, 3", "B) 2, 4", "C) 1, 4", "D) 3, 4"],
    selected: null,
  },
  {
    question: "Suv necha gradusda (oC) maksimal zichlikka ega bo’ladi?",
    answer: 2, // Javob: C
    options: ["A) 0", "B) 2", "C) 4", "D) 100"],
    selected: null,
  },
  {
    question:
      "“Har qanday kimyoviy sof modda olinish usuli va joyidan qat’i nazar doimiy tarkibga ega bo‘ladi” ushbu tar’rifga mos keluvchi qonunni yaratgan olim kim?",
    answer: 2, // Javob: C
    options: ["A) Lavoisier", "B) Boyle", "C) Proust", "D) Avogadro"],
    selected: null,
  },
  {
    question:
      "“Bir xil sharoitda o‘zaro teng hajmdagi turli xildagi gazlarda molekulalar soni teng bo‘ladi” ushbu ta’rif qaysi qonunga?",
    answer: 2, // Javob: C
    options: ["A) Gay-Lussac", "B) Boyle-Mariotte", "C) Avogadro", "D) Dalton"],
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
