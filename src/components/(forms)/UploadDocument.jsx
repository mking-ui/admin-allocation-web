import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

export default function UploadDocument() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Sidebar />
      <main id="main" className="main">
        <div className="container">
          <div className="pagetitle">
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item">Create Post</li>
                <li className="breadcrumb-item active">Upload Document</li>
              </ol>
            </nav>
          </div>

          <section className="section contact">
            <div className="text-capitalize">
              <h1 className="display-3"> Document Upload</h1>
            </div>
            <div className="card ">
              <form className=" addcourse p-4">
                <div className="row gy-4">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Document Title"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="file"
                      className="form-control  shadow-none"
                      name="image"
                      placeholder="image"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <select className="form-control shadow-none rounded-0 ">
                      <option selected disabled value="Choose">
                        Choose Level ...
                      </option>
                      <option value="100">Level 1</option>
                      <option value="200">Level 2</option>
                      <option value="300">Level 3</option>
                      <option value="400">Level 4</option>
                    </select>
                  </div>

                  <button type="submit">Upload</button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
      </div>
          </>
  );
}
