import {Formik, Form, Field} from 'formik';
import s from './../Contacts.module.scss'
import {Button} from "../../../common/components/Button/Button";
import {api} from "../../../api/api";


export type FormValuesType = {
    name: string
    email: string
    message: string
}

const formValues = {
    name: '',
    email: '',
    message: '',
};


export const MyForm = () => {


    const handleSubmit = (values: FormValuesType) => {
        api.sendForm(values)
            .then(() => {
                debugger
                alert('Message has been sent!')
            })
            .catch(() => {
                debugger
                alert('Some error occurred')
            })
        console.log(1)
    };

    return (
        <Formik
            initialValues={formValues}
            onSubmit={handleSubmit}

        >
            <Form>
                <h3>Write me a message</h3>
                <div className={s.form_control}>
                    <Field
                        type="text"
                        name="name"
                        placeholder="Name*"
                        required
                        className={s.form_input}
                    />


                    <Field
                        type="email"
                        name="email"
                        placeholder="Email*"
                        required
                        className={s.form_input}
                    />
                </div>

                <Field
                    as="textarea"
                    name="message"
                    placeholder="Your message here*"
                    required
                    className={s.form_textarea}
                />
                <Button title="send message" type="submit"/>
            </Form>
        </Formik>
    );
};

