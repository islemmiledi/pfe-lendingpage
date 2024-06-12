import React from "react";
import { footer } from "./HomePage/data";

const Footer = ({ nav }) => {
  const date = new Date().getFullYear();

  return (
    <>
      <style>
        {`
          .footer {
            background-color: #2d3748; /* bg-gray-800 */
            color: white;
          }
          .footer-container {
            max-width: 112rem; /* max-w-7xl */
            margin: 0 auto;
            padding: 3rem 1rem; /* py-12 px-4 */
          }
          .footer-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 2rem; /* gap-8 */
          }
          @media (min-width: 768px) {
            .footer-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          .footer-title {
            font-size: 1.125rem; /* text-lg */
            font-weight: 600; /* font-semibold */
            display: flex;
            align-items: center;
            margin-bottom: 1rem; /* Ajout de l'espace en dessous du titre */
          }
          .footer-icon {
            margin-right: 0.5rem; /* mr-2 */
            color: #e53e3e; /* text-red-600 */
          }
          .footer-address {
            font-size: 0.875rem; /* text-sm */
          }
          .footer-links {
            margin-top: 1rem; /* mt-4 */
            list-style: none;
            padding: 0;
          }
          .footer-link {
            margin-top: 0.5rem; /* mt-2 */
          }
          .footer-link a {
            color: inherit;
            text-decoration: none;
            transition: color 0.2s;
          }
          .footer-link a:hover {
            color: #a0aec0; /* hover:text-gray-300 */
          }
          .footer-bottom {
            border-top: 1px solid #4a5568; /* border-gray-700 */
            max-width: 112rem; /* max-w-7xl */
            margin: 0 auto;
            padding: 1rem; /* py-4 px-4 */
            text-align: center;
          }
          .footer-social-media {
            display: flex;
            justify-content: flex-start;
            gap: 1rem; /* Ajustement de l'espacement */
            margin-top: 1rem; /* mt-4 */
          }
          .footer-social-media a {
            color: white;
            font-size: 1.5rem; /* font-size: 24px */
            text-decoration: none;
          }
          .footer-social-media a:hover {
            color: #0073e6;
          }
          .footer-location {
            padding-left: 2rem; /* Ajuster la valeur pour déplacer à droite */
          }
        `}
      </style>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {footer.map((val) => (
              <div
                key={val.title}
                className={val.title === "Location" ? "footer-location" : ""}
              >
                <h2 className="footer-title">
                  {val.icon && <span className="footer-icon">{val.icon}</span>}
                  {val.title}
                </h2>
                {val.address && <p className="footer-address">{val.address}</p>}
                <ul className="footer-links">
                  {val.title === "Social Media" ? (
                    <div className="footer-social-media">
                      {val.footerLinks.map((li, index) => (
                        <li key={index} className="footer-link">
                          <a
                            href={li.href}
                            aria-label={li.ariaLabel}
                            className="footer-social-icon"
                          >
                            {li.icon}
                          </a>
                        </li>
                      ))}
                    </div>
                  ) : (
                    val.footerLinks.map((li, index) => (
                      <li key={index} className="footer-link">
                        <a href={li.link} className="hover:text-gray-300">
                          {li.link}
                        </a>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-sm">
            &copy; {date} All rights reserved | This template is made by{" "}
            <a
              href="https://vijayaragavendran.netlify.app/"
              className="text-red-600 hover:underline"
            >
              Vijayaragavendran
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
