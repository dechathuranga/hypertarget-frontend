// import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { destroyCookie } from "nookies";
// import { useRouter } from "next/router";
// import { providers, signIn, getSession, csrfToken } from "next-auth/client";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Input,
//   Container,
//   Stack,
// } from "@chakra-ui/react";
// const bcrypt = require('bcryptjs');

// const CheckoutForm = ({ paymentIntent }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [checkoutError, setCheckoutError] = useState();
//   const [checkoutSuccess, setCheckoutSuccess] = useState();
//   const router = useRouter();

//   const handleSubmit = async e => {
//     // e.preventDefault();

//     console.log("payme**********")
//     try {
//       const {
//         error,
//         paymentIntent: { status }
//       } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
//         payment_method: {
//           card: elements.getElement(CardElement)
//         }
//       });

//       if (error) throw new Error(error.message);

//       if (status === "succeeded") {
//         setCheckoutSuccess(true);
//         destroyCookie(null, "paymentIntentId");
//       }
//     } catch (err) {
//       alert(err.message);
//       setCheckoutError(err.message);
//     }
//   };

//   if (checkoutSuccess){

//     const hash = bcrypt.hashSync(window.$email, 10);
//     // now we set user password to hashed password

//     console.log('Sending')
//     let data = {
//         name : window.$name,
//         email : window.$email,
//         key : hash,
//       }

//       // alert(window.$name + " - " + window.$email)

//       fetch('/api/add-user', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     }).then((res) => {
//       console.log('Response received')
//       if (res.status === 200) {
//         console.log('Response succeeded!')
//       }
//     })

//     router.push('/signin');
//   }

//   return (
//     <div>
//     <form onSubmit={handleSubmit}>
//       <CardElement />



//  <a style={{display: "inline-block"}}
//  disabled={!stripe}
//                   onClick={(e) => handleSubmit()}
//                   type="submit" class="c_submit-btn">Submit  
//                   <i style={{ marginLeft : "10px", }} class="fas fa-arrow-right"></i>
//                             {/* <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
//                   </svg> */}
//                 </a>


//       {checkoutError && <span style={{ color: "red" }}>{checkoutError}</span>}
//     </form>

 
// </div>
//   );
// };


// export default CheckoutForm;

import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
      <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Hypertarget</title>
    {/* <!-- favicon --> */}
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
    {/* <!-- bootstrap  --> */}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"/>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    {/* <!-- owl carousel --> */}
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css"/>
    <link rel="stylesheet" href="assets/css/owl.theme.default.min.css"/>
    {/* <!-- custom css --> */}
    <link rel="stylesheet" href="assets/css/steps.css"/>
    <link rel="stylesheet" href="assets/css/main.css"/>
    <link rel="stylesheet" href="assets/css/responsive.css"/>
    <link rel="stylesheet" href="assets/css/code.css"/>
      </Head>
    
<body>
{/* <!-- nav bar --> */}
<nav class="main-nav landing-nav">
    <div class="nav-wrapper">
        <div class="d-flex">
            <img src="assets/images/menu-bar.svg" class="menu-bar" alt=""/>
            <div class="logo-wrapper">
                <img src="assets/images/logo.svg" alt=""/>
            </div>
        </div>
        <ul class="nav-list">
            <li><a href="">About</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Help</a></li>
        </ul>
        <ul class="nav-btns">
            <li><a href="" class="cta-secondary">Sign In</a></li>
            <li><a href="" class="cta-primary">Sign Up</a></li>
        </ul>
    </div>
    <div class="mobile-nav">
        <div class="menu-header">
            <div class="logo-wrapper">
                <img src="assets/images/logo.svg" alt=""/>
            </div>
            <div class="close">
                <img src="assets/images/menu-close.svg" alt=""/>

            </div>
        </div>
        <ul class="nav-list">
            <li><a href="">About</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Help</a></li>
        </ul>
    </div>
</nav>


<section class="bg-bluegradient pt-100 pb-100 uj2l6">
    <h4 class="text-center text-white mb-5">Click the link below to be instantly logged in</h4>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-sm-12 text-center">
                <div class="c_card check-email-wrap">
                    <img style={{marginLeft: 'auto', marginRight: 'auto' }} src="assets/images/hypertarget-text.svg" alt=""/>
                    <p class="e_para">
                        sign in as
                    </p>
                    <h4 class="fw-bold mb-5">dechathuranga@gmail.com</h4>
					<button class="btn btn-rounded filter-btn mt-20" onclick="window.location.href = 'error.html';">
					Sign in
                    </button>
                    <p class="mt-3 fw-light"><small>IF you did not request this email you can safely ignore it.</small></p>
                </div>
            </div>
        </div>
        
    </div>
</section>


<footer class="main-footer">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                <img class="ft-logo" src="assets/images/logo.svg" alt=""/>
                <p class="para mt-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
                <ul class="social-links">
                    <li><a href=""><i class="fab fa-facebook"></i></a></li>
                    <li><a href=""><i class="fab fa-twitter"></i></a></li>
                    <li><a href=""><i class="fab fa-instagram"></i></a></li>
                </ul>
                <p class="copy-text">
                    ©2021 HYPERTARGET
                </p>
            </div>
            <div class="col-lg-2 offset-lg-1 offset-md-1 col-md-2 col-sm-4 col-12">
                <h4 class="ft-head">
                    Product
                </h4>
                <ul class="ft-links">
                    <li><a href="">Download</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Locations</a></li>
                    <li><a href="">Server</a></li>
                    <li><a href="">Countries</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 col-12">
                <h4 class="ft-head">
                    Feature
                </h4>
                <ul class="ft-links">
                    <li><a href="">Menu 1</a></li>
                    <li><a href="">Menu 1</a></li>
                    <li><a href="">Menu 1</a></li>
                    <li><a href="">Menu 1</a></li>
                    <li><a href="">Menu 1</a></li>
                    <li><a href="">Menu 1</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 col-12">
                <h4 class="ft-head">
                    Earn Money
                </h4>
                <ul class="ft-links">
                    <li><a href="">Affiliate</a></li>
                    <li><a href="">Become Partner</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

{/* <!-- Jquery Script v --> */}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
{/* <!-- bootstrp --> */}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
<script src="assets/js/owl.carousel.min.js"></script>
{/* <!-- custom js --> */}
{/* <!-- <script src="assets/js/app.js"></script> --> */}
{/* <script>
    $('.menu-bar').on('click', function () {
        $('.mobile-nav').addClass('active');
    });
    $('.close').on('click', function () {
        $('.mobile-nav').removeClass('active')
    })
</script> */}
</body>

    </div>
  )
}
