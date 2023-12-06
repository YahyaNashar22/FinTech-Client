import React from "react";
import style from './EditUser.module.css';
import pic from '../../assets/icons/noAvatar.png'
import eye from '../../assets/icons/eye.png'
import hideEye from '../../assets/icons/hide.png'
import { useState } from "react";


const EditUser = () => {

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  
  // const [editUser, setEditUSer] = useState([]);

  // async function fetchEditUser() {
  //   try {
      
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }


  const visiblePasswor = () => {
    setShowPassword1(!showPassword1)
  };
  const visiblePasswor2 = () => {
    setShowPassword2(!showPassword2)
  };
  const visiblePasswor3 = () => {
    setShowPassword3(!showPassword3)
  };

  return (
    <div className={style.editUser}>

      <h1>Edit Profile</h1>

      <div className={style.styleImgUpload}>
        <img src={pic} alt="" className={style.image} />
        <button className={style.sameStyleBtn}>Upload</button>
      </div>

      <form className={style.form}>

        <div className={style.sameInput}>
          <label>Username</label>
          <input type="text" placeholder="Name" name="Name" required className={style.inputSize} />
        </div>

        <div className={style.sameInput}>
          <label>Email Address</label>
          <input type="email" placeholder="Email " required className={style.inputSize} />
        </div>

        <div className={style.sameInput}>
          <label>Password</label>
          <div className={style.inputContainer}>
            <img
              src={showPassword1 ? hideEye : eye}
              className={style.icon}
              alt=""
              onClick={visiblePasswor}
            >
            </img>
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="password"
              required className={`${style.inputSize} ${style.input}`}
            />
          </div>
        </div>

        <div className={style.sameInput}>
          <label>New  Password</label>
          <div className={style.inputContainer}>
            <img
              src={showPassword2 ? hideEye : eye}
              className={style.icon}
              alt="" onClick={visiblePasswor2}>
            </img>
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="password"
              className={`${style.inputSize} ${style.input}`}
              // onChange={handlecChange1}
              required
            />
          </div>
          {/* {err && <p style={{ color: 'red' }}>{err}</p>} */}

        </div>

        <div className={style.sameInput}>
          <label>Confirm Password</label>
          <div className={style.inputContainer}>
            <img
              src={showPassword3 ? hideEye : eye}
              className={style.icon}
              alt="" onClick={visiblePasswor3}>
            </img>
            <input
              type={showPassword3 ? "text" : "password"}
              placeholder="password"
              className={`${style.inputSize} ${style.input}`}
              // onChange={handlecChange2}
              required
            />
          </div>
        </div>

        <button className={style.sameStyleBtn}>submit</button>

      </form>
    </div>
  )
};
export default EditUser;