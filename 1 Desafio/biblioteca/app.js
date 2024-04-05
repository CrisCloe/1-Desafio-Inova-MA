alert('Na biblioteca contém um sistema de multas, cada livro em atraso custa R$0,50.');
let totalLivros = parseInt(prompt('Digite o total de livros em atraso'))
let multaDias = parseInt(prompt('Digite o total de dias em atraso'))

let debitoBiblio = (totalLivros * (multaDias*0.5));
    alert(`Você esta devendo um total de R$ ${debitoBiblio}.`)
    console.log(`Você deve R$ ${debitoBiblio}`)
