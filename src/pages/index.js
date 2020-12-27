import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import "./index.css";

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <h1 className="hero-text">
        Shaking Up Your Site and Improving Your Web Presence
      </h1>
      <button>Learn More</button>
      <button>Contact Us</button>
    </div>
    <div className="why">
      <h1>Why Shake Up Your Site?</h1>
    </div>
    <div className="how">
      <h1>How We Do It</h1>
    </div>
    <div className="what">
      <h1>What To Expect</h1>
    </div>
  </Layout>
);

export default IndexPage;
