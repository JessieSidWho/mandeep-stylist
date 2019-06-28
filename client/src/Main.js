import React, { Component } from 'react';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import './App.css';

class Main extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
        </Button.Group>


        <Sidebar.Pushable as={Segment}>

          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>

            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>

            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>

          </Sidebar>

          <Sidebar.Pusher>
            <Segment pure basic >
              <Header pure as='h3'>Application Content</Header>
              <p>jdskafjdskjdskjkldsjfjasdjfkldsjfkdjflkdsflkdsadsfj
                fjdskafjdsdjfsakfdsjfd;sajdsfjdasjfkdsj;dakjlfjdjlfdajfkldasj
                fdsafjdsckdsackdmkldscjdskjcdalskcnsdjcdksjkdsjvdklvladvjslad
                cjdacjklsjckldsjckldascjdaklsjckldsjcdksjckldsjcdsjkldsajckklas
                jcdaksjckldsjckldsajckldsjckdscjkladsjckdsjckldsjckldsjcdklsvjdsj
                kldasjckdslkjckadscjkdlsjckladsjckldsajklckdscjdasljcklscjkadjskc
                ckalkdsklcjdalsjckjasdjckldsjckadscjkldsjckldjcjkdlscdklasjvds;jvlsdsdj
                jdskafjdsdjfsakfdsjfd;sajdsfjdasjfkdsj;dakjlfjdjlfdajfkldasj
                fdsafjdsckdsackdmkldscjdskjcdalskcnsdjcdksjkdsjvdklvladvjslad
                cjdacjklsjckldsjckldascjdaklsjckldsjcdksjckldsjcdsjkldsajckklas
                jcdaksjckldsjckldsajckldsjckdscjkladsjckdsjckldsjckldsjcdklsvjdsj
                kldasjckdslkjckadscjkdlsjckladsjckldsajklckdscjdasljcklscjkadjskc
                ckalkdsklcjdalsjckjasdjckldsjckadscjkldsjckldjcjkdlscdklasjvds;jvlsdsdj
                jdskafjdsdjfsakfdsjfd;sajdsfjdasjfkdsj;dakjlfjdjlfdajfkldasj
                fdsafjdsckdsackdmkldscjdskjcdalskcnsdjcdksjkdsjvdklvladvjslad
                cjdacjklsjckldsjckldascjdaklsjckldsjcdksjckldsjcdsjkldsajckklas
                jcdaksjckldsjckldsajckldsjckdscjkladsjckdsjckldsjckldsjcdklsvjdsj
                kldasjckdslkjckadscjkdlsjckladsjckldsajklckdscjdasljcklscjkadjskc
                ckalkdsklcjdalsjckjasdjckldsjckadscjkldsjckldjcjkdlscdklasjvds;jvlsdsdj
              </p>
            </Segment>
          </Sidebar.Pusher>

        </Sidebar.Pushable>
      </>
    );
  }
}

export default Main;