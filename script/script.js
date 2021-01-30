   //присвоение значений переменным
    let money = 50;
    let income = 'фриланс';
    let addExpenses = 'Интернет, Такси, Коммуналка';
    let deposit = true;
    let mission = 200;
    let period = 6;
   //вывод в консоль типов данных 
    console.log(typeof money); 
    console.log(typeof income);
    console.log(typeof deposit);

    console.log(addExpenses.length); //вывод в консоль длину строки addExpenses

    console.log("Период равен", period, "месяцев");  
    console.log("Цель заработать", mission, "тысяч рублей");

    console.log(addExpenses.toLowerCase());  //приведение строки addExpenses к нижнему регистру и вывод в консоль
    console.log(addExpenses.split(', '));   //вывод  массива в консоль  

    let budgetDay = money;  //присвоение переменной доход на месяц
    console.log(budgetDay);  //вывод переменной в консоль
