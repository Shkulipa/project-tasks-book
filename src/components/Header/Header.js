import React, {Component} from 'react';
import css from './Header.module.sass';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {key: 1, name: 'all', label: "All"},
                {key: 2, name: 'not-completed', label: "Be in progress"},
                {key: 3, name: 'completed', label: "Completed"}
            ]
        }
    }


    render() {
        const Buttons = this.state.buttons.map ( (el) => {
            let clazz = this.props.stateFilter === el.name ? css.active : css.notActive;

            return (
                <button key = {el.key}
                        name={el.name}
                        type='button'
                        onClick={() => this.props.onFilterSelect(el.name)}
                        className={clazz}
                > {el.label} </button >
            );
        });


        return (
            <div className={css.Header}>
                <div>
                    <h1>Your tasks:</h1>
                    <h1>{this.props.allTasks} tasks, {this.props.completedTasks} completed </h1>
                </div>


                <div className={css.Header_buttons}>
                    {Buttons}
                </div>
            </div>
        );
    };
};






