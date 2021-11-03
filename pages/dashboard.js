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
      <header>
        <nav className="main-nav">
          <div className="nav-wrapper">
            <div className="logo-wrapper">
               <Image src="assets/images/logo.svg" alt="" />
            </div>
            <div className="right-side">
              <div className="search-bar-wrapper">
                 <Image src="assets/images/search-icon.png" alt="" />
                <input type="text" placeholder="Search" name id />
              </div>
              <span className="notifi">
                 <Image src="assets/images/notifi.png" alt="" />
              </span>
              <a >
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
      <div className="sec-wrapper pt-5 pb-5">
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
                <a data-bs-toggle="modal" data-bs-target="#addJourney" className="cta"><i className="fa fa-plus" />&nbsp;ADD A JOURNEY</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* C Modal */}
      <div className="modal fade modal-step" id="addJourney" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <input type="text" className="journey-name" placeholder="Name your Journey" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                    <div className="form-group">
                      <div className="radio-wrap">
                        <label htmlFor> Domain</label>
                        <div className="switch">
                          <input type="checkbox" defaultChecked="true" id="toggleAll" />
                          <label htmlFor="toggleAll" />
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
                      <div className="add-journey">
                        <div className="journey-img">
                           <Image src="assets/images/layer1.png" alt="" />
                        </div>
                        <div className="add-inputs">
                          <div className="form-group">
                            <div className="input-group">
                              <input type="text" placeholder="Url here" />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="select-wrap">
                              <select name id>
                                <option value>Metric</option>
                              </select>
                               <Image src="assets/images/select-drop.svg" alt="" />
                            </div>
                          </div>
                          <div className="add-btn">
                            <button>+</button>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <input type="text" placeholder="Name the first step" />
                            </div>
                          </div>
                        </div>
                      </div>
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
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
      {/* C Modal */}
      <div className="modal fade modal-step filter-modal" id="addFilter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <select name id>
                          <option value>Add UTM Filter</option>
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
                            <input type="text" name placeholder="Enter the Specfied Url" id />
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
      {/* Modal */}
      <div className="modal info-modal fade" id="completeAlert" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    </div>
  )
}
