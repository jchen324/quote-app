import { Component } from "react";
import Quote from "./components/Quote";
import * as API from "./services/api";
import { Center } from "@chakra-ui/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    API.getTodayQuote()
      .then((data) => {
        this.setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  toggleColorMode = () => {
    this.setState((state) => ({ darkMode: !state.darkMode }));
  };

  getRandomQuote = () => {
    API.getRandomQuote()
      .then((data) => {
        this.setState(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { darkMode, quote, author } = this.state;

    return (
      <Center
        w="100%"
        minH="100vh"
        bgGradient={
          darkMode
            ? "linear(to-r, #2C3E50, #4CA1AF)"
            : "linear(to-r, #d9a7c7, #fffcdc)"
        }
      >
        <Quote
          getRandomQuote={this.getRandomQuote}
          toggleColorMode={this.toggleColorMode}
          darkMode={darkMode}
          quote={quote}
          author={author}
        />
      </Center>
    );
  }
}

export default App;
