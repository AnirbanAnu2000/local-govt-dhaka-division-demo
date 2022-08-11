import React from 'react';
import './DhakaDivision.css';
import { Link } from "react-router-dom";

const DhakaDivision = () => {

  return (
    <div>
      <div className='container mt-4'>
        {/* Slider start */}
        <div className='row'>
          <div className='col-lg-12'>
            <div id="carouselExampleFade" className="carousel slide carousel-fade p-3 bg-secondary" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./images/slider/slider9.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/slider2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/slider3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/slider4.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/slider5.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/slider6.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/slider7.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* Slider end */}
        {/* <h1 className='text-bold text-center text-primary mb-3 mt-4 dhaka-div-lg-heading'>
          <img src='./images/dhaka-div-map.png' alt='' width={100}/> ঢাকা বিভাগের স্থানীয় সরকার প্রতিষ্ঠান সমূহ
        </h1> */}
        <div className='row justify-content-center mt-4'>
          <div className='col-lg-10 bg-light p-3'>
            <h1 className='fw-bold text-center text-primary mb-3 mt-2 dhaka-div-lg-heading'>
              <img src='./images/dhaka-div-map.png' alt='' width={100} /> ঢাকা বিভাগের স্থানীয় সরকার প্রতিষ্ঠান সমূহ
            </h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">

              <div className="accordion-item border-1 border-primary border-bottom">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed text-center fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    ঢাকা জেলা
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  
                  <div className="accordion-body">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active fw-bold" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">জেলা পরিষদ</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link fw-bold" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">সিটি কর্পোরেশন</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link fw-bold" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">উপজেলা</button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      <nav className="navbar navbar-expand-lg navbar-light bg-light">
                          <div className="container-fluid">                            
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav">
                                <li className="nav-item">
                                  {/* <a className="btn btn-primary fw-bold" href='#'>ঢাকা জেলা পরিষদ</a> */}
                                  <Link to="/dhakadistrictcouncil" className="btn btn-primary fw-bold">ঢাকা জেলা পরিষদ</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                      </div>
                      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                          <div className="container-fluid">                            
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav">
                                <li className="nav-item">
                                  <a className="btn btn-primary fw-bold me-2" href='#'>ঢাকা উত্তর সিটি কর্পোরেশন</a>
                                </li>
                                <li className="nav-item">
                                  <a className="btn btn-primary fw-bold" href='#'>ঢাকা দক্ষিণ সিটি কর্পোরেশন</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </nav>
                      </div>
                      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                          <div className="container-fluid">                            
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav">
                                <li className="nav-item">
                                  <a className="nav-link" href="#">দোহার উপজেলা</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">নবাবগঞ্জ উপজেলা</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">কেরানীগঞ্জ উপজেলা</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">সাভার উপজেলা</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">ধামরাই উপজেলা</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                      </nav> */}

                        {/* <div className="d-flex align-items-start">
                          <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">দোহার উপজেলা</button>
                            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
                            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
                            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
                          </div>
                          <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                              <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">দোহার উপজেলা</a></li>
                                </ol>
                              </nav>

                              <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                                  <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                              </nav>

                              <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                                  <li className="breadcrumb-item"><a href="#">Library</a></li>
                                  <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                              </nav>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                          </div>
                        </div> */}

                        {/* <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                দোহার উপজেলা
                              </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong><a href=''>উপজেলা পরিষদ দোহার</a></strong> 
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               পৌরসভা
                              </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <strong><a href=''>দোহার পৌরসভা</a></strong> 
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               ইউনিয়ন সমূহ
                              </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                              <small><a href='#'>কুসুমহাটি ইউনিয়ন</a></small> &#x2502; <a href='#'>নয়াবাড়ি ইউনিয়ন</a> &#x2502; <a href='#'>রাইপাড়া ইউনিয়ন</a> &#x2502; <a href='#'>চর মোহাম্মদপুর ইউনিয়ন</a> &#x2502; <a href='#'>সুতারপাড়া ইউনিয়ন</a> &#x2502; <a href='#'>নারিশা ইউনিয়ন</a> &#x2502; <a href='#'>মুকসুদপুর ইউনিয়ন</a> &#x2502; <a href='#'>বিলাশপুর ইউনিয়ন</a>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div className="d-flex align-items-start">
                          <div className="nav flex-column nav-pills me-3 border-1 border-end pe-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active fw-bold" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">দোহার উপজেলা</button>
                            <button className="nav-link fw-bold" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">নবাবগঞ্জ উপজেলা</button>
                            <button className="nav-link fw-bold" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">কেরানীগঞ্জ উপজেলা</button>
                            <button className="nav-link fw-bold" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">সাভার উপজেলা</button>
                            <button className="nav-link fw-bold" id="v-pills-settings1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings1" type="button" role="tab" aria-controls="v-pills-settings1" aria-selected="false">সাভার উপজেলা</button>
                          </div>
                          <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                              <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                  <button className="nav-link active fw-bold" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">উপজেলা পরিষদ</button>
                                  <button className="nav-link fw-bold" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">পৌরসভা</button>
                                  <button className="nav-link fw-bold" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">ইউনিয়ন পরিষদ</button>
                                </div>
                              </nav>
                              <div className="tab-content pt-3" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                  {/* <a className='btn btn-primary mt-3' href='#'>উপজেলা পরিষদ দোহার</a> */}
                                  <a className='mb-2 me-1 text-decoration-none btn btn-primary fw-bold' href='#'>উপজেলা পরিষদ দোহার</a>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                {/* <button className='btn btn-primary mt-3'>দোহার পৌরসভা</button> */}
                                  <a className='mb-2 me-1 text-decoration-none btn btn-primary fw-bold' href='#'>দোহার পৌরসভা</a>
                                </div>
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                  
                                    {/* <div className='col-lg-3'></div>
                                    <div className='col-lg-3'></div>
                                    <div className='col-lg-3'></div>
                                    <div className='col-lg-3'></div>
                                    <div className='col-lg-3'></div>
                                    <div className='col-lg-3'></div>
                                    <div className='col-lg-3'></div>
                                    <div className='col-lg-3'></div> */}
                                    <small><a className='mb-2 me-2 text-decoration-none btn btn-primary fw-bold' href='#'>কুসুমহাটি ইউনিয়ন</a></small>
                                    <small><a className='mb-2 me-2 text-decoration-none btn btn-primary fw-bold' href='#'>নয়াবাড়ি ইউনিয়ন</a></small>
                                    <small><a className='mb-2 me-2 text-decoration-none btn btn-primary fw-bold' href='#'>রাইপাড়া ইউনিয়ন</a></small>
                                    <small><a className='mb-2 me-2 text-decoration-none btn btn-primary fw-bold' href='#'>চর মোহাম্মদপুর ইউনিয়ন</a></small><br />
                                    <small><a className='mb-2 me-2 text-decoration-none btn btn-primary fw-bold' href='#'>সুতারপাড়া ইউনিয়ন</a></small>
                                    <small><a className='mb-2 me-2 text-decoration-none btn btn-primary fw-bold' href='#'>নারিশা ইউনিয়ন</a></small>
                                    <small><a className='mb-2 me-2 text-decoration-none btn btn-primary fw-bold' href='#'>মুকসুদপুর ইউনিয়ন</a></small>
                                    <small><a className='mb-2 me-2 text-decoration-none btn btn-primary fw-bold' href='#'>বিলাশপুর ইউনিয়ন</a></small>
                                  
                                </div>
                              </div>

                            </div>

                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">.2..</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">.3..</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">.4..</div>
                            <div className="tab-pane fade" id="v-pills-settings1" role="tabpanel" aria-labelledby="v-pills-settings1-tab">.5..</div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="accordion-item border-1 border-primary border-bottom">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed text-center fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    গাজীপুর জেলা
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>

              <div className="accordion-item border-1 border-primary border-bottom">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed text-center fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    কিশোরগঞ্জ জেলা
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>

              <div className="accordion-item border-1 border-primary border-bottom">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed text-center fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    গোপালগঞ্জ জেলা
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>

              <div className="accordion-item border-1 border-primary border-bottom">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button className="accordion-button collapsed text-center fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    টাঙ্গাইল জেলা
                  </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>

              <div className="accordion-item border-1 border-primary border-bottom">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button className="accordion-button collapsed text-center fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    নরসিংদী জেলা
                  </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>

              <div className="accordion-item border-1 border-primary border-bottom">
                <h2 className="accordion-header" id="flush-headingSeven">
                  <button className="accordion-button collapsed text-center fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                    নারায়ণগঞ্জ জেলা
                  </button>
                </h2>
                <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>

              <div className="accordion-item border-1 border-primary border-bottom">
                <h2 className="accordion-header" id="flush-headingEight">
                  <button className="accordion-button collapsed text-center fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                    ফরিদপুর জেলা
                  </button>
                </h2>
                <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>

              <div className="accordion-item border-1 border-primary border-bottom">
                <h2 className="accordion-header" id="flush-headingNine">
                  <button className="accordion-button collapsed text-center fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                    মাদারীপুর জেলা
                  </button>
                </h2>
                <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>

              <div className="accordion-item border-1 border-primary border-bottom">
                <h2 className="accordion-header" id="flush-headingTen">
                  <button className="accordion-button collapsed text-center fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                    মানিকগঞ্জ জেলা
                  </button>
                </h2>
                <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>

              <div className="accordion-item border-1 border-primary border-bottom">
                <h2 className="accordion-header" id="flush-headingEleven">
                  <button className="accordion-button collapsed text-center fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven" aria-expanded="false" aria-controls="flush-collapseEleven">
                    মুন্সীগঞ্জ জেলা
                  </button>
                </h2>
                <div id="flush-collapseEleven" className="accordion-collapse collapse" aria-labelledby="flush-headingEleven" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>

              <div className="accordion-item border-1 border-primary border-bottom">
                <h2 className="accordion-header" id="flush-headingTwelve">
                  <button className="accordion-button collapsed text-center fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwelve" aria-expanded="false" aria-controls="flush-collapseTwelve">
                    রাজবাড়ী জেলা
                  </button>
                </h2>
                <div id="flush-collapseTwelve" className="accordion-collapse collapse" aria-labelledby="flush-headingTwelve" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>

              <div className="accordion-item border-1 border-primary border-bottom">
                <h2 className="accordion-header" id="flush-headingThirteen">
                  <button className="accordion-button collapsed text-center fw-bold text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen" aria-expanded="false" aria-controls="flush-collapseThirteen">
                    শরীয়তপুর জেলা
                  </button>
                </h2>
                <div id="flush-collapseThirteen" className="accordion-collapse collapse" aria-labelledby="flush-headingThirteen" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-4' style={{backgroundColor: "#0c022a"}}>
        <img src='./images/dhaka-div-map.png' alt='' width={200} />
        <span className='fw-bold text-primary text-white' style={{fontSize:"18px", fontWeight: "700"}}>সকল তথ্য কমিশনারের কার্যালয় ঢাকা বিভাগ কর্তৃক সংরক্ষিত</span>
      </div>
    </div>

  );
};

export default DhakaDivision;