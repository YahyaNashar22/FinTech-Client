import React from "react";
import style from './EditCompany.module.css';

const EditCompany = () => {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h1 className={style.title}>Company Information:</h1>
      </div>
      <form className={style.form} action="" method="GET">
        <div className={style.input}>
          <label htmlFor="nameLabel" className={style.label}>
            Name:
          </label>
          <input type="text" name="Name" id="nameLabel" />
        </div>
        <div className={style.input}>
          <label htmlFor="descriptionLabel" className={style.label}>
            Description:
          </label>
          <input type="text" name="Description" id="descriptionLabel"/>
        </div>
        <div className={style.input}>
          <label htmlFor="capitalLabel" className={style.label}>
            Capital:
          </label>
          <input type="text" name="Capital" id="capitalLabel"/>
        </div>
        <div className={style.input}>
          <label htmlFor="addressLabel" className={style.label}>
            Address:
          </label>
          <input type="text" name="Address" id="addressLabel"/>
        </div>
        <div className={style.input}>
          <label htmlFor="facebookLabel" className={style.label}>
            Facebook:
          </label>
          <input type="text" name="Facebook" id="facebookLabel" />
        </div>
        <div className={style.input}>
          <label htmlFor="instagramLabel" name="Instagram" className={style.label}>
            Instagram:
          </label>
          <input type="text" name="Instagram" id="instagramLabel" />
        </div>
        <div className={style.input}>
          <label htmlFor="tiktokLabel" className={style.label}>
            TikTok:
          </label>
          <input type="text" name="TikTok" id="tiktokLabel" />
        </div>
        <div className={style.input}>
          <label htmlFor="xLabel" className={style.label}>
            X:
          </label>
          <input type="text" name="X" id="xLabel" />
        </div>
        <div className={style.input}>
          <label htmlFor="youtubeLabel" className={style.label}>
            YouTube:
          </label>
          <input type="text" name="YouTube" id="youtubeLabel" />
        </div>
        <div className={style.input}>
          <label htmlFor="linkedInLabel" className={style.label}>
            LinkedIn:
          </label>
          <input type="text" name="LinkedIn" id="linkedInLabel" />
        </div>
        <div className={style.input}>
          <label htmlFor="phoneNumberLabel" className={style.label}>
            Phone:
          </label>
          <input type="text" name="Phone Number" id="phoneNumberLabel"/>
        </div>
        <div className={style.input}>
          <label htmlFor="websiteLabel" className={style.label}>
            Website:
          </label>
          <input type="text" name="Website" id="websiteLabel"/>
        </div>
        <div className={style.input}>
          <label className={style.label}>Logo:</label>
          <label htmlFor="logoUpload" className={style.uploadButton}>Insert Logo</label>
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
        <div className={style.buttons}>
          <button type="reset" className={style.reset}>Reset</button>
          <button type="submit" className={style.submit}>
            Update Info!
          </button>
        </div>
      </form> 
    </main>
  )
};
export default EditCompany;