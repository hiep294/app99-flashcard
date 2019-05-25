import { connect } from 'react-redux'
import { onHomePage } from '../../redux elements/actions/actionDetails'
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-4">
          <Container>
            <NavbarBrand
              onClick={() => this.props.dispatch(onHomePage())}
              style={{ color: 'rgb(236, 236, 236)', cursor: 'pointer' }}
            >FlashCard- App100</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default connect()(Layout)