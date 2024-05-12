function getNumberFact() {
    const dateInput = document.getElementById('dateInput').value;
    const url = `http://numbersapi.com/${dateInput}/date`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('factResult').textContent = data;
        })
        .catch(error => {
            console.error('Ошибка:', error);
            document.getElementById('factResult').textContent = 'Найдена ошибка. Попробуйте ещё раз';
        });
}