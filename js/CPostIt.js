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

document.addEventListener('click', function()
{
    monTest = new PostIt(700, 500, '#BF1736', '#1438A6');
    monTest.affichePostit();
}); 

monTest = new PostIt(500, 200, '#BF1736', '#1438A6');
monTest.affichePostit();

