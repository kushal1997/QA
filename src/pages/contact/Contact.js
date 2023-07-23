import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import './contact.css';
import { useTitle } from '../../components/hooks/useTitle';

const indianMobileNumberRegExp = /^[7-9][0-9]{9}$/;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validationSchema = yup.object().shape({
  name: yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: yup
    .string()
    .matches(emailRegExp, 'Invalid email')
    .required('Email is required'),
  mob: yup
    .string()
    .matches(indianMobileNumberRegExp, 'Invalid mobile number')
    .required('Mobile number is required'),
});

export const Contact = () => {
  useTitle("Contact Page");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mob: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Submit the form data to EmailJS
      emailjs.send('service_1rd7neg', 'template_38602kx', values, 'WJ5B0393l_yNlS5Kf')
        .then(() => {
          console.log('Email sent successfully!');
          resetForm();
          setShowConfirmation(true);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    },
  });
  return (
    <main className=" p-2 mt-1 h-screen bg-[#030321]">
      <div className='flex flex-col justify-center items-center ml-[10rem]  p-1 w-[90rem]'>

        <div className='contact  '>
          <div className='h-contact '>
            <h1> Get In Touch!</h1>

          </div>
          <div className='p-contact'>
            <h2> Fill the form and our team will get back to you.</h2>
          </div>
          <div className=' w-[600px] h-[80px] mt-3 '>
            <div className='flex flex-row'>
              <div className='flex justify-center items-center flex-col text-xl p-1  border-solid border-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg'>
                <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/new-post.png" alt="new-post" />
                <a href="mailto:info@dayacs.com">info@dayacs.com</a>
              </div>
              <div className='flex ml-2 justify-center items-center p-1 flex-col text-xl border-solid border-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg '>
                <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/phone.png" alt="phone" />
                <a href="tel:+91 8144802704">+91 8144802704</a>
              </div>
            </div>

          </div>
        </div>

        <div className='flex justify-center '>


          <div className='flex justify-center mt-10'>
            <div className='container'>
              {showConfirmation ? (
                <div className='maindiv flex flex-col justify-center items-center'>

                  <img width="100" height="100" src="https://img.icons8.com/external-sbts2018-flat-sbts2018/100/external-thank-you-basic-ui-elements-2.3-sbts2018-flat-sbts2018.png" alt="external-thank-you-basic-ui-elements-2.3-sbts2018-flat-sbts2018" />
                  <h1>Thank You for your message!</h1>
                  <p className='text-l'>We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      className='input'
                      id="name"
                      name="name"
                      type="text"
                      placeholder='Your Name'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && <div className=' text-red-500 font-semibold'>{formik.errors.name}</div>}
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      className='input'
                      id="email"
                      name="email"
                      type="email"
                      placeholder='email@example.com'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && <div className=' text-red-500 font-semibold'>{formik.errors.email}</div>}
                  </div>
                  <div>
                    <label htmlFor="mob">Phone Num</label>
                    <input
                      className='input'
                      name="mob"
                      type="tel"
                      placeholder='9999999999'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mob}
                    />
                    {formik.touched.mob && formik.errors.mob && <div className=' text-red-500 font-semibold'>{formik.errors.mob}</div>}
                  </div>
                  <button class="contact_form text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">
                    SUBMIT
                  </button>
                </form>)}


            </div>
          </div>
          <div className='address mt-10  ml-10'>
            <p className=' text-center text-2xl text-white underline'> Address</p>
            <p className='text-white hover:text-blue-500'>Head Ofc : Puri,Odisha</p>
            <p className='text-white hover:text-blue-500'>Branch Ofc : B-19,Bhubaneswar</p>
            <p className='text-white hover:text-blue-500'>Odisha,751007</p>

            <div className=' ml-5 mt-4 ' >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7484.503512911215!2d85.8454036!3d20.289843900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a14fd5712c61%3A0x9b02a71f624c28dd!2sDaya%20Consultancy%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1689834516745!5m2!1sen!2sin"
                width={300}
                height={200}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
