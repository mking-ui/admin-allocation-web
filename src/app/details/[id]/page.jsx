import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import getSingleCourse from "@/course-fetch/level1/getSingleCourse";

export async function DetailsPage({ params: { id } }) {
  const mycourse = await getSingleCourse(id);
  return (
    <>
    <Navbar/>
    <div className="container">
    <Sidebar/>
      <main id="main" className="main">
        <div className="container">
          <div className="pagetitle">
            <h1>Full Description </h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/viewcourse">Back to Course</a>
                </li>
                <li className="breadcrumb-item">Details</li>
                <li className="breadcrumb-item active">Description</li>
              </ol>
            </nav>
          </div>
          <section className="section" id="datatable">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="card info-card sales-card">
                      <div className="card-body">
                        <h5 className="card-title">
                          {mycourse.code}
                          <span className="badge dashboard3 text-light mx-1">
                            <i className="bi bi-info-square-fill me-1"></i>
                            {mycourse.level}
                          </span>
                          <br />
                        </h5>
                        <h5 className="mt-2 fw-bold">{mycourse.title}</h5>
                        <div className="card-text  ">
                          <p className="text-justify ">
                            {mycourse.desc}
                          </p>
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

export default DetailsPage;
