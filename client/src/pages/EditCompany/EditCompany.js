import { React, useState, useEffect } from "react";
import style from "./EditCompany.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { fontSize } from "@mui/system";

const EditCompany = () => {
  const [logoFile, setLogoFile] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return name === null || name.trim() === "" || nameRegex.test(name);
  };

  const validateCapital = (capital) => {
    const capitalRegex = /^\d+$/;
    return (
      capital === null || capitalRegex.test(capital)
    );
  };

  // const validateEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return email === null || email.trim() === "" || emailRegex.test(email);
  // };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d+$/;
    return (
      phoneNumber === null ||
      phoneRegex.test(phoneNumber)
    );
  };

  const validateWebsite = (website) => {
    const websiteRegex =
      /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    return (
      website === null || website.trim() === "" || websiteRegex.test(website)
    );
  };

  // Fetching
  const [formData, setFormData] = useState({
    Name: "",
    Logo: null,
    Email: "",
    Description: "",
    Capital: null,
    Address: "",
    Social_Media: [
      { platform: "Facebook", link: "" },
      { platform: "Instagram", link: "" },
      { platform: "TikTok", link: "" },
      { platform: "X", link: "" },
      { platform: "YouTube", link: "" },
      { platform: "LinkedIn", link: "" },
    ],
    Phone_Number: null,
    Website: "",
  });

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/company/info");
        setFormData(response.data.data);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCompanyData();
  }, []);

  // End Fetch Data

  // Start Handle Input Change
  const handleInputChange = (event, platformIndex) => {
    const { name, value } = event.target;

    if (platformIndex != null) {
      const updatedSocialMedia = [...formData.Social_Media];
      updatedSocialMedia[platformIndex].link = value;

      setFormData((prevState) => ({
        ...prevState,
        Social_Media: updatedSocialMedia,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  // End Handle Input Change

  const handleLogoChange = (event) => {
    setLogoFile(event.target.files[0]);
    setFormData({
      ...formData,
      Logo: event.target.files[0],  
    });
  };

  // Start Handle Input Change
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('Name', formData.Name);
    formDataToSend.append('Email', formData.Email);
    formDataToSend.append('Description', formData.Description);
    formDataToSend.append('Capital', formData.Capital);
    formDataToSend.append('Address', formData.Address);
    formDataToSend.append('Phone_Number', formData.Phone_Number);
    formDataToSend.append('Website', formData.Website);
    formData.Social_Media.forEach((socialMedia, index) => {
      formDataToSend.append(`Social_Media[${index}][platform]`, socialMedia.platform);
      formDataToSend.append(`Social_Media[${index}][link]`, socialMedia.link);
    });
  
    if (logoFile) {
      formDataToSend.append('Logo', logoFile);
    }


    const errors = {};

    if (!validateName(formData.Name)) {
      errors.Name = "Invalid name";
    }

    if (!validateCapital(formData.Capital)) {
      errors.Capital = "Invalid capital";
    }

    // if (!validateEmail(Email)) {
    //   errors.Email = "Invalid email";
    // }

    if (!validatePhoneNumber(formData.Phone_Number)) {
      errors.Phone_Number = "Invalid phone number";
    }

    if (!validateWebsite(formData.Website)) {
      errors.Website = "Invalid website URL";
    }

    setFormErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      try {
        await axios.put("http://localhost:5000/company/update", formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Company data updated successfully!");
      } catch (error) {
        console.error("Error updating company data:", error);
      }
    }
  };
  // End Handle Input Change

  return (
    <main className={style.main}>
      <div className={style.header}>
        <h1 className={style.title}>Edit Company Information</h1>
        <Link to="/settings">
          <button className={style.editInfoButton}>Cancel</button>
        </Link>
      </div>
      <form className={style.form} onSubmit={handleSubmit} encType="multipart/form-data">
        <div className={style.input}>
          <label htmlFor="nameLabel" className={style.label}>
            Name:
          </label>
          <input
            type="text"
            name="Name"
            id="nameLabel"
            value={formData.Name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        {formErrors.Name && (
          <span className={style.error}>{formErrors.Name}</span>
        )}
        <div className={style.input}>
          <label htmlFor="descriptionLabel" className={style.label}>
            Description:
          </label>
          <input
            type="text"
            name="Description"
            id="descriptionLabel"
            value={
              formData.Description
                ? formData.Description
                : "*There is no Description yet!*"
            }
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className={style.input}>
          <label htmlFor="capitalLabel" className={style.label}>
            Capital:
          </label>
          <input
            type="text"
            name="Capital"
            id="capitalLabel"
            value={formData.Capital}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        {formErrors.Capital && (
          <span className={style.error}>{formErrors.Capital}</span>
        )}
        {/* <div className={style.input}>
          <label htmlFor="emailLabel" className={style.label}>
            Email:
          </label>
          <input
            type="email"
            name="Email"
            id="emailLabel"
            value={formData.Email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        {formErrors.Email && (
          <span className={style.error}>{formErrors.Email}</span>
        )} */}
        <div className={style.input}>
          <label htmlFor="addressLabel" className={style.label}>
            Address:
          </label>
          <input
            type="text"
            name="Address"
            id="addressLabel"
            value={
              formData.Address ? formData.Address : "*There is no Address yet!*"
            }
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className={style.input}>
          <label htmlFor="facebookLabel" className={style.label}>
            Facebook:
          </label>
          <input
            type="text"
            name="Facebook"
            id="facebookLabel"
            value={
              formData.Social_Media[0].link
                ? formData.Social_Media[0].link
                : `*There is no ${formData.Social_Media[0].platform} yet!*`
            }
            onChange={(e) => handleInputChange(e, 0)}
          />
        </div>
        <div className={style.input}>
          <label
            htmlFor="instagramLabel"
            name="Instagram"
            className={style.label}>
            Instagram:
          </label>
          <input
            type="text"
            name="Instagram"
            id="instagramLabel"
            value={
              formData.Social_Media[1].link
                ? formData.Social_Media[1].link
                : `*There is no ${formData.Social_Media[1].platform} yet!*`
            }
            onChange={(e) => handleInputChange(e, 1)}
          />
        </div>
        <div className={style.input}>
          <label htmlFor="tiktokLabel" className={style.label}>
            TikTok:
          </label>
          <input
            type="text"
            name="TikTok"
            id="tiktokLabel"
            value={
              formData.Social_Media[2].link
                ? formData.Social_Media[2].link
                : `*There is no ${formData.Social_Media[2].platform} yet!*`
            }
            onChange={(e) => handleInputChange(e, 2)}
          />
        </div>
        <div className={style.input}>
          <label htmlFor="xLabel" className={style.label}>
            X:
          </label>
          <input
            type="text"
            name="X"
            id="xLabel"
            value={
              formData.Social_Media[3].link
                ? formData.Social_Media[3].link
                : `*There is no ${formData.Social_Media[3].platform} yet!*`
            }
            onChange={(e) => handleInputChange(e, 3)}
          />
        </div>
        <div className={style.input}>
          <label htmlFor="youtubeLabel" className={style.label}>
            YouTube:
          </label>
          <input
            type="text"
            name="YouTube"
            id="youtubeLabel"
            value={
              formData.Social_Media[4].link
                ? formData.Social_Media[4].link
                : `*There is no ${formData.Social_Media[4].platform} yet!*`
            }
            onChange={(e) => handleInputChange(e, 4)}
          />
        </div>
        <div className={style.input}>
          <label htmlFor="linkedInLabel" className={style.label}>
            LinkedIn:
          </label>
          <input
            type="text"
            name="LinkedIn"
            id="linkedInLabel"
            value={
              formData.Social_Media[5].link
                ? formData.Social_Media[5].link
                : `*There is no ${formData.Social_Media[5].platform} yet!*`
            }
            onChange={(e) => handleInputChange(e, 5)}
          />
        </div>
        <div className={style.input}>
          <label htmlFor="phoneNumberLabel" className={style.label}>
            Phone:
          </label>
          <input
            type="tel"
            name="Phone_Number"
            id="phoneNumberLabel"
            value={
              formData.Phone_Number ? formData.Phone_Number : "*There is no Phone Number yet!*"
            }
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        {formErrors.Phone_Number && (
          <span className={style.error}>{formErrors.Phone_Number}</span>
        )}
        <div className={style.input}>
          <label htmlFor="websiteLabel" className={style.label}>
            Website:
          </label>
          <input
            type="text"
            name="Website"
            id="websiteLabel"
            value={
              formData.Website ? formData.Website : "*There is no Website yet!*"
            }
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        {formErrors.Website && (
          <span className={style.error}>{formErrors.Website}</span>
        )}
        <div className={style.input}>
          <label className={style.label} htmlFor="logoUpload">Logo:</label>

          <input
            type="file"
            id="logoUpload"
            name="Logo" 
            className={style.uploadButtonInput}
            style={{fontSize: "14px"}}
            onChange={handleLogoChange}
          />
        </div>

        <div className={style.buttons}>
          <button type="reset" className={style.reset}>
            Reset
          </button>
          {/* Tostify Here when click on the submit and the submittion works */}
          <button type="submit" className={style.submit} onSubmit={handleSubmit}>
            Update Info
          </button>
        </div>
      </form>
    </main>
  );
};
export default EditCompany;
