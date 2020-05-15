class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = {hidden: true};
    }
	
	onTextClick(){
		this.setState({hidden: !this.state.hidden,})
	}

    render() {
		var textStyle = {
			fontWeight: (this.props.bold == 'true')? 'bold': 'normal',
			fontSize: parseInt(this.props.size), 
		}
		// debugger;
		// var hidden = this.state.hidden?'true':'false';
		// debugger;

	return(
			
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden={this.state.hidden}/>
	       <button id="decreaseButton" hidden={this.state.hidden}>-</button>
	       <span id="fontSizeSpan" hidden={this.state.hidden}>{this.props.size}</span>
	       <button id="increaseButton" hidden={this.state.hidden}>+</button>
	       <span id="textSpan" style={textStyle} onClick={this.onTextClick.bind(this)}>{this.props.text}  </span>
	       </div>
  	);
    }
}