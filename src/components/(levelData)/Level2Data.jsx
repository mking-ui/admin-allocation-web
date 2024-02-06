import React from "react";
import Sidebar from "../Sidebar";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Level2Data() {
  return (
    <>
    <Navbar/>
      <div className="container">
        <Sidebar />
        <main id="main" className="main">
          <div className="container">
            <div className="pagetitle">
              <h1>Level 2</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/dashboard">Home</a>
                  </li>
                  <li className="breadcrumb-item">Materials</li>
                  <li className="breadcrumb-item active">200 Level</li>
                </ol>
              </nav>
            </div>

            <section className="section">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <ul
                        className="nav nav-tabs nav-tabs-justify nav-tabs-bordered"
                        id="borderedTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pdf-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#bordered-pdf"
                            type="button"
                            role="tab"
                            aria-controls="pdf"
                            aria-selected="true"
                          >
                            PDFs
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="test-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#bordered-test"
                            type="button"
                            role="tab"
                            aria-controls="test"
                            aria-selected="false"
                          >
                            Test PQ.
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="exam-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#bordered-exam"
                            type="button"
                            role="tab"
                            aria-controls="exam"
                            aria-selected="false"
                          >
                            Exams PQ.
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content pt-2" id="borderedTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="bordered-pdf"
                          role="tabpanel"
                          aria-labelledby="pdf-tab"
                        >
                          <div className="row">
                            <div className="search-bar"></div>
                            <div className="col-lg-4 ">
                              <div className="card ">
                                <div className="card-body">
                                  <h5 className="card-title">
                                    <span>CSC202</span>
                                  </h5>
                                  <Link
                                    href="/avt/1.jpg"
                                    data-lightbox="PassQuestion"
                                    data-title="Pass Question Paper"
                                  >
                                    <img
                                      src="/avt/1.jpg"
                                      className="card-img"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4 ">
                              <div className="card ">
                                <div className="card-body">
                                  <h5 className="card-title">
                                    <span>CSC202</span>
                                  </h5>
                                  <Link
                                    href="/imgs/new.jpg"
                                    data-lightbox="PassQuestion"
                                    data-title="Pass Question Paper"
                                  >
                                    <img
                                      src="/imgs/new.jpg"
                                      className="card-img"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4 ">
                              <div className="card ">
                                <div className="card-body">
                                  <h5 className="card-title">
                                    <span>CSC202</span>
                                  </h5>
                                  <Link
                                    href="/imgs/schb.jpg"
                                    data-lightbox="PassQuestion"
                                    data-title="Pass Question Paper"
                                  >
                                    <img
                                      src="/imgs/schb.jpg"
                                      className="card-img"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="bordered-test"
                          role="tabpanel"
                          aria-labelledby="text-tab"
                        >
                          <div className="row">
                            <div className="search-bar"></div>
                            <div className="col-lg-4 ">
                              <div className="card ">
                                <div className="card-body">
                                  <h5 className="card-title">
                                    <span>CSC202</span>
                                  </h5>
                                  <Link
                                    href="/imgs/jim.jpg"
                                    data-lightbox="PassQuestion"
                                    data-title="Pass Question Paper"
                                  >
                                    <img
                                      src="/imgs/jim.jpg"
                                      className="card-img"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4 ">
                              <div className="card ">
                                <div className="card-body">
                                  <h5 className="card-title">
                                    <span>CSC202</span>
                                  </h5>
                                  <Link
                                    href="/imgs/new.jpg"
                                    data-lightbox="PassQuestion"
                                    data-title="Pass Question Paper"
                                  >
                                    <img
                                      src="/imgs/new.jpg"
                                      className="card-img"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4 ">
                              <div className="card ">
                                <div className="card-body">
                                  <h5 className="card-title">
                                    <span>CSC202</span>
                                  </h5>
                                  <Link
                                    href="/imgs/schb.jpg"
                                    data-lightbox="PassQuestion"
                                    data-title="Pass Question Paper"
                                  >
                                    <img
                                      src="/imgs/schb.jpg"
                                      className="card-img"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="bordered-exam"
                          role="tabpanel"
                          aria-labelledby="exam-tab"
                        >
                          <div className="row">
                            <div className="search-bar"></div>
                            <div className="col-lg-4 ">
                              <div className="card ">
                                <div className="card-body">
                                  <h5 className="card-title">
                                    <span>CSC202</span>
                                  </h5>
                                  <Link
                                    href="/imgs/jim.jpg"
                                    data-lightbox="PassQuestion"
                                    data-title="Pass Question Paper"
                                  >
                                    <img
                                      src="/imgs/jim.jpg"
                                      className="card-img"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4 ">
                              <div className="card ">
                                <div className="card-body">
                                  <h5 className="card-title">
                                    <span>CSC202</span>
                                  </h5>
                                  <Link
                                    href="/imgs/new.jpg"
                                    data-lightbox="PassQuestion"
                                    data-title="Pass Question Paper"
                                  >
                                    <img
                                      src="/imgs/new.jpg"
                                      className="card-img"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4 ">
                              <div className="card ">
                                <div className="card-body">
                                  <h5 className="card-title">
                                    <span>CSC202</span>
                                  </h5>
                                  <Link
                                    href="/imgs/schb.jpg"
                                    data-lightbox="PassQuestion"
                                    data-title="Pass Question Paper"
                                  >
                                    <img
                                      src="/imgs/schb.jpg"
                                      className="card-img"
                                    />
                                  </Link>
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
          </div>
        </main>
      </div>
    </>
  );
}
