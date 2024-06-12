// import { CiDumbbell } from "react-icons/ci";
// import { BsHeartPulse } from "react-icons/bs";
// import { BiTimeFive } from "react-icons/bi";
// import { AiOutlineArrowRight } from "react-icons/ai";
import { FaCrown, FaStar, FaMedal, FaTools } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import { FaPhone } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";

import img1 from "../../assets/img-80.jpg";
import img2 from "../../assets/img-90.jpg";
import img3 from "../../assets/img-100.jpg";
import img4 from "../../assets/img-110.jpg";
import img5 from "../../assets/img-120.jpg";
import img6 from "../../assets/california.jpg";
import img7 from "../../assets/fitline.jpg";
import img8 from "../../assets/Legends.jpg";
import img30 from "../../assets/Body Revolution Gym.jpg";
import img31 from "../../assets/Iron Gym.jpg";
import img32 from "../../assets/PowerZone Gym.jpg";
import person_1 from "../../assets/person_1.jpg";
import person_2 from "../../assets/person_2.jpg";
import person_3 from "../../assets/person_3.jpg";
import person_4 from "../../assets/person_4.jpg";
import person_5 from "../../assets/person-5.jpg";
import person_6 from "../../assets/person-6.jpg";

// Commented out import statements
// import img9 from "../assets/img-20.jpg";
// import img10 from "../assets/img-21.jpg";

// Uncomment and use if necessary
// export const navLinks = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Schedule", href: "#schedule" },
//   { label: "Gallery", href: "#gallery" },
//   { label: "Blog", href: "#blog" },
//   { label: "Contact", href: "#contact" },
// ];

export const services = [
  {
    icon: <AiOutlineSafety />,
    label: "Sécurité Renforcée ",
    desc: "Mesures de sécurité robustes pour protéger les données sensibles des clients contre les menaces en ligne, assurant la confidentialité et la sécurité",
    btnDec: "DISCOVER MORE ABOUT US",
    // btnIcon: <AiOutlineArrowRight />,
  },
  {
    icon: <FaTools />,
    label: "Technologie de Développement de Pointe ",
    desc: "Utilisation des dernières technologies pour des sites web à la pointe de l'innovation, offrant les toutes dernières fonctionnalités",
    btnDec: "DISCOVER MORE ABOUT US",
    // btnIcon: <AiOutlineArrowRight />,
  },
  {
    icon: <FaMedal />, // Changez l'icône pour la qualité supérieure
    label: "Qualité Supérieure",
    desc: "Sites web esthétiquement attrayants et fonctionnellement efficaces, aidant les clients à se démarquer.",
    btnDec: "DISCOVER MORE ABOUT US",
    // btnIcon: <AiOutlineArrowRight />,
  },
];

export const client = [
  {
    id: 1,
    nom: "Our Mission",
    desc: '"At [FitHub], we are committed to providing a unique platform that enables gym owners to easily create and manage their custom websites. Our mission is to simplify gym management while offering attractive and functional design options tailored to all needs and budgets."',
    img: img1,
    // clientName: "Butler",
  },
  {
    id: 2,
    nom: "Who We Are",
    desc: "[FitHub] is an innovative company founded in [year of founding], specializing in creating websites for gyms. We offer our clients customized solutions to effectively promote their facilities and attract new members.",
    img: img2,
    // clientName: "Chiris Harris",
  },
  {
    id: 3,
    nom: "What We Offer",
    desc: "Silver Theme: An elegant and functional design at an affordable price, perfect for gyms just starting out or looking for a simple yet effective online presence. Gold Theme: The perfect balance between style and functionality, offering advanced options for gyms looking to stand out with a more sophisticated site. Premium Theme: The ultimate in design and functionality, ideal for high-end gyms that want to offer an exceptional user experience. ",
    img: img3,
    // clientName: "Martin",
  },
  {
    id: 4,
    nom: "Simplified Management",
    desc: "Every website created with [Your Site Name] comes with an intuitive and powerful dashboard. This dashboard allows gym owners to easily manage their content, subscriptions, members, and much more. Regardless of the chosen theme, our platform ensures simplified and efficient management.",
    img: img4,
    // clientName: "Thomos",
  },
  {
    id: 5,
    nom: "Our Team",
    desc: '"Our team is composed of professionals passionate about fitness and technology. We combine our expertise to provide top-quality solutions that meet the specific needs of gyms"',
    img: img5,
    // clientName: "Dravid",
  },
  {
    id: 6,
    nom: "Why Choose Us?",
    desc: '"Customization: Choose from three distinct themes to create a website that perfectly reflects your gym\'s image. Ease of Use: Our user-friendly interface and intuitive dashboard make managing your website simple and enjoyable. Dedicated Support: Our support team is always ready to assist you, ensuring your site runs smoothly and meets your expectations."',
    img: img5,
  },
  {
    id: 7,
    nom: "Join Us",
    desc: "We are determined to help gyms thrive online. Join us today and discover how [Your Site Name] can transform the way you manage and present your gym.\n\nFor any questions or more information, feel free to contact us at example@example.com.\n\nAdapt this text to best reflect your company's values and unique services. Add specific elements that distinguish your platform from others and highlight the benefits for your clients.",
    img: img5,
  },
];

