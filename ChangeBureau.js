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
