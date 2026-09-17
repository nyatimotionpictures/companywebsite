import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./6-Views/1Home/HomePage";
import './App.css'
import { StyledEngineProvider } from "@mui/material/styles";
import SEO from './2-Components/SEOHelmet/SEO.jsx';
import AboutPage from "./6-Views/2AboutNyati/AboutPage.jsx";
import ServicesPage from "./6-Views/3Services/ServicesPage.jsx";
import ProdDetailPage from "./6-Views/4ProdDetails/ProdDetailPage.jsx";
import ContactUsPage from "./6-Views/5ContactUs/ContactUsPage.jsx";
import DonatePage from "./6-Views/6Donate/DonatePage.jsx";
import FilmPage from "./6-Views/7Films/FilmPage.jsx";
import FilmDetailPage from "./6-Views/8FilmDetail/FilmDetailPage.jsx";
import Team from "./6-Views/9Team/1Team.jsx";

import ScrollToTop from "./ScrollToTop.jsx"; // Import ScrollToTop
import MainArchivePage from "./6-Views/11InternetArchive/MainArchivePage.jsx";
import CollectionListPage from "./6-Views/12CollectionsArchive/CollectionListPage.jsx";
import IndivCollectionPage from "./6-Views/13IndividualCollection/IndivCollectionPage.jsx";
import MobilePayValidation from "./6-Views/10PaymentValidations/MobilePayValidation.jsx";
import PaymentResponse from "./6-Views/10PaymentValidations/PaymentResponse.jsx";
import NyatiFlixSoon from "./6-Views/14ComingSoon/NyatiFlixSoon.jsx";
import DeletePolicy from "./6-Views/15Policies/DeletePolicy.jsx";
import PrivacyPolicy from "./6-Views/15Policies/PrivacyPolicy.jsx";
import TermsOfService from "./6-Views/15Policies/TermsOfService.jsx";
import ErrorPage from "./6-Views/0ErrorPage/ErrorPage.jsx";
import ProcessingPay from "./6-Views/16Payments/ProcessingPay.jsx";
import PaymentValidation from "./6-Views/16Payments/PaymentValidation.jsx";
import DonationPay from "./6-Views/17Donations/DonationPay.jsx";
import DonationValidation from "./6-Views/17Donations/DonationValidation.jsx";
import PesaCancel from "./6-Views/18PesaPalApp/PesaCancel.jsx";
import PesaSuccess from "./6-Views/18PesaPalApp/PesaSuccess.jsx";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <ScrollToTop> {/* Wrap Routes with ScrollToTop */}
          <Routes >
            <Route path="/" element={<HomePage />}  />
            <Route path="/about" element={<AboutPage />}  />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/conquerordie" element={<ProdDetailPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/film" element={<FilmPage />} />
            <Route path="/film/:filmid" element={<FilmDetailPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/internetarchive" element={<MainArchivePage />} /> 
            <Route path="/internetarchive/collections" element={<CollectionListPage />} />
            <Route path="/internetarchive/collections/:cname" element={<IndivCollectionPage />} />
            {/** PAY */}
            <Route path="/pay-response" element={<PaymentResponse />} />
            <Route path="/mpay-validate" element={<MobilePayValidation />} />
            <Route path="/comingsoon" element={<NyatiFlixSoon />} />
            <Route path="/policies/deletepolicy" element={<DeletePolicy />} />
            <Route path="/policies/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/policies/termsofservice" element={<TermsOfService />} />

            {/** mm payments */}
            <Route
              path="/film/process/:userId/:resourceId"
              element={<ProcessingPay />}
            />
            <Route
              path="/film/validate/:orderTrackingId"
              element={<PaymentValidation />}
            />

            <Route
              path="/donate/process/:userId/:filmId"
              element={<DonationPay />}
            />
            <Route
              path="/donate/validate/:orderTrackingId"
              element={<DonationValidation />}
            />

{/** Add success page for pesapal */}
<Route path="/donate/pesapay/success" element={<PesaSuccess />} />
            {/** Add cancel page for pesapal */}
            <Route path="/donate/pesapay/cancel" element={<PesaCancel />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;