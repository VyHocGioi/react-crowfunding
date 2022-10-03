// import DashboardPage from "pages/DashboardPage";

import LayoutDashboard from "layout/LayoutDashboard";
import LayoutPayment from "layout/LayoutPayment";
import CheckoutPage from "pages/CheckoutPage";
import ShippingPage from "pages/ShippingPage";
// import CampaignView from "modules/campaign/CampaignView";
import React, { lazy, Suspense } from "react";
import Modal from "react-modal";
import { Routes, Route } from "react-router-dom";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const StartCampaign = lazy(() => import("./pages/StartCampaign"));
const CampaignView = lazy(() => import("modules/campaign/CampaignView"));

const customStyles = {
  content: {},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route
            path="/"
            element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/home"
            element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaign></StartCampaign>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}></Route>
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}></Route>
        </Route>

        <Route
          path="/sign-up"
          element={<SignUpPage></SignUpPage>}></Route>
        <Route
          path="/sign-in"
          element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
