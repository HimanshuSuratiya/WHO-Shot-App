import React from "react";
import "reactjs-popup/dist/index.css";
import ReactPaginate from "react-paginate";
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DeleteForever from "@material-ui/icons/DeleteForever";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const HuntDetail = () => {
    const data = [
        { status: 1, id: '1', totalNoOfShots: '25', name: 'Himanshu Suratiya', totalParticipants: '180', noOfKilled: '525', noOfMissed: '25', noOfWoomed: '125', othher: '15' },
        { status: 0, id: '2', totalNoOfShots: '38', name: 'Vishal Singh', totalParticipants: '152', noOfKilled: '8563', noOfMissed: '1225', noOfWoomed: '205', othher: '135' },
        { status: 1, id: '3', totalNoOfShots: '124', name: 'Sourabh Shukla', totalParticipants: '48', noOfKilled: '4521', noOfMissed: '525', noOfWoomed: '451', othher: '17' },
        { status: 0, id: '4', totalNoOfShots: '317', name: 'Shivam Suratiya', totalParticipants: '129', noOfKilled: '1552', noOfMissed: '456', noOfWoomed: '951', othher: '28' },
        { status: 1, id: '5', totalNoOfShots: '526', name: 'Pintu Kashyap', totalParticipants: '256', noOfKilled: '0', noOfMissed: '0', noOfWoomed: '0', othher: '0' },
        { status: 0, id: '6', totalNoOfShots: '852', name: 'Virender Kumar', totalParticipants: '12', noOfKilled: '159', noOfMissed: '2', noOfWoomed: '0', othher: '91' },
    ]

    return (
        <div className="container-fluid ">
            <div className="add-location">
                <div className="booking-wrapper">
                    <div className="row">
                        <div className="mb-5">
                            <div className="py-2">
                                <div className="heading-top">
                                    <h2>Hunt  Detail</h2>
                                </div>
                            </div>
                            <div className="row mx-0">
                                <div className="col-lg-4 px-0">
                                    <div className="d-flex">
                                        <div>
                                            <Stack direction="row" spacing={2}>
                                                <StyledBadge
                                                    overlap="circular"
                                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                    variant="dot"
                                                >
                                                    <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                                                </StyledBadge>
                                            </Stack>
                                        </div>
                                        <div className="d-flex flex-column justify-content-center px-2 mx-2">
                                            <div className="hunt-detail-information"> <span className="hunt-detail-label">Hunt Name :</span> Himanshu Suratiya</div>
                                            <div className="hunt-detail-information"> <span className="hunt-detail-label">Create Date :</span> 02/11/2022</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 px-0">
                                    <div className="h-100 d-flex justify-content-center align-items-center">
                                        <div className="w-50 d-flex flex-column align-items-center">
                                            <div>
                                                <div className="hunt-detail-information"> <span className="hunt-detail-label">No of Killed :</span> 270</div>
                                                <div className="hunt-detail-information"> <span className="hunt-detail-label">No of Missed :</span> 12</div>
                                            </div>
                                        </div>
                                        <div className="w-50 d-flex flex-column align-items-center">
                                            <div>
                                                <div className="hunt-detail-information"> <span className="hunt-detail-label">No of Woomed :</span> 17</div>
                                                <div className="hunt-detail-information"> <span className="hunt-detail-label">No of other:</span> 3</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 px-0">
                                    <div>
                                        <div className="d-flex justify-content-end align-items-center">
                                            <span className="hunt-detail-label">Live :</span>
                                            <Switch checked={true} color="success" />
                                        </div>
                                        <div className="d-flex justify-content-end pe-2 align-items-center">
                                            <span className="hunt-detail-label">Total Participants : </span>
                                            <div className="hunt-detail-information">2555</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-2 d-flex justify-content-between align-items-center">
                            <div>
                                <div className="heading-top">
                                    <h2>List of Hunters involved in Hunt</h2>
                                </div>
                            </div>
                            <div>
                                <div className="table-data-search-box-manage">
                                    <div className="search-bar">
                                        <input
                                            type="text"
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
                                <th scope="col">Name</th>
                                <th scope="col">Total No of Shots</th>
                                <th scope="col">Total Participants</th>
                                <th scope="col">No of Killed</th>
                                <th scope="col">No of Missed</th>
                                <th scope="col">No of Woomed</th>
                                <th scope="col">Other</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((Item) => {
                                return (
                                    <tr>
                                        <td>{Item.id}</td>
                                        <td>{Item.name}</td>
                                        <td>{Item.totalNoOfShots}</td>
                                        <td>{Item.totalParticipants}</td>
                                        <td>{Item.noOfKilled}</td>
                                        <td>{Item.noOfMissed}</td>
                                        <td>{Item.noOfWoomed}</td>
                                        <td>{Item.othher}</td>
                                        <td><DeleteForever style={{ color: "#912c00" }} /></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div>
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
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
    )
}

export default HuntDetail;