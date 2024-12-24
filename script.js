// Получаем все контейнеры
const containers = document.querySelectorAll('.container');

// Функция для озвучивания текста
function speakText(event) {
    const text = event.currentTarget.innerText; // Получаем текст из контейнера
    const utterance = new SpeechSynthesisUtterance(text); // Создаем объект для озвучивания

    if (window.speechSynthesis.speaking) {
        // Если в данный момент идет озвучивание, останавливаем его
        window.speechSynthesis.cancel();
    } else {
        // Если озвучивание не идет, запускаем его
        window.speechSynthesis.speak(utterance);
    }
}

// Добавляем обработчик события на клик по каждому контейнеру
containers.forEach(container => {
    container.addEventListener('click', speakText);
});
