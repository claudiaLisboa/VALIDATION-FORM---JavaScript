export class FormValidator {

    /**
     * Récupérer les champs à valider :
     *      - Champs required
     *      - Champs courriel
     *      - Champs radio required
     * Initiatialiser _isValid à true
     * Faire la poutine de validation et la gestion d'affichage des messages d'erreurs
     * Getter isValid
     */

    
        constructor(form) {
            this._form = form;
            this._isValid = true;
            this.init();
        }
    
        init() {
            let elConteneurs = this._form.querySelectorAll('[data-js-input-wrapper]');
    
            for(let i = 0; i < elConteneurs.length; i++) {
                // Le conteneur du champ
                let conteneur = elConteneurs[i];
                // L'élement pour le message d'erreur
                let conteneurMessage = conteneur.querySelectorAll('[data-js-error-msg]')[0];
                // Le champ lui-même
                // Dans le cas d'un input simple, la variable champs contiendra seulement un élement (soit le [0]).
                // Dans le cas de radios buttons, la variable champs contiendra tous les radios.
                let champs = conteneur.getElementsByTagName('input');
    
                // Quel est le type du champ?
                switch(champs[0].type) {
                    case 'text':
                        if(champs[0].required) {
                            if(champs[0].value.trim() == '') {
                                // Le champ est requis, mais il est vide.
                                // Donc on montre le message d'erreur...
                                conteneurMessage.innerHTML = `Le champ ${champs[0].name} est obligatoire.`;
                                // ... on change la couleur du conteneur...
                                conteneur.classList.add('error');
                                // ... et on ajuste la valeur de _isValid.
                                this._isValid = false;
                            } else {
                                // Le champ est requis et n'est pas vide.
                                // Donc on efface le message d'erreur...
                                conteneurMessage.innerHTML = "";
                                // ... et on change la couleur du conteneur.
                                conteneur.classList.remove('error');
                            }
                        }
                        break;
                    case 'email':
                        if(champs[0].required) {
                            let valeur = champs[0].value.trim();
    
                            if(valeur == '') {
                                // Le champ est requis, mais il est vide.
                                // Donc on montre le message d'erreur...
                                conteneurMessage.innerHTML = `Le champ ${champs[0].name} est obligatoire.`;
                                // ... on change la couleur du conteneur...
                                conteneur.classList.add('error');
                                // ... et on ajuste la valeur de _isValid.
                                this._isValid = false;
                            } else if(/(.+)@(.+){1,}\.(.+){1,}/.test(valeur) == false) {
                                // Le champ est requis, n'est pas vide, mais il n'a pas une bonne valeur.
                                // Donc on montre le message d'erreur...
                                conteneurMessage.innerHTML = "L'addresse courriel saisie n'est pas valide.";
                                // ... on change la couleur du conteneur...
                                conteneur.classList.add('error');
                                // ... et on ajuste la valeur de _isValid.
                                this._isValid = false;
                            } else {
                                // Le champ est requis et n'est pas vide.
                                // Donc on efface le message d'erreur...
                                conteneurMessage.innerHTML = "";
                                // ... et on change la couleur du conteneur.
                                conteneur.classList.remove('error');
                            }
                        }
                        break;
                    case 'radio':
                        // Dans le cas des radio buttons, le conteneur contiendra
                        // les propriétés data-js-radio (soit si le champ est requis)
                        // et data-js-input (soit le nom du groupe de radio buttons).
                        if(conteneur.dataset.jsRadio == 'required') {
                            let optionChoisie = false;
    
                            for(let option = 0; option < champs.length; option++) {
                                if(champs[option].checked) {
                                    optionChoisie = true;
                                    break;
                                }
                            }
    
                            if(!optionChoisie) {
                                // Le champ est requis, mais aucune option a été choisie.
                                // Donc on montre le message d'erreur...
                                conteneurMessage.innerHTML = `Une option ${conteneur.dataset.jsInput} doit être sélectionnée.`;
                                // ... on change la couleur du conteneur...
                                conteneur.classList.add('error');
                                // ... et on ajuste la valeur de _isValid.
                                this._isValid = false;
                            }
                        }
                        break;
                }
            }
        }
    
        isValid() {
            return this._isValid;
        }
    
    }

}