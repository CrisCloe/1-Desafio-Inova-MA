var N = parseFloat(prompt("Digite um número"));

var fatorial = N;

for(cont=1;cont<N;cont++){
    alert("Fatorial = "+fatorial+" * ("+N+" - "+cont+")"
    );
    fatorial=fatorial*(N-cont);
}

alert(N+"! = "+fatorial);