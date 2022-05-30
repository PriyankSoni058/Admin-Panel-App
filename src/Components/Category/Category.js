import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import EditCategory from './EditCategory';


const Category = () => {
    const [category, setCategory] = useState({ categoryname: "" });
    const { categoryname } = category;
    const [data, setData] = useState();
    const [show, setShow] = useState();
    const [editShow, setEditShow] = useState();
    const [error, setError] = useState("");

    // Add Category

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = async () => {
        const responce = await axios.get("http://localhost:5000/api/category/find");
        setData(responce.data);
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setCategory({ ...category, [name]: value });
        console.log("Category", category);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!categoryname) {
            setError("Please Insert Details!!!");
        } else {
            await axios.post("http://localhost:5000/api/category", category);
            setError("");
            window.location.reload(true);
        }
    };

    // Single Delete

    const handleDelete = (id) => {

        if (window.confirm("Are you sure want to delete?")) {
            axios.delete(`http://localhost:5000/api/category/delete/${id}`);
            console.log("User Deleted");
            window.location.reload(true);
        }
    };

    return (
        <>
            <div class="page-content">
                <div class="container-fluid">


                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 class="mb-sm-0">All Category</h4>
                                <a
                                    data-toggle="modal"
                                    data-target="#addModal"
                                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                                >
                                    Add Category
                                </a>
                            </div>

                        </div>
                    </div>


                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">

                                    <h4 class="card-title">Category Datatable</h4>
                                    <hr />

                                    <div class="row"><div class="col-sm-12 col-md-6">
                                        <div class="dataTables_length" id="datatable_length"><label>Show <select name="datatable_length" aria-controls="datatable" class="custom-select custom-select-sm form-control form-control-sm form-select form-select-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label>
                                        </div>
                                    </div>

                                        <div class="col-sm-12 col-md-6">
                                            <div id="datatable_filter" class="dataTables_filter" >
                                                <label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="datatable" /></label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="table-responsive">
                                        <table class="table table-editable table-nowrap align-middle table-edits">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th> Project Category</th>
                                                    <th>Action </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {data?.length > 0 &&
                          data?.map((cate) => (
                            <tr>
                              <td>{cate.id}</td>
                              <td>{cate.categoryname}</td>
                              <td>
                                <button
                                  className={
                                    "btn-primary btn-user d-none d-sm-inline-block btn-sm btn-primary shadow-sm"
                                  }
                                >
                                  <EditCategory id={cate.id} />
                                </button>
                                <button
                                  onClick={() => handleDelete(cate.id)}
                                  className={"btn-danger btn-user"}
                                  style={{ marginLeft: 10 }}
                                >
                                  delete
                                </button>
                              </td>
                            </tr>
                          ))} */}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="row"><div class="col-sm-12 col-md-5">
                                        <div class="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing 1 to 10 of 55 entries</div>
                                    </div>
                                        <div class="col-sm-12 col-md-7" >
                                            <div class="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                                                <ul class="pagination pagination-rounded" style={{ justifyContent: "flex-end" }}>
                                                    <li class="paginate_button page-item previous disabled" id="datatable_previous"><a href="#" aria-controls="datatable" data-dt-idx="0" tabindex="0" class="page-link"><i class="mdi mdi-chevron-left"></i></a></li>
                                                    <li class="paginate_button page-item active"><a href="#" aria-controls="datatable" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="datatable" data-dt-idx="2" tabindex="0" class="page-link">2</a></li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="datatable" data-dt-idx="3" tabindex="0" class="page-link">3</a></li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="datatable" data-dt-idx="4" tabindex="0" class="page-link">4</a></li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="datatable" data-dt-idx="5" tabindex="0" class="page-link">5</a></li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="datatable" data-dt-idx="6" tabindex="0" class="page-link">6</a></li>
                                                    <li class="paginate_button page-item next" id="datatable_next"><a href="#" aria-controls="datatable" data-dt-idx="7" tabindex="0" class="page-link"><i class="mdi mdi-chevron-right"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {/ <!-- Add Modal--> /} */}
            <div
                className="modal fade"
                id="addModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Add Category
                            </h5>
                            <button
                                className="close"
                                type="button"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control form-control-user"
                                aria-describedby="emailHelp"
                                onChange={handleInputChange}
                                placeholder="Enter Category"
                                name="categoryname"
                                value={categoryname}
                            />
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={handleSubmit}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};



export default Category
