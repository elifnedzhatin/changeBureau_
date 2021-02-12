/*-------------------------------------------------------------------------------------------------------------
Задача 1. Change бюро
Преди време Петър си е купил биткойн. Сега ще ходи на екскурзия из Европа и ще му трябва евро. Освен биткойн има 
и китайски юанa. Той иска да обмени парите си в евро за екскурзията. Напишете програма, която да пресмята колко 
евро може да купи спрямо следните валутни курсове:
•	1 биткойн = 1168 лева.
•	1 китайски юан = 0.15 долара.
•	1 долар = 1.76 лева.
•	1 евро = 1.95 лева.
Обменното бюро има комисионна от 0 до 5 процента от крайната сума в евро.
От конзолата се четат 3 числа:
•	На първия ред – броят биткойни. Цяло число в интервала [0…20]
•	На втория ред – броят китайски юана. Реално число в интервала [0.00… 50 000.00]
•	На третия ред – комисионната. Реално число в интервала [0.00 ... 5.00]
---------------------------------------------------------------------------------------------------------------*/
function changeBureau(input){
    let broyBitcoin = Number(input[0]);
    let broyUan = Number(input[1]);
    let broyComisionna = Number(input[2]);

    let uan = 0.15;
    let dolar = 1.76;
    let euro = 1.95;
    let bitcoin = 1168; 

    let sumBitBgn = broyBitcoin * bitcoin; 
    let sumUanDolar = broyUan * uan; 
    let sumDolarBgn = sumUanDolar * dolar;
    let sumBgn = sumBitBgn + sumDolarBgn;
    let sumEuro =  sumBgn / euro; 
    let sumComision = sumEuro * (broyComisionna / 100);
    let result = sumEuro - sumComision;
    let resultFixed = result.toFixed(2);
    console.log(resultFixed);

}
changeBureau(["1","5","5"]); // 569.67
changeBureau(["20","5678","2.4"]); // 12442.24
changeBureau(["7","50200.12","3"]); // 10659.47