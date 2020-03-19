class postit {
    x;
    y;
    couleur;

    constructor(x, y, couleur) {
        this.x = x;
        this.y = y;
        this.couleur = couleur;
    }

    changePlace(x, y) {
        this.x = x;
        this.y = y;
    }

    changeCouleur(coul) {
        this.couleur = coul;
    }

    afficheTest() {
        let monElem = document.createElement('input')
        monElem.attributes=
        monElem.style.position = "fixed";
        monElem.style.top = this.y + "px";
        monElem.style.left = this.x + "px";
        monElem.style.width = "150px";
        monElem.style.height = "150px";
        monElem.style.backgroundColor = this.couleur;
        monElem.style.padding = "5px";
        monElem.style.color = "black";
        monElem.innerHTML = "Je suis un objet de test, j'avance à ";
        document.body.appendChild(monElem);
    }
}

document.addEventListener('click', function()
{
    monTest = new postit(500, 500,'red');
    monTest.afficheTest();
});

monTest = new postit(100, 200, 'red');
monTest.afficheTest();
alert('test');