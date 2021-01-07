// Exo 1
let jour = prompt('Un jour de la semaine').toLocaleLowerCase()
switch (jour) {
    case "lundi": case "mardi": case "mercredi": case"jeudi": case"vendredi":
        alert(`Cours sur discord le ${jour}`)
        break;
    // case "mardi":
    //     alert('Cours sur discord')
    //     break;
    // case "mercredi":
    //     alert('Cours sur discord')
    //     break;
    // case "jeudi":
    //     alert('Cours sur discord')
    //     break;  
    // case "vendredi":
    //     alert('Cours sur discord')
    //     break;     
    default:
        alert('Pas cours')
        break;
}

// Exo 2
let age = prompt('Quel âge as-tu?')
switch (age<18) {
    case true :
        alert("Tu es mineur petit con")
        break;
    default:
        alert("Tu es majeur grand con")
        break;
}