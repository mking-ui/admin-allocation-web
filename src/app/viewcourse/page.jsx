import RemoveButton from "@/components/Delete1";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import getAllCourses from "@/course-fetch/level1/getAllCourse";
import Link from "next/link";

export default async function ViewCourse(){

  const mydata = await getAllCourses();
  return (
    <>
    <Navbar/>
    <div className="container">
    <Sidebar/>
      <main id="main" className="main">
        <div className="container">
          <div className="pagetitle">
            <h1>View Course</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item">Edit Course</li>
                <li className="breadcrumb-item active">Edit and Delete</li>
              </ol>
            </nav>
          </div>

          <section className="section" id="datatable">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <form className="search-form d-flex align-items-center col-lg-5  my-3">
                        <input
                          type="text"
                          placeholder="Search"
                          title="Enter search keyword"
                        />
                        <button type="submit" title="Search">
                          <i className="bi bi-search"></i>
                        </button>
                      </form>
                      <div className="col-lg-12">
                      {mydata.map((mycourse)=>{
                        return(

                        
                        <div className="row" key={mycourse.id}>
                          <div className="col-lg-8 col-md-8 ">
                            <div className="card info-card sales-card">
                              <div className="card-body">
                                <h5 className="card-title">
                                  {mycourse.code}
                                  <span className="badge bg-body-secondary text-dark mx-1">
                                    <i className="bi bi-info-square-fill me-1"></i>
                                    {mycourse.level}
                                  </span>
                                  <br />
                                </h5>
                                <h5 className="mt-2 fw-bold">
                                 {mycourse.title}
                                </h5>
                                <div className="card-text  ">
                                  <p className="text-justify text-cate">
                                   {mycourse.desc}
                                  </p>
                                </div>
                                <div className="d-flex flex-md-row flex-column align-items-baseline justify-content-between">
                                  <div className="ps-1">
                                    <Link href={`details/${mycourse._id}`}>
                                      <span className=" btn border-0 text-success small pt-1 fw-bold">
                                      <i className="bi bi-chevron-right"></i>
                                        Read more
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="pe-4 ">
                                    <Link  href={`/edit1/${mycourse._id}`}>
                                      <span className="text-muted small  p-1 pt-1 rounded-2 ">
                                        <i className=" card-icon bi bi-pencil me-1  "></i>
                                        Update
                                      </span>
                                    </Link>
                                    <RemoveButton id={mycourse._id} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 ">
                            <div className="card info-card sales-card">
                              <div className="card-body">
                                <h5 className="card-title">
                                  <span className="badge badge-color text-light">
                                    <i className="bi bi-info-square-fill me-1"></i>
                                    Instructor
                                  </span>
                                </h5>
                                <img
                                  src={mycourse.image}
                                  className="card-img  mb-2"
                                />
                                <div className="d-flex align-items-start  badge bg-body-secondary text-dark">
                                  <div className="ps-3 text-start">
                                    <span className="text-success small pt-1 fw-bold">
                                      {mycourse.name} <br />
                                    </span>
                                    <span className="text-muted small pt-2">
                                      {mycourse.position} <br />
                                      {mycourse.field}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        )
                      })}
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
};


