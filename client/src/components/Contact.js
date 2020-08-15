import React, { Component, Fragment } from 'react'

export class Contact extends Component {
    componentDidMount() {
        // place label
        const labeledInputs = document.querySelectorAll('.labeled-input > input[type=text], .labeled-input > input[type=email], .labeled-input > input[type=password], .labeled-input > input[type=number], .labeled-input > textarea');

        function placeLabel() {
            if(this.value) {
                this.classList.remove('place-label');
            }
            else {
                this.classList.add('place-label');
            }
        }

        labeledInputs.forEach(labeledInput => {
            labeledInput.classList.add('place-label');
            labeledInput.addEventListener('focus', placeLabel);
            labeledInput.addEventListener('input', placeLabel);
        });

        // validate form
        /************
        - on blur and on change should just check the validity not if it has value
        - submit should check validity and if the required fields has value
        - when editing password, validate only on blur and submission
        - password comparison is only activated when all password involved has value
        ************/

        const form = document.querySelector('form');
        const requiredFields = document.querySelectorAll('form input[type=text], form input[type=email], form input[type=password], form input[type=number], form input[type=checkbox], form input[type=radio], form textarea');
        // const pwField = document.querySelector('form input[name=password]');
        // const pw2Field = document.querySelector('form input[name=password2]');
        // const numberField = document.querySelectorAll('form input[name=age]')
        let isSuccess;

        function validateNullFields(fields) {
            // triggered by submission
            console.log(fields);
            fields.forEach(field => {
                if(field.value) {
                    // handle pass
                    field.classList.add('pass');
                    field.classList.remove('error');
                    isSuccess = true;
                } else {
                    // handle error
                    field.classList.add('error');
                    field.classList.remove('pass');
                    console.log(field.name + ' is blank.');
                    isSuccess = false;
                }
            });
        }

        function validateNullField(field) {
            // triggered by blur, and input change
            if(field.value) {
                // handle pass
                field.classList.add('pass');
                field.classList.remove('error');
            } else {
                // handle error
                field.classList.remove('pass');
                return false;
            }
        }

        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            validateNullFields(requiredFields);
            if(isSuccess) {
                const successMessage = setInterval(() => {
                    alert('Your message is successfully sent 😉');
                    clearInterval(successMessage);
                }, 1000);
            } else {
                alert('Something went wrong 😥');
            }
        });

        requiredFields.forEach(requiredField => {
            requiredField.addEventListener('input', () => {
                validateNullField(requiredField);
            });
        });
    }
    render() {
        return (
            <Fragment>
                <section>
                    <span className="anchor-point" id="contact">&nbsp;</span>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <form action="#" id="contact">
                                    <h2 className="mb-1">Contact me</h2>
                                    <div className="labeled-input">
                                        <input type="text" name="name" id="name" />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    <div className="labeled-input">
                                        <input type="email" name="email" id="email" />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="labeled-input">
                                        <textarea name="message" id="message" maxLength="300"></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                    <div>
                                        <button className="btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Contact
