import React from "react";
import "./about.scss";

const About: React.FC = () => {
  return (
    <div className="page">
      <h1>About Page</h1>
      <section className="main-content">
        <h2>Our Story</h2>
        <p>
          Founded in [Year], our company began with a simple mission: to [Your
          Mission Statement]. What started as a small team with a big idea has
          grown into a community of passionate individuals dedicated to [Your
          Core Value, e.g., 'innovation,' 'customer satisfaction,' 'sustainable
          solutions'].
        </p>
        <p>
          We believe that [Your Core Belief, e.g., 'technology should be
          accessible to everyone,' 'great design can change the world,' 'our
          products can make daily life easier']. Our journey has been defined by
          a commitment to excellence and a desire to make a meaningful impact.
        </p>
      </section>

      <section className="main-content">
        <h2>Our Mission</h2>
        <p>
          At [Your Company Name], our mission is to [Elaborate on Your Mission].
          We strive to [Action 1] by [Method 1], and to [Action 2] by [Method
          2]. We are committed to creating products/services that not only meet
          our customers' needs but also exceed their expectations.
        </p>
      </section>

      <section className="main-content">
        <h2>Meet the Team</h2>
        <div className="team-section">
          <div className="team-member">
            <img src="https://placehold.co/150" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>Co-Founder & CEO</p>
            <p>
              Jane is a visionary leader with over 15 years of experience in the
              industry. She is passionate about driving innovation and fostering
              a collaborative culture.
            </p>
          </div>
          <div className="team-member">
            <img src="https://placehold.co/150" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Head of Marketing</p>
            <p>
              John is an expert marketer known for his creative strategies and
              deep understanding of consumer behavior. He loves bringing new
              ideas to life.
            </p>
          </div>
          <div className="team-member">
            <img src="https://placehold.co/150" alt="Team Member 3" />
            <h3>Emily Chen</h3>
            <p>Lead Developer</p>
            <p>
              Emily is a talented developer who builds clean, efficient, and
              scalable solutions. She enjoys tackling complex problems and
              writing elegant code.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
