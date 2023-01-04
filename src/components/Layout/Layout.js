import React from "react";
import { Route, Switch, Redirect, withRouter, } from "react-router-dom";
import classnames from "classnames";
import { Box } from '@material-ui/core'
import useStyles from "./styles";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import AllHunters from "../AllHunters/AllHunters";
import Statistics from "../Statistics/Statistics";
import NotificationDetails from "../Admin/notificatonDetails";
import EditParking from "../Admin/Manage Admin/EditParking";
import Maps from "../../pages/maps";
import Charts from "../../pages/charts";
import AddAdmin from "../Admin/AddAdmin";
import Settings from "../Settings/Settings";
import CreateTermsandservices from "../Terms and Services/CreateTermsandservices";
import CreatePrivacypolicy from "../Privacy Policy/CreatePrivacypolicy";
import PrivacyPolicy from "../Privacy Policy/PrivacyPolicy";
import { useLayoutState } from "../../context/LayoutContext";
import CustomersDetails from '../Admin/CustomersDetails'
import ContactDetails from "../Contactus/ContactDetails";
import AllNotification from "../Admin/Notifications/AllNotification";
import BasicReports from "../BasicReports/BasicReports";
import Payments from "../Admin/Payments";
import ManageHunts from "../ManageHunts/ManageHunts";
import CustomersParkingDetails from "../Admin/CustomersParkingDetails";
import AboutPage from "../About/AboutPage";
import DetailsOfGroup from "../DetailsofGroup/DetailsOfGroup";
import ManageGroups from "../ManageGroup/ManageGroups";

function Layout(props) {
  var classes = useStyles();
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/all-hunters/" component={AllHunters} />
            <Route path="/app/statistics" component={Statistics} />
            <Route path='/app/editparking/:id' component={EditParking} />
            <Route path="/app/customersdetails/:id" component={CustomersDetails} />
            <Route path="/app/customersparkingdetails" component={CustomersParkingDetails} />
            <Route path="/app/add-admin" component={AddAdmin} />
            <Route exact path="/app/ui" render={() => <Redirect to="/app/ui/icons" />} />
            <Route path="/app/ui/maps" component={Maps} />
            <Route path="/app/ui/charts" component={Charts} />
            <Route path="/app/manage-hunts/" component={ManageHunts} />
            <Route path="/app/details-of-group/" component={DetailsOfGroup} />
            <Route path="/app/manage-groups/" component={ManageGroups} />
            <Route path="/app/basic-reports/" component={BasicReports} />
            <Route path="/app/payment/" component={Payments} />
            <Route path="/app/settings/" component={Settings} />
            <Route path="/app/notifications" component={AllNotification} />
            {/* <Route path="/app/contact-us" component={Contactus} /> */}
            <Route path="/app/about-us" component={AboutPage} />
            <Route path="/app/create-contact-details/" component={ContactDetails} />
            <Route path="/app/create-terms-and-services" component={CreateTermsandservices} />
            <Route path="/app/privacy-policy" component={PrivacyPolicy} />
            <Route path="/app/create-privacy-policy" component={CreatePrivacypolicy} />
            <Route path="/app/notificationDetails/:id" component={NotificationDetails} />
          </Switch>
          <Box
            mt={0}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
          </Box>
        </div>
      </>
    </div >
  );
}

export default withRouter(Layout);