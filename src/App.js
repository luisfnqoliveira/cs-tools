import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { Drawer } from 'antd';
import "./App.css";

class App extends React.Component {

  state = {
    value: "Student",
    visible: false
  };

  handleValueChange = (e) => {
    console.log('role button checked', e.target.value);
    this.setState({ value: e.target.value })
  }

  clickOverview = (e) => {
    // console.log('overview button clicked', e.target.value);
    this.showDrawer();
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const value = this.state.value;
    return (
      <div className="App">
        <Header value={value} onChange={this.handleValueChange.bind(this)} clickOverview={this.clickOverview.bind(this)} />
        <Drawer
          title="Introduction"
          placement="right"
          width="500px"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <h5>Memory Paging vs. Library Analogy</h5>
          <ul>
            <li>A <strong>page</strong> is a <strong>book</strong> on the bookshelf.</li>
            <li><strong>Virtual memory</strong> is the <strong>catelog computer</strong> with list of names of books available.</li>
            <li><strong>Physical memory</strong> is the <strong>bookshelf</strong> with level numbers and position numbers as 'addresses'.</li>
            <li><strong>Swap space</strong> is the basement <strong>book storage</strong> where unpopular books are kept.</li>
            <li><strong>Page table</strong> is the <strong>catalog card</strong> that maps a book name to level number and position number.</li>
            <li><strong>Operating system</strong> is the <strong>librarian</strong> in charge of organizing the books.</li>
          </ul>

          <h5>Bookshelf Function Instruction</h5>
          <p>For each book,</p>
          <ul>
            <li>Mouse over 2 seconds for the book details.</li>
            <li>Double click for retriving the book.</li>
          </ul>
        </Drawer>
        <Main value={value} />
        <Footer />
      </div>
    );
  }
}

export default App;
