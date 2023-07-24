import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import "./form.css"

const validationSchema = yup.object().shape({
    from_name: yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Your name is equired'),
    from_email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().min(10, 'Too Short!').required('Message is required'),
});

export const ReactForm = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const formik = useFormik({
        initialValues: {
            from_name: '',
            from_email: '',
            message: '',
            que_num: '',
            sub_name: '',
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            emailjs
                .send('service_1rd7neg', 'template_rkl15l4', values, 'WJ5B0393l_yNlS5Kf')
                .then(() => {
                    console.log('Email sent successfully!');
                    setShowConfirmation(true);
                    resetForm();
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });
        },
    });

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    const [selectedTopic, setSelectedTopic] = useState('');

    const topics = ['Select Topic', 'Informatica', 'Oracle'];
    const subMenus = {
        'Select Topic': ['Select Sub Topic'],
        'Informatica': ['DWH', 'Informatica Questions', 'Scenario Based Question'],
        'Oracle': ['PL SQL', 'Querry Que', 'SQL Question'],

    }


    return (

        <>
            <div className='maindiv'>
                {!showConfirmation ? (
                    <div>
                        <p className=' text-white text-3xl flex justify-center underline'>Feedback Form</p>
                        <form onSubmit={formik.handleSubmit} className='ownForm'>
                            <label htmlFor='from_name'>Name</label>
                            <input
                                className='form_input'
                                type="text"
                                name="from_name"
                                placeholder='Your Name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.from_name}
                            />
                            {formik.touched.from_name && formik.errors.from_name && <div className=' text-red-500 font-semibold text-left'>{formik.errors.from_name}</div>}

                            <label htmlFor='from_email'>Email</label>
                            <input
                                className='form_input'
                                type="email"
                                name="from_email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.from_email}
                            />
                            {formik.touched.from_email && formik.errors.from_email && <div className=' text-red-500 font-semibold text-left'>{formik.errors.from_email}</div>}

                            <div className='form_row'>
                                <div className='form_topic'>
                                    <label htmlFor='topic_name'>Topic</label>
                                    <select
                                        name='topic_name'
                                        className='form_input'
                                        value={formik.values.topic_name}
                                        onChange={(e) => { setSelectedTopic(e.target.value) }}
                                    >
                                        {
                                            topics.map((e) => {
                                                return (
                                                    <option key={e}>{e}</option>
                                                )

                                            })
                                        }
                                    </select>
                                </div>
                                <div className='form_sub_topic'>
                                    <label htmlFor='sub_name'>Sub Topic</label>

                                    {selectedTopic &&
                                        <select
                                            className='form_input'
                                            name="sub_name"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.sub_name}
                                        >
                                            {
                                                subMenus[selectedTopic].map(menu => {
                                                    return <option key={menu}>{menu}</option>
                                                })
                                            }
                                        </select>}

                                </div>
                                <div className='form_qn'>
                                    <label htmlFor='que_num'>Que Num</label>
                                    <input
                                        className='form_input h-[23px] mt-0 w-[100px]'
                                        type="number"
                                        name="que_num"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.que_num}
                                    />
                                </div>
                            </div>


                            <label htmlFor='message'>Message</label>
                            <textarea
                                className='form_input indent-2 max-h-fit min-h-[10rem]'
                                type="text"
                                name="message"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            />
                            {formik.touched.message && formik.errors.message && <div className=' text-red-500 font-semibold text-left'>{formik.errors.message}</div>}
                            <button
                                id='submit'
                                type="submit"
                                value='submit'
                                className=" text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                <b>Submit</b>
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className='flex flex-col justify-center items-center'>
                        <img width="100" height="100" src="https://img.icons8.com/external-sbts2018-flat-sbts2018/100/external-thank-you-basic-ui-elements-2.3-sbts2018-flat-sbts2018.png" alt="external-thank-you-basic-ui-elements-2.3-sbts2018-flat-sbts2018" />
                        <h1 className='text-white mt-2 text-2xl'>Thank you for your Feedback!</h1>
                        <button
                            onClick={handleCloseConfirmation}
                            className=" mt-4 text-l text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>

        </>




    )
}
