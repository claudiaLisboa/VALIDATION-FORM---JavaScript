import { Formulaire } from "./Formulaire.js";

(function() {
    let elForms = document.querySelectorAll('[data-js-form]');

    for(let i = 0; i < elForms.length; i++) {
        new Formulaire(elForms[i]);
    }
})();
