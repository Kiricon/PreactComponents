import { h, Component } from 'preact';
import style from './style';

export default class AsyncImg extends Component {

    /**
     * Grow the bottom border of the input field
     */
	growBorder() {
		let border = this.base.querySelector('div');
		border.style.width = '99%';
	}

    /**
     * Shrink the bottom border of the input field
     */
	shrinkBorder() {
		let border = this.base.querySelector('div');
		border.style.width = '0%';
	}

	render() {
		return (
            <div class={style.inputContainer} >
                <input class={style.paperinput}
                    {...this.props}
                    type="text"
                    onFocus={this.growBorder.bind(this)}
                    onBlur={this.shrinkBorder.bind(this)}
                />
                    
                <div class={style.borderbottom} />
            </div>
	    );
	}
}