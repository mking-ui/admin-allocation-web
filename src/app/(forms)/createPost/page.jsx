"use client";

import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddCourse = () => {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("Choose Position...");
  const [field, setField] = useState("Choose Field...");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [level, setLevel] = useState("Choose Level...");

  const router = useRouter();
  const CLOUD_NAME = "djkeyh3y0";
  const UPLOAD_PRESET = "csc_course";

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !code ||
      !title ||
      !desc ||
      !name ||
      !position ||
      !field ||
      !email ||
      !phone ||
      !level
    ) {
      alert("All fields are needed!!!");
      return;
    }
    const image = await uploadImage();
    const response = await fetch("/api/level1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        title,
        desc,
        name,
        position,
        field,
        email,
        phone,
        image,
        level,
      }),
    });
    if (response.status == 201) {
      router.refresh();
      setCode("");
      setTitle("");
      setDesc("");
      setName("");
      setPosition("Choose Position...");
      setField("Choose Field... ");
      setEmail("");
      setPhone("");
      setPhoto("");
      setLevel("Choose Level...");
    }
  }
  const uploadImage = async () => {
    if (!photo) return;
    const formData = new FormData();

    formData.append("file", photo);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      const image = data["secure_url"];

      return image;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="container">
    <Sidebar/>
      <main id="main" className="main">
        <div className="container">
          <div className="pagetitle">
            <h1>Add Course</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item">Create Post</li>
                <li className="breadcrumb-item active">Add course</li>
              </ol>
            </nav>
          </div>

          <section className="section contact">
            <div className="row gy-4">
              <div className="col-lg-12">
                <div className="card p-4">
                  <form onSubmit={handleSubmit} className="addcourse">
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Course Code"
                          onChange={(e) => setCode(e.target.value)}
                          value={code}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Course Title/Credit Unit"
                          onChange={(e) => setTitle(e.target.value)}
                          value={title}
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          className="form-control"
                          rows="4"
                          placeholder="Course Description"
                          onChange={(e) => setDesc(e.target.value)}
                          value={desc}
                        ></textarea>
                      </div>

                      <div>
                        <h5 classNameName=" fw-lighter  text-start"></h5>
                        <span className="badge bg-body-secondary text-dark">
                          <i className="bi bi-info-square-fill me-1"></i>{" "}
                          Instructor Information
                        </span>
                      </div>
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </div>

                      <div className="col-md-6">
                        <select
                          className="form-control shadow-none rounded-0 "
                          onChange={(e) => setPosition(e.target.value)}
                          value={position}
                          
                        >
                          <option selected disabled value="Choose Position...">
                            Choose Position ...
                          </option>
                          <option value="Senior Lecturer">
                            Senior Lecturer
                          </option>
                          <option value="Junior Lecturer">
                            Junior Lecturer
                          </option>
                          <option value="Lecturer 1">Lecturer 1</option>
                          <option value="Lecturer 2">Lecturer 2</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <select
                          className="form-control shadow-none rounded-0 "
                          onChange={(e) => setField(e.target.value)}
                          value={field}
                        >
                          <option selected disabled value="Choose Field...">
                            Choose Field ...
                          </option>
                          <option value="Web Development">
                            Web Development
                          </option>
                          <option value="Machine Learning">
                            Machine Learning
                          </option>
                          <option value="Artificial Intelligent">
                            Artificial Intelligent
                          </option>
                          <option value="Data Management">
                            Data Management
                          </option>
                        </select>
                      </div>

                      <div className="col-md-6 ">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>
                      <div className="col-md-6 ">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone No."
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                        />
                      </div>

                      <div className="col-md-6">
                        <input
                          type="file"
                          className="form-control"
                          placeholder="image"
                          onChange={(e) => setPhoto(e.target.files[0])}
                        />
                      </div>
                      <div className="col-md-6">
                        <select
                          className="form-control shadow-none rounded-0 "
                          onChange={(e) => setLevel(e.target.value)}
                          value={level}
                        >
                          <option selected disabled value="Choose Level...">
                            Choose Level ...
                          </option>
                          <option value="L100">L100</option>
                          <option value="L200">L200</option>
                          <option value="L300">L300</option>
                          <option value="L400">L400</option>
                        </select>
                      </div>

                      <div className="col-md-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>

                      <button type="submit">Submit</button>
                    </div>
                  </form>
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
export default AddCourse;
