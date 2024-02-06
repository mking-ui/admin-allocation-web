import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="container">
        <aside id="sidebar" className="sidebar">
          <div className="container">
            <div
              className="collapse navbar-collapse"
              id="collapsibleNavId"
            ></div>
            <ul className="sidebar-nav" id="sidebar-nav">
              <li className="nav-item">
                <Link className="nav-link " href="/dashboard">
                  <i className="bi bi-grid"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link collapsed"
                  data-bs-target="#forms-nav"
                  data-bs-toggle="collapse"
                  href="#"
                >
                  <i className="bi bi-journal-text"></i>
                  <span>Create Post</span>
                  <i className="bi bi-chevron-down ms-auto"></i>
                </Link>
                <ul
                  id="forms-nav"
                  className="nav-content collapse "
                  data-bs-parent="#sidebar-nav"
                >
                  <li>
                    <Link href="/createPost">
                      <i className="bi bi-circle"></i>
                      <span>Add Course</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/uploadpdf">
                      <i className="bi bi-circle"></i>
                      <span>Upload Documents</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/uploadtest">
                      <i className="bi bi-circle"></i>
                      <span>Upload Test P.Q</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/uploadexam">
                      <i className="bi bi-circle"></i>
                      <span>Upload Exams P.Q</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link collapsed" href="/viewcourse">
                  <i className="bi bi-grid"></i>
                  <span>Edit Course</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link collapsed"
                  data-bs-target="#tables-nav"
                  data-bs-toggle="collapse"
                  href="#"
                >
                  <i className="bi bi-layout-text-window-reverse"></i>
                  <span>Tables</span>
                  <i className="bi bi-chevron-down ms-auto"></i>
                </Link>
                <ul
                  id="tables-nav"
                  className="nav-content collapse "
                  data-bs-parent="#sidebar-nav"
                >
                  <li>
                    <Link href="/generaltable">
                      <i className="bi bi-circle"></i>
                      <span>General Table</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/datatable">
                      <i className="bi bi-circle"></i>
                      <span>Data Table</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link collapsed"
                  data-bs-target="#components-nav"
                  data-bs-toggle="collapse"
                  href="#"
                >
                  <i className="bi bi-menu-button-wide"> </i>
                  <span>Materials</span>
                  <i className="bi bi-chevron-down ms-auto"></i>
                </Link>
                <ul
                  id="components-nav"
                  className="nav-content collapse "
                  data-bs-parent="#sidebar-nav"
                >
                  <li>
                    <Link href="/level1">
                      <i className="bi bi-circle"></i>
                      <span>Level 1</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/level2">
                      <i className="bi bi-circle"></i>
                      <span>Level 2</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/level3">
                      <i className="bi bi-circle"></i>
                      <span>Level 3</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/level4">
                      <i className="bi bi-circle"></i>
                      <span>Level 4</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
