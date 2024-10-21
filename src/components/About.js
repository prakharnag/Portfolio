// About.js
import React from 'react';

const About = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="about-section">
      <h2>About Me</h2>
      <p>This is the about section where you can talk about yourself or your project.</p>
    </section>
  );
});

export default About;
