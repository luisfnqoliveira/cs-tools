import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { Drawer } from 'antd';
import "./App.css";

class App extends React.Component {

  state = {
    role: "Student",
    visible: false
  };

  handleValueChange = (e) => {
    console.log('role button checked', e.target.value);
    this.setState({ role: e.target.value })
  }

  clickOverview = (e) => {
    console.log('overview button clicked', e.target.value);
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
    return (
      <div className="App">
        <Header role={this.state.role} onChange={this.handleValueChange.bind(this)} clickOverview={this.clickOverview.bind(this)} />
        <Drawer
          title="Introduction"
          placement="right"
          width="400px"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <h5>Memory Paging vs. Library Analogy</h5>
          <ul>
            <li>A page is a book on the bookshelf.</li>
            <li>Virtual memory is the list of names of books available.</li>
            <li>Physical memory is the bookshelf with level numbers and position numbers as 'addresses'.</li>
            <li>Swap space is the basement book storage where unpopular books are kept.</li>
            <li>Page table is the catalog that maps a book name to level number and position number.</li>
            <li>Operating system is the librarian in charge of organizing the books.</li>
          </ul>

          <h5>Bookshelf Function Instruction</h5>
          <p>For each book,</p>
          <ul>
            <li>Mouse over 2 seconds for the book details.</li>
            <li>Double click for retriving the book.</li>
          </ul>
        </Drawer>
        <Main role={this.state.role} />
        <Footer />
      </div>
    );
  }
}

export default App;
