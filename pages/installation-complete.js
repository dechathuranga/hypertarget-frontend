import Head from 'next/head'
import React, { useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import Script from 'next/script'

export default function Home() {

    const buttonRef = useRef(null);

    useEffect(() => {
        buttonRef.current.click();
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
                <link rel="stylesheet" href="assets/css/code.css" />
                <script async src="https://www.google-analytics.com/analytics.js" />
            

            </Head>


            <body class="bg-lightblue">
                <header>
                    <nav class="main-nav">
                        <div class="nav-wrapper">
                            <div class="logo-wrapper">
                                <img src="assets/images/logo.svg" alt="" />
                            </div>
                            <div class="right-side">
                                <div class="search-bar-wrapper">
                                    <img src="assets/images/search-icon.png" alt="" />
                                    <input type="text" placeholder="Search" name="" id="" />
                                </div>
                                <span class="notifi">
                                    <img src="assets/images/notifi.png" alt="" />
                                </span>
                                <a href="">
                                    <div class="profile-wrap">
                                        <div class="profile-img">
                                            <img src="assets/images/profile.jpg" alt="" />
                                        </div>
                                        <div class="profile-det">
                                            <h5 class="name">
                                                John Doe
                                </h5>
                                            <p class="desig">CEO</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>


                <div class="sec-wrapper pt-5 pb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="main-title">
                                    User Journey Dashboard
                    </h2>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-12 mt-100">
                                <img src="assets/images/stack.png" class="img-fluid stack" alt="" />
                                <h2 class="main-title text-center pd-30">
                                    User Journey Dashboard
                    </h2>
                                <div class="text-center mt-5">
                                    <button class="btn bordered filter-btn" data-bs-toggle="modal" data-bs-target="#addFilter">
                                        <img src="assets/images/filter-icon.svg" alt="" />
                                        add filter
                                </button>
                                    <a ref={buttonRef} data-bs-toggle="modal" data-bs-target="#completeAlert" class="cta"><i
                                        class="fa fa-plus"></i>&nbsp;ADD A JOURNEY</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Modal --> */}
                <div class="modal info-modal fade" id="completeAlert" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body text-center">
                                <img style={{marginLeft: 'auto', marginRight: 'auto' }} src="assets/images/check-big.svg" alt="" />
                                <h4 class="head">Installation Complete!</h4>
                                <button class="btn-blue" onclick="location.href='addjourney.html';">
                                    Create Your first journey
                    </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Jquery Script v --> */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                {/* <!-- jquery step js --> */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-steps/1.1.0/jquery.steps.js"></script>
                {/* <!-- jquery validate --> */}
                <script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.js"></script>
                {/* <!-- bootstrp --> */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
                {/* <!-- custom js --> */}
                <script src="assets/js/app.js"></script>
                {/* <script>
    $(document).ready(function(){
        $("#completeAlert").modal('show');
    });
</script> */}
            </body>

        </div >
    )
}
