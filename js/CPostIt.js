// Structure du postit
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

    changePlace(x, y) {
        this.posX = x;
        this.posY = y;
    }

    afficheTest() 
    {
        let monElem;
        let creation = false;

        // On crée le postit si il n'existe pas
        if (document.getElementById("PostIt" + this.i) == null) 
        {
            monElem = document.createElement('div');
            creation = true;
        }
        else 
            monElem = document.getElementById("PostIt" + this.i);

        // Propriété du postit
        monElem.classList.add(this.classPostit);
        monElem.style.position = "fixed";
        monElem.style.top = this.posY + "px";
        monElem.style.left = this.posX + "px";
        monElem.style.height = this.hauteur + "px";
        monElem.style.width = this.largeur + "px";
        monElem.style.color = this.couleurTexte;
        monElem.style.backgroundColor = this.couleurBackground;
        monElem.id = "PostIt" + this.i;
        console.log(this.i)

        
        if (creation) 
        {
            // Ajout du postit dans la partie HTML 
            document.body.appendChild(monElem);

            // Bouton modifier la position du postit
            monElem.innerHTML += "Postit n°" + this.i
            jdeAttachElem("PostIt" + this.i, "div", ["basDroite"], "menBas" + this.i)
            jdeAttachElem("menBas" + this.i, 'i', ["fas", "fa-arrows-alt"], "", () => {
                idBouge = this.i;
                onBouge = true;
            });

            // Bouton pour supprimer le postit
            jdeAttachElem("menBas" + this.i, 'i', ["fas", "fa-trash-alt"], "", () => {
                document.getElementById("PostIt" + this.i).remove()
                delPostit(this.i)
            });
        }
    }
}
