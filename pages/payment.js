import Head from 'next/head'
import { useRouter } from "next/router";

console.log(global.$type);
console.log(global.$price);

export default function Home() {

    const router = useRouter();

    const onKeyUpName = (e) => {
        console.log(e.target.value);
        window.$name = e.target.value;
    }

    const onKeyUpEmail = (e) => {
        console.log(e.target.value);
        window.$email = e.target.value;
    }

    const onKeyUpCardNo = (e) => {
        console.log(e.target.value);
        window.$cardDetailNo = e.target.value;
    }
    const onKeyUpCardDate = (e) => {
        console.log(e.target.value);
        window.$cardDetailDate = e.target.value;
    }
    const onKeyUpCardCvv = (e) => {
        console.log(e.target.value);
        window.$cardDetailCvv = e.target.value;
    }
    const onKeyUpCardZip = (e) => {
        console.log(e.target.value);
        window.$cardDetailZip = e.target.value;
    }

    const handleSubmit = () => { 
        // e.preventDefault()
        console.log('Sending')
      let data = {
          name : 'test',
          email : window.$email,
          message : 'hi'
        }
      fetch('/api/mail', {
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
            setSubmitted(true)
            setName('')
            setEmail('')
            setBody('')
          }
        })
      }

    const handleClickSubmit = () => {
        console.log("***********-");
        // globalVariableSet("Y", "120");
        handleSubmit();
        router.push('/check-your-email');
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
                <link rel="stylesheet" href="assets/css/code.css" />
            </Head>

            <body>
                {/* <!-- nav bar --> */}
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

                <section class="pay-info-sec bg-bluegradient pt-20 pb-60">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 text-left">
                                <ul class="breadcrumbs">
                                    <li>
                                        <a href="">
                                            Plans
                        </a>
                                    </li>
                                    <li>
                                        <img src="assets/images/bread-arrow.svg" alt="" />
                                    </li>
                                    <li class="active"><a href="">
                                        Checkout
                    </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-8 col-lg-8 col-sm-12 text-center">
                                <h3 class="sec-head white-color mb-20">
                                    Enter Your Payment Details Below
                </h3>
                            </div>
                        </div>

                    </div>
                </section>

                <section class="pay-info-wrap">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-7 col-lg-7 col-12 col-sm-12">
                                <div class="c_card">
                                    <h3 class="head">
                                        Payment Information
                    </h3>
                                    <form action="">
                                        <div class="form-group">
                                            <label for="">Name *</label>
                                            <div class="c_input-group">
                                                <input onKeyUp={(e) => onKeyUpName(e)} type="text" name="" placeholder="Enter your full name" id="" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Email *</label>
                                            <div class="c_input-group">
                                                <input onKeyUp={(e) => onKeyUpEmail(e)} type="text" name="" placeholder="Enter your email address" id="" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Card Details *</label>
                                            <div class="c_input-group card-input">
                                                <img src="assets/images/card-icon.svg" alt="" />
                                                <input  onKeyUp={(e) => onKeyUpCardNo(e)} type="text" name="" placeholder="0000 0000 0000 000" id="" />
                                                <div class="card-det">
                                                    <input onKeyUp={(e) => onKeyUpCardDate(e)} type="text" placeholder="MM/YY" />
                                                    <input onKeyUp={(e) => onKeyUpCardCvv(e)} type="text" placeholder="CVV" />
                                                    <input onKeyUp={(e) => onKeyUpCardZip(e)} type="text" placeholder="ZIP Code" />
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                         onClick={(e) => handleClickSubmit()}
                                        // href="check-mail.html" 
                                        type="submit" class="c_submit-btn">Submit
                            <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </a>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div class="price-card c_card">
                                    <div class="price-header">
                                        <p class="price-cat">
                                            You have to pay
                                        </p>
                                        <h4 class="main-price">
                                            ${global.$price}/mo
                                        </h4>
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
