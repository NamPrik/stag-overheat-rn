import React, { Component } from 'react';
import {
    Header,
    Left,
    Right,
    Button,
    Body,
    Title,
    Container,
    Content,
    Text,
    Icon
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class QuestionDetail extends Component {

    renderHeader(){
        const {title} = this.props;
        return(
            <Header>
                <Left>
                    <Button transparent onPress={()=> Actions.pop()}>
                        <Icon name="arrow-back" style={{color: "#057ce4"}}/>
                    </Button>
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right/>
            </Header>
        )
    }

    render(){
        const {title, author} = this.props.question;
        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <Text>Title: {title}</Text>
                    <Text>Author: {author}</Text>
                </Content>
            </Container>
        );
    }

}