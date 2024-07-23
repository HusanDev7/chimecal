<script setup>
import List from "@/components/icon/List.vue";
import { ref, computed } from "vue";

const questions = ref([
  {
    question: "Suv molekulasi qanday valent burchakka ega?",
    answer: 1, // Javob: B
    options: ["A) 90°", "B) 104.5°", "C) 120°", "D) 180°"],
    selected: null,
  },
  {
    question: "Eng yaxshi issiqlik o’tkazuvchi gaz qaysi?",
    answer: 1, // Javob: B
    options: ["A) Azot", "B) Gidrogen", "C) Kislota", "D) Metan"],
    selected: null,
  },
  {
    question: "Suv 0°C dan +4°C gacha isitilganda zichlik qanday o’zgaradi?",
    answer: 1, // Javob: B
    options: [
      "A) Kamayadi",
      "B) Oshadi",
      "C) O’zgarmaydi",
      "D) Oldin o’sadi, keyin kamayadi",
    ],
    selected: null,
  },
  {
    question:
      "Qizdirilgan temir suv bug‘i bilan reaksiyaga kirishib qaysi mahsulotni hosil qiladi?",
    answer: 2, // Javob: C
    options: [
      "A) Temir oksid",
      "B) Temir klorid",
      "C) Temir oksid va vodorod",
      "D) Temir sulfid",
    ],
    selected: null,
  },
  {
    question:
      "1 kg sintetik rezina olish uchun sarflanadigan suv miqdori 1 kg bug’doy olish uchun sarflanadigan suv miqdoridan",
    answer: 2, // Javob: C
    options: ["A) Kamroq", "B) Ko’proq", "C) Juda ko’p", "D) Teng"],
    selected: null,
  },
  {
    question:
      "Suvni tozalashning qaysi bosqichida tiniq suv toza qum yordamida filtrlanadi va kolloid holidagi qo‘shimchalar hamda",
    answer: 2, // Javob: C
    options: [
      "A) Koagulyatsiya",
      "B) Sedimentatsiya",
      "C) Filtratsiya",
      "D) Dezinfektsiya",
    ],
    selected: null,
  },
  {
    question:
      "Quyidagi fikrlarning qaysilarida kimyoviy element haqida fikr yuritilayotganini aniqlang. 1)Temirda magnitga tortilish xususiyati mavjud; 2)Xlorofil tarkibida magniy mavjud; 3)Fransiy, galliy va seziy oddiy sharoitda qattiq; 4)qalqonsimon bez tarkibida yod mavjud; 5)ftorning nisbiy elektromanfiyligi eng katta qiymatga ega",
    answer: 2, // Javob: C
    options: ["A) 1, 2", "B) 2, 4", "C) 2, 4, 5", "D) 1, 3, 5"],
    selected: null,
  },
  {
    question:
      "Quyidagi fikrlarning qaysilari to’g’ri? 1) fizik jarayonlarda molekula ham, atomlar ham saqlanib qoladi; 2) fizik jarayonlarda molekula saqlanmaydi, atomlar saqlanadi; 3)kimyoviy jarayonlarda molekulasa qlanmaydi, atomlar saqlanadi; 4)kimyoviy jarayonlarda molekula ham, atomlar ham saqlanmaydi.",
    answer: 1, // Javob: B
    options: ["A) 1, 4", "B) 1, 3", "C) 2, 4", "D) 3, 4"],
    selected: null,
  },
  {
    question:
      "Yerdagi suvning necha %ini yerosti grunt suvlari va ko‘l, daryolardagi chuchuk suv tashkil etadi?",
    answer: 2, // Javob: C
    options: ["A) 1%", "B) 10%", "C) 2.5%", "D) 5%"],
    selected: null,
  },
  {
    question: "Yerning qaysi qatlamida 14 ming km3 miqdorida suv bor?",
    answer: 2, // Javob: C
    options: ["A) Atmosfera", "B) Litosfera", "C) Gidrosfera", "D) Biosfera"],
    selected: null,
  },
  {
    question:
      "Yer yuzidagi suvning 30 mln. km3 dan ortiq qismi qayrerda uchraydi?",
    answer: 2, // Javob: C
    options: ["A) Oqim", "B) Ko’l", "C) Okean", "D) Daryo"],
    selected: null,
  },
  {
    question: "Nima uchun muz suvda cho’kmaydi?",
    answer: 2, // Javob: C
    options: [
      "A) Muzning zichligi katta",
      "B) Suvning zichligi katta",
      "C) Muzning zichligi suvnikidan kichik",
      "D) Muzning tuzilishi suvda o’zgaradi",
    ],
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
