import { h, Component } from 'preact';
import style from './style';

export default class AsyncImg extends Component {

    load() {
        let img = this.base.querySelector('img');
	    img.style.opacity='1';
    }

	render() {
    	return (
            <div {...this.props}>
                <img {...this.props} onLoad={this.load.bind(this)} class={style.asyncImg} />
            </div>
		);
	}
}