let nomeDoHeroi = "Alberon";
let xpDoHeroi = 11110;
let nivelDoHeroi;


switch (true) {
    case (xpDoHeroi<=1000): nivelDoHeroi = "Ferro";
        break;
    case (xpDoHeroi>1000 && xpDoHeroi<=2000): nivelDoHeroi = "Bronze";
        break;
    case (xpDoHeroi>2000 && xpDoHeroi<=4000): nivelDoHeroi = "Prata";
        break;
    case (xpDoHeroi>4000 && xpDoHeroi<=6000): nivelDoHeroi = "Ouro";
        break;
    case (xpDoHeroi>6000 && xpDoHeroi<=8000): nivelDoHeroi = "Platina";
        break;
    case (xpDoHeroi>8000 && xpDoHeroi<=9000): nivelDoHeroi = "Ascendente";
        break;
    case (xpDoHeroi>9000 && xpDoHeroi<=10000): nivelDoHeroi = "Imortal";
        break;
    case (xpDoHeroi>10000): nivelDoHeroi = "Radiante";
        break;
}

console.log(`${nomeDoHeroi} está no nível ${nivelDoHeroi}`);