import React from 'react'
import { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { useTitle } from '../../components/hooks/useTitle';
const Contact = () => {
  useTitle("Contact Page");
    const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_1rd7neg', 'template_38602kx', form.current, 'WJ5B0393l_yNlS5Kf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
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
            <form ref={form} onSubmit={sendEmail}>
              <h1 className=' text-center text-2xl underline'>Registration form</h1>

              <div className='ui-form'>
                <div className='field'>
                  <label>Full Name</label>
                  <input type='text' name='from_name' placeholder='Full Name'/>
                  <label>Email Id </label>
                  <input type='Email' name='email_add' placeholder='Email Id'/>
                  <label>Phone </label>
                  <input type='tel' name='ph_num' placeholder='Phone no'/>
                  
                </div>

                <button class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit">SUBMIT</button>


              </div>
            </form>
          </div>
        </div>
        <div className='address mt-10  ml-10'>
          <p className=' text-center text-2xl text-white underline'> Address</p>
          <p className='text-white hover:text-blue-500'>Head Ofc : Puri,Odisha</p>
          <p className='text-white hover:text-blue-500'>Branch Ofc : B-19,Bhubaneswar</p>
          <p className='text-white hover:text-blue-500'>Odisha,751007</p>


          {/* <div className='flex justify-center h-56 items-center border-3 border-solid border-sky-500 w-80'> */}

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
  )
}

export default Contact
