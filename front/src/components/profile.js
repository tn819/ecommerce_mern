import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Places from "./places";
import styled from 'styled-components';

const FormHolder = styled.div`
 margin-top: 3px;
 display:flex;
 flex-direction:column;
 align-items: center;
 width: 100%;
`;

const FormField = styled.div`
 margin-top: 3px;
 display:flex;
 flex-direction:column;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 transition: box-shadow .3s;
 padding: 5px;
 border-radius: 15px;
 :hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
    }
`;

const FormFieldLabel = styled.label`
    :hover {
    color:gray
    }
`;
const ErrorFormField = styled.div`
    color: red;
`;

export default () => {
    const handleSubmit = (values) => {
        console.log("values getting submitted:", values)
        //axios.post(`/search`, values).then()
    }

    return (
        <FormHolder>
            <p>Find a new pad, tell us your preferences</p>
            <Formik
                initialValues={{ price: '', title: '', description: '', keywords: '', location: '', type: '', about: '', image: '', ageFrom: '', ageTo: '', sex: '', lifestage: '', wantedDescription: '' }}
                validate={values => {
                    let errors = {};
                    if (values.age > 125 || values.age < 15) {
                    errors.age = 'Enter a valid age';
                    }
                    return errors;
                }}
                onSubmit={values => handleSubmit(values)}
            >
            {({values, handleChange, handleSubmit, isSubmitting, setFieldValue}) => (
                <Form>
                    <FormField>
                        <FormFieldLabel htmlFor="price">Price</FormFieldLabel>
                        <Field type="number" name="price"/>
                        <ErrorMessage name="price" component={ErrorFormField} />
                    </FormField>
                    {/* search in descriptions */}
                    <FormField>
                        <FormFieldLabel htmlFor="description">Search Description</FormFieldLabel>
                        <Field type="text" name="description" />
                        <ErrorMessage name="description" component={ErrorFormField} />
                    </FormField>
                    {/* search preset keywords */}
                    <FormField>
                        <FormFieldLabel htmlFor="keywords">Keywords</FormFieldLabel>
                        <Field type="text" name="keywords" />
                        <ErrorMessage name="keywords" component={ErrorFormField} />
                    </FormField>
                    {/* pull algolia keywords */}
                    <FormField>
                        <FormFieldLabel htmlFor="location">Where?</FormFieldLabel>
                        <Field type="text" name="location" render={() => (
                            <Places setFieldValue={setFieldValue}/>
                        )}/>
                        <ErrorMessage name="location" component={ErrorFormField}/>
                    </FormField>
                    {/* search type options */}
                    <FormField>
                        <FormFieldLabel htmlFor="type">Type</FormFieldLabel>
                        <Field type="text" name="type" />
                        <ErrorMessage name="type" component={ErrorFormField} />
                    </FormField>
                    {/* constrain age dropdown options */}
                    <FormField>
                        <FormFieldLabel htmlFor="age">Age</FormFieldLabel>
                        <Field type="number" name="age" />
                        <ErrorMessage name="age" component={ErrorFormField} />
                    </FormField>
                    {/* male, female, prefer not to answer */}
                    <FormField>
                        <FormFieldLabel htmlFor="sex">Sex</FormFieldLabel>
                        <Field component="select" name="sex">
                            <option name="male"> Male </option>
                            <option name="female"> Female </option>
                            <option name="other"> Other/Prefer Not To Say </option>
                        </Field>
                        <ErrorMessage name="sex" component={ErrorFormField} />
                    </FormField>
                    {/* study, work, party, couple, quiet */}
                    <FormField>
                        <FormFieldLabel htmlFor="lifestage">Lifestage</FormFieldLabel>
                        <Field component="select" name="lifestage">
                            <option name="study"> Study </option>
                            <option name="work"> Work </option>
                            <option name="party"> Party </option>
                            <option name="family"> Family </option>
                            <option name="couple"> Couple </option>
                            <option name="quiet"> Quiet </option>
                            <option name="other"> Non Traditional/Other </option>
                        </Field>
                        <ErrorMessage name="lifestage" component={ErrorFormField} />
                    </FormField>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
            </Formik>
            
        </FormHolder>
    );
    
}