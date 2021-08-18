finalGrade = (grade, projects) => {
    if (grade > 90 || projects > 10) {
        return 100;
    } else if (grade > 75 || projects >= 5) {
        return 90;
    } else if (grade > 50 || projects >= 2) {
        return 75;
    } else {
        return 0;
    }
};

console.log(finalGrade(100, 12));