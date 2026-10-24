let studentName = prompt("Введите ваше имя, студент-разработчик:", "Виктор");
if (!studentName) {
    studentName = "Студент";
}

const scores = [85, 42, 90, 78, 95, 48];

function findMax(arr) {
    return Math.max(...arr);
}

function filterHighScores(arr) {
    return arr.filter(score => score >= 80);
}

function calculateSum(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

const maxScore = findMax(scores);
const excellentWorks = filterHighScores(scores);
const totalSum = calculateSum(scores);
const averageScore = totalSum / scores.length;

let failedCount = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 50) {
        failedCount++;
    }
}

alert(`Привет, ${studentName}! У вас ${excellentWorks.length} отличных работ, максимальный балл — ${maxScore}.`);

console.log(`Студент: ${studentName}`);
console.log(`Все баллы: [${scores.join(', ')}]`);
console.log(`Средний балл: ${averageScore.toFixed(2)}`);
console.log(`Количество неудовлетворительных работ (< 50): ${failedCount}`);

if (averageScore >= 85) {
    console.log("Мотивация: Отличный результат! Так держать, продолжай в том же духе!");
} else {
    console.log("Мотивация: Хорошая работа, но есть потенциал для роста. Успехов в учебе!");
}