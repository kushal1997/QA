import React, { useState } from 'react'
import { useTitle } from '../../components/hooks/useTitle';
import $ from "jquery";

import { ReactForm } from '../other/ReactForm';

import Q1_1 from "../../assets/Informatica/Q1.jpg"
import Q1_2 from "../../assets/Informatica/Q1_1.png"

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Ques = () => {
  const [isHide, setHide] = useState(false);
  useTitle(`Oracle Questions`);
  $(document).ready(function () {
    var divs = $('.mydivs>div');
    var now = 0; // currently shown div
    divs.hide().first().show();
    $("button[name=next]").click(function (e) {
      divs.eq(now).hide();
      now = (now + 1 < divs.length) ? now + 1 : 0;
      divs.eq(now).show(); // show next
    });
    $("button[name=prev]").click(function (e) {
      divs.eq(now).hide();
      now = (now > 0) ? now - 1 : divs.length - 1;
      divs.eq(now).show(); // or .css('display','block');
      //console.log(divs.length, now);
    });
  });
  const handleHide=() => {
    setHide(e => !e);
    alert("Scroll Down To Fill Up Feedback Form");
  }
  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  }, false);
  //  Question one
  const [activeWindbox1, setActiveWindbox1] = useState(false);
  const [arrow1, setArrow1] = useState(false);

  const onClick = () => {
    setActiveWindbox1(!activeWindbox1);
    setArrow1(!arrow1);
  }
  //  Question two
  const [activeWindbox2, setActiveWindbox2] = useState(false);
  const [arrow2, setArrow2] = useState(false);

  const onClick2 = () => {
    setActiveWindbox2(!activeWindbox2);
    setArrow2(!arrow2);
  }

  //  Question three
  const [activeWindbox3, setActiveWindbox3] = useState(false);
  const [arrow3, setArrow3] = useState(false);

  const onClick3 = () => {
    setActiveWindbox3(!activeWindbox3);
    setArrow3(!arrow3);
  }
  //  Question four
  const [activeWindbox4, setActiveWindbox4] = useState(false);
  const [arrow4, setArrow4] = useState(false);

  const onClick4 = () => {
    setActiveWindbox4(!activeWindbox4);
    setArrow4(!arrow4);
  }

  //  Question five
  const [activeWindbox5, setActiveWindbox5] = useState(false);
  const [arrow5, setArrow5] = useState(false);

  const onClick5 = () => {
    setActiveWindbox5(!activeWindbox5);
    setArrow5(!arrow5);
  }

  //  Question six
  const [activeWindbox6, setActiveWindbox6] = useState(false);
  const [arrow6, setArrow6] = useState(false);

  const onClick6 = () => {
    setActiveWindbox6(!activeWindbox6);
    setArrow6(!arrow6);
  }

  //  Question seven
  const [activeWindbox7, setActiveWindbox7] = useState(false);
  const [arrow7, setArrow7] = useState(false);

  const onClick7 = () => {
    setActiveWindbox7(!activeWindbox7);
    setArrow7(!arrow7);
  }

  //  Question eight
  const [activeWindbox8, setActiveWindbox8] = useState(false);
  const [arrow8, setArrow8] = useState(false);

  const onClick8 = () => {
    setActiveWindbox8(!activeWindbox8);
    setArrow8(!arrow8);
  }

  //  Question nine
  const [activeWindbox9, setActiveWindbox9] = useState(false);
  const [arrow9, setArrow9] = useState(false);

  const onClick9 = () => {
    setActiveWindbox9(!activeWindbox9);
    setArrow9(!arrow9);
  }

  //  Question ten
  const [activeWindbox10, setActiveWindbox10] = useState(false);
  const [arrow10, setArrow10] = useState(false);

  const onClick10 = () => {
    setActiveWindbox10(!activeWindbox10);
    setArrow10(!arrow10);
  }




  return (
    <div className="questions mt-1 float-right rounded-md  ">
      <div className=" bg-white dark:bg-[#030321]">

        <main className=" p-3  bg-[#030321]">
          <h1 className="  text-3xl font-semibol lg:text-4xl text-white">
            SQL Questions
          </h1>

          {/* Prev & Next Buttons */}
          <div className='arrow_button'>
            <button
              type="button"
              name="prev"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
              className='flex justify-evenly text-center border-solid border-4 border-blue-700 rounded-lg  hover:bg-slate-200'
            >
              <img className='next_prev_img' src="https://img.icons8.com/fluency/48/back.png" alt="back" />
              <p className=' text-blue-600 self-center p-2'>Previous Page</p>
            </button>
            <button
              type="button"
              name="next"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
              className=' ml-3 flex justify-evenly text-centerborder-solid border-4 border-blue-700 rounded-lg  hover:bg-slate-200'
            >
              <p className=' text-blue-600 self-center p-2'>Next Page</p>
              <img className='next_prev_img' src="https://img.icons8.com/fluency/48/forward.png" alt="forward" />
            </button>
          </div>

          {/* Qusetion & Answer Area */}
          <div className="mydivs">
            {/* FIRST PAGE */}
            <div className="cls1 p-4"  >
              {/* Question one  */}
              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick} className='flex items-center justify-between w-full '>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q1 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow1 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox1 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">

                      </p>
                      <SyntaxHighlighter language="sql" style={atomOneDark}>
                        {'SELECT * FROM (SELECT E.*,ROWNUM RNO FROM EMP E) WHERE MOD(RNO,2)=1;'}
                      </SyntaxHighlighter>

                      <SyntaxHighlighter language="sql" style={atomOneDark}>
                        {"SELECT LENGTH(ENAME)-LENGTH(REPLACE(ENAME,'A','')) A_COUNT FROM EMP;"}
                      </SyntaxHighlighter>
                      {/* <img width={500} height={500} src={Q1_1} alt="react_image" ></img> */}
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src={Q1_2} alt="react_image" ></img>

                      <button onClick={onClick} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow1 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>

                    </div>
                  </div>
                </div>

              </div>

              {/* Question two  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick2} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q2 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow2 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox2 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick2} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow2 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>

                  </div>
                </div>

              </div>

              {/* Question three  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick3} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q3 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow3 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox3 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick3} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow3 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>

                  </div>
                </div>

              </div>

              {/* Question four  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick4} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q4 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow4 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox4 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick4} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow4 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>

                    </div>
                  </div>
                </div>

              </div>

              {/* Question five  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick5} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q5 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow5 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox5 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick5} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow5 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question six  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick6} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q6 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow6 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox6 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick6} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow6 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question seven  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick7} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q7 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow7 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox7 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick7} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow7 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question eight  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick8} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q8 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow8 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox8 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick8} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow8 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question nine  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick9} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q9 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow9 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox9 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick9} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow9 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question ten  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick10} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q10 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow10 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox10 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick10} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow10 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* SECOND PAGE */}
            <div className="cls2 p-4"  >
              {/* Question one  */}
              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q11 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow1 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox1 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src={Q1_1} alt="react_image" ></img>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src={Q1_2} alt="react_image" ></img>
                      <button onClick={onClick} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow1 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question two  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick2} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q12 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow2 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox2 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick2} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow2 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question three  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick3} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q13 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow3 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox3 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick3} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow3 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question four  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick4} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q14 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow4 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox4 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick4} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow4 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question five  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick5} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q15 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow5 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox5 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick5} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow5 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question six  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick6} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q16 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow6 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox6 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick6} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow6 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question seven  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick7} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q17 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow7 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox7 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick7} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow7 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question eight  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick8} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q18 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow8 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox8 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick8} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow8 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question nine  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick9} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q19 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow9 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox9 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick9} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow9 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question ten  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick10} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q20 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow10 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox10 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick10} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow10 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            {/* THIRD PAGE */}
            <div className="cls3 p-4"  >
              {/* Question one  */}
              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q21 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow1 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox1 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src={Q1_1} alt="react_image" ></img>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src={Q1_2} alt="react_image" ></img>
                      <button onClick={onClick} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow1 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question two  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick2} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q22 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow2 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox2 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick2} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow2 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question three  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick3} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q23 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow3 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox3 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick3} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow3 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question four  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick4} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q24 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow4 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox4 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick4} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow4 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question five  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick5} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q25 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow5 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox5 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick5} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow5 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question six  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick6} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q26 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow6 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox6 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick6} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow6 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question seven  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick7} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q27 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow7 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox7 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick7} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow7 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question eight  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick8} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q28 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow8 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox8 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick8} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow8 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question nine  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick9} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q29 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow9 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox9 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick9} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow9 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Question ten  */}

              <div className=" mt-4 space-y-8">
                <div className="p-2  rounded-lg border-2 bg-gray-800 hover:border-sky-600">
                  <div className="w-full">
                    <button onClick={onClick10} className='flex items-center justify-between w-full'>
                      <h1 className=" text-start font-semibold text-white dark:text-white">
                        Q30 . How i can play for my appoinment ?
                      </h1>
                      <div className={arrow10 ? 'rotate-180' : 'rotate-0'}>
                        <span className="  text-sm " id="arrow">
                          <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                        </span>
                      </div>
                    </button>
                  </div>

                  <div className={activeWindbox10 ? 'show' : 'hidden'}>
                    <div className='flex flex-col items-center'>
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <img width={500} height={500} src="https://www.watershed.co.uk/sites/default/files/styles/wshed_16x9_480/public/REACT_logo_4-3_0.jpg?itok=J_uf-cbM" alt="react_image" />
                      <p className="mt-6 text-sm text-zinc-200 dark:text-gray-300 text-justify indent-12">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
                        eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum
                        laboriosam recusandae facere dolorum veniam quia pariatur obcaecati
                        illo ducimus?
                      </p>
                      <button onClick={onClick10} className='flex items-center justify-end w-full float-left'>
                        <div className={arrow10 ? 'rotate-180' : 'rotate-0'}>
                          <span className="  text-sm " id="arrow">
                            <img width="40" height="40" src="https://img.icons8.com/3d-fluency/60/down.png" alt="down" />

                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>



          </div>


          <div className='footer '>
            <div className='flex justify-start mt-2'>
              <button onClick={handleHide}
                className=" text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">
                <b>Please Give Feedback</b>
              </button>

            </div>
            {/* Prev & Next Buttons */}
            <div className='arrow_button'>
              <button
                type="button"
                name="prev"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                className='flex justify-evenly text-center border-solid border-4 border-blue-700 rounded-lg  hover:bg-slate-200'
              >
                <img className='next_prev_img' src="https://img.icons8.com/fluency/48/back.png" alt="back" />
                <p className=' text-blue-600 self-center p-2'>Previous Page</p>
              </button>
              <button
                type="button"
                name="next"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                className=' ml-3 flex justify-evenly text-centerborder-solid border-4 border-blue-700 rounded-lg  hover:bg-slate-200'
              >
                <p className=' text-blue-600 self-center p-2'>Next Page</p>
                <img className='next_prev_img' src="https://img.icons8.com/fluency/48/forward.png" alt="forward" />
              </button>
            </div>
          </div>
          {isHide && (<ReactForm />)}
        </main>



      </div>
    </div>
  )
}
