import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      characterRemaining: props.maxChars
    };
  }

  handleTyping = (e) => {
    let updatedText = e.target.value
    let textRemaining = (this.props.maxChars - updatedText.length)
    this.setState({
      text: updatedText,
      characterRemaining: textRemaining
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.text} onChange={this.handleTyping} />
        <p>Remaining Characters: {this.state.characterRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
