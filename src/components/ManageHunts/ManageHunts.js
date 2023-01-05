import React, { useEffect, useState } from "react";
import DeleteForever from "@material-ui/icons/DeleteForever";
import { Link } from "react-router-dom";
import BootstrapDialog from "../BootstrapDialog/BootstrapDialog";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import "reactjs-popup/dist/index.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { useParams } from "react-router-dom";
import { URL } from "../../url/url";
import InfoIcon from '@mui/icons-material/Info';
import { toast } from "react-toastify";
import EditIcon from '@mui/icons-material/Edit';

const ManageHunts = ({ label }) => {
  const [dataName, setDataName] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    await axios
      .get(URL + "/alllocationlist")
      .then((res) => {
        setDataName(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Abc = (name) => {
    console.log(name);
  };

  useEffect(() => {
    getData();
  }, []);

  const [activeStatus, setActiveStatus] = useState(true);
  const [status, setStatus] = useState(0)
  const [pageNumber, setPageNumber] = useState(0);
  const id = useParams();
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(dataName.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleEdit = (e, id) => {
    console.log(id);
  };

  //location Delete
  const locationDeleteStatus = (th) => {
    axios
      .post(URL + "/locationDelete", { id: th })
      .then((res) => {
        getData()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleremove = (e, th) => {
    const text = "Are you sure want to delete"
    if (window.confirm(text) == true) {
      toast.success("Data deleted successfully");
      locationDeleteStatus(th);
      return true
    } else {
      toast.warn("You canceled!");
      return false
    }
  };
  //location Delete

  //Handle Status
  const handleStatus = async (status, usersID) => {
    var getStatus = "";
    if (status === 0) {
      getStatus = 1;
    } else {
      getStatus = 0;
    }
    const request = {
      id: usersID,
      status: getStatus,
    };

    await axios
      .post(URL + "/updateLocationStatus", request)
      .then((res) => {
        getData()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //Handle Status

  const data = [
    { status: 1, id: '1', name: 'Himanshu Suratiya', totalParticipants: '180', createDate: '02/11/2022', endDate: '04/11/2022' },
    { status: 0, id: '2', name: 'Vishal Singh', totalParticipants: '152', createDate: '04/12/2022', endDate: '14/12/2022' },
    { status: 1, id: '3', name: 'Sourabh Shukla', totalParticipants: '48', createDate: '02/11/2022', endDate: '10/11/2022' },
    { status: 0, id: '4', name: 'Shivam Suratiya', totalParticipants: '129', createDate: '02/10/2022', endDate: '04/10/2022' },
    { status: 1, id: '5', name: 'Pintu Kashyap', totalParticipants: '256', createDate: '02/11/2021', endDate: '02/11/2022' },
    { status: 0, id: '6', name: 'Virender Kumar', totalParticipants: '12', createDate: '02/11/2022', endDate: '04/11/2022' },
  ]

  return (
    <>
      <div className="container-fluid ">
        <div className="add-location">
          <div className="booking-wrapper">
            <div className="row">
              <div className="py-2 d-flex justify-content-between align-items-center">
                <div>
                  <div className="heading-top">
                    <h2>Manage Hunts</h2>
                  </div>
                </div>
                <div>
                  <div className="table-data-search-box-manage">
                    <div className="search-bar">
                      <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        className="searchTerm-input"
                        placeholder="Search"
                      />
                      <button type="submit" className="searchButtons">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="manage-admins-main-area">
            <table class="table" style={{ textAlign: 'center' }}>
              <thead>
                <tr>
                  <th scope="col">Sr No.</th>
                  <th scope="col">Hunt Name</th>
                  <th scope="col">Total Participants</th>
                  <th scope="col">Created Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Action</th>
                  <th scope="col">Active/Inactive</th>
                </tr>
              </thead>
              <tbody>
                {data.map((Item) => {
                  return (
                    <tr>
                      <td>{Item.id}</td>
                      <td>{Item.name}</td>
                      <td>{Item.totalParticipants}</td>
                      <td>{Item.createDate}</td>
                      <td>{Item.endDate}</td>
                      <td>
                        <DeleteForever style={{ color: "#912c00" }} />
                        <EditIcon style={{ color: "#912c00" }} />
                        <Link to={`/app/hunt-details`} className="mange-admins-dlt-btn" >
                          <InfoIcon style={{ color: "#912c00" }} />
                        </Link>
                      </td>
                      <td>
                        <BootstrapSwitchButton
                          onlabel="Active"
                          checked={Item.status == 0 ? true : false}
                          width={100}
                          offlabel="Inactive"
                          onstyle="success"
                          onChange={(checked) => {
                            handleStatus(Item.status, Item.id);
                            setStatus(checked);
                          }}
                        />
                      </td>
                    </tr>
                  )
                })}
                {/* {dataName
                  .filter(
                    (row) =>
                      !search.length ||
                      row.location
                        .toString()
                        .toLowerCase()
                        .includes(search.toString().toLowerCase()),
                  )
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  .map((item, i) => (
                    <tr>
                      <th className="manage-location-count" scope="row">{i + pagesVisited + 1}</th>
                      <td>{item.location}</td>
                      <td className="action-btn-inline">
                        <Link>
                          <EditLocation sendId={item.id} />
                        </Link>
                        <Link
                          to={`/app/managelocation`}
                          datalist={item.id}
                          onClick={(e) => handleremove(e, item.id)}
                          className="mange-admins-dlt-btn"
                        >
                          <DeleteForever
                            onClick={() => {
                              Abc("Manish");
                            }}
                            style={{ color: "#FF5C93" }}
                          />
                        </Link>
                      </td>
                      <td> */}
                {/* <input type="checkbox" onClick={()=>handleStatus(item.status,item.id)} data-toggle="toggle" data-on="Enabled" data-off="Disabled"/> */}
                {/*                       
                        <BootstrapSwitchButton
                          onlabel="Active"
                          checked={item.status == 0 ? true : false}
                          width={100}
                          offlabel="Inactive"
                          onstyle="success"
                          onChange={(checked) => {
                            handleStatus(item.status,item.id)
                            setStatus(checked)
                          }}
                        />
                      </td>
                    </tr>
                  ))} */}
              </tbody>
            </table>
            <div style={{ display: dataName.length > 5 ? "block" : "none" }}>
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer text-center">
        2022 ©Admin Panel brought to you by
        <a href="https://https://www.webnmobappssolutions.com">
          webnmobappssolutions.com
        </a>
      </footer>
    </>
  );
};

export default ManageHunts;