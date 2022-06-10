/**
 Домашнее задание TASKS_16.
 Вам необходимо из папки “homework16” реализовать задания №1,№2,№3, №4.
 */

task1();
task2();
task3();
task4();

/** TASK 1 */
// Для всех input необходимо реализовать так,
// чтобы они выводили свой value алертом при нажатии на любой из них,
// но только по первому нажатию.
// Повторное нажатие на input не должно вызывать реакции.
function task1() {
    document.getElementById('task-1-container').addEventListener('click', event => {
        const target = event.target;
        if (target.tagName === 'INPUT' && !target.dataset.checked) {
            target.dataset.checked = 'true';
            alert(target.value);
        }
    })
}

/** TASK 2 */
// Привяжите всем input следующее событие
// - по потери фокуса каждый input выводит
// свое value в абзац с текстом "Вы ввели (такой-то текст)...".
function task2() {
    document.querySelectorAll('#task-2-container input').forEach(input => {
        input.addEventListener('blur', event => {
            const pElement = document.createElement('p');
            pElement.innerText = `Вы ввели "${input.value}"`;
            input.parentNode.appendChild(pElement);
        })
    })
}

/** TASK 3 */
// Дана форма с id="sum-form".
// В ней даны input, в них числа.
// Дана кнопка. По нажатию на эту кнопку получите форму по ее id,
// затем циклом переберите все input в ней и найдите сумму чисел из этих input.
/**
 * ПРИМЕЧАНИЕ: тк нет данных об способе выбора вывода данных выбран alert,
 *      также принято решение остановить функциональность браузера по событию submit,
 *      тк оно не требуется.
 */
function task3() {
    document.getElementById('sum-form-btn')
        .addEventListener("click", event => {
                event.preventDefault();
                // event.stopImmediatePropagation();
                let sum = 0;
                document
                    .getElementById('sum-form')
                    .querySelectorAll('input')
                    .forEach(input => {
                        sum += Number(input.value);
                    });
                alert(sum);
            }
        )
}

/** TASK 4 */
// Дан селект.
// Дан input.
// По изменению селекта выведите текст выбранного пункта в инпут.
function task4() {
    const container = document.getElementById('task-4-container');
    const select = container.getElementsByTagName('select')[0];
    const input = container.getElementsByTagName('input')[0];
    select.addEventListener('change', event=>{
        input.value = select.options[select.options.selectedIndex].innerText;
    })
}

