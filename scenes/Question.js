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
    Icon,
    Button
} from 'native-base';
import { ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { observer } from 'mobx-react/native';

@observer
 export default class Question extends Component {

    constructor(){
        super();
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
         const {dataSource} = this.props.store;
         return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <ListView
                        dataSource={dataSource}
                        renderRow={this.renderRow.bind(this)}
                    />
                </Content>
            </Container>
         );
     }
 }