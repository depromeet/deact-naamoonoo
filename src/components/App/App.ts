import { Component } from "../../utils/deact";
import { div, h1 } from "../../utils/deact/defaultElements";
import Counter from "../Counter/Counter";

interface IProps {}
interface IState {}

class App extends Component<IProps, IState> {
	constructor(props: IProps, state: IState) {
		super(props, state);

		Object.setPrototypeOf(this, App.prototype);
		this.init();
	}

	render() {
		console.log("App rerendered");
		return div(
			{
				className: "container",
			},
			h1({ textContent: "hello depromeet :)" }),
			new Counter({}, { counter: 0 })
		);
	}
}

export default App;
