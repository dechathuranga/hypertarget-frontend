import React, { useEffect , useState} from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { destroyCookie } from "nookies";
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
const bcrypt = require('bcryptjs');
import Image from 'next/image';

// import CheckoutForm from "./CheckoutForm";

console.log("*****----**-*-*--")
console.log(global.$type);
console.log(global.$price);

let data1 = {
  csrfToken : '298e12975ee552e8d504cdb6aff2cdd45a4a4c6340b74de4d8cb0df887fdf7ec%7Cfef88c4a4b74fd57686bcb474f48f49de424aad8ccaa2cf709c970051f9b13db',
  email : 'dechathuranga@gmail.com',
}

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


const CheckoutForm = ({ paymentIntent }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [checkoutError, setCheckoutError] = useState();
  const [checkoutSuccess, setCheckoutSuccess] = useState();
  const router = useRouter();

  const handleSubmit = async e => {
    // e.preventDefault();

    console.log("payme**********")
    try {
      const {
        error,
        paymentIntent: { status }
      } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });

      if (error) throw new Error(error.message);

      if (status === "succeeded") {
        setCheckoutSuccess(true);
        destroyCookie(null, "paymentIntentId");
      }
    } catch (err) {
      alert(err.message);
      setCheckoutError(err.message);
    }
  };

  if (checkoutSuccess){

    const hash = bcrypt.hashSync(window.$email, 10);
    // now we set user password to hashed password

    console.log('Sending')
    let data = {
        name : window.$name,
        email : window.$email,
        key : hash,
      }

        window.$email = window.$email;
      
      alert(window.$name + " - " + window.$email)

      fetch('/api/add-user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
      }
    })

    router.push('/signin');
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <CardElement />



 <a style={{display: "inline-block"}}
 disabled={!stripe}
                  onClick={(e) => handleSubmit()}
                  type="submit" className="c_submit-btn">Submit  
                  <i style={{ marginLeft : "10px", }} className="fas fa-arrow-right"></i>
                            {/* <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg> */}
                </a>


      {checkoutError && <span style={{ color: "red" }}>{checkoutError}</span>}
    </form>

 
</div>
  );
};


  export default function CheckoutPage({ paymentIntent }) {

    
      return (
  <div>
    <Head>
      <meta charset="UTF-8" />
      {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
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
      <nav className="main-nav landing-nav">
        <div className="nav-wrapper">
          <div className="d-flex">
             <Image src="/assets/images/menu-bar.svg" width={10} height={10} className="menu-bar" alt="" />
            <div className="logo-wrapper">
               <Image src="/assets/images/logo.svg" width={200} height={100} alt="" />
            </div>
          </div>
          <ul className="nav-list">
            <li><a href="">About</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Help</a></li>
          </ul>
          <ul className="nav-btns">
            <li><a href="" className="cta-secondary">Sign In</a></li>
            <li><a href="" className="cta-primary">Sign Up</a></li>
          </ul>
        </div>
        <div className="mobile-nav">
          <div className="menu-header">
            <div className="logo-wrapper">
               <Image src="/assets/images/logo.svg" width={10} height={10} alt="" />
            </div>
            <div className="close">
               <Image src="/assets/images/menu-close.svg" width={10} height={10} alt="" />

            </div>
          </div>
          <ul className="nav-list">
            <li><a href="">About</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Help</a></li>
          </ul>
        </div>
      </nav>

      <section className="pay-info-sec bg-bluegradient pt-20 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12 text-left">
              <ul className="breadcrumbs">
                <li>
                  <a href="">
                    Plans
                        </a>
                </li>
                <li>
                   <Image src="/assets/images/bread-arrow.svg" width={10} height={10} alt="" />
                </li>
                <li className="active"><a href="">
                  Checkout
                    </a></li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-8 col-sm-12 text-center">
              <h3 className="sec-head white-color mb-20">
                Enter Your Payment Details Below
                </h3>
            </div>
          </div>

        </div>
      </section>

      <section className="pay-info-wrap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-7 col-12 col-sm-12">
              <div className="c_card">
                <h3 className="head">
                  Payment Information
                    </h3>
                {/* <form action=""> */}
                <div className="form-group">
                  <label htmlFor="">Name *</label>
                  <div className="c_input-group">
                    <input onKeyUp={(e) => onKeyUpName(e)} type="text" name="" placeholder="Enter your full name" id="" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Email *</label>
                  <div className="c_input-group">
                    <input onKeyUp={(e) => onKeyUpEmail(e)} type="text" name="" placeholder="Enter your email address" id="" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Card Details *</label>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm paymentIntent={paymentIntent} />
                  </Elements>
               
                </div>

              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="price-card c_card">
                <div className="price-header">
                  <p className="price-cat">
                    You have to pay
                                        </p>
                  <h4 className="main-price">
                    ${global.$price}/mo
                                        </h4>
                </div>
                <div className="price-body">
                  <h5 className="head">
                    What’s included
                                        </h5>
                  <ul className="price-inc-list">
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


      <footer className="main-footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
               <Image className="ft-logo" src="/assets/images/logo.svg" width={400} height={400} alt="" />
              <p className="para mt-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
              <ul className="social-links">
                <li><a href=""><i className="fab fa-facebook"></i></a></li>
                <li><a href=""><i className="fab fa-twitter"></i></a></li>
                <li><a href=""><i className="fab fa-instagram"></i></a></li>
              </ul>
              <p className="copy-text">
                ©2021 HYPERTARGET
                </p>
            </div>
            <div className="col-lg-2 offset-lg-1 offset-md-1 col-md-2 col-sm-4 col-12">
              <h4 className="ft-head">
                Product
                </h4>
              <ul className="ft-links">
                <li><a href="">Download</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Locations</a></li>
                <li><a href="">Server</a></li>
                <li><a href="">Countries</a></li>
                <li><a href="">Blog</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-12">
              <h4 className="ft-head">
                Feature
                </h4>
              <ul className="ft-links">
                <li><a href="">Menu 1</a></li>
                <li><a href="">Menu 1</a></li>
                <li><a href="">Menu 1</a></li>
                <li><a href="">Menu 1</a></li>
                <li><a href="">Menu 1</a></li>
                <li><a href="">Menu 1</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-12">
              <h4 className="ft-head">
                Earn Money
                </h4>
              <ul className="ft-links">
                <li><a href="">Affiliate</a></li>
                <li><a href="">Become Partner</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- Jquery Script v --> */}
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}
      {/* <!-- bootstrp --> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script> */}
      {/* <script src="/assets/js/owl.carousel.min.js"></script> */}

    </body>

  </div>
);

  }

// export default CheckoutPage;
