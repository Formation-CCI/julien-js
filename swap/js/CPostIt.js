/* Variables Global */
let x;
let y;
let i = 1;
let onBouge = false;
let onTaille = false;
let onWrite = false;
let text ="";
let tableauPostit = new Array();

/* Importation des éléments HMTL */
var postit1 = document.querySelector(".post-1");
var postit2 = document.querySelector(".post-2");
var postit3 = document.querySelector(".post-3");
var zone = document.querySelector(".post-js");

/* Position souris dans la page */
document.addEventListener('mousemove', function souris(event)
{
    x = event.clientX;
    y = event.clientY;
});

/* Lorsque l'on relache la souris */
document.addEventListener('mouseup', () => {
    onBouge = false;
    onTaille = false;
})

/* Lorsque l'on relache les touches du clavier */
document.addEventListener('keyup', () => {
    onWrite = false;
})

/* Objet Postit */
class PostIt 
{
    posX;
    posY;
    hauteur;
    largeur;
    couleurTexte;
    couleurBackground;

    constructor(posX, posY, hauteur, largeur, couleurTexte, couleurBackground, numPostIt) 
    {
        this.posX = posX;
        this.posY = posY;
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.couleurTexte = couleurTexte;
        this.couleurBackground = couleurBackground;
        this.numPostIt = numPostIt;
    }

    changePlace(x, y) 
    {
        this.posX = x;
        this.posY = y;
    }

    changeTaille(x, y) 
    {
        this.hauteur = y;
        this.largeur = x;
    }

    affichePostit() 
    {
        let postit;
        let buttonMove;
        let buttonTaille;
        let affichageText;
        let creation = false;
        let y;

        // Si le Postit n'existe pas on le crée
        if (document.getElementById("postIt-" + i) == null)
        {
            postit = document.createElement('div');
            creation = true;
        }
        else
            postit = document.getElementById('postIt');

        // Paramétrage du Postit
        console.log(i);
        postit.id = "postIt-" + i;
        postit.classList.add('post-it-notes');
        postit.style.position = "fixed";
        postit.style.top = this.posY + "px";
        postit.style.left = this.posX + "px";
        postit.style.height = this.hauteur + "px";
        postit.style.width = this.largeur + "px";
        postit.style.color = this.couleurTexte;
        postit.style.backgroundColor = this.couleurBackground;
        postit.style.padding = "2em"; 
        postit.innerHTML = "<p>Je suis un objet de test</p>";
        
        //  Affichage du texte dans la postit
        affichageText = document.createElement('p');
        affichageText.innerHTML = text;
        postit.appendChild(affichageText);

        // Ajout du Postit dans la page 
        if(creation)
        {
            zone.appendChild(postit);
            tableauPostit.push("postIt" + i);

            // Action lorsqu'on écris du text
            document.addEventListener('keydown', (event) => {
                text = text + event.key;
                onWrite = true;
            })
        }

        // Paramétrage de buttonMove
        buttonMove = document.createElement('button');
        buttonMove.textContent = "Bouger";
        postit.appendChild(buttonMove);

        // Paramétrage de buttonTaille
        buttonTaille = document.createElement('button');
        buttonTaille.textContent = "Taille";
        postit.appendChild(buttonTaille);

        // Action lorsqu'on clique sur buttonMove
        buttonMove.addEventListener('mousedown', () => {
            console.log(tableauPostit);
            delPostit(1);
            onBouge = true;
        })

        // Action lorsqu'on clique sur le buttonTaille
        buttonTaille.addEventListener('mousedown', () => {
            onTaille = true;
        })
        console.log(tableauPostit);
    }
}

/* Création des postits */

/* postit1.addEventListener('click', function()
{
        zone.addEventListener('mousedown', function()
        {
            i = i + 1;
            monTest = new PostIt(x, y, "white", "#BF1736", i);
            monTest.affichePostit();
        });
});

postit2.addEventListener('click', function()
{
    zone.addEventListener('mousedown', function()
        {
            monTest = new PostIt(x, y, "white", "#0D1440");
            monTest.affichePostit();
        });
}); */

/* postit3.addEventListener('click', function()
{
    zone.addEventListener('mousedown', function()
        {
            monTest = new PostIt(x, y, "white", "#1438A6");
            monTest.affichePostit();
        });
});  */

function refresh() {

    // Bouger le postit
    if (onBouge) {
        monTest.changePlace(x, y);
        monTest.affichePostit();
    }

    // Modifier la taille du postit
    if (onTaille) {
        monTest.changeTaille(x, y);
        monTest.affichePostit();
    } 
    
    if (onWrite) {
        monTest.affichePostit();
    }
    setTimeout(refresh, 50)
}
refresh();

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

function delPostit(i) {
    delete tableauPostit[i]
}
monTest = new PostIt(400, 300, 242, 242, "black", "rgb(255,215,7)", i);
monTest2 = new PostIt(500, 200, 242, 242, "black", "rgb(255,215,7)", i);
monTest.affichePostit();
monTest2.affichePostit();