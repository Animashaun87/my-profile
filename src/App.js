import React, { Suspense, lazy } from "react";
import Frontend from "./layouts/frontend";
import { Router } from "@reach/router";
import "antd/dist/antd.css";
import "./utils/styles/global.css";
import Loader from "./utils/loader";
import ScrollToTop from "./components/ScrollToTop";
import "aos/dist/aos.css";

const retry = (fn, retriesLeft = 5, interval = 1000) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
};

const homePromise = import("./pages/home");
const Home = lazy(() => retry(() => homePromise));

const aboutPromise = import("./pages/about");
const About = lazy(() => retry(() => aboutPromise));

const PortfoliosPromise = import("./pages/portfolios");
const Portfolios = lazy(() => retry(() => PortfoliosPromise));

const contactPromise = import("./pages/contact");
const Contact = lazy(() => retry(() => contactPromise));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <ScrollToTop path="/">
            <Frontend path="/">
              <Home path="/" />
              <About path="about" />
              <Portfolios path="portfolio" />
              <Contact path="contact" />
            </Frontend>
          </ScrollToTop>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
