import {React, useState} from "react";
import style from './EditCompany.module.css';
import { Link } from "react-router-dom";

const EditCompany = () => {

  const [formErrors, setFormErrors] = useState({});

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return name === null || name.trim() === '' || nameRegex.test(name);
  };

  const validateCapital = (capital) => {
    const capitalRegex = /^\d+$/;
    return capital === null || capital.trim() === '' || capitalRegex.test(capital);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email === null || email.trim() === '' || emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d+$/;
    return phoneNumber === null || phoneNumber.trim() === '' || phoneRegex.test(phoneNumber);
  };

  const validateWebsite = (website) => {
    const websiteRegex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    return website === null || website.trim() === '' || websiteRegex.test(website);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    const Name = formData.get('Name');
    const Capital = formData.get('Capital');
    const Email = formData.get('Email');
    const PhoneNumber = formData.get('PhoneNumber');
    const Website = formData.get('Website');

    const errors = {};

    if (!validateName(Name)) {
      errors.Name = 'Invalid name';
    }

    if (!validateCapital(Capital)) {
      errors.Capital = 'Invalid capital';
    }

    if (!validateEmail(Email)) {
      errors.Email = 'Invalid email';
    }
  
    if (!validatePhoneNumber(PhoneNumber)) {
      errors.PhoneNumber = 'Invalid phone number';
    }

    if (!validateWebsite(Website)) {
      errors.Website = 'Invalid website URL';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // API call to update the company information
    }
  };

  return (
    <main className={style.main}>
      <div className={style.header}>
        <h1 className={style.title}>Edit Company Information</h1>
        <Link to="/settings">
          <button className={style.editInfoButton}>Cancel</button>
        </Link>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.input}>
          <label htmlFor="nameLabel" className={style.label}>
            Name:
          </label>
          <input type="text" name="Name" id="nameLabel" />
        </div>
        {formErrors.Name && <span className={style.error}>{formErrors.Name}</span>}
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
        {formErrors.Capital && <span className={style.error}>{formErrors.Capital}</span>}
        <div className={style.input}>
          <label htmlFor="emailLabel" className={style.label}>
            Email:
          </label>
          <input type="email" name="Email" id="emailLabel"/>
        </div>
        {formErrors.Email && <span className={style.error}>{formErrors.Email}</span>}
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
          <input type="tel" name="PhoneNumber" id="phoneNumberLabel"/>
        </div>
        {formErrors.PhoneNumber && <span className={style.error}>{formErrors.PhoneNumber}</span>}
        <div className={style.input}>
          <label htmlFor="websiteLabel" className={style.label}>
            Website:
          </label>
          <input type="text" name="Website" id="websiteLabel"/>
        </div>
        {formErrors.Website && <span className={style.error}>{formErrors.Website}</span>}
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
          />
        </div>
        <div className={style.buttons}>
          <button type="reset" className={style.reset}>Reset</button>
          <button type="submit" className={style.submit}>
            Update Info
          </button>
        </div>
      </form> 
    </main>
  )
};
export default EditCompany;