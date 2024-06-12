import React from "react";

export default function Events() {
  return (
    <div id="events" className="events-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">
              Join our upcoming events to stay fit and healthy
            </p>
          </div>
        </div>
        <div className="row mb-4 align-items-center">
          <div className="col-md-6">
            <div className="event-card-img">
              <img src="https://via.placeholder.com/300" alt="Event 1" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="event-card-body">
              <h5 className="event-card-title">Private & Group Lessons</h5>
              <p className="event-card-date">Date: June 1, 2024</p>
              <p className="event-card-time">Time: 10:00 AM - 12:00 PM</p>
              <p className="event-card-location">Location: Main Gym Hall</p>
              <p className="event-card-description">
                We value teamwork and mutual assistance above everything else.
                Our coaches are dedicated to helping you achieve your fitness
                goals. Whether in individual or group sessions, you'll always
                find support. Group training is limited to just 10 people to
                ensure personalized attention.
              </p>
              <a href="#" className="event-card-button">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="row mb-4 align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <div className="event-card-img">
              <img src="https://via.placeholder.com/300" alt="Event 2" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="event-card-body">
              <h5 className="event-card-title">Who We Are</h5>
              <p className="event-card-date">Date: June 15, 2024</p>
              <p className="event-card-time">Time: 2:00 PM - 4:00 PM</p>
              <p className="event-card-location">Location: Conference Room B</p>
              <p className="event-card-description">
                Fitline isn't just a gym; we're a spirited family pushing limits
                daily. Our enhanced program, featuring weightlifting, cardio,
                and bodyweight exercises, banishes boredom. Our motivated
                coaches support you every step of your CrossFit journey, helping
                you achieve previously unimaginable results!
              </p>
              <a href="#" className="event-card-button">
                Join Us
              </a>
            </div>
          </div>
        </div>
        <div className="row mb-4 align-items-center">
          <div className="col-md-6">
            <div className="event-card-img">
              <img src="https://via.placeholder.com/300" alt="Event 3" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="event-card-body">
              <h5 className="event-card-title">Yoga for Beginners</h5>
              <p className="event-card-date">Date: July 1, 2024</p>
              <p className="event-card-time">Time: 5:00 PM - 6:30 PM</p>
              <p className="event-card-location">Location: Yoga Studio</p>
              <p className="event-card-description">
                Join us for a beginner-friendly yoga session designed to
                introduce you to the basics of yoga. Our experienced instructors
                will guide you through each pose and help you develop your
                practice in a supportive and relaxing environment.
              </p>
              <a href="#" className="event-card-button">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
