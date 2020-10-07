import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import PricingPage from "./pricing";
import ContactPage from "./contact";
import DashboardPage from "./dashboard";
import SettingsPage from "./settings";
import PurchasePage from "./purchase";
import AuthPage from "./auth";
import ServicesPage from "./services";
import ProductsPage from "./products";
import ProductView from "../components/staging/components/ProductView";
import SinglePage from "./single";
import GalleryPage from "./gallery";
import { Switch, Route, Router } from "./../util/router.js";
import FirebaseActionPage from "./firebase-action.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";
import { database } from "firebase";


// data
import { navData, footerData } from '../util/cms';

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="primary"
            variant="dark"
            expand="md"
            logo={navData.logo}
            logoTitle={navData.logoTitle}
            navLabel1={navData.navLabel1}
            navLabel2={navData.navLabel2}
            navLabel3={navData.navLabel3}
            navLabel4={navData.navLabel4}
            navLabel5={navData.navLabel5}
            navLabel6={navData.navLabel6}
            navLabel7={navData.navLabel7}
            navLabel8={navData.navLabel8}
            navLabel9={navData.navLabel9}
            navLabel10={navData.navLabel10}
            navLabel11={navData.navLabel11}
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/pricing" component={PricingPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/settings/:section" component={SettingsPage} />

            <Route exact path="/purchase/:plan" component={PurchasePage} />

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route exact path="/services" component={ServicesPage} />

            <Route exact path="/products" component={ProductsPage} />

            <Route exact path="/single" component={SinglePage} />

            <Route exact path="/gallery" component={GalleryPage} />

            <Route path="/Product/:productId" component={ProductView} />

            <Route
              exact
              path="/firebase-action"
              component={FirebaseActionPage}
            />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bg="white"
            textColor="dark"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            description={footerData.description}
            copyright={footerData.copyright}
            logo={footerData.logo}
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
