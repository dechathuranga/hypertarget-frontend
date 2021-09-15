import Head from 'next/head'
import { withIronSession } from "next-iron-session";
import { useRouter } from "next/router";
import login from './api/login';
import getConfig from 'next/config'
import React, { useEffect, useRef } from "react";


export default function Home() {

  const router = useRouter();


  const globalVariableSet = (type,price) => {
    window.$type = type;
    window.$price = price;
  }

  const handleClickMonthlyBasic = () => {
  
    if(window.$type == 'M'){
      globalVariableSet("MB","99");
    }else{
      globalVariableSet("YB","79");
    } 
    router.push('/payment');
  }

  const handleClickMonthlyPro = () => {
    if(window.$type == 'M'){
      globalVariableSet("MY","150");
    }else{
      globalVariableSet("YY","120");
    } 
    router.push('/payment');
  }

  // const handleClickYearlyBasic = () => {
  //   globalVariableSet("YB","79");
  //   router.push('/payment?name=66');
  // }

  // const handleClickYearlyPro = () => {
  //   globalVariableSet("YY","120");
  //   router.push('/payment');
  // }

  const handleClickMonth = () => {
    document.getElementById("basicPrice").innerHTML = " $99/mo";
    document.getElementById("proPrice").innerHTML = " $150/mo";
    window.$type = "M";

  }

  const handleClickYear = () => {
    document.getElementById("basicPrice").innerHTML = " $79/mo";
    document.getElementById("proPrice").innerHTML = " $120/mo";
    window.$type = "Y";
  }

  useEffect(() => {
    // buttonRef.current.click();
  document.getElementById("basicPrice").innerHTML = " $99/mo";
  document.getElementById("proPrice").innerHTML = " $150/mo";
  window.$type = "M";
  }, []);




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
        {/* <link rel="stylesheet" href="assets/css/code.css" /> */}
      </Head>
      <body>

{/* <p id="demo" onClick={(e) => myFunction()}>Click me to change my HTML content (innerHTML).</p> */}



        <nav className="main-nav landing-nav">
          <div className="nav-wrapper">
            <div className="d-flex">
              <img src="assets/images/menu-bar.svg" className="menu-bar" alt="" />
              <div className="logo-wrapper">
                <img src="assets/images/logo.svg" alt="" />
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
                <img src="assets/images/logo.svg" alt="" />
              </div>
              <div className="close">
                <img src="assets/images/menu-close.svg" alt="" />

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

        <section className="planpage-sec bg-bluegradient pt-60 pb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-8 col-sm-12 text-center">
                <h3 className="sec-head white-color mb-20">
                  Pricing 
                </h3>
                <p className="journey-para white-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Amet mauris commodo quis imperdiet massa.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {/* <!-- plan page tabs --> */}
                <ul className="nav nav-tabs price-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a onClick={(e) => handleClickMonth()} className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                      aria-controls="home" aria-selected="true">monthly</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a onClick={(e) => handleClickYear()} className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"
                      aria-controls="profile" aria-selected="false">yearly</a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active pt-100" 
                  // id="home" role="tabpanel" aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="price-card">
                          <div className="price-header">
                            <p className="price-cat">
                              Basic
                                        </p>
                            <h4 id="basicPrice" className="main-price">
                            (innerHTML)
                                        </h4>
                            <p className="para">
                              Marketing analytics and website flow optimization.
                                        </p>
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
                            <button onClick={(e) => handleClickMonthlyBasic()} className="add-btn" 
                            // onClick="window.location.href = 'userjourney1-payment.html';"
                            >
                              add to cart
                                        </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="price-card scale-up">
                          <div className="price-header">
                            <p className="price-cat">
                              Pro
                                        </p>
                            <h4 id="proPrice" className="main-price">
                            (innerHTML)
                                        </h4>
                            <p className="para">
                              Deep marketing channel analysis, website optimization, and smart audiences for growing websites.
                                        </p>
                          </div>
                          <div className="price-body">
                            <h5 className="head">
                              Everything in basic +
                                        </h5>
                            <ul className="price-inc-list">
                              <li>1 Year Data History</li>
                              <li>Journey Analysis</li>
                              <li>1:1 Onboarding</li>
                              <li>Export Unlimited Smart Audiences</li>
                            </ul>
                            <button onClick={(e) => handleClickMonthlyPro()} className="add-btn" 
                            // onClick="window.location.href = 'userjourney1-payment.html';"
                            >
                              add to cart
                                        </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="price-card custom">
                          <div className="price-header">
                            <p className="price-cat">
                              Custom
                                        </p>
                            <button className="bordered">
                              get in touch
                                            <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" strokeWidth="1.4" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </button>
                            <p className="para">
                              Higher plans are better served by contacting Hypertarget.
                                        </p>
                          </div>
                          <div className="price-body">
                            <h5 className="head">
                              Everything in Pro +
                                        </h5>
                            <ul className="price-inc-list">
                              <li>2 Years Data History</li>
                              <li>Budget Planning</li>
                              <li>Advanced User Management</li>
                              <li>Analytics Bootcamp</li>
                              <li>Export Unlimited Events to Facebook, Google Ads & More</li>
                            </ul>
                            <div className="d-flex justify-content-center">
                              <button className="bordered style-2">
                                get in touch
                                            <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="tab-pane fade pt-100 " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="price-card">
                          <div className="price-header">
                            <p className="price-cat">
                              Basic
                                        </p>
                                        <h4 id="demo" className="main-price">
                            (innerHTML)
                                        </h4>
                            <p className="para">
                              Marketing analytics and website flow optimization.
                                        </p>
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
                            <button className="add-btn" 
                            onClick={(e) => handleClickYearlyBasic()}
                            // onClick="window.location.href = 'userjourney1-payment.html';"
                            >
                              add to cart
                                        </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="price-card scale-up">
                          <div className="price-header">
                            <p className="price-cat">
                              Pro
                                        </p>
                            <h4 className="main-price">
                              $120/mo
                                        </h4>
                            <p className="para">
                              Deep marketing channel analysis, website optimization, and smart audiences for growing websites.
                                        </p>
                          </div>
                          <div className="price-body">
                            <h5 className="head">
                              Everything in basic +
                                        </h5>
                            <ul className="price-inc-list">
                              <li>1 Year Data History</li>
                              <li>Journey Analysis</li>
                              <li>1:1 Onboarding</li>
                              <li>Export Unlimited Smart Audiences</li>
                            </ul>
                            <button className="add-btn" 
                            onClick={(e) => handleClickYearlyPro()}
                            // onClick="window.location.href = 'userjourney1-payment.html';"
                            >
                              add to cart
                                        </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="price-card custom">
                          <div className="price-header">
                            <p className="price-cat">
                              Custom
                                        </p>
                            <button className="bordered">
                              get in touch
                                            <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </button>
                            <p className="para">
                              Higher plans are better served by contacting Hypertarget.
                                        </p>
                          </div>
                          <div className="price-body">
                            <h5 className="head">
                              Everything in Pro +
                                        </h5>
                            <ul className="price-inc-list">
                              <li>2 Years Data History</li>
                              <li>Budget Planning</li>
                              <li>Advanced User Management</li>
                              <li>Analytics Bootcamp</li>
                              <li>Export Unlimited Events to Facebook, Google Ads & More</li>
                            </ul>
                            <div className="d-flex justify-content-center">
                              <button className="bordered style-2">
                                get in touch
                                            <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>


        <footer className="main-footer">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <img className="ft-logo" src="assets/images/logo.svg" alt="" />
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        {/* <!-- bootstrp --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
        <script src="assets/js/owl.carousel.min.js"></script>
        {/* <!-- custom js --> */}
        {/* <!-- <script src="assets/js/app.js"></script> --> */}
        {/* <script>
          $('.menu-bar').on('click', function () {
            $('.mobile-nav').addclassName('active')
          });
    $('.close').on('click', function () {
            $('.mobile-nav').removeclassName('active')
          })
</script> */}
      </body>
    </div>
  )
}
