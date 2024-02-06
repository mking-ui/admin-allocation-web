"use client";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const L100Table = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const columns = [
    {
      name: "COURSE CODE",
      selector: (row) => row.code,
      sortable: true,
      id: "header",
    },
    {
      name: "COURSE TITLE",
      selector: (row) => row.title,
      sortable: false,
      id: "header",
    },
    {
      name: "NAME",
      selector: (row) => row.name,
      sortable: false,
      id: "header",
    },
    {
      name: "POSITION",
      selector: (row) => row.position,
      sortable: true,
      id: "header",
    },
    {
      name: "FIELD",
      selector: (row) => row.field,
      sortable: true,
      id: "header",
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      sortable: true,
      id: "header",
    },
    {
      name: "PHONE",
      selector: (row) => row.phone,
      sortable: true,
      id: "header",
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
      <div className="row dashboard3">
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
                    <DataTable
                      columns={columns}
                      data={record}
                      fixedHeader
                      pagination
                      expandOnRowClicked
                    ></DataTable>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default L100Table;
