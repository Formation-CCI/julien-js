/**  Structure du postit */
class Postit {
    posX;
    posY;
    hauteur;
    largeur;
    couleurTexte;
    couleurBackground;
    classPostit;
    i;
    
    constructor(posX, posY, hauteur, largeur, couleurTexte, couleurBackground, classPostit, i) {
        this.posX = posX;
        this.posY = posY;
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.couleurTexte = couleurTexte;
        this.couleurBackground = couleurBackground;
        this.classPostit = classPostit;
        this.i = i;
    }

    toString() {
        return '{"x":' + this.posX + ',"y":' + this.posY + ',"Hauteur":"' + this.hauteur + '","Largeur":"' + this.largeur + '","Couleur du texte":"' + this.couleurTexte + '","Couleur de fond":"' + this.couleurBackground + '","Postit":"' + this.i + '"}'
    }
    
    changePlace(x, y) {
        this.posX = x;
        this.posY = y;
    }

    changeTaille(x, y) {
        this.hauteur = x;
        this.largeur = y;
    }

/**
* Foncton permetant d'afficher le postit
*/
    afficheTest() 
    {
        let monElem;
        let creation = false;

        // On crée le postit si il n'existe pas
        if (document.querySelector("#PostIt" + this.i) == null) 
        {
            monElem = document.createElement('div');
            creation = true;
        }
        else 
            monElem = document.querySelector("#PostIt" + this.i);

        // Propriété du postit
        monElem.classList.add(this.classPostit);
        monElem.setAttribute("contenteditable", "");
        monElem.style.position = "fixed";
        monElem.style.top = this.posY + "px";
        monElem.style.left = this.posX + "px";
        monElem.style.height = this.hauteur + "px";
        monElem.style.width = this.largeur + "px";
        monElem.style.color = this.couleurTexte;
        monElem.style.backgroundColor = this.couleurBackground;
        monElem.id = "PostIt" + this.i;

        if (creation) 
        {
            // Ajout du postit dans la partie HTML 
            document.body.appendChild(monElem);

            // Bouton pour modifier la position du postit
            monElem.innerHTML += "<h2>Postit n°" + this.i + "</h2>";
            AjoutBouton("PostIt" + this.i, "div", ["basDroite"], "menBas" + this.i)
            AjoutBouton("menBas" + this.i, 'i', ["fas", "fa-arrows-alt"], "", () => {
                idBouge = this.i;
                onBouge = true;
            });

            // Bouton pour modifier la taille du postit
            AjoutBouton("PostIt" + this.i, "div", ["basDroite"], "menBas" + this.i)
            AjoutBouton("menBas" + this.i, 'i', ["fas", "fa-expand-arrows-alt"], "", () => {
                idBouge = this.i;
                onTaille = true;
            });

            // Bouton pour supprimer le postit
            AjoutBouton("menBas" + this.i, 'i', ["fas", "fa-trash-alt"], "", () => { 
                document.querySelector("#PostIt" + this.i).remove()
                delPostit(this.i)
            });
        }
    }
}
