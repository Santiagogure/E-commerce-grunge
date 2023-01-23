import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/dataProvider";
import { BootstrapButton } from "react-bootstrap-button";

export const LogIn = () => {
  const value = useContext(AppContext);
  const username = value.username;
  const setUsername = value.setUsername;
  const setPages = value.setPages;
  const setPassRegister = value.setPassRegister

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    city: "",
    address: "",
    usernameError: "",
    passwordError: "",
    confirmPasswordError: "",
    emailError: "",
    cityError: "",
    addressError: "",
  });

  // Handle form input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    let isError = false;
    const errors = validate(formData);
    if (
      errors.usernameError ||
      errors.passwordError ||
      errors.confirmPasswordError ||
      errors.emailError ||
      errors.cityError ||
      errors.addressError
    ) {
      isError = true;
    }
    setFormData((formData) => ({ ...formData, ...errors }));

    function redirect(url) {
      window.location = url;
    }

    // If there are no errors, submit the form
    if (!isError) {
        setPassRegister(true)
        localStorage.setItem("username", formData.username); 
        localStorage.setItem("passRegister", true);     
      redirect("/");
    }
  };

  console.log(username);

  // Validate form fields
  const validate = (formData) => {
    const errors = {
      usernameError: "",
      passwordError: "",
      confirmPasswordError: "",
      emailError: "",
      cityError: "",
      addressError: "",
    };

    // Validate username
    if (!formData.username.match(/^[a-zA-Z0-9]+$/)) {
      errors.usernameError = "Invalid username";
    }
    if (!formData.username) {
      errors.usernameError = "Username is required";
    }

    // Validate password
    if (
      !formData.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      )
    ) {
      errors.passwordError =
        "You need 8 characters, 1 lowercase and uppercase letter, 1 number, and 1 special character";
    }
    if (!formData.password) {
      errors.passwordError = "Password is required";
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPasswordError = "Passwords do not match";
    }
    if (!formData.confirmPassword) {
      errors.confirmPasswordError = "Confirm pass is required";
    }

    // Validate email
    if (
      !formData.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      errors.emailError = "Invalid email address";
    }
    if (!formData.email) {
      errors.emailError = "Email is required";
    }
    // Validate city
    if (!formData.city) {
      errors.cityError = "City is optional";
    }
    // Validate address
    if (!formData.address) {
      errors.addressError = "Address is optional";
    }
    return errors;
  };

  return (
    <div>
      <header className="w-11/12 xl:w-4/5 m-auto flex justify-center lg:justify-between items-center py-5">
        <Link className="no-underline" to="/">
          <h1
            onClick={() => setPages(1)}
            className="text-2xl font-semibold text-black  cursor-pointer"
          >
            E-<span className="text-rose-400">Commerce</span>
          </h1>
        </Link>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 content-start items-start mt-[-50px]">
        <form className="" onSubmit={handleSubmit}>
          <div className="mt-[20px]">
            <div className="flex flex-col items-end justify-end lg:items-center lg:justify-center mt-4 ">
            <div className="sz:w-[300px] sn:w-[420px] w-[500px] lg:w-[1000px]">
                <label className="w-1/4">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="bg-black ml-0 mt-2 sn:w-[170px]  w-[200px]  lg:w-2/4 h-[35px] text-white px-2"
                  placeholder="Write your Name"
                />
              </div>
              <div className="ml-4 mt-2 h-[2px]">
                {formData.usernameError &&
                <div>
                 <p className="text-red-600">{formData.usernameError}</p>
                 <i classsName="fas fa-times-circle mt-100"></i>
                 </div>
                 }
              </div>
            </div>

            <div className="flex flex-col items-end justify-end lg:items-center lg:justify-center mt-4">
            <div className="sz:w-[300px] sn:w-[420px] w-[500px] lg:w-[1000px]">
                <label className="w-1/4">Password:</label>
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-black ml-0 mt-2 sn:w-[170px]  w-[200px]  lg:w-2/4 h-[35px] text-white px-2"
                  placeholder="Write password"
                />
              </div>
              <div className="ml-4 mt-2 h-[2px]">
                {formData.passwordError && <p className="text-red-600">{formData.passwordError}</p>}
              </div>
            </div>

            <div className="flex flex-col items-end justify-end lg:items-center lg:justify-center mt-4">
            <div className="sz:w-[300px] sn:w-[420px] w-[500px] lg:w-[1000px]">
                <label className="w-1/4">Confirm:</label>
                <input
                  type="text"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-black ml-0 mt-2 sn:w-[170px]  w-[200px]  lg:w-2/4 h-[35px] text-white px-2"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="ml-4 mt-2 h-[2px]">
                {formData.confirmPasswordError && (
                  <p className="text-red-600">{formData.confirmPasswordError}</p>
                )}
              </div>
            </div>

            <div>
            <div className="flex flex-col items-end justify-end lg:items-center lg:justify-center mt-4">
            <div className="sz:w-[300px] sn:w-[420px] w-[500px] lg:w-[1000px]">
                  <label className="w-1/4">Email:</label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black ml-0 mt-2 sn:w-[170px]  w-[200px]  lg:w-2/4 h-[35px] text-white px-2"
                    placeholder="Write Email"
                  />
                </div>
                <div className="ml-4 mt-2 h-[2px]">
                  {formData.emailError && <p className="text-red-600">{formData.emailError}</p>}
                </div>
              </div>

              <div className="flex flex-col items-end justify-end lg:items-center lg:justify-center mt-4">
              <div className="sz:w-[300px] sn:w-[420px] w-[500px] lg:w-[1000px]">
                  <label className="w-1/4">City:</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-black ml-0 mt-2 sn:w-[170px]  w-[200px]  lg:w-2/4 h-[35px] text-white px-2"
                    placeholder="Write City"
                  />
                </div>
                <div className="ml-4 mt-2 h-[2px]">
                  {formData.cityError && <p className="text-red-600">{formData.cityError}</p>}
                </div>
              </div>

              <div className="flex flex-col items-end justify-end lg:items-center lg:justify-center mt-4">
              <div className="sz:w-[300px] sn:w-[420px] w-[500px] lg:w-[1000px]">
                  <label className="w-1/4">Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="bg-black ml-0 mt-2 sn:w-[170px]  w-[200px]  lg:w-2/4 h-[35px] text-white px-2"
                    placeholder="Write Address"
                  />
                </div>
                <div className="ml-4 mt-2 h-[2px]">
                  {formData.addressError && <p className="text-red-600">{formData.addressError}</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <BootstrapButton
              variant="danger"
              onClick={(event) => handleSubmit(event)}
              className=" border-white flex mt-2 mr-auto mb-0 ml-auto py-2 px-5 text-base font-medium cursor-pointer"
            >
              Submit
            </BootstrapButton>
          </div>
        </form>
      </div>
    </div>
  );
};
