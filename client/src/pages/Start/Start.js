import React, { useState } from "react";
import style from "./Start.module.css";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Rocket from "../../assets/images/Frame.png";
import userIcon from "../../assets/icons/uiw_user.svg";
import logoIcon from "../../assets/icons/lets-icons_img-load-box-fill.svg";
import mailIcon from "../../assets/icons/fi_mail.svg";
import locationIcon from "../../assets/icons/mdi_address-marker.svg";
import textDescriptionIcon from "../../assets/icons/fluent_text-description-32-regular.svg";
import phoneIcon from "../../assets/icons/ic_baseline-phone.svg";
import shareIcon from "../../assets/icons/ion_share-social.svg";
import webIcon from "../../assets/icons/mdi_web.svg";
import moneyIcon from "../../assets/icons/nimbus_money.svg";
import FacebookIcon from "../../assets/icons/ic_baseline-facebook.svg";
import InstagramIcon from "../../assets/icons/mdi_instagram.svg";
import TikTokIcon from "../../assets/icons/ic_baseline-tiktok.svg";
import XIcon from "../../assets/icons/akar-icons_x-fill.svg";
import YouTubeIcon from "../../assets/icons/mdi_youtube.svg";
import LinkedInIcon from "../../assets/icons/mdi_linkedin.svg";
import { Link } from "react-router-dom";
// import { convertLength } from "@mui/material/styles/cssUtils";

const Start = () => {
  // Logo
  const [logoFile, setLogoFile] = useState(null);

  // Sending Data
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Description: "",
    Capital: "",
    Address: "",
    Social_Media: [
      {
        platform: "Facebook",
        link: "",
      },
      {
        platform: "Instagram",
        link: "",
      },
      {
        platform: "TikTok",
        link: "",
      },
      {
        platform: "X",
        link: "",
      },
      {
        platform: "YoutTube",
        link: "",
      },
      {
        platform: "LinkedIn",
        link: "",
      },
    ],
    Phone_Number: "",
    Website: "",
  });

  const handleLogoChange = (e) => {
    setLogoFile(e.target.files[0]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("Social_Media")) {
      const updatedSocialMedia = formData.Social_Media.map((item) => {
        if (`Social_Media_${item.platform}` === name) {
          return { ...item, link: value };
        }
        return item;
      });
      setFormData({
        ...formData,
        Social_Media: updatedSocialMedia,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("Name", formData.Name);
    formDataToSend.append("Email", formData.Email);
    formDataToSend.append("Description", formData.Description);
    formDataToSend.append("Capital", formData.Capital);
    formDataToSend.append("Address", formData.Address);
    formDataToSend.append("Phone_Number", formData.Phone_Number);
    formDataToSend.append("Website", formData.Website);
    formData.Social_Media.forEach((socialMedia, index) => {
      formDataToSend.append(
        `Social_Media[${index}][platform]`,
        socialMedia.platform
      );
      formDataToSend.append(`Social_Media[${index}][link]`, socialMedia.link);
    });

    if (logoFile) {
      formDataToSend.append("Logo", logoFile);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/company/create",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleSocialMediaClick = () => {
    setShowPopup(!showPopup);
  };
  console.log("HELLO: ", formData);

  const renderSocialMediaPopup = () => {
    const socialMediaIcons = [
      FacebookIcon,
      InstagramIcon,
      TikTokIcon,
      XIcon,
      YouTubeIcon,
      LinkedInIcon,
    ];

    const handleSocialMediaInputChange = (event, index) => {
      const { value } = event.target;
      const updatedSocialMedia = formData.Social_Media.map((item, idx) =>
        idx === index ? { ...item, link: value } : item
      );

      setFormData({
        ...formData,
        Social_Media: updatedSocialMedia,
      });
    };
    return (
      <div className={style.popup}>
        {formData.Social_Media.map((platformData, index) => (
          <div className={style.input} key={index}>
            <img
              src={socialMediaIcons[index]}
              alt={`${platformData.platform} Icon`}
              className={style.icon}
            />
            <input
              type="text"
              placeholder={platformData.platform}
              name={`Social_Media_${platformData.platform}`}
              value={platformData.link}
              onChange={(e) => handleSocialMediaInputChange(e, index)}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className={style.main}>
      <div className={style.background}>
        <img src={Rocket} className={style.image} alt="Rocket icon" />
      </div>
      <div className={style.content}>
        <Typography className={style.welcome} variant="h2" gutterBottom>
          Welcome!
        </Typography>
        <Typography className={style.paragraph} gutterBottom>
          Begin your financial journey. Customize your details to get started.
        </Typography>
        <form
          className={style.form}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className={style.input}>
            <img src={userIcon} alt="Name Icon" className={style.icon} />
            <input
              type="text"
              placeholder="Name"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={style.input}>
            <img src={logoIcon} alt="Logo Icon" className={style.icon} />
            <input type="text" placeholder="Logo" readOnly={true} />
            <img src={logoIcon} alt="Logo Icon" className={style.icon} />
            <input
              type="file"
              id="logoUpload"
              name="Logo"
              value={formData.Logo}
              className={style.uploadButtonInput}
              onChange={handleLogoChange}
            />
          </div>
          <div className={style.input}>
            <img src={mailIcon} alt="Email Icon" className={style.icon} />
            <input
              type="text"
              placeholder="Email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={style.input}>
            <img
              src={textDescriptionIcon}
              alt="Description Icon"
              className={style.icon}
            />
            <input
              type="text"
              placeholder="Description"
              name="Description"
              value={formData.Description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={style.input}>
            <img src={moneyIcon} alt="Capital Icon" className={style.icon} />
            <input
              type="text"
              placeholder="Capital"
              name="Capital"
              value={formData.Capital}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.input}>
            <img src={locationIcon} alt="Address Icon" className={style.icon} />
            <input
              type="text"
              placeholder="Address"
              name="Address"
              value={formData.Address}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.input}>
            <img
              src={shareIcon}
              alt="Social Media Links Icon"
              className={style.icon}
            />
            <input
              type="text"
              name="Social_Media"
              className={style.socialMediainput}
              placeholder="Social Media Links"
              onClick={handleSocialMediaClick}
            />
            {showPopup && renderSocialMediaPopup()}
          </div>
          <div className={style.input}>
            <img
              src={phoneIcon}
              alt="Phone Number Icon"
              className={style.icon}
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="Phone_Number"
              value={formData.Phone_Number}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={style.input}>
            <img src={webIcon} alt="Website Icon" className={style.icon} />
            <input
              type="text"
              placeholder="Website"
              name="Website"
              value={formData.Website}
              onChange={handleInputChange}
            />
          </div>
          <Link to="/signup">
            <button
              type="submit"
              onClick={handleSubmit}
              className={style.submit}
            >
              Setup Account!
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
};
export default Start;
