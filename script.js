// Fonctions

// Addition
const addition =  (nombreA, nombreB) => {
    return nombreA + nombreB;
}

// Multiplication
const multiplication =  (nombreA, nombreB) => {
    return nombreA * nombreB;
}

// Soustraction
const soustraction =  (nombreA, nombreB) => {
    return nombreA - nombreB;
}

// Division
const division =  (nombreA, nombreB) => {
    if (nombreB == 0) {
        throw new Error("Imposible de diviser par 0.")
    }
    return nombreA / nombreB;
}


// Création du menu
let choix, premierNombre, deuxiemeNombre, resultat, restart; 

do {
    do {
        choix = Number(prompt("Que souhaitez-vous faire ? \n\n 1 - Addition \n 2 - Multiplication \n 3 - Soustraction \n 4 - Division \n "));
    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);
    
    do {
        premierNombre = Number(prompt("Entrez le premier nombre"));
        deuxiemeNombre = Number(prompt("Entrez le deuxième nombre"));
    } while (isNaN(premierNombre) || isNaN(deuxiemeNombre));
    
    try {
        switch (choix) {
            case 1:
                resultat = addition(premierNombre, deuxiemeNombre);
                break;
            case 2:
                resultat = multiplication(premierNombre, deuxiemeNombre);
                break;
            case 3:
                resultat = soustraction(premierNombre, deuxiemeNombre);
                break;
            case 4:
                resultat = division(premierNombre, deuxiemeNombre);
            default:
                throw new Error("Une erreur est survenue");
        }
    alert("Le resultat est : "+ resultat);
    } catch (error) {
        alert(error)
    }
    restart = confirm("Souhaitez-vous recommencez un calcul ?")
} while (restart);
