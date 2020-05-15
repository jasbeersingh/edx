class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = {hidden: true, bold: this.props.bold == 'true'};
    }
	
	onTextClick(){
		this.setState({hidden: !this.state.hidden,})
	}

	handleCheckbox(){
		this.setState({bold: !this.state.bold})
	}

    render() {
		var textStyle = {
			fontWeight: this.state.bold? 'bold': 'normal',
			fontSize: parseInt(this.props.size), 
		}
		var checkbox_status = this.state.bold;

	return(
			
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={this.state.hidden} checked={checkbox_status} onChange={this.handleCheckbox.bind(this)}/>
	       <button id="decreaseButton" hidden={this.state.hidden}>-</button>
	       <span id="fontSizeSpan" hidden={this.state.hidden}>{this.props.size}</span>
	       <button id="increaseButton" hidden={this.state.hidden}>+</button>
	       <span id="textSpan" style={textStyle} onClick={this.onTextClick.bind(this)}>{this.props.text}  </span>
	       </div>
  	);
    }
}