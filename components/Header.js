export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		console.log("Hello", this.props);
		return (
			<div> The Header </div>
		);
	}
}
