import { h, Component } from 'preact';

export default class AsyncImg extends Component {

	render() {
		return (
            <img {...this.props} onLoad={this.load.bind(this)} style="opacity:0;" />
		);
	}

	load() {
        console.log(this.base);
	    this.base.style.opacity='1';
    }
}