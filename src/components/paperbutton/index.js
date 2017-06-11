import { h, Component } from 'preact';
import style from './style';

export default class PaperButton extends Component {
	render() {

		let { content, ...props } = this.props;

		let buttonType = 'normal';

		if (this.props.primary) {
			buttonType = 'primary';
		}
		else if (this.props.warning) {
			buttonType = 'warning';
		}
		else if (this.props.danger) {
			buttonType = 'danger';
		}
		else if (this.props.good) {
			buttonType = 'good';
		}

		return (
            <button {...props} class={'PaperButton ' + style.paperButton +' '+ style[buttonType]}>{content}</button>
		);
	}
}