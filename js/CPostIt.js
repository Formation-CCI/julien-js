/* Variables Global */
var x;
var y;

/* Objet Postit */
class PostIt {
    x;
    y;
    couleurTexte;
    couleurBackground;

    constructor(x, y, couleurTexte, couleurBackground) {
        this.x = x;
        this.y = y;
        this.couleurTexte = couleurTexte;
        this.couleurBackground = couleurBackground;
    }

    changePlace(x, y) {
        this.x = x;
        this.y = y;
    }

    affichePostit() {
        var zone = document.querySelector(".post-js");
        let monElem = document.createElement('div')
        monElem.style.position = "fixed";
        monElem.style.top = this.y + "px";
        monElem.style.left = this.x + "px";
        monElem.style.width = "150px";
        monElem.style.height = "150px";
        monElem.style.color = this.couleurTexte;
        monElem.style.backgroundColor = this.couleurBackground;
        monElem.style.padding = "5px"; 
        monElem.innerHTML = "Je suis un objet de test";
        zone.appendChild(monElem);
    }
}

/* Importation des éléments HMTL + Position souris dans la page */

var postit1 = document.querySelector(".post-1");
var postit2 = document.querySelector(".post-2");
var postit3 = document.querySelector(".post-3");

var zone = document.querySelector(".post-js");

document.body.addEventListener('mousemove', function souris(event)
{
    x = event.clientX;
    y = event.clientY;
});

/* Création des postits */

postit1.addEventListener('click', function()
{
    zone.addEventListener('mousedown', function()
        {
            monTest = new PostIt(x, y, "white", "#BF1736");
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
});

postit3.addEventListener('click', function()
{
    zone.addEventListener('mousedown', function()
        {
            monTest = new PostIt(x, y, "white", "#1438A6");
            monTest.affichePostit();
        });
});
