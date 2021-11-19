import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
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

            <body className="bg-lightblue">
                <header>
                    <nav className="main-nav">
                        <div className="nav-wrapper">
                            <div className="logo-wrapper">
                                <Image width={110} height={40} src="/assets/images/logo.svg" alt="" />
                            </div>
                            <div className="right-side">
                                <div className="search-bar-wrapper">
                                    <Image width={30} height={30} src="/assets/images/search-icon.png" alt="" />
                                    <input type="text" placeholder="Search" name="" id="" />
                                </div>
                                <span className="notifi">
                                    <Image width={20} height={20} src="/assets/images/notifi.png" alt="" />
                                </span>
                                <a href="">
                                    <div className="profile-wrap">
                                        <div className="profile-img">
                                            <Image width={20} height={20} src="/assets/images/profile.jpg" alt="" />
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

                <div className="sec-wrapper pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="main-title">
                                    User Journey Dashboard
                    </h2>
                            </div>
                        </div>
                        <div className="row justify-content-center text-center" >
                            <div className="col-12 mt-10">
                                <Image width={250} height={150} src="/assets/images/stack.png" style={{ marginLeft: 'auto', marginRight: 'auto' }} alt="" />
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
                </div>


            </body>
        </div>
    )
}
