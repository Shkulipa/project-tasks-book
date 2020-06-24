import React, {Component} from 'react';
import './TasksItem.sass';

export default class TasksItem extends Component {
    render() {
        const {elementText, onDelete, onToggleCompleted, completed} = this.props;

        let classNamesBlock = "block";
        let classNamesButton = "fa fa-check";
        let classStrikeThrough = "classStrikeThroughNone"
        if (completed) {
            classNamesButton += " Completed";
            classNamesBlock = "CompletedBlock"
            classStrikeThrough = "classStrikeThrough"
        }

        return (
            <div className={classNamesBlock}>
                <div className={classStrikeThrough}><span>{elementText}</span></div>
                <div>
                    <button type="button" onClick={onToggleCompleted} className={"TasksItemButton"}><i
                        className={classNamesButton}></i></button>
                    <button type="button" onClick={onDelete} className={"TasksItemButton"}><i
                        className={"fa fa-trash-o"}></i></button>
                </div>
            </div>
        );
    }
};

