import { h, Component } from 'preact';
import style from './style';

export default class AsyncImg extends Component {

    /**
     * Change opacity of img tag on image load
     * @param {Event} e - Event automatically passed by dom
     */
	load(e) {
		let img = e.target;
	    img.style.opacity='1';
	}

	render() {
		return (
            <div {...this.props}>
                <img {...this.props} onLoad={this.load} class={style.asyncImg} />
            </div>
	    );
	}
}