import RemoveButton from "@/components/Delete1";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import getAllCourses from "@/course-fetch/level1/getAllCourse";
import Link from "next/link";

const ViewCourse = async () => {
  const mydata = await getAllCourses();
  return (
    <>
    <Navbar/>
      <div className="container">
        <Sidebar />
        <main id="main" className="main">
          <section className="section" id="datatable">
            <div className="container">
              <div className="pagetitle">
                <h1>WELCOME ADMIN</h1>
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/dashboard">Home</a>
                    </li>
                    <li className="breadcrumb-item">Page</li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </nav>
              </div>
              <div className="row gy-4 mb-5">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-8 col-md-12 ">
                      <div className="card ">
                        <div className="card-body">
                          <h5 className="card-title ">Creating Post</h5>
                          <div className="row">
                            <div className="col-lg-6 col-md-12">
                              <Link
                                href="/createPost"
                                className=" text-decoration-none"
                              >
                                <div className="card ">
                                  <div className="card-body">
                                    <h5 className="card-title ">
                                      <span className="badge btn align-self-end dashboard1 text-light animate-loading">
                                        <i className="bi bi-info-square-fill me-1"></i>
                                        Add Course
                                      </span>
                                    </h5>
                                    <img
                                      src="/avt/1.jpg"
                                      className="card-img-top  mb-2"
                                    />
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-6 col-md-12 ">
                              <Link
                                href="/uploadpdf"
                                className=" text-decoration-none"
                              >
                                <div className="card ">
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      <span className="badge btn bg-body-secondary text-dark">
                                        <i className="bi bi-info-square-fill me-1"></i>
                                        upload Documents
                                      </span>
                                    </h5>
                                    <img
                                      src="/avt/3.jpg"
                                      className="card-img-top  mb-2"
                                    />
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-6 col-md-12 ">
                              <Link
                                href="/uploadtest"
                                className=" text-decoration-none"
                              >
                                <div className="card  ">
                                  <div className="card-body">
                                    <h5 className="card-title ">
                                      <span className="badge  align-self-end dashboard3 text-light">
                                        <i className="bi bi-info-square-fill me-1"></i>
                                        Upload Test P.Q
                                      </span>
                                    </h5>
                                    <img
                                      src="/avt/2.jpg"
                                      className="card-img-top  mb-2"
                                    />
                                  </div>
                                </div>
                              </Link>
                            </div>
                            <div className="col-lg-6 col-md-12 ">
                              <Link
                                href="/uploadexam"
                                className=" text-decoration-none"
                              >
                                <div className="card ">
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      <span className="badge bg-success text-light">
                                        <i className="bi bi-info-square-fill me-1"></i>
                                        Upload Exams P.Q
                                      </span>
                                    </h5>
                                    <img
                                      src="/avt/4.jpg"
                                      className="card-img-top  mb-2"
                                    />
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mt-2 ">
                      <div className="card info-card mt-4 sales-card">
                        <div className="card-body">
                          <h5 className="card-title">
                            <span className="badge badge-color text-light">
                              <i className="bi bi-info-square-fill me-1"></i>
                              Instructor
                            </span>
                          </h5>
                          <div
                            id="carouselId"
                            class="carousel slide"
                            data-bs-ride="carousel"
                          >
                            <ol class="carousel-indicators">
                              <li
                                data-bs-target="#carouselId"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="First slide"
                              ></li>
                              <li
                                data-bs-target="#carouselId"
                                data-bs-slide-to="1"
                                aria-label="Second slide"
                              ></li>
                              <li
                                data-bs-target="#carouselId"
                                data-bs-slide-to="2"
                                aria-label="Third slide"
                              ></li>
                            </ol>
                            <div class="carousel-inner" role="listbox">
                              <div class="carousel-item active">
                                <img
                                  src="/avt/1.jpg"
                                  class="w-100 d-block"
                                  alt="Third slide"
                                />
                                <div class="carousel-caption d-none d-md-block">
                                  <h3>Title</h3>
                                  <p>Description</p>
                                </div>
                              </div>
                              <div class="carousel-item">
                                <img
                                  src="/avt/5.jpg"
                                  class="w-100 d-block"
                                  alt="Third slide"
                                />
                                <div class="carousel-caption d-none d-md-block">
                                  <h3>Title</h3>
                                  <p>Description</p>
                                </div>
                              </div>
                              <div class="carousel-item">
                                <img
                                  src="/avt/4.jpg"
                                  class="w-100 d-block"
                                  alt="Third slide"
                                />
                                <div class="carousel-caption d-none d-md-block">
                                  <h3>Title</h3>
                                  <p>Description</p>
                                </div>
                              </div>
                            </div>
                            <button
                              class="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselId"
                              data-bs-slide="prev"
                            >
                              <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                              class="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselId"
                              data-bs-slide="next"
                            >
                              <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                          </div>
                          <h5 className="card-title">
                            <span className="badge badge-color text-light">
                              <i className="bi bi-info-square-fill me-1"></i>
                              Instructor
                            </span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <h5 className="card-title ms-4">View and Update</h5>
                    <div className="col-lg-6 col-md-12  ">
                      <Link
                        href="/viewcourse"
                        className=" text-decoration-none"
                      >
                        <div className="card ">
                          <div className="card-body">
                            <h5 className="card-title">
                              <span className="badge bg-body-secondary text-dark">
                                <i className="bi bi-info-square-fill me-1"></i>
                                Courses Update and Delete
                              </span>
                            </h5>
                            <img
                              src="/avt/5.jpg"
                              className="card-img-top  mb-2"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-6 col-md-12  ">
                      <Link
                        href="/generaltable"
                        className=" text-decoration-none"
                      >
                        <div className="card ">
                          <div className="card-body">
                            <h5 className="card-title">
                              <span className="badge dashboard3 text-light">
                                <i className="bi bi-info-square-fill me-1"></i>
                                Table View and Search
                              </span>
                            </h5>
                            <img
                              src="/avt/6.jpg"
                              className="card-img-top  mb-2"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ViewCourse;
