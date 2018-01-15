import React, { Component } from 'react';
import {
    Header,
    Title,
    Container,
    Content,
    Left,
    Body,
    Right,
    ListItem,
    Text,
    Icon
} from 'native-base';
import { ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';

 export default class Question extends Component {

    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
        this.questions = [
            {title: "First Question", author: "Adthasit", vote: 4, description: "Description 1", createdAt: new Date("2018-01-15")},
            {title: "Second Question", author: "Wasin", vote: 2, description: "Description 2", createdAt: new Date("2017-01-15")},
            {title: "Third Question", author: "Rachen", vote: 1, description: "Description 3", createdAt: new Date("2016-01-15")},
            {title: "Four Question", author: "Ixeshake", vote: 0, description: "Description 4", createdAt: new Date("2015-01-15")},
        ];
        this.state = {
            dataSource: ds.cloneWithRows(this.questions),
        };
    }

    renderHeader(){
        const {title} = this.props;

        return (
            <Header>
                <Body>
                    <Title>{title}</Title>
                </Body>
            </Header>
        )
    }

    renderRow(rowData){
        return(
            <ListItem onPress={()=> {Actions.QuestionDetail({question: rowData})}}>
                <Body>
                    <Text>{rowData.author}</Text>
                    <Text note>{rowData.title}</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward" style={{color: "#0098ff"}}/>
                </Right>
            </ListItem>
        );
    }

     render(){
         return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow.bind(this)}
                    />
                </Content>
            </Container>
         );
     }
 }