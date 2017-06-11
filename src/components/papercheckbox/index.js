import { h, Component } from 'preact';
import style from './style';

export default class PaperButton extends Component {
	render() {
		let { id, checked, ...props } = this.props;

		let checkType = 'normal';

		if (this.props.primary) {
			checkType = 'primary';
		}
		else if (this.props.warning) {
			checkType = 'warning';
		}
		else if (this.props.danger) {
			checkType = 'danger';
		}
		else if (this.props.good) {
			checkType = 'good';
		}

		return (
            <div class={style.papercheckboxContainer} {...props}>
                <input class={style.papercheckbox} id={id} type="checkbox" checked={checked} />
                <label class={style[checkType]} for={id} />
            </div>
		);
	}
}