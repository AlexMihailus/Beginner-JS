let weight = 0;
let recommendation = '';

weightControl = (weight) => {
    if (weight < 4) {
        recommendation = 'Пора перекусить';
    } else if (weight >= 4 && weight <= 5.5) {
        recommendation = 'Вес в норме';
    } else {
        recommendation = 'Пора на тренировку';
    }
    return console.log(`Вес ${weight}: ${recommendation}`);
};

weightControl(1);
weightControl(3);
weightControl(4);
weightControl(5);
weightControl(10);