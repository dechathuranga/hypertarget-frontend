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
      <nav className="main-nav landing-nav">
        <div className="nav-wrapper">
          <div className="d-flex">
            <img src="assets/images/menu-bar.svg" className="menu-bar" alt="" />
            <div className="logo-wrapper">
              <img src="assets/images/logo.svg" alt="" />
            </div>
          </div>
          <ul className="nav-list">
            <li><a href>About</a></li>
            <li><a href>Features</a></li>
            <li><a href>Pricing</a></li>
            <li><a href>Testimonials</a></li>
            <li><a href>Help</a></li>
          </ul>
          <ul className="nav-btns">
            <li><a href className="cta-secondary">Sign In</a></li>
            <li><a href className="cta-primary">Sign Up</a></li>
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
            <li><a href>About</a></li>
            <li><a href>Features</a></li>
            <li><a href>Pricing</a></li>
            <li><a href>Testimonials</a></li>
            <li><a href>Help</a></li>
          </ul>
        </div>
      </nav>
      <section className="pay-info-sec bg-bluegradient pt-20 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12 text-left">
              <ul className="breadcrumbs">
                <li>
                  <a href>
                    Plans
                  </a>
                </li>
                <li>
                  <img src="assets/images/bread-arrow.svg" alt="" />
                </li>
                <li className="active"><a href>
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
                <form action>
                  <div className="form-group">
                    <label htmlFor>Name *</label>
                    <div className="c_input-group">
                      <input type="text" name placeholder="Enter your full name" id />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor>Email *</label>
                    <div className="c_input-group">
                      <input type="text" name placeholder="Enter your email address" id />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor>Card Details *</label>
                    <div className="c_input-group card-input">
                      <img src="assets/images/card-icon.svg" alt="" />
                      <input type="text" name placeholder="0000 0000 0000 000" id />
                      <div className="card-det">
                        <input type="text" placeholder="MM/YY" />
                        <input type="text" placeholder="CVV" />
                        <input type="text" placeholder="ZIP Code" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="c_submit-btn">Submit
                    <svg width={22} height={15} viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="price-card c_card">
                <div className="price-header">
                  <p className="price-cat">
                    You have to pay
                  </p>
                  <h4 className="main-price">
                    $99/mo
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
              <img className="ft-logo" src="assets/images/logo.svg" alt="" />
              <p className="para mt-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </p>
              <ul className="social-links">
                <li><a href><i className="fab fa-facebook" /></a></li>
                <li><a href><i className="fab fa-twitter" /></a></li>
                <li><a href><i className="fab fa-instagram" /></a></li>
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
                <li><a href>Download</a></li>
                <li><a href>Pricing</a></li>
                <li><a href>Locations</a></li>
                <li><a href>Server</a></li>
                <li><a href>Countries</a></li>
                <li><a href>Blog</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-12">
              <h4 className="ft-head">
                Feature
              </h4>
              <ul className="ft-links">
                <li><a href>Menu 1</a></li>
                <li><a href>Menu 1</a></li>
                <li><a href>Menu 1</a></li>
                <li><a href>Menu 1</a></li>
                <li><a href>Menu 1</a></li>
                <li><a href>Menu 1</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-12">
              <h4 className="ft-head">
                Earn Money
              </h4>
              <ul className="ft-links">
                <li><a href>Affiliate</a></li>
                <li><a href>Become Partner</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
