function verifyNumber(){
    console.log('O botão verifyNumber foi apertado')
    let numerosSorteados = [15, 8, 90, 75, 102, 6, 2];
    console.log(`Os numeros são ${numerosSorteados}`);
    numerosSorteados.sort(function(a,b){return a - b;});
    alert(`Tais começou a anotar e os numeros em ordem foram:${numerosSorteados}`);
}