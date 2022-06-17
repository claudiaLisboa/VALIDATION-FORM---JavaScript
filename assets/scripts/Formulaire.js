import { FormValidator } from "./FormValidator.js";

export class Formulaire {

    /**
     * Récupérer le formulaire, le bouton et les éléments DOM nécessaires
     * Gestion du clic du bouton data-js-submit
     * Instanciation de la classe FormValidator avec le formulaire à valider en argument
     * Si valide, gestion du message 'Merci !'
     */

    constructor(conteneur) {
        this._conteneur = conteneur;

        // Le vrai formulaire qui est dans le conteneur.
        this._form = this._conteneur.firstElementChild;
        // Pour empêcher le formulaire d'être soumis.
        this._form.onsubmit = () => { return false; };

        // Le bouton qui déclenchera la validation des champs.
        this._button = this._conteneur.querySelector('[data-js-submit]');
        this.addClickListener();

        // Le message qui sera affiché si tout est valide.
        this._message = this._conteneur.querySelector('[data-js-thank]');
    }

    addClickListener() {
        this._button.addEventListener("click", () => {
            this.validate()
        }, false);
    }

    validate() {
        const validator = new FormValidator(this._form);

        if(validator.isValid()) {
            // Si tout est valide, on supprime le formulaire...
            this._form.classList.add('hidden');
            // ... et on affiche le message final.
            this._message.classList.remove('thank--hidden');
        }
    }
}