import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./form.css"

export const ReactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1rd7neg', 'template_rkl15l4', form.current, 'WJ5B0393l_yNlS5Kf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
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
                            <p className=' text-white text-3xl flex justify-center underline'>Feedback Form</p>
                            <form ref={form} onSubmit={sendEmail} className='ownForm'>
                                <label>Name</label>
                                <input type="text" name="from_name" />
                                <label>Email</label>
                                <input type="email" name="from_email" />
                                <div className='flex flex-row'>
                                    <div className='flex flex-col'>
                                        <label>Topic</label>
                                        <select name='topic_name' id="" onChange={(e) => { setSelectedTopic(e.target.value) }}>
                                            {
                                                topics.map((e) => {
                                                    return (
                                                        <option key={e}>{e}</option>
                                                    )

                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='flex flex-col ml-5'>
                                        <label>Sub Topic</label>

                                        {selectedTopic && <select name="sub_name" id="">
                                            {
                                                subMenus[selectedTopic].map(menu => {
                                                    return <option key={menu}>{menu}</option>
                                                })
                                            }
                                        </select>}

                                    </div>
                                    <div className='flex flex-col ml-5'>
                                        <label>Que Num</label>
                                        <input className=' h-[23px] mt-0' type="number" name="que_num" />
                                    </div>
                                </div>


                                <label>Message</label>
                                <textarea className=' indent-2 max-h-fit min-h-[10rem]' type="text" name="message" />

                                <button id='submit' type="submit" value='submit' className=" text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"><b>Submit</b></button>
                            </form>
                        </div>
           
        </>




    )
}
