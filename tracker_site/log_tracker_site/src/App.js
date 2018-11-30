// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { Nav, Site, Page, Button, Grid, Form } from "tabler-react";

import LogTable from "./tracker_dashboard/LogTable.react";

class App extends Component {
  render() {
    return (
      <Site>
        <Nav>
          <Nav.Item hasSubNav value="DashBoard" icon="globe" />
        </Nav>
        <Page.Content title="DashBoard">
          <Grid.Row cards={true}>
            <Grid.Col width={6}>.</Grid.Col>
            <Grid.Col width={4}>
              <Form.DatePicker
                defaultDate={new Date("2018-11-30T07:05:55.733Z")}
                format="yyyy/mm/"
                maxYear={2018}
                minYear={2017}
                monthLabels={["7", "8", "9", "10", "11", "12"]}
              />
            </Grid.Col>
            <Grid.Col width={2}>
              <Button>Go</Button>
            </Grid.Col>
          </Grid.Row>
          <Grid>
            <LogTable />
          </Grid>
        </Page.Content>
      </Site>
    );
  }
}

export default App;
