import { h, Component } from 'preact';
import css from './style';

export default class Switch extends Component{

    componentDidMount() {
        this.checked = false;
		this.setup();
    }

    render() {
        let {id, name, style} = this.props;
        return (
            <label style={style}>
                <input id={id} name={name} type="checkbox" class={css.switchCheckbox} />
                <button class={css.switchTrack} tabindex="-1">
                    <span class={css.handle}></span>
                </button>
            </label>
        );
    }

	setup() {

        this.track = this.base.querySelector('button');
        this.handle = this.base.querySelector('span');
        this.element = this.base.querySelector('input');

		this.bind();
	}

	bind() {
		this.track.addEventListener('click', (e) => {
			this.trackClicked(e);
		}, false);

		this.element.addEventListener('focus', (e) => {
			this.checkboxFocused(e);
		}, false);

		this.element.addEventListener('blur', (e) => {
			this.checkboxBlurred(e);
		}, false);

		this.element.addEventListener('click', (e) => {
			this.checkboxToggled(e);
		}, false);
	}

	checkboxFocused(e) {
		this.track.classList.add(Switch.FOCUSED_CLASS_NAME);
	}

	checkboxBlurred(e) {
		this.track.classList.remove(Switch.FOCUSED_CLASS_NAME);
	}

	trackClicked(e) {
		this.toggle();
	}

	checkboxToggled(e) {
		this.toggle();
	}

	toggle() {
		this.checked = this.track.classList.toggle(Switch.CHECKED_CLASS_NAME);

		this.element.checked = this.checked;
	}

	static get CHECKED_CLASS_NAME() {
		return css.on;
	}

	static get FOCUSED_CLASS_NAME() {
		return css.focus;
	}

}