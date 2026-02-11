let champion = {
    nome: "Diana",
    xp: 8200,
}

let nivel = ""; 

switch (true) { 
    case champion.xp <= 1000:
        nivel = "Ferro";
        break;

    case champion.xp <= 2000: 
        nivel = "Bronze";
        break;

    case champion.xp <= 3000: 
        nivel = "Prata";
        break;

    case champion.xp <= 4000:
        nivel = "Ouro";
        break;

    case champion.xp <= 5000:
        nivel = "Ouro"; 
        break;
    
    case champion.xp <= 6000:
        nivel = "Platina";
        break;

    case champion.xp <= 7000:
        nivel = "Diamante";
        break;

    case champion.xp <= 8000:
        nivel = "Ascendente";
        break;

    case champion.xp <= 10000:
        nivel = "Radiante";
        break;

    case champion.xp > 10000:
        nivel = "Imortal";
        break;
}

console.log(`O campeão ${champion.nome} está no nível ${nivel}`);