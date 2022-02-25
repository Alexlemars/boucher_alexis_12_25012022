export const dataAverageFormat = arraData => {
    const prevDay = {
        day: 0,
        sessionLength: 0,
    };
    const nextDay = {
        day: 8,
        sessionLength: 0,
    };

    arraData.unshift(prevDay);
    arraData.push(nextDay);

    const array = arraData.map(data => {
        switch (data.day) {
            case 0:
                return { firstLetterDay: '', ...data };
            case 1:
                return { firstLetterDay: 'L', ...data };
            case 2:
                return { firstLetterDay: 'M', ...data };
            case 3:
                return { firstLetterDay: 'M', ...data };
            case 4:
                return { firstLetterDay: 'J', ...data };
            case 5:
                return { firstLetterDay: 'V', ...data };
            case 6:
                return { firstLetterDay: 'S', ...data };
            case 7:
                return { firstLetterDay: 'D', ...data };
            case 8:
                return { firstLetterDay: '', ...data };
            default:
                return { ...data };
        }
    });
    return array;
};