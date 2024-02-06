"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

export default function EditForm1({
  id,
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
}) {
  const [newCode, setNewCode] = useState(code);
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);
  const [newName, setNewName] = useState(name);
  const [newPosition, setNewPosition] = useState(position);
  const [newField, setNewField] = useState(field);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const [newPhoto, setNewPhoto] = useState(image);
  const [newLevel, setNewLevel] = useState(level);

  const router = useRouter();
  const CLOUD_NAME = "djkeyh3y0";
  const UPLOAD_PRESET = "csc_course";

  async function handleUpdate(e) {
    e.preventDefault();

    const newImage = await updateImage();
    const response = await fetch(`/api/level1/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newCode,
        newTitle,
        newDesc,
        newName,
        newPosition,
        newField,
        newEmail,
        newPhone,
        newImage,
        newLevel,
      }),
    });
    if (response.status == 201) {
      router.push("/viewcourse");
      router.refresh();
    }
  }
  const updateImage = async () => {
    if (!newPhoto) return;
    const formData = new FormData();

    formData.append("file", newPhoto);
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

      const newImage = data["secure_url"];

      return newImage;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <Navbar/>
    <div className="container">
    <Sidebar/>
      <main id="main" className="main">
        <div className="container">
          <div className="pagetitle">
            <h1>Update</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item">Pages</li>
                <li className="breadcrumb-item active">Update</li>
              </ol>
            </nav>
          </div>

          <section className="section contact">
            <div className="row gy-4">
              <div className="col-lg-12">
                <div className="card p-4">
                  <form onSubmit={handleUpdate} className="addcourse">
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Course Code"
                          onChange={(e) => setNewCode(e.target.value)}
                          value={newCode}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Course Title/Credit Unit"
                          onChange={(e) => setNewTitle(e.target.value)}
                          value={newTitle}
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          className="form-control"
                          rows="4"
                          placeholder="Course Description"
                          onChange={(e) => setNewDesc(e.target.value)}
                          value={newDesc}
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
                          onChange={(e) => setNewName(e.target.value)}
                          value={newName}
                        />
                      </div>
                      <div className="col-md-6">
                        <select
                          className="form-control shadow-none rounded-0 "
                          onChange={(e) => setNewPosition(e.target.value)}
                          value={newPosition}
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
                          onChange={(e) => setNewField(e.target.value)}
                          value={newField}
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
                          onChange={(e) => setNewEmail(e.target.value)}
                          value={newEmail}
                        />
                      </div>
                      <div className="col-md-6 ">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone No."
                          onChange={(e) => setNewPhone(e.target.value)}
                          value={newPhone}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="file"
                          className="form-control"
                          placeholder="image"
                          onChange={(e) => setNewPhoto(e.target.files[0])}
                        />
                      </div>
                      <div className="col-md-6">
                        <select
                          className="form-control shadow-none rounded-0 "
                          onChange={(e) => setNewLevel(e.target.value)}
                          value={newLevel}
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
                      <button type="submit">Update</button>
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
}
