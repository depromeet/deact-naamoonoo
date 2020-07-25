import { Component } from "../../utils/deact";
import { div, p, button } from "../../utils/deact/defaultElements";

interface IProps {}
interface IState {
	counter: number;
}

class Counter extends Component<IProps, IState> {
	// protected componentDidMount: undefined

	constructor(props: IProps, state: IState) {
		super(undefined, state);

		Object.setPrototypeOf(this, Counter.prototype);
		this.init();
	}

	onClickHandler(numsToChange) {
		this.setState("counter", this.getState("counter") + numsToChange);
	}

	render() {
		const currentCounter = this.getState("counter");

		return div(
			{ className: "counter-container" },
			button({
				className: "btn",
				textContent: "+",
				onclick: () => this.onClickHandler(1),
			}),
			div({ textContent: currentCounter.toString() }),
			button({
				className: "btn",
				textContent: "-",
				onclick: () => this.onClickHandler(-1),
			})
		);
	}
}

export default Counter;
