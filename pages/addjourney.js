import Head from 'next/head'
import React, { useState } from 'react';
import { signIn, signOut, useSession, getSession } from "next-auth/client";
import axios from 'axios';
import { useRouter } from "next/router";

export default function Home() {


    const [options, setOptions] = useState([{ label: 'Select Value', value: '0' }]);
    const router = useRouter();

    let timeout = null;

    const handleSaveJourney = async (e) => {

        console.log("Add data")

        let data = {
            journeyName: window.$journeyName,
            url: window.$url,
            layerNo: 1,
            // event: window.$event,
            event: "Try it",
            stepName: window.$stepName,
        }

        fetch('/api/add-journey', {
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

    }

    const onKeyUpStepName = (e) => {
        console.log(e.target.value);
        window.$stepName = e.target.value;
    }
    const onKeyUpJourneyName = (e) => {
        console.log(e.target.value);
        window.$journeyName = e.target.value;
    }

    const selectEvent = (e) => {
        console.log("event");
        // console.log(e.target.value);
        console.log(window.$event);
        // window.$event = e.target.value;
    }

    const handleClickSendUrl = async (e) => {
        e.preventDefault()
        console.log(e.target.value);
        window.$url = e.target.value;

        clearTimeout(timeout);
        setOptions([{ label: 'Select Value', value: '0' }]);

        timeout = setTimeout(function () {
            console.log('Input Value:', e.target.value);

            fetch('/api/script-data-from-url', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(e.target.value)
            })
                .then(response => response.json())
                .then(response => {

                    // if (response.status === 200) {
                    //     console.log('Response succeeded!')
                    //     console.log(response)


                    // }
                    const tabledata = [];
                    response.map((d) =>
                        tabledata.push({
                            label: d.innerText,
                            value: d.innerText,
                        })
                    );

                    setOptions(tabledata)
                    console.log(options)

                }

                )

        }, 1000);

    }

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


            <body class="bg-lightblue">
                <header>
                    <nav class="main-nav">
                        <div class="nav-wrapper">
                            <div class="logo-wrapper">
                                <img src="assets/images/logo.svg" alt="" />
                                {/* <p>You  {count} </p> */}
                            </div>
                            <div class="right-side">
                                <div class="search-bar-wrapper">
                                    <img src="assets/images/search-icon.png" alt="" />
                                    <input type="text" placeholder="Search" name="" id="" />
                                </div>
                                <span class="notifi">
                                    <img src="assets/images/notifi.png" alt="" />
                                </span>
                                <a href="account-page.html">
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
                                    <a data-bs-toggle="modal" data-bs-target="#addJourney" class="cta"><i
                                        class="fa fa-plus"></i>&nbsp;ADD A JOURNEY</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <!-- C Modal --> */}
                <div class="modal fade modal-step" id="addJourney" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Create new journey</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">CLOSE</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="modal-step-wrapper">
                                    <div class="row align-items-center">
                                        <div class="col-lg-4 col-md-5 col-sm-9 col-12">
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input onKeyUp={(e) => onKeyUpJourneyName(e)} type="text" class="journey-name" placeholder="Name your Journey" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-12">
                                            <div class="form-group">
                                                <div class="radio-wrap">
                                                    <label for=""> Domain</label>
                                                    <div class="switch">
                                                        <input type="checkbox" checked="true" id="toggleAll" />
                                                        <label for="toggleAll"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 mt-2">
                                            <button class="btn bordered filter-btn" data-bs-toggle="modal" data-bs-target="#addFilter">
                                                <img src="assets/images/filter-icon.svg" alt="" />
                                                add filter
                                </button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="add-journey-wrap" id="journeyWrap">

                                                {/* /////////////////////////////////// */}
                                                <div class="add-journey">

                                                    <div class="journey-img">
                                                        <img src="assets/images/layer1.png" alt="" />
                                                    </div>
                                                    <div class="add-inputs">
                                                        <div class="form-group">
                                                            <div class="input-group">
                                                                <input
                                                                    onKeyUp={(e) => handleClickSendUrl(e)}
                                                                    type="text" placeholder="Url here" />
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="select-wrap">
                                                                <select 
                                                                onChange={(e) => selectEvent()}
                                                                // onClick={(e) => handleSaveJourney()}
                                                                 name="" id="" value={global.$event}
                                                                  >
                                                                    {options.map((option) => (
                                                                        <option value={option.value}>{option.label}</option>
                                                                    ))}
                                                                    {/* <option value="">Select Value</option>
                                                                    <option value="">add data</option>
                                                                    <option value="">Try it</option>
                                                                    <option value="">Click Me1</option> */}
                                                                    {/* <option value={option.value} selected={optionsState == option.value}>{option.label}</option> */}
                                                                </select>
                                                                <img src="assets/images/select-drop.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="add-btn">
                                                            <button>+</button>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="input-group">
                                                                <input onKeyUp={(e) => onKeyUpStepName(e)} type="text" placeholder="Name the first step" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /////////////////////////////////// */}
                                                <div class="add-journey">

                                                    <div class="journey-img">
                                                        <img src="assets/images/layer1.png" alt="" />
                                                    </div>
                                                    <div class="add-inputs">
                                                        <div class="form-group">
                                                            <div class="input-group">
                                                                <input type="text" placeholder="Url here" />
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="select-wrap">
                                                                <select name="" id="">
                                                                    <option value="">Select Value</option>
                                                                </select>
                                                                <img src="assets/images/select-drop.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="add-btn">
                                                            <button>+</button>
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="input-group">
                                                                <input type="text" placeholder="Name the first step" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /////////////////////////////////// */}
                                            </div>

                                            <div class="row">
                                                <div class="col-12 text-center">
                                                    <button class="btn bordered filter-btn" id="add-btn">
                                                        +
                                                        Add
                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button onClick={(e) => handleSaveJourney()} type="button" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- C Modal --> */}
                <div class="modal fade modal-step filter-modal" id="addFilter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add Filter</h5>
                                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">CLOSE</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="modal-step-wrapper">
                                    <div class="row">
                                        <div class="col-12 col-sm-6 col-lg-4 col-md-4">
                                            <div class="form-group">
                                                <div class="select-wrap style-2">
                                                    <select name="" id="">
                                                        <option value="">Add UTM Filter</option>
                                                    </select>
                                                    <img src="assets/images/select-down.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="add-journey-wrap url-wrap" id="urlWrap">
                                                <div class="add-journey">
                                                    <div class="form-group">
                                                        <div class="input-group">
                                                            <input type="text" name="" placeholder="Enter the Specfied Url" id="" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-12 text-center">
                                                    <button class="btn bordered filter-btn" id="add-filter">
                                                        +
                                                        Add Another url
                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" data-bs-dismiss="modal" class="btn btn-primary">Apply</button>
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
                                <img src="assets/images/check-big.svg" alt="" />
                                <h4 class="head">Installation Complete!</h4>
                                <button class="btn-blue">
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

            </body>

        </div>
    )
}
