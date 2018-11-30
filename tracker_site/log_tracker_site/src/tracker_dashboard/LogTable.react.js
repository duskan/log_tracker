import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { Table } from "tabler-react";

class LogTable extends Component {
  render() {
    return (
      <Table>
        <Table.Header>
          <Table.ColHeader>Tag</Table.ColHeader>
          <Table.ColHeader>Log Time</Table.ColHeader>
          <Table.ColHeader>Message</Table.ColHeader>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Col>Error</Table.Col>
            <Table.Col>2018-11-30</Table.Col>
            <Table.Col>4922#0: bind() to 0.0.0.0:80 failed (13: Permission denied) </Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>Error</Table.Col>
            <Table.Col>2018-11-30</Table.Col>
            <Table.Col>4922#0: bind() to 0.0.0.0:80 failed (13: Permission denied) </Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>Error</Table.Col>
            <Table.Col>2018-11-30</Table.Col>
            <Table.Col>4922#0: bind() to 0.0.0.0:80 failed (13: Permission denied) </Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>Error</Table.Col>
            <Table.Col>2018-11-30</Table.Col>
            <Table.Col>4922#0: bind() to 0.0.0.0:80 failed (13: Permission denied) </Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>Error</Table.Col>
            <Table.Col>2018-11-30</Table.Col>
            <Table.Col>4922#0: bind() to 0.0.0.0:80 failed (13: Permission denied) </Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>Error</Table.Col>
            <Table.Col>2018-11-30</Table.Col>
            <Table.Col>4922#0: bind() to 0.0.0.0:80 failed (13: Permission denied) </Table.Col>
          </Table.Row>
          <Table.Row>
            <Table.Col>Error</Table.Col>
            <Table.Col>2018-11-30</Table.Col>
            <Table.Col>4922#0: bind() to 0.0.0.0:80 failed (13: Permission denied) </Table.Col>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default LogTable;
