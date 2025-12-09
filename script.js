// script.js

// Функции для показа alert
function contactNikita() {
    alert('Бузаджи Никита\nТелефон: +7 (926) 663-52-50');
}

function contactMaria() {
    alert('Самохвалова Мария \nТелефон: +7 (985) 956-89-75');
}

// Функция для отображения приветствия
function showGreeting() {
    alert('Добро пожаловать на нашу страницу-визитку! 🎉\nМы рады приветствовать вас и надеемся, что наше резюме произведет на вас положительное впечатление.\nС уважением, Никита и Мария!');
}

// Функция для переключения видимости диагональной линии
function toggleLineVisibility() {
    const checkbox = document.getElementById('toggleLine');
    const line = document.querySelector('.crossed-cell svg line');
    
    if (line) {
        if (checkbox.checked) {
            line.style.display = 'block'; // Линия видна
        } else {
            line.style.display = 'none'; // Линия скрыта
        }
    }
}

// Функция для инициализации чекбокса с правильным состоянием
function initCheckbox() {
    const checkbox = document.getElementById('toggleLine');
    const line = document.querySelector('.crossed-cell svg line');
    
    if (checkbox && line) {
        // По умолчанию линия видна, чекбокс должен быть включен
        checkbox.checked = true;
        line.style.display = 'block';
        
        // Удаляем старый обработчик, если есть, и добавляем новый
        checkbox.onchange = function() {
            if (this.checked) {
                line.style.display = 'block';
            } else {
                line.style.display = 'none';
            }
        };
    }
}

// Оригинальное содержимое ячейки с действиями
function getOriginalActionContent() {
    return `
        <strong>Быстрые действия</strong><br><br>
        <input type="button" value="Связаться с Никитой" onclick="contactNikita()">
        <br><br>
        <input type="button" value="Связаться с Марией" onclick="contactMaria()">
    `;
}

// Функция для обновления отображения в зависимости от выбранной опции
function updateDisplay() {
    const selector = document.getElementById('control-selector');
    const actionCell = document.getElementById('action-cell');
    const selectedValue = selector.value;
    
    switch(selectedValue) {
        case 'original':
            // Возвращаем оригинальные кнопки
            actionCell.innerHTML = getOriginalActionContent();
            break;
            
        case 'button':
            // Отображаем кнопку с приветствием
            actionCell.innerHTML = `
                <strong>Быстрые действия</strong><br><br>
                <input type="button" value="Поприветствовать" onclick="showGreeting()">
            `;
            break;
            
        case 'checkbox':
            // Отображаем чекбокс для управления видимостью линии
            actionCell.innerHTML = `
                <strong>Управление графикой</strong><br><br>
                <label>
                    <input type="checkbox" id="toggleLine" checked>
                    Показать/скрыть диагональную линию
                </label>
            `;
            // Инициализируем чекбокс после добавления в DOM
            setTimeout(initCheckbox, 0);
            break;
            
        case 'image':
            // Отображаем изображение, дублирующее фотографию автора
            const originalImg = document.getElementById('author-photo');
            if (originalImg) {
                actionCell.innerHTML = `
                    <strong>Дублирование фотографии</strong><br><br>
                    <img src="${originalImg.src}" alt="Дубликат фотографии" width="200">
                `;
            }
            break;
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const selector = document.getElementById('control-selector');
    const actionCell = document.getElementById('action-cell');
    
    // Сохраняем оригинальное содержимое
    actionCell.innerHTML = getOriginalActionContent();
    
    // Устанавливаем линию видимой по умолчанию
    const line = document.querySelector('.crossed-cell svg line');
    if (line) {
        line.style.display = 'block';
    }
    
    // Инициализируем обработчик изменения выпадающего списка
    selector.addEventListener('change', updateDisplay);
    
    console.log('JavaScript для управления элементами страницы успешно загружен!');
});