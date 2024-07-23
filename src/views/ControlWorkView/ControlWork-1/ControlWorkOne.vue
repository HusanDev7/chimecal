<script setup>
import List from "@/components/icon/List.vue";
import { ref, computed } from "vue";

const questions = ref([
    {
        question: "Sof modda butun hajmi bo'yicha bir xil tarkib va xossaga ega bo'lsa bunday modda qanday nomlanadi?",
        answer: 2,
        options: ["To'yingan", "To'yinmagan", "Gomogen", "Geterogen"],
        selected: null,
    },
    {
        question: "Bir stakan suvda a) 1 choy qoshiq tuz ertilsa b) 1 osh qoshiq tuz ertilsa suv necha gradusda muzlaydi?",
        answer: 1,
        options: ["-4;-2", "-2;-4", "0;-4", "0;-2"],
        selected: null,
    },
    {
        question: "Chokib qolgan qattiq moddadan suyuq moddani qaysi usul bilan ajratib olinadi?",
        answer: 0,
        options: ["Distillash", "Filterlash", "Dekantsiya", "Ajratish voronkasi"],
        selected: null,
    },
    {
        question: "Filtrat nima?",
        answer: 3,
        options: ["Tayorlangan filter qog'oz", "Filterdan o'tmagan tiniq eritma", "Filterdan qolgan cho'kma", "Filterdan o'tgan tiniq ertma"],
        selected: null,
    },

    {
        question: "Oltingugurt va uglerodning allatropik shakllari soni qanday nisbatda bo'ladi?",
        answer: 2,
        options: ["1:1", "1:2", "3:4", "3:6"],
    },

    {
        question: "Qaysi agregat holat mexanik mustahkamllika aniq hajm va shakklga ega?",
        answer: 2,
        options: ["Gaz", "Suyuq", "Qattiq", "Plazma"],
    },

    {
        question: "Oltingugurt atomining nisbiy molekulyar massasi nechiga teng?",
        answer: 1,
        options: ["32g/mol", "32", "5,312*10g", "16"],
    },

    {
        question: "Qattiq holatdan to'g'ridan to'g'ri gaz holatiga o'tish hodisasiga qanday nomlanadi?",
        answer: 2,
        options: ["Allatropiya", "Diffuziya", "Sublimatlash", "Ekvivalent"],
    },

    {
        question: "Molekulalarning o'lchami qanday qiymatga ega bo'ladi?",
        answer: 0,
        options: ["30 angstrm", "3 angstrm", "0,3 nm", "3*10-8 m"],
    },

    {
        question: "Birikma tarkibiy qismlar qanchadan iborat ekanligini aniqlash nima deb ataladi?",
        answer: 0,
        options: ["Miqdor analiz", "Sifat sintezi", "Miqdor sintezi", "Sifat analizi"],
    },
    {
        question: "Qaysi agregat holat o'z shakliga ega emas lekin aniq hajmiy o'lchamga ega?",
        answer: 3,
        options: ["Qattiq", "Plazma", "Gaz", "Suyuq"],
    },
    {
        question: "Bir element atomlaridan turli oddiy moddalar hosil bo'lishi nima deb ataladi?",
        answer: 3,
        options: ["Ekvivalent", "Diffuziya", "Sublimatlanish", "Allatropiya"],
    },
    {
        question: "Valemtlik so'zining ma'nosi nima?",
        answer: 2,
        options: ["Teng qiymat", "Bo'linmas", "Kuch bor", "Zaryadlangan"],
    },
    {
        question: "Sublimatlanish xossasiga ega bo’lgan birikmalarni toping? 1)yod 2)muz 3)naftalin 4)oshtuzi?",
        answer: 1,
        options: ["2,4", "1,3", "1,4", "2,3"],
    },

    {
        question: "Suvda eruvchan turli xildagi tuzlarni suvdan ajratib olish uchun qaysi usuldan foydalaniladi?",
        answer: 2,
        options: ["Distillash", "Tindirish", "Bug'lanish", "Filterlash"],
    },
]);

// ////////////////////////////////////////////////////////////////////////////const quizCompleted = ref(false);

const quizCompleted = ref(false);
const currentQuestion = ref(0);
const score = ref(0);

const getCurrentQuestion = computed(() => questions.value[currentQuestion.value]);

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
        const correctAnswers = Array.isArray(currentQ.answer) ? currentQ.answer.sort().join(",") : currentQ.answer.toString();

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
                <h4 class="control-navbar__question">Qolgan sahifalar:</h4>
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
                            :class="`option ${getCurrentQuestion.selected && getCurrentQuestion.selected.includes(index) ? (index === getCurrentQuestion.answer ? 'Tog\'ri' : 'Noto\'g\'ri') : ''}`">
                            <input
                                type="checkbox"
                                :checked="getCurrentQuestion.selected && getCurrentQuestion.selected.includes(index)"
                                :disabled="getCurrentQuestion.selected && getCurrentQuestion.selected.length > 0 && !getCurrentQuestion.selected.includes(index)"
                                :name="getCurrentQuestion.index"
                                @change="setAnswer($event, index)"
                                class="quiz__checkbox" />
                            <span class="quiz__select__item-title">{{ option }}</span>
                        </label>
                    </div>
                </div>
                <!-- Кнопки навигации -->
                <div class="quiz-btn-cont">
                    <button class="quiz-btn" @click="nextQuestion" :disabled="!getCurrentQuestion.selected">
                        {{ currentPage === totalPages ? "Yakunlash" : getCurrentQuestion.selected === null ? "Javobni tanlang" : "Keyingi savol" }}
                    </button>
                </div>
            </div>

            <!-- Экран завершения теста -->
            <div class="quiz-two" v-else>
                <h3 class="quiz-two-text">Ummumiy natijalar.</h3>
                <h4 class="quiz-two-title">
                    To'g'ri javoblar: <span class="control-navbar-question">{{ score }} ta |</span> <span class="control-navbar-ovarall">{{ totalPages }}</span> ta dan
                </h4>
                <h4 class="quiz-two-title">
                    Olingan ballar: <span class="control-navbar-question">{{ score }}</span> ball <span class="control-navbar-ovarall">150 ta</span> dan
                </h4>

                <!-- Ссылка на возвращение в меню -->
                <RouterLink to="/menu/">
                    <button class="quiz-two-btn-2">Bosh sahifaga qaytish.</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
