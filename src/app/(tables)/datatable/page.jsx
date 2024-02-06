import L100Table from "@/components/(tablesdata)/L100Table";
import L200Table from "@/components/(tablesdata)/L200Table";
import L300Table from "@/components/(tablesdata)/L300Table";
import L400Table from "@/components/(tablesdata)/L400Table";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function page() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Sidebar />
      <main id="main" className="main">
        <div className="container">
          <div className="pagetitle">
            <h1>Data Tables</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item">Tables</li>
                <li className="breadcrumb-item active">Data Tables</li>
              </ol>
            </nav>
          </div>

          <section className="section" id="datatable">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <ul
                      className="nav nav-tabs  nav-tabs-bordered"
                      id="borderedTab"
                      role="tablist"
                    >
                      <li className="nav-item " role="presentation">
                        <button
                          className="nav-link  active"
                          id="pdf-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#bordered-pdf"
                          type="button"
                          role="tab"
                          aria-controls="pdf"
                          aria-selected="true"
                        >
                          Level 1
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
                          Level 2
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
                          Level 3
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="level4-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#bordered-level4"
                          type="button"
                          role="tab"
                          aria-controls="level4"
                          aria-selected="false"
                        >
                          Level 4
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
                        <L100Table />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="bordered-test"
                        role="tabpanel"
                        aria-labelledby="test-tab"
                      >
                        <L200Table />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="bordered-exam"
                        role="tabpanel"
                        aria-labelledby="exam-tab"
                      >
                        <L300Table />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="bordered-level4"
                        role="tabpanel"
                        aria-labelledby="level4-tab"
                      >
                        <L400Table />
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
