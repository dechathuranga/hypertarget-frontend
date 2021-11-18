import Head from 'next/head'
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
      <meta charset="UTF-8"/>
     {/* <meta http-equiv="X-UA-Compatible" content="IE=edge"/> */} 
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
      <nav className="main-nav landing-nav">
        <div className="nav-wrapper">
          <div className="d-flex">
             <Image width={10} height={10} src="/assets/images/menu-bar.svg" className="menu-bar" alt="" />
            <div className="logo-wrapper">
               <Image width={100} height={100} src="/assets/images/logo.svg" alt="" />
            </div>
          </div>
          <ul className="nav-list">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Help</a></li>
          </ul>
          <ul className="nav-btns">
            <li><a href="#" className="cta-secondary">Sign In</a></li>
            <li><a href="#" className="cta-primary">Sign Up</a></li>
          </ul>
        </div>
        <div className="mobile-nav">
          <div className="menu-header">
            <div className="logo-wrapper">
               <Image width={100} height={100} src="/assets/images/logo.svg" alt="" />
            </div>
            <div className="close">
               <Image  width={100} height={100} src="/assets/images/menu-close.svg" alt="" />
            </div>
          </div>
          <ul className="nav-list">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </nav>
      <section className="bg-bluegradient pt-100 pb-100">
        <div className="container">
          <div className="row">
            

{/* ////////////////////////////////////////////////// */}

<iframe src="http://localhost:3000/" name="iframe_a" height="300px" width="100%" title="Iframe Example"></iframe>

{/* ////////////////////////////////////////////////// */}

          </div>
        </div>
      </section>
      <footer className="main-footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
               <Image width={100} height={100} className="ft-logo" src="/assets/images/logo.svg" alt="" />
              <p className="para mt-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </p>
              <ul className="social-links">
                <li><a href="#"><i className="fab fa-facebook" /></a></li>
                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                <li><a href="#"><i className="fab fa-instagram" /></a></li>
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
                <li><a href="#">Download</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Server</a></li>
                <li><a href="#">Countries</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-12">
              <h4 className="ft-head">
                Feature
              </h4>
              <ul className="ft-links">
                <li><a href="#">Menu 1</a></li>
                <li><a href="#">Menu 1</a></li>
                <li><a href="#">Menu 1</a></li>
                <li><a href="#">Menu 1</a></li>
                <li><a href="#">Menu 1</a></li>
                <li><a href="#">Menu 1</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-12">
              <h4 className="ft-head">
                Earn Money
              </h4>
              <ul className="ft-links">
                <li><a href="#">Affiliate</a></li>
                <li><a href="#">Become Partner</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
