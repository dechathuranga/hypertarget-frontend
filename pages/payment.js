import React, { useEffect } from "react";
import Stripe from "stripe";
import { parseCookies, setCookie } from "nookies";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Head from 'next/head'
import { useRouter } from "next/router";
import { withIronSession } from "next-iron-session";
import getConfig from 'next/config'
// import { signIn, signOut, useSession } from "next-auth/client";
import { providers, signIn, getSession, csrfToken } from "next-auth/client";

import CheckoutForm from "./CheckoutForm";

console.log("*****----**-*-*--")
console.log(global.$type);
console.log(global.$price);

let data1 = {
  csrfToken : '298e12975ee552e8d504cdb6aff2cdd45a4a4c6340b74de4d8cb0df887fdf7ec%7Cfef88c4a4b74fd57686bcb474f48f49de424aad8ccaa2cf709c970051f9b13db',
  email : 'dechathuranga@gmail.com',
}

// session: async (session, data1) => {
//   console.log('data passed to object when signed in', data1)
//   //  user object there doesn't have all data passed before
//   return Promise.resolve(session)
// }

console.log("// * - " + getSession)


const stripePromise = loadStripe("pk_test_51JX4itAOb7pHxrW2EOFHb2DOYEDNSALi7fi8ipuGwpJ0SdKbbT4Ur0tY5otpkw1U6o0aELi9ftkEjAM56siFJugK00PDcVYkky");

export const getServerSideProps = async ctx => {
  
  const stripe = new Stripe("sk_test_51JX4itAOb7pHxrW20akGAPv5Snf9RNRZDBuyVjEqwu3U1A1mktlZnDiETU5tQfE7nnCuEWCKKrsYLhnZAXlXuV9C00UgwvUBBP");

  let paymentIntent;
  
  const { paymentIntentId } = await parseCookies(ctx);

  if (paymentIntentId) {
    paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    return {
      props: {
        paymentIntent
      }
    };
  }

  paymentIntent = await stripe.paymentIntents.create({
    
    amount : 15000,
    currency: "usd"
  });

  setCookie(ctx, "paymentIntentId", paymentIntent.id);

  return {
    props: {
      paymentIntent
    }
  };
};

const onKeyUpName = (e) => {
  console.log(e.target.value);
  window.$name = e.target.value;
}

const onKeyUpEmail = (e) => {
  console.log(e.target.value);
  window.$email = e.target.value;
}

// const [session, loading] = useSession();

// const CheckoutPage = ({paymentIntent }) => (

  export default function CheckoutPage({ paymentIntent }) {
    // export default function SignIn() {
    
    
      // useEffect(() => {
      //   // buttonRef.current.click();
      //   alert(global.$price);
      // }, []);
    
      return (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hypertarget</title>
      {/* <!-- favicon --> */}
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      {/* <!-- bootstrap  --> */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      {/* <!-- owl carousel --> */}
      <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
      {/* <!-- custom css --> */}
      <link rel="stylesheet" href="assets/css/steps.css" />
      <link rel="stylesheet" href="assets/css/main.css" />
      <link rel="stylesheet" href="assets/css/responsive.css" />
      <link rel="stylesheet" href="assets/css/code.css" />
    </Head>
    <body>
      {/* <!-- nav bar --> */}
      <nav class="main-nav landing-nav">
        <div class="nav-wrapper">
          <div class="d-flex">
            <img src="assets/images/menu-bar.svg" class="menu-bar" alt="" />
            <div class="logo-wrapper">
              <img src="assets/images/logo.svg" alt="" />
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
              <img src="assets/images/logo.svg" alt="" />
            </div>
            <div class="close">
              <img src="assets/images/menu-close.svg" alt="" />

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

      <section class="pay-info-sec bg-bluegradient pt-20 pb-60">
        <div class="container">
          <div class="row">
            <div class="col-12 text-left">
              <ul class="breadcrumbs">
                <li>
                  <a href="">
                    Plans
                        </a>
                </li>
                <li>
                  <img src="assets/images/bread-arrow.svg" alt="" />
                </li>
                <li class="active"><a href="">
                  Checkout
                    </a></li>
              </ul>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-8 col-sm-12 text-center">
              <h3 class="sec-head white-color mb-20">
                Enter Your Payment Details Below
                </h3>
            </div>
          </div>

        </div>
      </section>

      <section class="pay-info-wrap">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7 col-lg-7 col-12 col-sm-12">
              <div class="c_card">
                <h3 class="head">
                  Payment Information
                    </h3>
                {/* <form action=""> */}
                <div class="form-group">
                  <label for="">Name *</label>
                  <div class="c_input-group">
                    <input onKeyUp={(e) => onKeyUpName(e)} type="text" name="" placeholder="Enter your full name" id="" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="">Email *</label>
                  <div class="c_input-group">
                    <input onKeyUp={(e) => onKeyUpEmail(e)} type="text" name="" placeholder="Enter your email address" id="" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="">Card Details *</label>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm paymentIntent={paymentIntent} />
                  </Elements>
               
                </div>

              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
              <div class="price-card c_card">
                <div class="price-header">
                  <p class="price-cat">
                    You have to pay
                                        </p>
                  <h4 class="main-price">
                    ${global.$price}/mo
                                        </h4>
                </div>
                <div class="price-body">
                  <h5 class="head">
                    What’s included
                                        </h5>
                  <ul class="price-inc-list">
                    <li>6-Month Data History</li>
                    <li>100% support</li>
                    <li>Custom Reports</li>
                    <li>Funnel Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer class="main-footer">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
              <img class="ft-logo" src="assets/images/logo.svg" alt="" />
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

    </body>

  </div>
);

  }

// export default CheckoutPage;
