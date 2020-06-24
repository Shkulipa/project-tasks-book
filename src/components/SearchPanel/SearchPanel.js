import React, {Component} from 'react';
import css from './SearchPanel.module.sass';


export default class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    //onUpdateSearch============================================================
    // onUpdateSearch(el) {
    //     let text = el.target.value;
    //     this.setState( () => {
    //         return {
    //             term: text
    //         }
    //     } );
    //
    //     // this.props.onUpdateSearchApp();
    // };

    //or

    onUpdateSearch(el) {
        // this.setState( {term: el.target.value});
        this.props.onUpdateSearchApp(el.target.value);
    };
    //onUpdateSearch============================================================


    ClearTextarea() {
        this.props.onUpdateSearchApp('');
    }

    render() {
        // console.log(this.state.term);
        return (
            <div className={css.textareaBlock}>
               <textarea className={css.textarea}
                         value={this.props.term}
                         onChange={this.onUpdateSearch}
                         placeholder={"Find your task..."}/>
                <button type={"reset"} onClick={ () => this.ClearTextarea() }>Clean</button>
            </div>
        );
    }
}

