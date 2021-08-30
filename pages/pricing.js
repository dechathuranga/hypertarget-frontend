import Head from 'next/head'
import { withIronSession } from "next-iron-session";
import { useRouter } from "next/router";

// async function handler(req, res) {
  // console.log("*************************-");
  // e.preventDefault();

  // router.push('/dashboard');
  // get user from database then:
  // req.session.set("user", {
  //   id: 230,
  //   admin: true,
  // });
  // await req.session.save();
  // res.send("Logged in");

// }

export const getServerSideProps = withIronSession(

  async ({ req, res }) => {

    console.log("//////////");
    const user = req.session.get("user");

    if (!user) {
      res.statusCode = 404;
      res.end();
      return { props: {} };
    }

    return {
      props: { user }
    };
  },
  {
    cookieName: "MYSITECOOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.APPLICATION_SECRET
  }
);

// export const getServerSideProps = withIronSession(handler, {
//   password: "complex_password_at_least_32_characters_long",
//   cookieName: "myapp_cookiename",
//   // if your localhost is served on http:// then disable the secure flag
//   cookieOptions: {
//     secure: process.env.NODE_ENV === "production",
//   },
// });

export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    console.log("*************************-");

    console.log(getServerSideProps);
  
    // e.preventDefault();
    // router.push('/dashboard');
  };

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

        <section class="planpage-sec bg-bluegradient pt-60 pb-60">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-8 col-lg-8 col-sm-12 text-center">
                <h3 class="sec-head white-color mb-20">
                  Pricing
                </h3>
                {/* <!--<p class="journey-para white-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Amet mauris commodo quis imperdiet massa.
                </p>--> */}
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                {/* <!-- plan page tabs --> */}
                <ul class="nav nav-tabs price-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a onClick={(e) => handleClick()} class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                      aria-controls="home" aria-selected="true">monthly</a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"
                      aria-controls="profile" aria-selected="false">yearly</a>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active pt-100" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div class="price-card">
                          <div class="price-header">
                            <p class="price-cat">
                              Basic
                                        </p>
                            <h4 class="main-price">
                              $99/mo
                                        </h4>
                            <p class="para">
                              Marketing analytics and website flow optimization.
                                        </p>
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
                            <button class="add-btn" onclick="window.location.href = 'userjourney1-payment.html';">
                              add to cart
                                        </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div class="price-card scale-up">
                          <div class="price-header">
                            <p class="price-cat">
                              Pro
                                        </p>
                            <h4 class="main-price">
                              $150/mo
                                        </h4>
                            <p class="para">
                              Deep marketing channel analysis, website optimization, and smart audiences for growing websites.
                                        </p>
                          </div>
                          <div class="price-body">
                            <h5 class="head">
                              Everything in basic +
                                        </h5>
                            <ul class="price-inc-list">
                              <li>1 Year Data History</li>
                              <li>Journey Analysis</li>
                              <li>1:1 Onboarding</li>
                              <li>Export Unlimited Smart Audiences</li>
                            </ul>
                            <button class="add-btn" onclick="window.location.href = 'userjourney1-payment.html';">
                              add to cart
                                        </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div class="price-card custom">
                          <div class="price-header">
                            <p class="price-cat">
                              Custom
                                        </p>
                            <button class="bordered">
                              get in touch
                                            <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </button>
                            <p class="para">
                              Higher plans are better served by contacting Hypertarget.
                                        </p>
                          </div>
                          <div class="price-body">
                            <h5 class="head">
                              Everything in Pro +
                                        </h5>
                            <ul class="price-inc-list">
                              <li>2 Years Data History</li>
                              <li>Budget Planning</li>
                              <li>Advanced User Management</li>
                              <li>Analytics Bootcamp</li>
                              <li>Export Unlimited Events to Facebook, Google Ads & More</li>
                            </ul>
                            <div class="d-flex justify-content-center">
                              <button class="bordered style-2">
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
                  <div class="tab-pane fade pt-100 " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div class="price-card">
                          <div class="price-header">
                            <p class="price-cat">
                              Basic
                                        </p>
                            <h4 class="main-price">
                              $79/mo
                                        </h4>
                            <p class="para">
                              Marketing analytics and website flow optimization.
                                        </p>
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
                            <button class="add-btn" onclick="window.location.href = 'userjourney1-payment.html';">
                              add to cart
                                        </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div class="price-card scale-up">
                          <div class="price-header">
                            <p class="price-cat">
                              Pro
                                        </p>
                            <h4 class="main-price">
                              $120/mo
                                        </h4>
                            <p class="para">
                              Deep marketing channel analysis, website optimization, and smart audiences for growing websites.
                                        </p>
                          </div>
                          <div class="price-body">
                            <h5 class="head">
                              Everything in basic +
                                        </h5>
                            <ul class="price-inc-list">
                              <li>1 Year Data History</li>
                              <li>Journey Analysis</li>
                              <li>1:1 Onboarding</li>
                              <li>Export Unlimited Smart Audiences</li>
                            </ul>
                            <button class="add-btn" onclick="window.location.href = 'userjourney1-payment.html';">
                              add to cart
                                        </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div class="price-card custom">
                          <div class="price-header">
                            <p class="price-cat">
                              Custom
                                        </p>
                            <button class="bordered">
                              get in touch
                                            <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </button>
                            <p class="para">
                              Higher plans are better served by contacting Hypertarget.
                                        </p>
                          </div>
                          <div class="price-body">
                            <h5 class="head">
                              Everything in Pro +
                                        </h5>
                            <ul class="price-inc-list">
                              <li>2 Years Data History</li>
                              <li>Budget Planning</li>
                              <li>Advanced User Management</li>
                              <li>Analytics Bootcamp</li>
                              <li>Export Unlimited Events to Facebook, Google Ads & More</li>
                            </ul>
                            <div class="d-flex justify-content-center">
                              <button class="bordered style-2">
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
        {/* <!-- custom js --> */}
        {/* <!-- <script src="assets/js/app.js"></script> --> */}
        {/* <script>
          $('.menu-bar').on('click', function () {
            $('.mobile-nav').addClass('active')
          });
    $('.close').on('click', function () {
            $('.mobile-nav').removeClass('active')
          })
</script> */}
      </body>
    </div>
  )
}
