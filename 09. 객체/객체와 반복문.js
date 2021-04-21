var grades = {'yoondev01': 10, 'yoondev02': 20, 'yoondev03': 30};

/*
key: yoondev01 / value: 10
key: yoondev02 / value: 20
key: yoondev03 / value: 30
*/
for (key in grades) {
    console.log("key: " + key + " / value: " + grades[key]);
}