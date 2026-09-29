import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const fullText = "Hands That Care";

  // Typing effect
  useEffect(() => {
    let timer;

    if (!deleting && text.length < fullText.length) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 120);
    } else if (!deleting && text.length === fullText.length) {
      timer = setTimeout(() => {
        setDeleting(true);
      }, 1800);
    } else if (deleting && text.length > 0) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length - 1));
      }, 70);
    } else if (deleting && text.length === 0) {
      timer = setTimeout(() => {
        setDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [text, deleting]);

  // Number animation
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const counter = entry.target;
          const target = Number(counter.getAttribute("data-target"));
          let current = 0;

          const duration = 1300;
          const increment = target / (duration / 20);

          const updateCounter = () => {
            current += increment;

            if (current < target) {
              counter.innerText = Math.floor(current) + "+";
              setTimeout(updateCounter, 20);
            } else {
              counter.innerText = target + "+";
            }
          };

          updateCounter();
          observer.unobserve(counter);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-logo">
          <img src="logo.png" alt="Logo" />
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
          <a href="#contact">Contact</a>

          <button className="login-button">
            <img src="login-icon.png" alt="Login" />
            Login
          </button>
        </nav>
      </header>


      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="hero-content">

          <div className="hero-text-box">
            <h1 className="hero-title">
              {text}
              <span className="cursor">|</span>
            </h1>

            <p className="hero-description">
              NURTURING EXCELLENCE, INSPIRING TOMORROW
            </p>
          </div>

          <div className="hero-small-box">
            <button>
              Donate Us ❤️
            </button>
          </div>

        </div>

        <div className="hero-images">

          <div className="fst-image">
            <img src="fst-image.png" alt="Children" />
          </div>

          <div className="snd-image">
            <img src="snd-image.png" alt="Community" />
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="about" id="about">

        <div className="about-image">
          <img src="aboutimage.png" alt="About us" />
        </div>

        <div className="about-content">

          <div className="about-heading">
            <p>
              A Social Welfare society of Haldia Institute of Technology,
              marching forward with the thirst of providing free primary
              education to needy children in underprivileged areas.
            </p>
          </div>

          <div className="about-cards-box">

            <div className="about-title">
              <h2>Our Impact</h2>
            </div>

            <div className="about-cards">

              <div className="about-card">

                <div className="card-image">
                  👥
                </div>

                <div
                  className="tm-num counter"
                  data-target="105"
                >
                  0+
                </div>

                <div className="num-des">
                  Total Members
                </div>

              </div>


              <div className="about-card">

                <div className="card-image">
                  🎓
                </div>

                <div
                  className="tm-num counter"
                  data-target="35"
                >
                  0+
                </div>

                <div className="num-des">
                  Total Students
                </div>

              </div>


              <div className="about-card">

                <div className="card-image">
                  🏠
                </div>

                <div
                  className="tm-num counter"
                  data-target="165"
                >
                  0+
                </div>

                <div className="num-des">
                  Services Provided
                </div>

              </div>

            </div>
          </div>

        </div>

      </section>


      {/* ================= EVENTS ================= */}
      <section className="events">

        <div className="events-heading">
          <h2>Recent Events</h2>
        </div>

        <div className="events-cards">

          {[1, 2, 3, 4, 5].map((num) => (
            <div className="event-card" key={num}>

              <div className="event-image">
                <img
                  src={`event${num}.png`}
                  alt={`Event ${num}`}
                />
              </div>

              <div className="event-content">

                <span className="event-title">
                  Recent Event
                </span>

                <div className="event-description">
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </div>

                <span className="event-post">
                  Read More →
                </span>

              </div>

            </div>
          ))}

        </div>

      </section>
      
      {/* ================= OUR WORK ================= */}
      <section className="our-work" id="work">

        <div className="work-heading">
          <span>WHAT WE DO</span>
          <h2>OUR WORK</h2>
          <p>
            Creating meaningful change through education,
            compassion and community service.
          </p>
        </div>


        {/* WORK 1 */}
        <div className="work-row">

          <div className="work-image">
            <img
              src="prov-edu.png"
              alt="Providing Education"
            />
          </div>

          <div className="work-text">

            <span>01</span>

            <h3>Providing Education</h3>

            <p>
              We provide free primary education to children
              who have limited access to learning opportunities.
              Our goal is to create a strong educational
              foundation and help children build a brighter
              future.
            </p>

          </div>

        </div>


        {/* WORK 2 */}
        <div className="work-row reverse">

          <div className="work-image">
            <img
              src="resc-ani.png"
              alt="Rescuing Animals"
            />
          </div>

          <div className="work-text">

            <span>02</span>

            <h3>Rescuing Animals</h3>

            <p>
              We work towards helping injured and abandoned
              animals by providing care, support and assistance.
              Every life deserves compassion and protection.
            </p>

          </div>

        </div>


        {/* WORK 3 */}
        <div className="work-row">

          <div className="work-image">
            <img
              src="awer-camp.png"
              alt="Awareness Campaigns"
            />
          </div>

          <div className="work-text">

            <span>03</span>

            <h3>Awareness Campaigns</h3>

            <p>
              We encourage communities to understand the
              importance of education and social responsibility.
              Through awareness and teamwork, we create
              opportunities for positive change.
            </p>

          </div>

        </div>

      </section>

      {/* ================= IMPACT ================= */}
      <section className="impact">

        <div className="impact-video">

          <video
            src="rescue-animal.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

        </div>

        <div className="impact-content-box">

          <div className="impact-small-text">
            OUR IMPACT
          </div>

          <h2 className="impact-heading">
            Making a Difference
          </h2>

          <p className="impact-description">
            Every small action creates a meaningful change.
            Together we work towards education, care and
            a better future for every life around us.
          </p>

          <div className="impact-buttons">

            <button className="impact-button">
              Learn More
            </button>

            <button className="impact-button">
              Get Involved
            </button>

          </div>

        </div>

      </section>



      {/* ================= FOOTER ================= */}
      <footer className="footer" id="contact">

        <div className="footer-feedback">

          <span className="footer-label">
            GET IN TOUCH
          </span>

          <h2>
            We'd love to
            <br />
            hear from you.
          </h2>

          <p>
            Have a suggestion, feedback, or simply want to
            connect with us? Send us a message.
          </p>

          <form className="feedback-form">

            <div className="form-row">

              <input
                type="text"
                placeholder="Your name"
              />

              <input
                type="email"
                placeholder="Your email"
              />

            </div>

            <textarea
              placeholder="Write your message..."
              rows="4"
            />

            <button type="submit">
              SEND MESSAGE →
            </button>

          </form>

        </div>


        <div className="footer-information">

          <div className="footer-column">

            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#work">Our Work</a>
            <a href="#">Events</a>
            <a href="#">Impact</a>

          </div>


          <div className="footer-column">

            <h3>Contact Us</h3>

            <p>Haldia, West Bengal.</p>

            <a href="mailto:hello@eklavyahithaldia.org">
              eklavyahit@haldia.org
            </a>

            <a href="tel:+910000000000">
              +91 00000 00000
            </a>

          </div>


          <div className="footer-column">

            <h3>Follow Us</h3>

            <div className="social-icons">

              <a href="#" className="social-icon">
                f
              </a>

              <a href="#" className="social-icon">
                𝕏
              </a>

              <a href="#" className="social-icon">
                in
              </a>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Eklavya – Hands That Care.
            All rights reserved.
          </p>

          <p>
            Made with care.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;