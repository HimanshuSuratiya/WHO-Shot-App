import React, { useState, useEffect } from "react";
import DeleteForever from '@material-ui/icons/DeleteForever';
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { URL } from "../../url/url";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import axios from 'axios';

const BasicReports = () => {
    const [age, setAge] = React.useState('');
    const [dataName, setDataName] = useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const [status, setStatus] = useState(0)
    const [search, setSearch] = useState("");
    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(dataName.length / usersPerPage);

    const getData = async () => {
        await axios.get(URL + '/getallbooking').then(res => {
            setDataName(res.data.message)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

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
        { status: 0, id: '1', groupName: 'Group-1', noOfShots: '125', noOfRegistration: '5', noOfTransaction: '2', startDate: '02/11/2022', },
        { status: 1, id: '2', groupName: 'Group-2', noOfShots: '254', noOfRegistration: '12', noOfTransaction: '8', startDate: '04/12/2022', },
        { status: 1, id: '3', groupName: 'Group-3', noOfShots: '45', noOfRegistration: '17', noOfTransaction: '4', startDate: '02/11/2022', },
        { status: 0, id: '4', groupName: 'Group-4', noOfShots: '27', noOfRegistration: '3', noOfTransaction: '2', startDate: '02/10/2022', },
        { status: 1, id: '5', groupName: 'Group-5', noOfShots: '256', noOfRegistration: '7', noOfTransaction: '0', startDate: '02/11/2021', },
        { status: 0, id: '6', groupName: 'Group-6', noOfShots: '0', noOfRegistration: '4', noOfTransaction: '7', startDate: '02/11/2022', },
    ]

    return (
        <>
            <div className="container-fluid ">
                <div className="add-location">
                    <div className="booking-wrapper">
                        <div className="row">
                            <div className="py-2 d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="heading-top" >
                                        <h2>Basic Reports</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="table-data-search-box-manage">
                                        <div className="search-bar" >
                                            <input type="text" onChange={(e) => setSearch(e.target.value)} className="searchTerm-input" placeholder="Search" />
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
                        <table class="table table-column-center">
                            <thead>
                                <tr>
                                    <th scope="col">Sr No.</th>
                                    <th scope="col">Group  Name</th>
                                    <th scope="col">No. of Registration</th>
                                    <th scope="col">No. of Shots</th>
                                    <th scope="col">Start Date</th>
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
                                            <td>{Item.groupName}</td>
                                            <td>{Item.noOfRegistration}</td>
                                            <td>{Item.noOfShots}</td>
                                            <td>{Item.startDate}</td>
                                            <td>{Item.endDate}</td>
                                            <td> <DeleteForever style={{ color: "#912c00" }} /> </td>
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
                                {/* {
                                    dataName.filter(
                                        (row) =>
                                            !search.length ||
                                            row.parking_id
                                                .toString()
                                                .toLowerCase()
                                                .includes(search.toString().toLowerCase()),
                                    )
                                        .slice(pagesVisited, pagesVisited + usersPerPage).map((item, i) => (
                                            <tr>
                                                <th scope="row">{i + pagesVisited + 1}</th>
                                                <td>{item.first_name}</td>
                                                <td>{item.parking_name}</td>
                                                <td>{item.location}</td>
                                                <td>{item.start_time}</td>

                                                <td>{item.end_time}</td>
                                                <td>{item.booking_date}</td>
                                                <td>
                                                    <Link className="mange-admins-dlt-btn"><DeleteForever style={{ color: '#FF5C93' }} />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                } */}
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
            <footer className="footer text-center"> 2022 © Admin Panel brought to you by
                <a href="https://https://www.webnmobappssolutions.com">webnmobappssolutions.com</a>
            </footer>
        </>
    )
}

export default BasicReports;