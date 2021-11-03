import Head from 'next/head'
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import Image from 'next/image';

export default function Home() {
  const [session, loading] = useSession();
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
        <link rel="stylesheet" href="assets/css/code.css" />
      </Head>

      <nav className="main-nav landing-nav">
        <div className="nav-wrapper">
          <div className="d-flex">
            {/* <Image src="assets/images/menu-bar.svg" className="menu-bar" alt="" /> */}
            <div className="logo-wrapper">
              {/* <Image src="assets/images/logo.svg" alt="" /> */}
            </div>
          </div>
          <ul className="nav-list">
            <li><a >About</a></li>
            <li><a >Features</a></li>
            <li>
              <Link href="/pricing">
                <a>Pricing</a>
              </Link></li>
            <li><a >Testimonials</a></li>
            <li><a >Help</a></li>
          </ul>
          <ul className="nav-btns">
            <li><a className="cta-secondary">Sign In</a></li>
            <li><a className="cta-primary">Sign Up</a></li>
          </ul>
        </div>
        <div className="mobile-nav">
          <div className="menu-header">
            <div className="logo-wrapper">
              {/* <Image src="assets/images/logo.svg" alt="" /> */}
            </div>
            <div className="close">
              {/* <Image src="assets/images/menu-close.svg" alt="" /> */}
            </div>
          </div>
          <ul className="nav-list">
            <li><a >About</a></li>
            <li><a >Features</a></li>
            <li><a href="subscription.html">Pricing</a></li>
            <li><a >Testimonials</a></li>
            <li><a >Help</a></li>
          </ul>
        </div>
      </nav>
      <header className="landing-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="banner-con">
                <h1 className="heading-1 mb-20">
                  Transforming
                  Business Intelligence with Insightful Analytics
                </h1>
                <p className="para mb-40">
                  Learn what your audience is doing on your website to make smart, informed decisions. Let
                  Hypertarget accelerate your business growth with an insightful dashboard that delivers
                  actionable, visual insights. Our data analytics software is here to help you out!
                </p>
                <Link href="/pricing">
                  <a className="cta-primary cta-shadow cta-lg">Get Started</a>
                </Link>
              </div>
            </div>
            {/* col-2 */}
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="banner-img-wrapper">
                {/* <Image src="assets/images/banner-img.svg" alt="banner img" className="img-fluid" /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner-bottom-logos-area">
        <div className="container">
          <div className="logos-wrapper">
            <div className="logos">
              {/* <Image src="assets/images/logos/Mask Group.png" alt="" /> */}
            </div>
            <div className="logos">
              {/* <Image src="assets/images/logos/Mask Group-1.png" alt="" /> */}
            </div>
            <div className="logos">
              {/* <Image src="assets/images/logos/Mask Group-2.png" alt="" /> */}
            </div>
            <div className="logos">
              {/* <Image src="assets/images/logos/Mask Group-3.png" alt="" /> */}
            </div>
            <div className="logos">
              {/* <Image src="assets/images/logos/Mask Group-4.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* banner-bottom content */}
      <section className="sec2 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              {/* <Image src="assets/images/banner-bottom.svg" className="img-fluid" alt="" /> */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h3 className="heading-2 with-design">
                Data Analytics Made Simple
              </h3>
              <p className="para mt-20">
                Whether you’re an IT company, financial analysts, marketers, sales executives, or more, Hypertarget
                offers specific and general data analytics to help understand the market climate and compare it to
                your competitors for detailed market insights. Navigate the market based on custom, enhance team
                collaborations, or set personalized alerts to make sure you remain on your toes and tackle trends
                better. <br />
                Hypertarget helps you target your goals specifically and tailor analytics to help you visualize key
                market elements so that you stay informed and ready to tackle any risk that may come your way.
                Converting raw data to perceptive visualizations and make refined decisions accordingly with just a
                few clicks and drive operations to the skies!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec3 bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h4 className="heading-3">
                Our Straightforward, Hyper-Targeted Analytics Solutions
              </h4>
              <p className="para mt-20">
                Data has now become one of the most valuable resources for businesses. Manufacturing costs, process
                efficiency, market demand, e-commerce sales, advertising ROI, social media performance, normal and
                abnormal loss ratios, and more — analyzing it all can help you closely understand how your business
                is performing and where it is lacking.
              </p>
              <p className="para">
                However, scattered data might not be of much use to any business. It needs to be compiled,
                processed, and presented in a user-friendly manner to help analysts and business owners make sound,
                informed, and targeted decisions. Let Hypertarget help you do that and enable you to translate
                business and market data into crisp, straightforward analytical dashboards and improve business
                standing.
              </p>
              <p className="para">
                Our business analytics solutions stand out from the crowd because:
              </p>
            </div>
          </div>
          <div className="row align-items-center mt-60 mb-60">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
              {/* <Image className="img0" src="assets/images/img01.png" alt="" /> */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h4 className="heading-3">
                Enabling You to Do More With Less
              </h4>
              <p className="para mt-20">
                This is where customizability and data analytics meet. View your business with a new perspective via
                advanced, detailed charts and maps. Find drill-downs, recommendations, insights, and more in a
                single, human-centric interface that empowers employees to do more, even with no expertise in BI.
              </p>
            </div>
          </div>
          <div className="row align-items-center mt-60 mb-60 flex-column-reverse flex-sm-row flex-md-row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
              <h4 className="heading-3">
                Contextual Data Analytics at Your Fingertips
              </h4>
              <p className="para mt-20">
                Data processing just became a whole lot easier thanks to Hypertarget’s data analytics and
                context-based interpretations, guiding you and your staff with to-the-point and interactive data
                stories that blend data from different sources and explains it with a connected narrative.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
              {/* <Image className="img0" src="assets/images/img02.png" alt="" /> */}
            </div>
          </div>
          <div className="row align-items-center mt-60 mb-60">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
              {/* <Image className="img0" src="assets/images/img03.png" alt="" /> */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h4 className="heading-3">
                Presenting Data at the Right Time to the Right Person
              </h4>
              <p className="para mt-20">
                Encourage teamwork by making sure everyone has access to data at all times in a format they want and
                understand. Easy availability of data encourages teamwork and empowers employees, enabling them to
                be more independent.
              </p>
            </div>
          </div>
          <div className="row align-items-center mt-60 mb-60 flex-column-reverse flex-sm-row flex-md-row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h4 className="heading-3">
                Convert Raw Data to Detailed Insights Within Minutes
              </h4>
              <p className="para mt-20">
                Hypertarget data analytics uses minimal resources to convert raw data to detailed insights quickly,
                along with presenting data in a format that speaks to you. So, whether you prefer pie charts, bar
                graphs, candlestick charts, or any other data visualization technique, we’ve got you covered!
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
              {/* <Image className="img0" src="assets/images/img04.png" alt="" /> */}
            </div>
          </div>
          <div className="row align-items-center mt-60 mb-60">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
              {/* <Image className="img0" src="assets/images/img05.png" alt="" /> */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <h4 className="heading-3">
                Customize Data Analytics &amp; Business Intelligence Your Way
              </h4>
              <p className="para mt-20">
                Our powerful analytics tools help you view data the way you want it, and this includes data
                according to custom targets, missions, critical points, comparisons, etc. View your data your way by
                making changes with just a few clicks. With Hypertarget, YOU are in control of the data.
              </p>
              <ul className="theme-list">
                <li>Refine your data by including and removing elements</li>
                <li>Speculate decision impacts by simulating future events</li>
                <li>Add or remove data points and filter data as per need</li>
                <li>Annotate charts and points for discussion &amp; reference</li>
                <li>Govern your data to control who has access to what</li>
              </ul>
            </div>
          </div>
          {/* carousel area */}
          <div className="row">
            <div className="col-12">
              <h4 className="heading-3">
                Hypertarget Where Every Bit of Data Tells a Story
              </h4>
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <div className="check-card-wrap">
                    <div className="check">
                      {/* <Image src="assets/images/check.svg" alt="" /> */}
                    </div>
                    <div className="check-details">
                      <p className="para">
                        Data analytics has a whole new meaning. It’s not just about analyzing the past to
                        predict the future but has become a lot more powerful now. With Hypertarget’s
                        flexible range of data presentation and insights, you get to combine different
                        events, cards, texts, highlights, images, and pins on your dashboard to create
                        contingencies for potential events, preparing yourself and your team for the same.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="check-card-wrap">
                    <div className="check">
                      {/* <Image src="assets/images/check.svg" alt="" /> */}
                    </div>
                    <div className="check-details">
                      <p className="para">
                        Data analytics has a whole new meaning. It’s not just about analyzing the past to
                        predict the future but has become a lot more powerful now. With Hypertarget’s
                        flexible range of data presentation and insights, you get to combine different
                        events, cards, texts, highlights, images, and pins on your dashboard to create
                        contingencies for potential events, preparing yourself and your team for the same.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="check-card-wrap">
                    <div className="check">
                      {/* <Image src="assets/images/check.svg" alt="" /> */}
                    </div>
                    <div className="check-details">
                      <p className="para">
                        Data analytics has a whole new meaning. It’s not just about analyzing the past to
                        predict the future but has become a lot more powerful now. With Hypertarget’s
                        flexible range of data presentation and insights, you get to combine different
                        events, cards, texts, highlights, images, and pins on your dashboard to create
                        contingencies for potential events, preparing yourself and your team for the same.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="check-card-wrap">
                    <div className="check">
                      {/* <Image src="assets/images/check.svg" alt="" /> */}
                    </div>
                    <div className="check-details">
                      <p className="para">
                        Data analytics has a whole new meaning. It’s not just about analyzing the past to
                        predict the future but has become a lot more powerful now. With Hypertarget’s
                        flexible range of data presentation and insights, you get to combine different
                        events, cards, texts, highlights, images, and pins on your dashboard to create
                        contingencies for potential events, preparing yourself and your team for the same.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="check-card-wrap">
                    <div className="check">
                      {/* <Image src="assets/images/check.svg" alt="" /> */}
                    </div>
                    <div className="check-details">
                      <p className="para">
                        Data analytics has a whole new meaning. It’s not just about analyzing the past to
                        predict the future but has become a lot more powerful now. With Hypertarget’s
                        flexible range of data presentation and insights, you get to combine different
                        events, cards, texts, highlights, images, and pins on your dashboard to create
                        contingencies for potential events, preparing yourself and your team for the same.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="check-card-wrap">
                    <div className="check">
                      {/* <Image src="assets/images/check.svg" alt="" /> */}
                    </div>
                    <div className="check-details">
                      <p className="para">
                        Data analytics has a whole new meaning. It’s not just about analyzing the past to
                        predict the future but has become a lot more powerful now. With Hypertarget’s
                        flexible range of data presentation and insights, you get to combine different
                        events, cards, texts, highlights, images, and pins on your dashboard to create
                        contingencies for potential events, preparing yourself and your team for the same.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="check-card-wrap">
                    <div className="check">
                      {/* <Image src="assets/images/check.svg" alt="" /> */}
                    </div>
                    <div className="check-details">
                      <p className="para">
                        Data analytics has a whole new meaning. It’s not just about analyzing the past to
                        predict the future but has become a lot more powerful now. With Hypertarget’s
                        flexible range of data presentation and insights, you get to combine different
                        events, cards, texts, highlights, images, and pins on your dashboard to create
                        contingencies for potential events, preparing yourself and your team for the same.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* quote section */}
          <section className="quote-sec">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="quote-wrapper">
                    <h2>Use our collection of in-app analytical solutions to highlight your KPIs, regardless of
                      your industry!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="banner-cta-wrap">
        <div className="container">
          <div className="banner-cta">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                <h4 className="heading-3">
                  Are you ready to start making informed decisions and scaling your business with the help of real-time insights?
                </h4>
              </div>
              <div className="col-lg-6 d-flex justify-content-end offset-lg-1 offset-md-1 col-md-6 col-sm-12 col-12 banner-cta-contain">
                <a className="cta-primary cta-lg cta-shadow">
                  Partner with Hypertarget Today!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="main-footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              {/* <Image className="ft-logo" src="assets/images/logo.svg" alt="" /> */}
              <p className="para mt-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </p>
              <ul className="social-links">
                <li><a ><i className="fab fa-facebook" /></a></li>
                <li><a ><i className="fab fa-twitter" /></a></li>
                <li><a ><i className="fab fa-instagram" /></a></li>
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
                <li><a  >Download</a></li>
                <li><a  >Pricing</a></li>
                <li><a  >Locations</a></li>
                <li><a  >Server</a></li>
                <li><a  >Countries</a></li>
                <li><a  >Blog</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-12">
              <h4 className="ft-head">
                Feature
              </h4>
              <ul className="ft-links">
                <li><a  >Menu 1</a></li>
                <li><a  >Menu 1</a></li>
                <li><a  >Menu 1</a></li>
                <li><a  >Menu 1</a></li>
                <li><a  >Menu 1</a></li>
                <li><a  >Menu 1</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-4 col-12">
              <h4 className="ft-head">
                Earn Money
              </h4>
              <ul className="ft-links">
                <li><a  >Affiliate</a></li>
                <li><a  >Become Partner</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


// /////////////////////
// import Head from "next/head";
// import styles from "../styles/Home.module.css";
// import React from "react";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/client";

// export default function Home() {
//   const [session, loading] = useSession();
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Auth Examples</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         {!session && (
//           <>
//             Not signed in <br />
//             <button onClick={signIn}>Sign In</button>
//           </>
//         )}
//         {session && (
//           <>
//             Signed in as {session.user.email} <br />
//             <div>You can now access our super secret pages</div>
//             <button>
//               <Link href="/secret">To the secret</Link>
//             </button>
//             <button onClick={signOut}>sign out</button>
//           </>
//         )}
//       </main>
//     </div>
//   );
// }
