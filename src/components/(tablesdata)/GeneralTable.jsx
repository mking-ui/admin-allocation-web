"use client";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const GeneralTable = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    import("react-data-table-component-extensions/dist/export.js");
  }, []);
  const columns = [
    {
      name: "SN",
      selector: (row, i) => i + 1,
    },
    {
      name: "COURSE CODE",
      selector: (row, i) => row.code,
      sortable: true,
    },
    {
      name: "COURSE TITLE",
      selector: (row, i) => row.title,
      sortable: false,
    },
    {
      name: "NAME",
      selector: (row, i) => row.name,
      sortable: false,
    },
    {
      name: "POSITION",
      selector: (row, i) => row.position,
      sortable: true,
    },
    {
      name: "FIELD",
      selector: (row, i) => row.field,
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row, i) => row.email,
      sortable: true,
    },
    {
      name: "PHONE",
      selector: (row, i) => row.phone,
      sortable: true,
    },
  ];
  const [records, setRecords] = useState([]);

  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch("/api/level1")
      .then((Response) => Response.json())
      .then((Response) => {
        setRecords(Response);
        setRecord(Response);
      });
  }, []);

  const handleFilter = (event) => {
    const newData = records.filter((row) => {
      return (
        row.code.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setRecord(newData);
  };

  return (

    <>
    <Navbar/>
    <div className="container">
    <Sidebar/>
      <main id="main" className="main">
        <div className="container">
          <div className="pagetitle">
            <h1>General Table</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item">Tables</li>
                <li className="breadcrumb-item active">General Table</li>
              </ol>
            </nav>
          </div>
          <section className="section" id="datatable">
            <div className="row">
              <form className="search-form d-flex align-items-center col-lg-5  my-3">
                <input
                  type="text"
                  onChange={handleFilter}
                  name="query"
                  placeholder="Search"
                  title="Enter search keyword"
                />
                <button type="submit" title="Search">
                  <i className="bi bi-search"></i>
                </button>
              </form>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="card info-card sales-card">
                      <div className="card-body">
                        {isClient && (
                          <DataTableExtensions columns={columns} data={record}>
                            <DataTable
                              fixedHeader
                              pagination
                              expandOnRowClicked                         
                            />
                          </DataTableExtensions>
                        )}
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

export default GeneralTable;
