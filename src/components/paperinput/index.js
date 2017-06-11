import { h, Component } from 'preact';
import css from './style';

export default class AsyncImg extends Component {

    /**
     * Grow the bottom border of the input field
     */
	growBorder() {
		let border = this.base.querySelector('div');
		border.style.width = 'calc(100% - 2px)';
	}

    /**
     * Shrink the bottom border of the input field
     */
	shrinkBorder() {
		let border = this.base.querySelector('div');
		border.style.width = '0%';
	}

	validateInput() {
		if (this.props.required !== undefined) {

			let input = this.base.querySelector('input');

			if (input.value.trim() !== '' && input.value !== null) {
				input.style.border = 'solid 1px #4CAF50';
			}
			else {
				input.style.border = 'solid 1px #F44336';
			}

		}
	}

	render() {
        let { style, ...props } = this.props;
		return (
            <div class={css.inputContainer}  style={this.props.style} >
                <input {...props} class={css.paperinput}
	type="text"
	onFocus={this.growBorder.bind(this)}
	onBlur={this.shrinkBorder.bind(this)}
	onKeyUp={this.validateInput.bind(this)}
                />
                <div class={css.borderbottom} />
            </div>
	    );
	}
}