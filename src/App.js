import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import "./App.css";

class App extends React.Component {

  state = {
    value: "Student"
	};
  
  handleValueChange = (e) => {
    console.log('role button checked', e.target.value);
    this.setState({value: e.target.value})
  }

  render() {
    const value = this.state.value;
    return (
      <div className="App">
        <Header value={value} onChange={this.handleValueChange.bind(this)}/>
        <Main value={value}/>
        <Footer />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Header value={this.state.value} onValueChange={this.handleValueChange}/>
//       <Main value={this.state.value} onValueChange={this.handleValueChange}/>
//       <Footer />
//     </div>
//   );
// }

export default App;
