import { h, Component } from 'preact';
import style from './style';

import AsyncImg from './../../components/async-img';
import PaperInput from './../../components/paperinput';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
				<AsyncImg src="assets/icons/android-chrome-192x192.png" style="background:grey; height: 100px; width:100px;" />
				<PaperInput />
			</div>
		);
	}

}
