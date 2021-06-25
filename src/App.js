import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount = () => {
    console.log(this.textInput.current);
    this.textInput.current.focus();
  };

  render() {
    return (
      <div>
        <form>
          Name: <input type="text" />
          <br />
          <br />
          Password: <input type="text" ref={this.textInput} />
          <br />
          <br />
          Address:
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default App;
