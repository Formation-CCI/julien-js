/* Variables Global */
let x;
let y;
let i = 0;
let onBouge = false;

/* Objet Postit */
class PostIt 
{
    posX;
    posY;
    couleurTexte;
    couleurBackground;

    constructor(posX, posY, couleurTexte, couleurBackground, numPosIt) 
    {
        this.posX = posX;
        this.posY = posY;
        this.numPosIt = numPosIt;
        this.couleurTexte = couleurTexte;
        this.couleurBackground = couleurBackground;
    }

    changePlace(x, y) 
    {
        this.posX = x;
        this.posY = y;
    }

    affichePostit() 
    {
        let postit;

        // Si le Postit n'existe pas on le crée
        if (document.getElementById('postit') == null) 
            postit = document.createElement('div');
        else
        {
            postit = document.getElementById('postit');
            postit.classList.add('postit-js');
        }

        // Paramétrage du Postit
        postit.id = "postIt" + this.numPosIt;
        postit.style.position = "fixed";
        postit.style.top = this.posY + "px";
        postit.style.left = this.posX + "px";
        postit.style.width = "150px";
        postit.style.height = "150px";
        postit.style.color = this.couleurTexte;
        postit.style.backgroundColor = this.couleurBackground;
        postit.style.padding = "5px"; 
        postit.innerHTML = "Je suis un objet de test";

        // Ajout du Postit dans la page 
        zone.appendChild(postit);

        // Action lorsqu'on clique sur le postit
        postit.addEventListener('click', () => {
            onBouge = true;
        })
    }
}

/* Importation des éléments HMTL + Position souris dans la page */

var postit1 = document.querySelector(".post-1");
var postit2 = document.querySelector(".post-2");
var postit3 = document.querySelector(".post-3");
var zone = document.querySelector(".post-js");

zone.addEventListener('mousemove', function souris(event)
{
    x = event.clientX;
    y = event.clientY;
});

/* Création des postits */
postit1.addEventListener('click', function()
{
        zone.addEventListener('mousedown', function()
        {
            i = i + 1;
            monTest = new PostIt(x, y, "white", "#BF1736", i);
            monTest.affichePostit();
        });
});/*

postit2.addEventListener('click', function()
{
    zone.addEventListener('mousedown', function()
        {
            monTest = new PostIt(x, y, "white", "#0D1440");
            monTest.affichePostit();
        });
});

postit3.addEventListener('click', function()
{
    zone.addEventListener('mousedown', function()
        {
            monTest = new PostIt(x, y, "white", "#1438A6");
            monTest.affichePostit();
        });
}); */

monTest = new PostIt(500, 500, "red", "#1438A6", i);
monTest.affichePostit();

/* Faire bouger un Postit */

document.addEventListener('mouseup', () => {
    onBouge = false;
})

function refresh() {
    if (onBouge) {
        monTest.changePlace(x, y);
        monTest.affichePostit();
    }
    setTimeout(refresh, 50)
}

refresh();