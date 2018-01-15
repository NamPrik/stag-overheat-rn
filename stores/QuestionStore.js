import {observable} from 'mobx';
import {ListView} from 'react-native';

class QuestionStore {

    questions = [
        {title: "First Question", author: "Adthasit", vote: 4, description: "Description 1", createdAt: new Date("2018-01-15")},
        {title: "Second Question", author: "Wasin", vote: 2, description: "Description 2", createdAt: new Date("2017-01-15")},
        {title: "Third Question", author: "Rachen", vote: 1, description: "Description 3", createdAt: new Date("2016-01-15")},
        {title: "Four Question", author: "Ixeshake", vote: 0, description: "Description 4", createdAt: new Date("2015-01-15")},
    ];

    @observable detaSource;

    constructor(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(this.questions);
    }
}

const questionStore = new QuestionStore();
export default questionStore;