import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar shadow navbar-expand navbar-light bg-light py-2 fixed-top">
        <div className=" container">
          <Link href="/" className="logo navbar-brand">
            <span className="d-none d-md-block">Course Allocation</span>
          </Link>
          <ul className="navbar-nav mt-2 mt-lg-0  fw-bold">
            <li className="nav-item  about me-2 ">
              <Link
                className="nav-link btn-login p-1 "
                href="/about"
               
              >
               About
                
              </Link>
            </li>
            <li className="nav-item me-2 ">
              <Link
                className="nav-link  p-1 btn-login"
                href="/contact"
               
              >
              Contact Us
               
              </Link>
              
            </li>
          
          </ul>
          <ul className="navbar-nav mt-2 mt-lg-0  fw-bold">
            <li className="nav-item me-2 ">
              <Link
                className="nav-link active p-1 btn-login"
                href="#"
                aria-current="page"
              >
                Login
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link dashboard3 btn-signup rounded-2 p-1 px-2"
                href="#"
              >
                Sign-up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