export const themes = [
  {
    type: "Silver",
    price: "39.0",
    features: [
      "Programs",
      "Unlimited equipment",
      "Personal trainer",
      "About salle",
      "Month to month",
    ],
    icon: <FaMedal />,
  },
  {
    type: "Gold",
    price: "99.0",
    features: ["classes", "Products", "Panier", "Plans", "Events"],
    icon: <FaStar />,
  },
  {
    type: "Premium",
    price: "59.0",
    features: [
      "Free riding",
      "Unlimited equipment",
      "Personal trainer",
      "Weight losing classes",
      "Month to month",
    ],
    icon: <FaCrown />,
  },
];

export const oursalles = [
  {
    img: img6,
    role: "Silver Theme",
    name: "Fitline",
  },
  {
    img: img7,
    role: "Premium Theme",
    name: "California",
  },
  {
    img: img8,
    role: "Gold Theme",
    name: "Legends",
  },
  {
    img: img30,
    role: "Gold Theme",
    name: "Legends",
  },
  {
    img: img31,
    role: "Gold Theme",
    name: "Legends",
  },
  {
    img: img32,
    role: "Gold Theme",
    name: "Legends",
  },
];
export const footer = [
  {
    title: "Location",
    icon: <FaMapMarkerAlt />,
    address: "1525 Awesome Lane, Los Angeles, CA",
    footerLinks: [],
  },
  {
    title: "Subscriptions",
    icon: <FaPhone />,
    footerLinks: [{ link: "+1 (603)535-4592" }, { link: "+1 (603)535-4556" }],
  },
  {
    title: "E-mail",
    icon: <FaEnvelope />,
    footerLinks: [{ link: "Contact@xgym.com" }, { link: "www.xgym.com" }],
  },
  {
    title: "Social Media",
    footerLinks: [
      {
        icon: <FaFacebook />,
        href: "https://www.facebook.com",
        ariaLabel: "Facebook",
      },
      {
        icon: <FaTwitter />,
        href: "https://www.twitter.com",
        ariaLabel: "Twitter",
      },
      {
        icon: <FaInstagram />,
        href: "https://www.instagram.com",
        ariaLabel: "Instagram",
      },
      {
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com",
        ariaLabel: "LinkedIn",
      },
    ],
  },
];

export const contact = [
  {
    title: "Location",
    icon: faMapMarkerAlt,
    info: "198 West 21th Street, Suite 721 New York NY 10016",
  },
  {
    title: "Phone",
    icon: faPhone,
    info: "+ 1235 2355 98",
    link: "tel://1234567920",
  },
  {
    title: "Email",
    icon: faEnvelope,
    info: "info@yoursite.com",
    link: "mailto:info@yoursite.com",
  },
  {
    title: "Website",
    icon: faGlobe,
    info: "yoursite.com",
    link: "http://yoursite.com",
  },
];

export const testimonials = [
  {
    image: person_1,
    text: "I love the simplicity of the dashboard for managing my site. It really helped me save time and energy.The offered themes are truly professional and fit perfectly with the image of my gym.",
    name: "Racky Henderson",
    position: "Father",
  },
  {
    image: person_2,
    text: "The reinforced security gave me peace of mind regarding the protection of my clients' data.Thanks to the advanced features, I was able to provide an exceptional user experience on my website.",
    name: "Henry Dee",
    position: "Businesswoman",
  },
  {
    image: person_3,
    text: "The customization of the themes allowed me to create a website that perfectly matches the visual identity of my gym.The image gallery helped me present my facilities attractively, attracting new members.",
    name: "Mark Huff",
    position: "Businesswoman",
  },
  {
    image: person_4,
    text: "The intuitive interface made managing my website a breeze, even for someone like me with minimal technical knowledge.The customer support team was extremely helpful and responsive whenever I needed assistance.",
    name: "Rodel Golez",
    position: "Businesswoman",
  },
  {
    image: person_5,
    text: "The Silver Theme offered great value for money, giving my gym a professional online presence without breaking the bank.The inclusion of free riding and weight losing classes in the Gold Theme attracted a lot of new members to my gym.",
    name: "Ken Bosh",
    position: "Businesswoman",
  },
  {
    image: person_6,
    text: "I appreciated the simplicity and elegance of the design options, making my website stand out in a crowded market.The ability to easily add and manage content on my site helped me keep my members engaged and informed.",
    name: "Ken Bosh",
    position: "Businesswoman",
  },
];
