import React from 'react';

// import SingleLayout from '../../layout/SingleLayout';
// import LoginContainer from '../../components/container/page/LoginContainer';
// import HeadDefault from '../../layout/head/HeadDefault';
import { Container, Row, Col } from "reactstrap";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }

  // static async getInitialProps(props) {
    // const { store, isServer, req, res } = props.ctx;
  // }

  render() {
    const { dispatch, storeLayout } = this.props;
    return (
      <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
    );
  }
}

export default Profile;
