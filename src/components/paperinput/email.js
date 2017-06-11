import { h } from 'preact';
import PaperInput from './input';

export default class PaperEmailInput extends PaperInput {

    constructor() {
        super();
    }

    validateInput() {

        let input = this.base.querySelector('input');

        if (input.value.trim() !== '' && input.value !== null && this.isValidEmail(input.value)) {
            this.setValid();
        }
        else {
            this.setInvalid();
        }
	}

    isValidEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

}