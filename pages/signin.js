import Head from 'next/head'

export default function Home() {
    function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      }
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
    {/* <link rel="stylesheet" href="assets/css/code.css"/> */}
    <meta name="google-signin-scope" content="profile email"/>
    <meta name="google-signin-client_id" content="934082020330-qggqjcu4hhrf35gp16i9349i86cqhs3p.apps.googleusercontent.com"/>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
      </Head>
     <body>
      <nav class="main-nav landing-nav">
    <div class="nav-wrapper">
        <div class="d-flex">
            <img src="assets/images/menu-bar.svg" class="menu-bar" alt=""/>
            <div class="logo-wrapper">
                <img src="assets/images/logo.svg" alt=""/>
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
                <img src="assets/images/logo.svg" alt=""/>
            </div>
            <div class="close">
                <img src="assets/images/menu-close.svg" alt=""/>

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

<section class="bg-bluegradient pt-100 pb-100">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4 col-sm-10 text-center">
                <div class="c_card login-wrap">
                    <img src="assets/images/hypertarget-text.svg" alt=""/>
					<p class="login-text">Login to Hypertarget</p>
					
					<div class="form-inputs login">
                                            <div class="input-group">
                                                <div class="input-wrapper">
                                                    <input type="email" name="" placeholder="Email" id=""/>
                                                </div>
                                            </div>
                                        </div>
                    <span class="line">
                     <h2>Or, sign in with google</h2>
                    </span>
					<button class="btn btn-primary filter-btn mt-40 g-signin2" data-bs-toggle="modal" data-bs-target="">
                                    <img src="assets/images/google-icon.svg" alt=""/>
                                    continue WITH google
                                </button>

                                 {/* <div class="g-signin2" data-onsuccess={onSignIn} data-theme="dark"></div> */}
								
					<button class="btn btn-primary filter-btn mt-40" data-bs-toggle="modal" data-bs-target="">
					Send secure link
                                </button>
					<p class="email-text">We’ll email you a link that will sign you in<br />instantly!</p>
                </div>
            </div>
        </div>
        
    </div>
</section>


<footer class="main-footer">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                <img class="ft-logo" src="assets/images/logo.svg" alt=""/>
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
        $('.mobile-nav').addClass('active');
    });
    $('.close').on('click', function () {
        $('.mobile-nav').removeClass('active')
    })
</script> */}
</body>
    </div>
  )
}
