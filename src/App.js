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

  handleRoleChange(role) {
    this.setState({ role: role })
  }

  clickOverview = (e) => {
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
          width="600px"
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

          <h5>Bookshelf Function Instruction (For each book)</h5>
          <ul>
            <li>Mouse over 2 seconds for the book details.</li>
            <li>Double click for retriving the book.</li>
            <li>The red badge at the corner indicates its retrieve frequency.</li>
          </ul>

          <h5>Record Series Buttons Function</h5>
          <ul>
            <li><strong>Record Step: </strong>Record current books in the library.</li>
            <li><strong>Clear all Steps: </strong>Clear all recorded steps.</li>
            <li><strong>Download Json: </strong>Download all recorded steps as Json file.</li>
            <li><strong>Upload Json: </strong>Upload downloaded Json file or formatted Json file with steps and show with initial step.</li>
            <li><strong>Next: </strong>Go to the next step in uploaded Json file.</li>
            <li><strong>Previous: </strong>Go to the previous step in uploaded Json file.</li>
          </ul>

          <h5>Record Buttons User Manual</h5>
          <ul>
            <li>Recording process:</li>
            <ul>
              <li><strong>Step 1:</strong> Click on "Record Step" button after any actions or movement until you are satisfied with books in current library.</li>
              <li><strong>Adanced Step:</strong> Click on the dropdown menu from "Undo" button and select the specific step you want to erase and redo recording process following step 1.</li>
              <li><strong>Step 2:</strong> Click on "Download Json" button to export the Json file with all steps you recorded recently.</li>
            </ul>
            <br />
            <li>Uploading and display process: </li>
            <ul>
              <li><strong>Step 1:</strong> Click on "Upload Json" button to import the downloaded Json file and books from the first step would appear on screen as default.</li>
              <li><strong>Step 2:</strong> Display books from Json file step by step.</li>
              <ul>
                <li><strong>Step 2.1:</strong> Click on "next" button to display books from the next step.</li>
                <li><strong>Step 2.2:</strong> Click on "previous" button to display books from the previous step.</li>
              </ul>
            </ul>

          </ul>
        </Drawer>
        <Main role={this.state.role} handleRoleChange={this.handleRoleChange.bind(this)} />
        <Footer />
      </div>
    );
  }
}

export default App;
