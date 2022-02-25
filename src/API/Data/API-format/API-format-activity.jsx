export const dataActivityFormat = array => {
    const newData = [];
    
    for (let datum of array) {
        const [yyyy, mm, dd] = datum.day.split('-').map(Number); 

        newData.push({
            day: `${dd}`,
            fullDate: `${dd}/${mm}/${yyyy}`,
            kilogram: datum.kilogram,
            calories: datum.calories,
        });
    }
    return newData;
};