class Formulaire {

    /**
     * Récupérer le formulaire, le bouton et les éléments DOM nécessaires
     * Gestion du clic du bouton data-js-submit
     * Instanciation de la classe FormValidator avec le formulaire à valider en argument
     * Si valide, gestion du message 'Merci !'
     */

     constructor(el) {
        this._el = el;
        // console.log(this._el);
        this.init();
    }

    init() {
        this.addEventListener();
    }

    addEventListener() {
        const button = this._el.querySelector('[data-js-submit]');

        button.addEventListener("click", () => {
            this.validate()
        }, false);
    }

    validate() {
        alert('!');
    }
}