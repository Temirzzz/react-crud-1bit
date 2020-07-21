import React from 'react';
import './Feedback.css';
import { chips } from '../../functions/chips';
import { success } from '../../functions/success';

class Feedback extends React.Component {

    sendMail = (e) => {
        e.preventDefault();
        let lastname = document.querySelector('.input-lastname');
        let name = document.querySelector('.input-name');
        let contactinfo = document.querySelector('.textarea-contactinfo');

        if (lastname.value === "" || name.value === "" || contactinfo.value === "") {
            chips();
        }
        else {

            fetch("http://localhost/server/mail/send.php", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    lastname: lastname.value,
                    name: name.value,
                    contactinfo: contactinfo.value
                })
            }).then(response => response.json()).then(response => {
                console.log(response);
                if (response === 1) {
                    success();
                }
            });

        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <h1 className="text-center mt-4">Форма обратной связи</h1>
                        <div className="chieps-field"></div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="lastname">Фамилия</label>
                                <input type="text" className="form-control input-lastname" id="lastname" name="lastname" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Имя</label>
                                <input type="text" className="form-control input-name" id="name" name="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contactInfo">Контактная информация</label>
                                <textarea type="text" className="form-control textarea-contactinfo" id="contactinfo" name="contactinfo"></textarea>
                            </div>
                            <button type="submit" className="form-submit-btn btn btn-sm btn-primary" onClick={this.sendMail}>Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedback;