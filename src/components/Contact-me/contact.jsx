import React from "react";
import "./contact.css";

import Header from "./Header.jsx";
import Social from "./Social.jsx";

const Contact = () => {
  const SocialMedia = [
    {
      icon: "fa-brands fa-twitter",
      media: "Twitter",
      names: "@sarah_codes",
      followers: "80K followers",
      color: "#1DA1F2",
    },
    {
      icon: "fa-brands fa-facebook",
      media: "Facebook",
      names: "Sarah Johnson",
      followers: "45K followers",
      color: "#1877fb",
    },
    {
      icon: "fa-brands fa-linkedin",
      media: "LinkedIn",
      names: "Sarah J. Tech",
      followers: "30K connections",
      color: "#0077b6",
    },
    {
      icon: "fa-brands fa-youtube",
      media: "YouTube",
      names: "Sarah Vlogs",
      followers: "210K subscribers",
      color: "#ff0000",
    },
    {
      icon: "fa-brands fa-tiktok",
      media: "TikTok",
      names: "@sarah_moves",
      followers: "500K followers",
      color: "#000000",
    },
    {
      icon: "fa-brands fa-github",
      media: "GitHub",
      names: "@sarah_moves",
      followers: "500K followers",
      color: "#000000",
    },
    {
      icon: "fa-brands fa-dribbble",
      media: "Dribbble",
      names: "@sarah_moves",
      followers: "500K followers",
      color: "#EA4C89",
    },
    {
      icon: "fa-brands fa-square-behance",
      media: "Behance",
      names: "@sarah_moves",
      followers: "500K followers",
      color: "#1769FF",
    },
    {
      icon: "fa-brands fa-pinterest",
      media: "Pinterest",
      names: "@sarah_moves",
      followers: "500K followers",
      color: "#E60023",
    },
  ];

  return (
    <div className="main-container">
      <Header />
      <Social data={SocialMedia} />
    </div>
  );
};

export default Contact;
