import React from "react";

const registerProfile = ();

function Profile (props) {
    return (
        <div>
            <p>Find a new pad,tell us your preferences</p>
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
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
            >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="number" name="price" />
                    <ErrorMessage name="price" component="div" />
                    {/* search in descriptions */}
                    <Field type="text" name="description" />
                    <ErrorMessage name="description" component="div" />
                    {/* search preset keywords */}
                    <Field type="text" name="keywords" />
                    <ErrorMessage name="keywords" component="div" />
                     {/* pull algolia keywords */}
                    <Field type="text" name="location" />
                    <ErrorMessage name="location" component="div" />
                     {/* search type options */}
                    <Field type="text" name="type" />
                    <ErrorMessage name="type" component="div" />
                    {/* constrain age dropdown options */}
                    <Field type="number" name="age" />
                    <ErrorMessage name="age" component="div" />
                    {/* male, female, prefer not to answer */}
                    <Field type="text" name="sex" />
                    <ErrorMessage name="sex" component="div" />
                    {/* study, work, party, couple, quiet */}
                    <Field type="text" name="lifestage" />
                    <ErrorMessage name="lifestage" component="div" />
                    
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
            </Formik>
            
        </div>
    );
    
}

export default Profile;