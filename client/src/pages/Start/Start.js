import React, { useState } from "react";
import style from './Start.module.css';
import Typography from '@mui/material/Typography';
import Rocket from '../../assets/images/Frame.png'
import userIcon from '../../assets/icons/uiw_user.svg';
import logoIcon from '../../assets/icons/lets-icons_img-load-box-fill.svg'
import mailIcon from '../../assets/icons/fi_mail.svg';
import locationIcon from '../../assets/icons/mdi_address-marker.svg'
import textDescriptionIcon from '../../assets/icons/fluent_text-description-32-regular.svg';
import phoneIcon from '../../assets/icons/ic_baseline-phone.svg';
import shareIcon from '../../assets/icons/ion_share-social.svg';
import webIcon from '../../assets/icons/mdi_web.svg';
import moneyIcon from '../../assets/icons/nimbus_money.svg';
import FacebookIcon from '../../assets/icons/ic_baseline-facebook.svg';
import InstagramIcon from '../../assets/icons/mdi_instagram.svg';
import TikTokIcon from '../../assets/icons/ic_baseline-tiktok.svg';
import XIcon from '../../assets/icons/akar-icons_x-fill.svg';
import YouTubeIcon from '../../assets/icons/mdi_youtube.svg';
import LinkedInIcon from '../../assets/icons/mdi_linkedin.svg';

const Start = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleSocialMediaClick = () => {
    setShowPopup(!showPopup);
  };

  const renderSocialMediaPopup = () => {
    return (
      <div className={style.popup}>
        <div className={style.input}>
          <img src={FacebookIcon} alt="Facebook Icon" className={style.icon} />
          <input type="text" placeholder="Facebook" />
        </div>
        <div className={style.input}>
          <img src={InstagramIcon} alt="Instagram Icon" className={style.icon} />
          <input type="text" placeholder="Instagram" />
        </div>
        <div className={style.input}>
          <img src={TikTokIcon} alt="TikTok Icon" className={style.icon} />
          <input type="text" placeholder="TikTok" />
        </div>
        <div className={style.input}>
          <img src={XIcon} alt="X Icon" className={style.icon} />
          <input type="text" placeholder="X" />
        </div>
        <div className={style.input}>
          <img src={YouTubeIcon} alt="YouTube Icon" className={style.icon} />
          <input type="text" placeholder="YouTube" />
        </div>
        <div className={style.input}>
          <img src={LinkedInIcon} alt="LinkedIn Icon" className={style.icon} />
          <input type="text" placeholder="LinkedIn" />
        </div>
      </div>
    );
  };

  return (
    <main className={style.main}>
      <div className={style.background}>
        <img src={Rocket} className={style.image} alt="Rocket Image" />
      </div>
      <div className={style.content}>
        <Typography className={style.welcome} variant="h2" gutterBottom>
        Welcome!
        </Typography>
        <Typography className={style.paragraph} gutterBottom>
        Begin your financial journey. Customize your details to get started.
        </Typography>
        <form className={style.form} action="" method="GET">
          <div className={style.input}>
            <img src={userIcon} alt="Name Icon" className={style.icon} />
            <input type="text" placeholder="Name" name="Name" required />
          </div>
          <div className={style.input}>
            <img src={logoIcon} alt="Logo Icon" className={style.icon} />
            <input type="text" placeholder="Logo" readOnly={true} />
            <label for="logoUpload">
              <button className={style.uploadButton}>Insert Logo</button>
            </label>
            <input
              type="file"
              id="logoUpload"
              style={{ display: "none" }}
              onChange={(event) => {
                // Handle image upload using multer
                const file = event.target.files[0];
                // Implement multer logic to upload the file
              }}
              required
            />
          </div>
          <div className={style.input}>
            <img src={mailIcon} alt="Email Icon" className={style.icon} />
            <input type="text" placeholder="Email" name="Email" required/>
          </div>
          <div className={style.input}>
            <img src={textDescriptionIcon} alt="Description Icon" className={style.icon} />
            <input type="text" placeholder="Description" name="Description" required/>
          </div>
          <div className={style.input}>
            <img src={moneyIcon} alt="Capital Icon" className={style.icon} />
            <input type="text" placeholder="Capital" name="Capital"/>
          </div>
          <div className={style.input}>
            <img src={locationIcon} alt="Address Icon" className={style.icon} />
            <input type="text" placeholder="Address" name="Address"/>
          </div>
          <div className={style.input}>
            <img src={shareIcon} alt="Social Media Links Icon" className={style.icon}/>
            <input type="text" className={style.socialMediainput} placeholder="Social Media Links" readOnly={true} onClick={handleSocialMediaClick}/>
            {showPopup && renderSocialMediaPopup()}
          </div>
          <div className={style.input}>
            <img src={phoneIcon} alt="Phone Number Icon" className={style.icon} />
            <input type="text" placeholder="Phone Number" name="Phone Number" required/>
          </div>
          <div className={style.input}>
            <img src={webIcon} alt="Website Icon" className={style.icon} />
            <input type="text" placeholder="Website" name="Website"/>
          </div>
          <button type="submit" className={style.submit}>Setup Account!</button>
        </form>
      </div>
    </main>
  )
};
export default Start;