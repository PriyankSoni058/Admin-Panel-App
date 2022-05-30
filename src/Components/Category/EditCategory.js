import axios from "axios";
import React, { useEffect, useState } from "react";


const EditCategory = (id) => {
  const [user, setUser] = useState({ categoryname: "" });
  const { categoryname } = user;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log("Clicked");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(
      `http://localhost:5000/api/category/find/${id.id}`
    );
    setUser(result.data);
    console.log(result.data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/category/update/${id.id}`, user);
    window.location.reload(false);
  };

  return (
    <>
      <a
        onClick={handleShow}
        data-toggle="modal"
        data-target="#editModal"
        className="btn-primary shadow-sm"
      >
        Edit
      </a>
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        show={show}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Category
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
                onChange={handleChange}
                placeholder="Enter Category"
                name="categoryname"
                value={categoryname || user.categoryname}
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
