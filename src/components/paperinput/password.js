import { h } from 'preact';
import PaperInput from './input';

export default class PaperPasswordInput extends PaperInput {

	constructor() {
		super();
		this.type = 'password';
	}

}