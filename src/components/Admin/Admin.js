import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Admin.css';
import Form from '../Form/Form';


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            currentIndex: -1,
            list: this.returnList()
        }
    }

    returnList() {
        if (localStorage.getItem('transactions') == null)
            localStorage.setItem('transactions', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = (index) => {
        var list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex === -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    componentDidMount() {
        if (sessionStorage.getItem("userData")) {

        }
        else {
            this.setState({ redirect: true });
        }
    }

    logout = () => {
        sessionStorage.setItem("userData", '');
        sessionStorage.clear();
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={'/login'} />)
        }
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h1 className="mt-5">Добавить Новость</h1>
                            <Form
                                currentIndex={this.state.currentIndex}
                                list={this.state.list}
                                onAddOrEdit={this.onAddOrEdit}
                            />
                            <Link style={{ textDecoration: 'none' }} className="btn btn-success mt-1 mb-5" onClick={this.logout} to="/">Выйти</Link>
                            <hr />

                            <table className="myTable">
                                <tbody>
                                    {this.state.list.map((item, index) => {
                                        return <tr key={index}>
                                            <td className="alert alert-primary info-td">{item.news}</td>
                                            <td><button className="btn btn-success" onClick={() => this.handleEdit(index)}>Редактировать</button></td>
                                            <td><button className="btn btn-danger" onClick={() => this.handleDelete(index)}>Удалить</button></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;