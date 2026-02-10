let champion = {
    nome: "Diana",
    xp: 6200,
}

let nivel = ""; 

switch (true) { 
    case champion.xp < 1000:
        nivel = `O nível de ${champion.nome} é: Ferro`
    break

    case champion.xp >= 1001 && champion.xp <= 2000: 
        nivel = `O nível de ${champion.nome} é: Bronze`
    break

    case champion.xp >= 2001 && champion.xp <= 3000: 
        nivel = `O nível de ${champion.nome} é: Prata Ouro`
    break

   case champion.xp >= 5001 && champion.xp <= 8000:
        nivel = `O nível de ${champion.nome} é: Platina Diamante`
   break

    case champion.xp >= 8001 && champion.xp <= 9000:
        nivel = `O nível de ${champion.nome} é: Ascendente`
    break

    default:
        nivel = `O nível de ${champion.nome} é: Suprassumo`

}

console.log(nivel)