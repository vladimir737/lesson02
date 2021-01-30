   //присвоение значений переменным
    let money = 50000;
    let income = 'фриланс';
    let addExpenses = 'Интернет, Такси, Коммуналка';
    let deposit = true;
    let mission = 200000;
    let period = 6;
   //вывод в консоль типов данных 
    console.log(typeof money); 
    console.log(typeof income);
    console.log(typeof deposit);

    console.log(addExpenses.length); //вывод в консоль длину строки addExpenses

    console.log("Период равен", period, "месяцев");  
    console.log("Цель заработать", mission, "рублей");

    console.log(addExpenses.toLowerCase().split(', '));  //приведение строки addExpenses к нижнему регистру
    
    let budgetDay = money;  //присвоение переменной доход на месяц
    console.log(budgetDay/30);  //вывод переменной в консоль
