// import Head from 'next/head'
// import React, {useState, useEffect, useRef } from "react";
// import { signIn, signOut, useSession, getSession } from "next-auth/client";
// import axios from 'axios';
// import { useRouter } from "next/router";

// export default function Home() {

//   const [data, setData] = useState([]);

//   const [summary, setSummary] = useState({
//     key: global.$key,
//   });

//   const [session, loading] = useSession();

//   console.log(global.$key);

//   var data1 = global.$key;

//   const router = useRouter();

//   const handleTestConnection = async (e, val) => {
//     // e.preventDefault()
//     console.log(val)

//     fetch('/api/test-connection', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data1)
//     }).then((res) => {
//       console.log('Response received')
//       if (res.status === 200) {
//         console.log('Response succeeded!')
//         router.push('/installation-complete');
//       }
//     })
//   }

//   const handleClickCopy = () => {
//     navigator.clipboard.writeText("<script src = \"./base/require.js?" + global.$key + "\" type = \"text/javascript\"/></script>");
   
//   }

//   return (
//     <div>
//       <Head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Hypertarget</title>
//         {/* <!-- favicon --> */}
//         <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
//         {/* <!-- bootstrap  --> */}
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />

//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
//         {/* <!-- owl carousel --> */}
//         <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
//         <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
//         {/* <!-- custom css --> */}
//         <link rel="stylesheet" href="assets/css/steps.css" />
//         <link rel="stylesheet" href="assets/css/main.css" />
//         <link rel="stylesheet" href="assets/css/responsive.css" />
//         {/* <link rel="stylesheet" href="assets/css/code.css" /> */}
//       </Head>
//       <main>
//         {!session && (
//           <>
//             {/* Not signed in <br />
//             <button onClick={signIn}>Sign In</button> */}
//           </>
//         )}
//         {session && (
//           <>
//             {/* {session.user.email} */}

//             {/* <a  ref={buttonRef} onClick={(e) => handleSubmit(e, session.user.email)}></a> */}
//             <header>
//               <nav className="main-nav">
//                 <div className="nav-wrapper">
//                   <div className="logo-wrapper">
//                     <img src="assets/images/logo.svg" alt="" />
//                   </div>
//                   <div className="right-side">
//                     <div className="search-bar-wrapper">
//                       <img src="assets/images/search-icon.png" alt="" />
//                       <input type="text" placeholder="Search" name id />
//                     </div>
//                     <span className="notifi">
//                       <img src="assets/images/notifi.png" alt="" />
//                     </span>
//                     <a href>
//                       <div className="profile-wrap">
//                         <div className="profile-img">
//                           <img src="assets/images/profile.jpg" alt="" />
//                         </div>
//                         <div className="profile-det">
//                           <h5 className="name">
//                             {session.user.email}
//                           </h5>
//                           <p className="desig">CEO</p>
//                         </div>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//               </nav>
//             </header>
//             <form id="contact" action="#">
//               <div>
//                 <ul className="d-flex steps-wrap" style={{ height: '8px' }}>
//                   <li className="active" />
//                   <li className="active" />
//                 </ul>
//                 <section>
//                   <div className="sec-wrapper">
//                     <div className="container">
//                       <div className="row justify-content-center">
//                         <div className="col-12 mt-60">
//                           <div className="c_card">
//                             <div className="card-header">
//                               <div className="heading">
//                                 <h3 className="title">Add Hypertarget to your HTML Website</h3>
//                                 <p className="sub">It’s the only time you’ll be asked to use code.</p>
//                               </div>
//                             </div>
//                             <div className="card-body">
//                               <a onClick={(e) => handleClickCopy()}  href="#" className="cta animate__animated animate__animated animate__flipInX">COPY CODE</a>
//                               <p className="theme-p animate__animated animate__fadeInLeft">
//                                 Copy and paste the snippet below before your website’s closing <span>
//                                   &lt; /head&gt; </span> tag. Once installed, Hypertarget will automatically
//                           start receiving data. </p>
//                               <div className="code-editor-wrapper block animate__animated animate__fadeInUp">
//                                 <div className="code-header">
//                                   <p>HTML</p>
//                                 </div>
//                                 <div className="code-body">
//                                   <textarea readOnly defaultValue={"<script src = \"./base/require.js?" + global.$key + "\" type = \"text/javascript\"/></script>"} />
//                                 </div>
//                               </div>
//                               <a href className="plan-cta animate__animated animate__animated animate__flipInX">Email Code instructions</a>
//                               <div className="d-flex justify-content-end">
//                                 <a onClick={(e) => handleTestConnection()} className="cta animate__animated animate__animated animate__flipInXp">Test Connection</a>
//                               </div>


//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </form>


//           </>
//         )}
//       </main>

//     </div>
//   )

// }
