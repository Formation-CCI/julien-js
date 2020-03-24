/* Variable global */
let x;
let y;
let couleur;
let i;
let classPostit;
let onBouge = false;
let onTaille = false;
let idBouge = 0;
var tableauPostit = new Array();

/* Importation des éléments HMTL */
var postit1 = document.querySelector(".postit-1");
var postit2 = document.querySelector(".postit-2");
var postit3 = document.querySelector(".postit-3");
var zone = document.querySelector(".post-js");

/* Evenement */
document.addEventListener('mousemove', position => {
    x = position.clientX;
    y = position.clientY;
})

document.addEventListener('mouseup', () => {
    idBouge = 0;
    onBouge = false;
    onTaille = false;
})

// Postit 1
postit1.addEventListener('mousedown', () => {
    couleur = "#f8de59";
    classPostit = "post-1";
});

// Postit 2
postit2.addEventListener('mousedown', () => {
    couleur = "#E0B746";
    classPostit = "post-2";
});

// Postit 3
postit3.addEventListener('mousedown', () => {
    couleur = "#FCBC4E";
    classPostit = "post-3";
});

/* Création du postit */
zone.addEventListener('mousedown', () => {
    let newpostit = new Postit(x, y, 300, 250, "black", couleur, classPostit, tableauPostit.length + 1);
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

    if (onTaille && idBouge != 0) {
        tableauPostit[(idBouge - 1)].changeTaille(y, x);
        tableauPostit[(idBouge - 1)].afficheTest();
    }
    setTimeout(refresh, 50)
}

refresh();

/* Bouton du postit */
function AjoutBouton(parentId, elem, classElem = [], idElem = "", fonct = "") {
    let elemACreer = document.createElement(elem)
    if (classElem.length > 0) {
        for (let uneClasse in classElem) {
            elemACreer.classList.add(classElem[uneClasse])
        }
    }
    if (idElem != "")
        elemACreer.id = idElem;
    if (fonct != "")
        elemACreer.addEventListener('click', fonct);
        
    document.getElementById(parentId).appendChild(elemACreer)
}

/* Suppression du postit */
function delPostit(numPostit) {
    delete tableauPostit[numPostit - 1]
}