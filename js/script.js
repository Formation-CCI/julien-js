/* Variable global */
let x;
let y;
let couleur;
let i;
let onBouge = false;
let idBouge = 0;
var tableauPostit = new Array();

/* Importation des éléments HMTL */
var postit1 = document.querySelector(".post-1");
var postit2 = document.querySelector(".post-2");
var postit3 = document.querySelector(".post-3");
var zone = document.querySelector(".post-js");

/* Evenement */
document.addEventListener('mousemove', position => {
    x = position.clientX;
    y = position.clientY;
})

document.addEventListener('mouseup', () => {
    idBouge = 0;
    onBouge = false;
})

// Postit 1
postit1.addEventListener('mousedown', () => {
    couleur = "#f8de59";
});

// Postit 2
postit2.addEventListener('mousedown', () => {
    couleur = "#E0B746";
});

// Postit 3
postit3.addEventListener('mousedown', () => {
    couleur = "#FCBC4E";
});

/* Création du postit */
zone.addEventListener('mousedown', () => {
    let newpostit = new Postit(x, y, 300, 250, "black", couleur, tableauPostit.length + 1);
    tableauPostit.push(newpostit);
    tableauPostit[(tableauPostit.length - 1)].afficheTest();
});

/* Bouger le postit */
function refresh() {
    if (onBouge && idBouge != 0) {
        console.log("on déplace !")
        tableauPostit[(idBouge - 1)].changePlace(x, y);
        tableauPostit[(idBouge - 1)].afficheTest();
    }
    setTimeout(refresh, 50)
}

refresh();

/* Bouton du postit */
function jdeAttachElem(parentId, elem, classElem = [], idElem = "", fonct = "") {
    let elemACreer = document.createElement(elem)
    if (classElem.length > 0) {
        for (let uneClasse in classElem) {
            elemACreer.classList.add(classElem[uneClasse])
        }
    }
    if (idElem != "") {
        elemACreer.id = idElem
    }
    if (fonct != "") {
        elemACreer.addEventListener('click', fonct);
    }
    document.getElementById(parentId).appendChild(elemACreer)
}

/* Suppression du postit */
function delPostit(numPostit) {
    delete tableauPostit[numPostit - 1]
}