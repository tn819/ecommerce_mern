import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Places from "./places";

export default () => {
    return (
        <div>
            <p>Find a new pad, tell us your preferences</p>
            <Formik
                initialValues={{ price: '', title: '', description: '', keywords: '', location: '', type: '', about: '', image: '', ageFrom: '', ageTo: '', sex: '', lifestage: '', wantedDescription: '' }}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
            {({values, handleChange, handleSubmit, isSubmitting}) => {
                return (
                    <Form>
                        <div><label htmlFor="price">
                            Price
                            <Field type="number" name="price" />
                            <ErrorMessage name="price" component="div" />
                        </label></div>
                        {/* search in descriptions */}
                        <div><label htmlFor="description">
                            Search Description
                            <Field type="text" name="description" />
                            <ErrorMessage name="description" component="div" />
                        </label></div>
                        {/* search preset keywords */}
                        <div><label htmlFor="keywords">
                            Keywords
                            <Field type="text" name="keywords" />
                            <ErrorMessage name="keywords" component="div" />
                        </label></div>
                        {/* pull algolia keywords */}
                        <div><label htmlFor="location">
                            Where?
                            <Field type="text" name="location" render={({field}) => (
                                <Places onChange={handleChange}/>
                            )}/>
                            <ErrorMessage name="location" component="div"/>
                        </label></div>
                        {/* search type options */}
                        <div><label htmlFor="type">
                            Type
                            <Field type="text" name="type" />
                            <ErrorMessage name="type" component="div" />
                        </label></div>
                        {/* constrain age dropdown options */}
                        <div><label htmlFor="age">
                            Age
                            <Field type="number" name="age" />
                            <ErrorMessage name="age" component="div" />
                        </label></div>
                        {/* male, female, prefer not to answer */}
                        <div><label htmlFor="sex">
                            Sex
                            <Field component="select" name="sex">
                                <option name="male"> Male </option>
                                <option name="female"> Female </option>
                                <option name="other"> Other/Prefer Not To Say </option>
                            </Field>
                            <ErrorMessage name="sex" component="div" />
                        </label></div>
                        {/* study, work, party, couple, quiet */}
                        <div><label>
                            Lifestage
                            <Field type="text" name="lifestage" />
                            <ErrorMessage name="lifestage" component="div" />
                        </label></div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )
            }}
            </Formik>
            
        </div>
    );
    
}