import React, {Component} from 'react';
import './App.sass';

//Components
import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";
import SendForm from "../SendForm/SendForm";
import SearchPanel from "../SearchPanel/SearchPanel";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {id: 0, text: 'сделать уроки', completed: false},
                {id: 1, text: 'Убрать дома', completed: false},
                {id: 2, text: 'Поміть посуду', completed: false},
                {id: 3, text: 'погулять', completed: false},
                {id: 4, text: 'футбол', completed: false},
                {id: 5, text: 'английский', completed: false},
                {id: 6, text: 'покушать', completed: false}
            ],
            filter: "all",
            term: ''
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addTask = this.addTask.bind(this);
        this.onToggleCompleted = this.onToggleCompleted.bind(this);
        this.filterPost = this.filterPost.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.onUpdateSearchApp = this.onUpdateSearchApp.bind(this);

        this.maxId = this.state.tasks.length;
    }

    deleteItem(id) {
        this.setState(({tasks}) => {
            const index = tasks.findIndex(elem => elem.id === id);

            const newArr = [...tasks.slice(0, index), ...tasks.slice(index + 1)];

            return {
                tasks: newArr
            };
        });
    };

    addTask(task) {
        const newTask = {
            id: this.maxId++,
            text: task,
            completed: false
        };

        this.setState(({tasks}) => {
            if (task !== '') {
                const newArr = [newTask, ...tasks];

                return {
                    tasks: newArr
                }
            }
        })
    };

    onToggleCompleted(id) {
        this.setState(({tasks}) => {
            const index = tasks.findIndex((element) => element.id === id);

            const newItem = {...tasks[index], completed: !tasks[index].completed};

            const newArr = [...tasks.slice(0, index), newItem, ...tasks.slice(index + 1)];

            return {
                tasks: newArr
            };
        });
    }

    filterPost(arrTasks, filter) {
        if (filter === 'completed') {
            return arrTasks.filter(arrTasks => arrTasks.completed === true);
        } else if (filter === 'not-completed') {
            return arrTasks.filter(arrTasks => arrTasks.completed === false);
        } else {
            return arrTasks;
        }
    };

    onFilterSelect(name) {
        this.setState(() => {
            return {
                filter: name
            }
        });
    };

    searchPost(item, term) {
        if (term.length === 0) {
            return item
        }

        return item.filter((el) => el.text.indexOf(term) > -1 );
    };

    onUpdateSearchApp(term) {
        this.setState(() => {
            return {
                term: term
            }
        })
    }


    render() {
        // console.log(this.state);
        // console.log(this.state.term);

        const allTasks = this.state.tasks.length;
        const completedTasks = this.state.tasks.filter((element) => element.completed).length;
        const filtersTasks = this.filterPost(this.state.tasks, this.state.filter);
        const visiblePost = this.searchPost(filtersTasks, this.state.term);


        return (
            <div className="App">
                <Header
                    stateFilter={this.state.filter}
                    onFilterSelect={this.onFilterSelect}
                    allTasks={allTasks}
                    completedTasks={completedTasks}/>
                <SearchPanel
                    term = { this.state.term }
                    onUpdateSearchApp={this.onUpdateSearchApp}/>
                <SendForm
                    typeTask={this.state.tasks.typeTask}
                    addTask={this.addTask}/>
                <Tasks
                    tasks={visiblePost}
                    onDelete={this.deleteItem}
                    onToggleCompleted={this.onToggleCompleted}/>
            </div>
        );
    };
};
