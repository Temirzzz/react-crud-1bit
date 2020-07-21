import React, { Component } from 'react';

class Form extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex === -1)
            return {
                news: '',
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list !== this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }

    render() {
        return (
            <form className="mt-5" onSubmit={this.handleSubmit} autoComplete="off">
                <input className="mb-3" name="news" placeholder="Новость" onChange={this.handleInputChange} value={this.state.news} /><br />
                <button className="btn btn-primary mt-2" type="submit">Добавить</button>
            </form>
        )
    }
}

export default Form