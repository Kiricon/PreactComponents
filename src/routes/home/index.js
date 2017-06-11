import { h, Component } from 'preact';
import style from './style';

import AsyncImg from './../../components/async-img';
import { PaperInput, PaperEmailInput, PaperPasswordInput } from './../../components/paperinput';
import PaperButton from './../../components/paperbutton';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
				<AsyncImg src="assets/icons/android-chrome-192x192.png" style="background:grey; height: 100px; width:100px; border-radius:3px;" />
				<PaperInput id="firstInput" style="margin:10px; width: 50%;" required />
				<PaperInput />
				<PaperEmailInput placeholder="example@email.com" />
				<PaperPasswordInput placeholder="password" />
				<PaperButton content="primary" primary />
				<PaperButton content="good" good />
				<PaperButton content="warning" warning />
				<PaperButton content="danger" danger />
			</div>
		);
	}

}
