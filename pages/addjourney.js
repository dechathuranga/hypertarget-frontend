import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react';
import { signIn, signOut, useSession, getSession } from "next-auth/client";
import axios from 'axios';
import { useRouter } from "next/router";
import Image from 'next/image';

export default function Home() {

    const [count, setCount] = useState(0);

    const Home = async () => {
        // alert(global.$key);
        fetch('/api/journey-detail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify('10201')
        })
            .then(response => response.json())
            .then(response => {
                console.log("** - ", response)
                setCount: response.length;
                // alert(response.length);
                // alert(count);
                window.$counts = response.length;
                if (0 < response.length) {
                    document.getElementById("userJourneyName").innerHTML = response[0].journeyName;
                    document.getElementById("layer1Name").innerHTML = response[0].stepName;
                    // document.getElementById("layer1Count").innerHTML = 2;
                    // document.getElementById("layer2Name").innerHTML = response[0].stepName;

                    ///////////////////////////////////////////
                    if(response[0].event == 0){
                    fetch('/api/visitor-count-by-click', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(response[0].innerText)
                    })
                        .then(response => response.json())
                        .then(response => {
                            console.log("** - ", response)
                            setCount: response.length;
                            // alert(response.length);
                            // alert(count);
                            window.$counts = response.length;
                            if (0 < response.length) {
                                // document.getElementById("userJourneyName").innerHTML = response[0].journeyName;
                                // document.getElementById("layer1Name").innerHTML = response[0].stepName;
                                document.getElementById("layer1Count").innerHTML = response.length/2;
                                // document.getElementById("layer2Name").innerHTML = response[0].stepName;
                            }
                        });
                    }else{
                        fetch('/api/visitor-count', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json, text/plain, */*',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(response[0].url)
                        })
                            .then(response => response.json())
                            .then(response => {
                                console.log("** - ", response)
                                setCount: response.length;
                                // alert(response.length);
                                // alert(count);
                                window.$counts = response.length;
                                if (0 < response.length) {
                                    // document.getElementById("userJourneyName").innerHTML = response[0].journeyName;
                                    // document.getElementById("layer1Name").innerHTML = response[0].stepName;
                                    document.getElementById("layer1Count").innerHTML = response.length/2;
                                    // document.getElementById("layer2Name").innerHTML = response[0].stepName;
                                }
                            });
                    }
                    ///////////////////////////////////////////
                }
            });


    }

    const buttonRef = useRef(null);

    // const [count, setCount] = useState(0);

    global.$key = "10201"

    useEffect(() => {
        async function fetchMyAPI() {
            document.getElementById("userJourneyName").innerHTML = "Journey Name";
            document.getElementById("layer1Name").innerHTML = "Layer Name";
            document.getElementById("layer1Count").innerHTML = "0";
            document.getElementById("layer2Name").innerHTML = "Layer Name";
            Home();
            // buttonRef.current.click();
            // var val = "FirstTest1";
            // const url = 'http://localhost:3000/api/visitor-count';
            // const payload = { params: { val } }
            // const response = await axios.get(url)
            // if (response.data) {
            //     console.log("** - ", response.data[0])

            //     const obj = {};

            //     for (let i = 0, len = response.data.length; i < len; i++) {
            //         obj[response.data[i]['currentIp']] = response.data[i];
            //     }

            //     response.data = new Array();

            //     for (const key in obj) {
            //         response.data.push(obj[key]);
            //     }

            //     console.log("** length- ", response.data.length)
            //      setCount : response.data.length;
            //      global.$key = response.data.length;


            // }
        }
        fetchMyAPI();
    }, []);

    const [options, setOptions] = useState([]);
    const router = useRouter();


    let timeout = null;

    const getCount = async (e) => {
        var val = "FirstTest1";
        const url = 'http://localhost:3000/api/visitor-count';
        const payload = { params: { val } }
        const response = await axios.get(url)
        if (response.data) {
            console.log("** - ", response.data[0])

            const obj = {};

            for (let i = 0, len = response.data.length; i < len; i++) {
                obj[response.data[i]['currentIp']] = response.data[i];
            }

            response.data = new Array();

            for (const key in obj) {
                response.data.push(obj[key]);
            }

            console.log("** length- ", response.data.length)
            setCount: response.data.length;
            alert("Visitor Count - " + response.data.length)

        }
    }
    const handleSaveJourney = async (e) => {

        console.log("Add data")

        let data = {
            journeyName: window.$journeyName,
            url: window.$url,
            key: window.$key,
            layerNo: 1,
            event: window.$event,
            valueInnerText: window.$valueInnerText,
            stepName: window.$stepName,
        }

        console.log(data)

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
        console.log(e.target.value);
        window.$event = e.target.value;
    }

    const selectEventInnerText = (e) => {
        console.log("event");
        console.log(e.target.value);
        window.$valueInnerText = e.target.value;
    }

    const handleClickSendUrl = async (e) => {
        e.preventDefault()
        console.log(e.target.value);
        window.$url = e.target.value;

        clearTimeout(timeout);
        // setOptions([{ label: 'Click', value: '0' }]);
        // setOptions([{ label: 'Visit', value: '1' }]);

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

                    const obj = {};

                    for (let i = 0, len = response.length; i < len; i++) {
                        obj[response[i]['innerText']] = response[i];
                    }

                    response = new Array();

                    for (const key in obj) {
                        response.push(obj[key]);
                    }

                    const tabledata = [];
                    response.map((d) =>
                        tabledata.push({
                            label: d.innerText,
                            value: d.innerText,
                        })
                    );

                    // setOptions([{ label: 'Click', value: '0' }]);
                    // setOptions([{ label: 'Visit', value: '1' }]);

                    // tabledata.push(
                    //     { label: 'Click', value: "0", },
                    //     { label: 'Visit', value: "1", }
                    // )

                    setOptions(tabledata)
                    console.log(options)

                }

                )

        }, 1000);

    }


    // const handleSubmit = async () => {
    //     e.preventDefault()
    //     console.log(val)

    //     const url = 'http://localhost:3000/api/visitor-count';
    //     // const payload = { params: { val }}
    //     const payload = "First test 1";
    //     const response = await axios.get(url, payload)
    //     if(response.data){
    //       console.log(response.data[0])
    //     }

    //     // window.$key = response.data[0].key;

    //     // router.push('/add-script');

    //   }


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
                {/* <link rel="stylesheet" href="assets/css/code.css" /> */}
            </Head>


            <body className="bg-lightblue">
                <header>
                    <nav className="main-nav">
                        <div className="nav-wrapper">
                            <div className="logo-wrapper">
                                 <Image src="assets/images/logo.svg" alt="" />
                                {/* <p>You  {count} </p> */}
                            </div>
                            <div className="right-side">
                                <div className="search-bar-wrapper">
                                     <Image src="assets/images/search-icon.png" alt="" />
                                    <input type="text" placeholder="Search" name="" id="" />
                                </div>
                                <span className="notifi">
                                     <Image src="assets/images/notifi.png" alt="" />
                                </span>
                                <a href="account-page.html">
                                    <div className="profile-wrap">
                                        <div className="profile-img">
                                             <Image src="assets/images/profile.jpg" alt="" />
                                        </div>
                                        <div className="profile-det">
                                            <h5 className="name">
                                                John Doe
                                </h5>
                                            <p className="desig">CEO</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>


                {/* *********************************************** */}
                {/* <div className="sec-wrapper pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="main-title">
                                    User Journey Dashboard
                    </h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 mt-100">
                                 <Image src="assets/images/stack.png" className="img-fluid stack" alt="" />
                                <h2 className="main-title text-center pd-30">
                                    User Journey Dashboard
                    </h2>
                                <div className="text-center mt-5">
                                    <a data-bs-toggle="modal" data-bs-target="#addJourney" className="cta"><i
                                        className="fa fa-plus"></i>&nbsp;ADD A JOURNEY</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* ***************************************** */}
                <div className="sec-wrapper pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 id="basicPrice" className="main-title">
                                    User Journey Dashboard
                        </h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 mt-60">
                                <div className="c_card">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <div className="heading">
                                            <h3 id="userJourneyName" className="title-1"> (innerHTML)</h3>

                                        </div>
                                        <a href="/editjourney" className="plan-cta">EDIT JOURNEY</a>
                                    </div>

                                    <div className="card-body" style={{ padding: '45px 0px' }}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-6 col-12 col-sm-12 text-center">
                                                 <Image src="assets/images/layer1only.png" style={{ width: '100%', maxWidth: '250px' }} className="img-fluid" alt="" />
                                                <div className="input-group">
                                                    {/* <h3 > Count</h3> */}
                                                    <h3 id="layer1Count" style={{ marginLeft: '45px' }} className="title-1"> (innerHTML)</h3>
                                                    <h3 id="layer1Name" style={{ marginLeft: '45px' }} className="title-1"> (innerHTML)</h3>
                                                </div>

                                                 <Image src="assets/images/layer2only.png" style={{ width: '100%', maxWidth: '250px' }} className="img-fluid" alt="" />
                                                <div className="input-group">
                                                    <h3 > 0</h3>
                                                    <h3 id="layer2Name" style={{ marginLeft: '45px' }} className="title-1"> (innerHTML)</h3>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12 col-sm-12">
                                                <form action="" className="user-journey-form-1">
                                                    <div className="input-group">
                                                        <div className="input-wrapper">
                                                            <input type="text" name="" placeholder="Facebook Ad" id="" />
                                                        </div>
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="input-wrapper">
                                                            <input type="text" name="" placeholder="Landing page (Supply)" id="" />
                                                        </div>
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="input-wrapper">
                                                            <input type="text" name="" placeholder="Waitlist Page" id="" />
                                                        </div>
                                                    </div>
                                                    <div className="input-group">
                                                        <div className="input-wrapper">
                                                            <input type="text" name="" placeholder="Referral Page" id="" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <a data-bs-toggle="modal" data-bs-target="#addJourney" className="cta"><i
                                        className="fa fa-plus"></i>&nbsp;ADD A JOURNEY</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***************************************** */}



                {/* <!-- C Modal --> */}
                <div className="modal fade modal-step" id="addJourney" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create new journey</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">CLOSE</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-step-wrapper">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-5 col-sm-9 col-12">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input onKeyUp={(e) => onKeyUpJourneyName(e)} type="text" className="journey-name" placeholder="Name your Journey" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                                            <div className="form-group">
                                                <div className="radio-wrap">
                                                    <label for=""> Domain</label>
                                                    <div className="switch">
                                                        <input type="checkbox" checked="true" id="toggleAll" />
                                                        <label for="toggleAll"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-2">
                                            <button className="btn bordered filter-btn" data-bs-toggle="modal" data-bs-target="#addFilter">
                                                 <Image src="assets/images/filter-icon.svg" alt="" />
                                                add filter
                                </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="add-journey-wrap" id="journeyWrap">

                                                {/* /////////////////////////////////// */}
                                                <div className="add-journey">

                                                    <div className="journey-img">
                                                         <Image src="assets/images/layer1.png" alt="" />
                                                    </div>
                                                    <div className="add-inputs">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input
                                                                    onKeyUp={(e) => handleClickSendUrl(e)}
                                                                    type="text" placeholder="Url here" />
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <div className="select-wrap">
                                                                <select
                                                                    onChange={(e) => selectEvent(e)}
                                                                // onClick={(e) => handleSaveJourney()}
                                                                // name="" id="" value={global.$event}
                                                                >

                                                                    <option value="0">Click</option>
                                                                    <option value="1">Visit</option>


                                                                </select>
                                                                 <Image src="assets/images/select-drop.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="add-btn">
                                                            <button>+</button>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="select-wrap">
                                                                <select
                                                                    onChange={(e) => selectEventInnerText(e)}
                                                                    // onClick={(e) => handleSaveJourney()}
                                                                    name="" id="" value={global.$event}
                                                                >
                                                                    {options.map((option) => ( <option value={option.value}>{option.label}</option> ))}

                                                                </select>
                                                                 <Image src="assets/images/select-drop.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input onKeyUp={(e) => onKeyUpStepName(e)} type="text" placeholder="Name the first step" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /////////////////////////////////// */}
                                                <div className="add-journey">

                                                    <div className="journey-img">
                                                         <Image src="assets/images/layer1.png" alt="" />
                                                    </div>
                                                    <div className="add-inputs">
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input
                                                                    onKeyUp={(e) => handleClickSendUrl(e)}
                                                                    type="text" placeholder="Url here" />
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <div className="select-wrap">
                                                                <select
                                                                    onChange={(e) => selectEvent()}
                                                                    // onClick={(e) => handleSaveJourney()}
                                                                    name="" id="" value={global.$event}
                                                                >

                                                                    <option value="0">Click</option>
                                                                    <option value="1">Visit</option>


                                                                </select>
                                                                 <Image src="assets/images/select-drop.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="add-btn">
                                                            <button>+</button>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="select-wrap">
                                                                <select
                                                                    onChange={(e) => selectEventInnerText()}
                                                                    // onClick={(e) => handleSaveJourney()}
                                                                    name="" id="" value={global.$valueInnerText}
                                                                >
                                                                    {options.map((option) => (
                                                                        <option value={option.value}>{option.label}</option>
                                                                    ))}

                                                                </select>
                                                                 <Image src="assets/images/select-drop.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input onKeyUp={(e) => onKeyUpStepName(e)} type="text" placeholder="Name the first step" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /////////////////////////////////// */}
                                            </div>

                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <button className="btn bordered filter-btn" id="add-btn">
                                                        +
                                                        Add
                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button onClick={(e) => handleSaveJourney()} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- C Modal --> */}
                <div className="modal fade modal-step filter-modal" id="addFilter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Filter</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">CLOSE</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-step-wrapper">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-4 col-md-4">
                                            <div className="form-group">
                                                <div className="select-wrap style-2">
                                                    <select name="" id="">
                                                        <option value="">Add UTM Filter</option>
                                                    </select>
                                                     <Image src="assets/images/select-down.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="add-journey-wrap url-wrap" id="urlWrap">
                                                <div className="add-journey">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input type="text" name="" placeholder="Enter the Specfied Url" id="" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <button className="btn bordered filter-btn" id="add-filter">
                                                        +
                                                        Add Another url
                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Modal --> */}
                <div className="modal info-modal fade" id="completeAlert" tabIndex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                 <Image src="assets/images/check-big.svg" alt="" />
                                <h4 className="head">Installation Complete!</h4>
                                <button className="btn-blue">
                                    Create Your first journey
                    </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Jquery Script v --> */}
                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */}
                {/* <!-- jquery step js --> */}
                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-steps/1.1.0/jquery.steps.js"></script> */}
                {/* <!-- jquery validate --> */}
                {/* <script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.js"></script> */}
                {/* <!-- bootstrp --> */}
                {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script> */}
                {/* <!-- custom js --> */}
                {/* <script src="assets/js/app.js"></script> */}

            </body>

        </div>
    )
}
