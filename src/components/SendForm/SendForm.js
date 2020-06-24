import React, {Component} from 'react';
import css from './SendForm.module.sass';


export default class SendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // onValueChange(event) {
    //     console.log(event.target.value)
    // }

    // onValueChange(event) {
    //     this.setState({
    //         text: event.target.value
    //     });
    // };

    // setInputHeight(event, defaultHeight) {
    //     if (event) {
    //         const target = event.target ? event.target : event;
    //         target.style.height = defaultHeight;
    //         target.style.height = `${target.scrollHeight}px`;
    //
    //         if (target.style.height > defaultHeight) {
    //             target.style.padding = `15px`;
    //         }
    //     }
    // };
    // onChange={ (event) => this.setInputHeight(event, '50px')}

    onValueChange(event, defaultHeight) {
        this.setState({
            text: event.target.value
        });

        //динамическое изменение текстареа в зависимости от введнных туда символов
        if (event) {
            const target = event.target ? event.target : event;
            target.style.height = defaultHeight;
            target.style.height = `${target.scrollHeight}px`;

            if (target.style.height > defaultHeight) {
                target.style.padding = `15px`;
            }
            if (target.value === '' ) {
                target.style.height = `50px`;
                target.style.padding = `5px 15px`;
            }

        }
    };

    onSubmit(e) {
        e.preventDefault();
        this.props.addTask(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className={css.form}>
                    <div className={css.textarea}>
                        <textarea
                            value={this.state.text}
                            onChange={(event) => this.onValueChange(event, '50px')}
                            placeholder={"type your task..."}/></div>
                    <button type={"submit"}>Add task</button>
                </div>
            </form>
        );
    }


}

