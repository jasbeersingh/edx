class FontChooser extends React.Component {

    constructor(props) {
	super(props);
    }
    

    render() {
		var textStyle = {
			fontWeight: (this.props.bold == 'true')? 'bold': 'normal',
			fontSize: parseInt(this.props.size), 
		}
		// debugger;

	return(
			
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden='true'/>
	       <button id="decreaseButton" hidden='true'>-</button>
	       <span id="fontSizeSpan" hidden='true'>{this.props.size}</span>
	       <button id="increaseButton" hidden='true'>+</button>
	       <span id="textSpan" style={textStyle}>{this.props.text}  </span>
	       </div>
  	);
    }
}