class FontChooser extends React.Component {

	constructor(props) {
		super(props);
		
		var size_min_var = (parseInt(this.props.min) > 0)? this.props.min: '1';
		var size_max_var = (parseInt(this.props.min) < parseInt(this.props.max))? this.props.max: this.props.min;
		var size_var = (
			parseInt(this.props.size) > parseInt(size_max_var)
			)?size_max_var:(
				parseInt(this.props.size) < parseInt(size_min_var)
				)?size_min_var:this.props.size;
		// debugger;
		this.state = {
			hidden: true,
			bold: this.props.bold == 'true',
			
			size_min: size_min_var,
			size_max: size_max_var,
			size: size_var,
				
		};

	}



	onTextClick() {
		this.setState({ hidden: !this.state.hidden, })
	}

	handleCheckbox() {
		this.setState({ bold: !this.state.bold })
	}

	decreaseSize() {
		// debugger;
		console.log(typeof (this.state.size))
		var fontsize = parseInt(this.state.size)
		// debugger
		if (fontsize > parseInt(this.state.size_min)) {
			fontsize -= 1;
			this.setState({ size: fontsize, });
			// debugger;
		}
	}

	increaseSize() {
		// debugger;
		console.log(typeof (this.state.size))
		var fontsize = parseInt(this.state.size)
		// debugger
		if (fontsize < parseInt(this.props.max)) {
			fontsize += 1;
			this.setState({ size: fontsize, });
			// debugger;
		}
	}

	reset_font() {
		this.setState({ size: this.props.size, })
	}

	render() {
		var textStyle = {
			fontWeight: this.state.bold ? 'bold' : 'normal',
			fontSize: parseInt(this.state.size),
		}

		var fontSpanStyle = {
			color: (this.props.max == this.state.size || this.state.size == this.state.size_min) ? 'red' : 'black',
		}
		var checkbox_status = this.state.bold;
		// debugger;

		return (

			<div>
				<input type="checkbox" id="boldCheckbox" hidden={this.state.hidden} checked={checkbox_status} onChange={this.handleCheckbox.bind(this)} />
				<button id="decreaseButton" hidden={this.state.hidden} onClick={this.decreaseSize.bind(this)}>-</button>
				<span id="fontSizeSpan" hidden={this.state.hidden} style={fontSpanStyle} onDoubleClick={this.reset_font.bind(this)}>{this.state.size} </span>
				<button id="increaseButton" hidden={this.state.hidden} onClick={this.increaseSize.bind(this)}>+</button>
				<span id="textSpan" style={textStyle} onClick={this.onTextClick.bind(this)}>{this.props.text}  </span>
			</div>
		);
	}
}