"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


const AddPost = () => {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("Senior");
  const [field, setField] = useState("Web");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [level, setLevel] = useState("100");

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
      router.push("/");
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
    <section className="addOrg py-4 d-flex flex-column justify-content-center align-items-center">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="card ">
              <div className="card-body">
                <h1 className="text-center text-uppercase mb-4">Add Record</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <h2>Names Section</h2>
                      <div className="mb-3">
                        <label className="">Code</label>
                        <input
                          onChange={(e) => setCode(e.target.value)}
                          value={code}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Title</label>
                        <input
                          onChange={(e) => setTitle(e.target.value)}
                          value={title}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Description</label>
                        <input
                          onChange={(e) => setDesc(e.target.value)}
                          value={desc}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Name</label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Select Position</label>
                        <select
                          className="form-control shadow-none "
                          value={position}
                          onChange={(e) => setPosition(e.target.value)}
                        >
                          
                          <option value="Senior">Senior</option>
                          <option value="Junior">Junior</option>
                          <option value="Lecturer 1">Lecturer 1</option>
                          <option value="Lecturer 2">Lecturer 2</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h2>Descriipton Section</h2>
                      <div className="mb-3">
                        <label className="">Select Field</label>
                        <select
                          className="form-control shadow-none "
                          onChange={(e) => setField(e.target.value)}
                          value={field}
                        >
                         <option value="Web">Web</option>
                          <option value="Machine">Machine</option>
                          <option value="Artificial">Artificial</option>
                          <option value="Data">Data</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="">Email</label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Phone</label>
                        <input
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                          type="text"
                          className="form-control shadow-none "
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Select Photo</label>
                        <input
                          className="form-control shadow-none "
                          type="file"
                          onChange={(e) => setPhoto(e.target.files[0])}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="">Select Level</label>
                        <select
                          className="form-control shadow-none "
                          onChange={(e) => setLevel(e.target.value)}
                          value={level}
                        >
                          <option value="100">100</option>
                          <option value="200">200</option>
                          <option value="300">300</option>
                          <option value="400">400</option>
                        </select>
                      </div>
                     
                    </div>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-submit border-0">
                      Create Data
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPost;
