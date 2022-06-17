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
    


}