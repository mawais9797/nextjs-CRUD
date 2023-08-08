"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import HeaderPage from "./header/page";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./actions/Action";

import { updateUser } from "./actions/Action";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserSignupAndEdit = () => {
  const editUser = useSelector((state) => state.students.editStudent);
  const allUsers = useSelector((state) => state.students.studentData);
  const router = useRouter();

  let userEdit = editUser;
  // const userEdit = 1;
  // const navigate = useNavigate();
  // debugger;
  let initialValues = null;
  if (editUser.length !== 0) {
    debugger;
    initialValues = {
      name: editUser[0].name,
      company: editUser[0].company,
      email: editUser[0].email,
      role: editUser[0].role,
    };
  } else {
    initialValues = {
      name: "",
      company: "",
      email: "",
      role: "",
    };
  }

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // setEditUser(user);
  //   // debugger;
  //   // console.log("SELECTED User =", user[0]);
  // }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    company: Yup.string().required("Company Name is required"),
    role: Yup.string().required("Please Select a Role "),
  });

  const handleUpdate = (values, { resetForm }) => {
    // debugger;
    const key = "id";
    values[key] = editUser[0].id;
    console.log("here");
    console.log(allUsers);
    debugger;
    dispatch(updateUser(values, allUsers));

    resetForm();
    router.push("/userslist");
    // setUserValue([...userValue, values]);
    // dispatch(addUser(values));
    // navigate("/employeedata");
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("here submit", values);
    // console.log(values.company);
    // const newEmployee = { ...values };
    // setUserValue((previous) => [...previous, newEmployee]);
    // // debugger;
    const newUser = {
      id: Date.now(),
      name: values.name,
      email: values.email,
      company: values.company,
      role: values.role,
    };

    // setUserValue([...userValue, newUser]);

    // console.log("FormValues =", values);
    // console.log("NewEmployee Values =", newEmployee);
    // console.log("UserValueState =", userValue);
    dispatch(addUser(newUser));

    resetForm();
    router.push("/userslist");

    // navigate("/employeedata");
  };

  return (
    <div>
      <div className="container ">
        <br />
        {userEdit != "" ? (
          <>
            <div className="signupForm">
              <h1>User Edit Form</h1>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleUpdate}
              >
                <Form>
                  <div className="formField">
                    <label htmlFor="name" className="formLabel">
                      Name
                    </label>
                    <br />
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="form-control  "
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="error errMsg"
                    />
                  </div>
                  <span></span>

                  <div className="formField">
                    <label htmlFor="exampleInputEmail1" className="formLabel">
                      Email address
                    </label>
                    <Field
                      type="text"
                      className="form-control "
                      id="exampleInputEmail1"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error errMsg"
                    />
                    <span></span>
                  </div>

                  <div className="formField">
                    <label htmlFor="myCompany" className="formLabel">
                      Company
                    </label>
                    <br />

                    {userEdit[0].company == "AppsGenii" ? (
                      <>
                        <Field
                          as="select"
                          name="company"
                          id="myCompany"
                          className="form-control formField"
                        >
                          <option value="AppsGenii" selected>
                            AppsGenii
                          </option>
                          <option value="Google">Google</option>
                          <option value="Facebook">Facebook</option>
                        </Field>
                        <ErrorMessage
                          name="company"
                          component="span"
                          className="error errMsg"
                        />
                      </>
                    ) : userEdit[0].company == "Google" ? (
                      <>
                        <Field
                          as="select"
                          name="company"
                          id="myCompany"
                          className="form-control formField"
                        >
                          <option value="AppsGenii">AppsGenii</option>
                          <option value="Google" selected>
                            Google
                          </option>
                          <option value="Facebook">Facebook</option>
                        </Field>
                        <ErrorMessage
                          name="company"
                          component="span"
                          className="error errMsg"
                        />
                      </>
                    ) : userEdit[0].company == "Facebook" ? (
                      <>
                        <Field
                          as="select"
                          name="company"
                          id="myCompany"
                          className="form-control formField"
                        >
                          <option value="AppsGenii">AppsGenii</option>
                          <option value="Google">Google</option>
                          <option value="Facebook" selected>
                            Facebook
                          </option>
                        </Field>
                        <ErrorMessage
                          name="company"
                          component="span"
                          className="error errMsg"
                        />
                      </>
                    ) : (
                      <>
                        <Field
                          as="select"
                          name="company"
                          id="myCompany"
                          className="form-control formField"
                        >
                          <option value="">-- Select Company --</option>
                          <option value="AppsGenii">AppsGenii</option>
                          <option value="Google">Google</option>
                          <option value="Facebook">Facebook</option>
                        </Field>
                        <ErrorMessage
                          name="company"
                          component="span"
                          className="error errMsg"
                        />
                      </>
                    )}
                    {/* <Field
                    as="select"
                    name="company"
                    id="myCompany"
                    className="form-control formField"
                  >
                    <option value="">-- Select Company --</option>
                    <option value="AppsGenii">AppsGenii</option>
                    <option value="Google">Google</option>
                    <option value="Facebook">Facebook</option>
                  </Field>
                  <ErrorMessage
                    name="company"
                    component="span"
                    className="error errMsg"
                  /> */}
                  </div>
                  <span></span>

                  <div className="formField">
                    <label htmlFor="role" className="formLabel">
                      Role
                    </label>
                    <br />
                    <Field
                      as="select"
                      name="role"
                      id="role"
                      className="form-control formField"
                    >
                      <option value="">-- Select A Role --</option>
                      <option value="Intern">Intern</option>
                      <option value="Developer">Developer</option>
                      <option value="CTO">CTO</option>
                    </Field>
                    <ErrorMessage
                      name="role"
                      component="span"
                      className="error errMsg"
                    />
                  </div>
                  <span></span>

                  <br />

                  <button className="btn btn-lg btn-success " type="submit">
                    Edit
                  </button>
                </Form>
              </Formik>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className="container ">
                <br />
                <div className="signupForm">
                  <h1>Sign Up</h1>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <div className="formField">
                        <label htmlFor="name" className="formLabel">
                          Name
                        </label>
                        <br />
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          className="form-control  "
                        />
                        <ErrorMessage
                          name="name"
                          component="span"
                          className="error errMsg"
                        />
                      </div>
                      <span></span>

                      <div className="formField">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="formLabel"
                        >
                          Email address
                        </label>
                        <Field
                          type="text"
                          className="form-control "
                          id="exampleInputEmail1"
                          name="email"
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error errMsg"
                        />
                        <span></span>
                      </div>

                      <div className="formField">
                        <label htmlFor="myCompany" className="formLabel">
                          Company
                        </label>
                        <br />
                        <Field
                          as="select"
                          name="company"
                          id="myCompany"
                          className="form-control formField"
                        >
                          <option value="">-- Select Company --</option>
                          <option value="AppsGenii">AppsGenii</option>
                          <option value="Google">Google</option>
                          <option value="Facebook">Facebook</option>
                        </Field>
                        <ErrorMessage
                          name="company"
                          component="span"
                          className="error errMsg"
                        />
                      </div>
                      <span></span>

                      <div className="formField">
                        <label htmlFor="role" className="formLabel">
                          Role
                        </label>
                        <br />
                        <Field
                          as="select"
                          name="role"
                          id="role"
                          className="form-control formField"
                        >
                          <option value="">-- Select A Role --</option>
                          <option value="Intern">Intern</option>
                          <option value="Developer">Developer</option>
                          <option value="CTO">CTO</option>
                        </Field>
                        <ErrorMessage
                          name="role"
                          component="span"
                          className="error errMsg"
                        />
                      </div>
                      <span></span>

                      <br />

                      <button className="btn btn-lg btn-success " type="submit">
                        Sign Up
                      </button>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserSignupAndEdit;

// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// // import HeaderPage from "./header/page";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser } from "./actions/Action";

// // import { useNavigate } from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortAwesomeIcon/react-fontawesom";

// const SignupForm = () => {
//   const data = useSelector((state) => state.students);
//   console.log("signup test redux", data);

//   const [userValue, setUserValue] = useState("");
//   const [editUser, setEditUser] = useState(
//     useSelector((state) => state.students.editStudent)
//   );
//   // const navigate = useNavigate();
//   let initialValues = null;
//   editUser != undefined
//     ? (initialValues = {
//         name: editUser[0].name,
//         email: editUser[0].email,
//         company: editUser[0].company,
//         role: editUser[0].role,
//       })
//     : (initialValues = {
//         name: "",
//         email: "",
//         company: "",
//         role: "",
//       });

//   const dispatch = useDispatch();

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().required("Email is required"),
//     company: Yup.string().required("Company Name is required"),
//     role: Yup.string().required("Please Select a Role "),
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     // console.log("here", values);
//     // console.log(values.company);
//     // const newEmployee = { ...values };
//     // setUserValue((previous) => [...previous, newEmployee]);
//     // // debugger;
//     const newUser = {
//       id: Date.now(),
//       name: values.name,
//       email: values.email,
//       company: values.company,
//       role: values.role,
//     };
//     setUserValue([...userValue, newUser]);

//     // console.log("FormValues =", values);
//     // console.log("NewEmployee Values =", newEmployee);
//     // console.log("UserValueState =", userValue);
//     // dispatch(addUser(newUser));
//     dispatch(addUser(newUser));

//     resetForm();

//     // navigate("/employeedata");
//   };

//   return (
//     <div>
//       {/* <HeaderPage /> */}
//       <div className="container ">
//         <br />
//         <div className="signupForm">
//           <h1>Sign Up</h1>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             <Form>
//               <div className="formField">
//                 <label htmlFor="name" className="formLabel">
//                   Name
//                 </label>
//                 <br />
//                 <Field
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="form-control  "
//                 />
//                 <ErrorMessage
//                   name="name"
//                   component="span"
//                   className="error errMsg"
//                 />
//               </div>
//               <span></span>

//               <div className="formField">
//                 <label htmlFor="exampleInputEmail1" className="formLabel">
//                   Email address
//                 </label>
//                 <Field
//                   type="text"
//                   className="form-control "
//                   id="exampleInputEmail1"
//                   name="email"
//                 />
//                 <ErrorMessage
//                   name="email"
//                   component="span"
//                   className="error errMsg"
//                 />
//                 <span></span>
//               </div>

//               <div className="formField">
//                 <label htmlFor="myCompany" className="formLabel">
//                   Company
//                 </label>
//                 <br />
//                 <Field
//                   as="select"
//                   name="company"
//                   id="myCompany"
//                   className="form-control formField"
//                 >
//                   <option value="">-- Select Company --</option>
//                   <option value="AppsGenii">AppsGenii</option>
//                   <option value="Google">Google</option>
//                   <option value="Facebook">Facebook</option>
//                 </Field>
//                 <ErrorMessage
//                   name="company"
//                   component="span"
//                   className="error errMsg"
//                 />
//               </div>
//               <span></span>

//               <div className="formField">
//                 <label htmlFor="role" className="formLabel">
//                   Role
//                 </label>
//                 <br />
//                 <Field
//                   as="select"
//                   name="role"
//                   id="role"
//                   className="form-control formField"
//                 >
//                   <option value="">-- Select A Role --</option>
//                   <option value="Intern">Intern</option>
//                   <option value="Developer">Developer</option>
//                   <option value="CTO">CTO</option>
//                 </Field>
//                 <ErrorMessage
//                   name="role"
//                   component="span"
//                   className="error errMsg"
//                 />
//               </div>
//               <span></span>

//               <br />

//               <button className="btn btn-lg btn-success " type="submit">
//                 Sign Up
//               </button>
//             </Form>
//           </Formik>
//         </div>
//         {/* <table className="table table-light table-hover">
//           <thead>
//             <tr>
//               <th scope="col">Sr.No.</th>
//               <th scope="col">Employee Name</th>
//               <th scope="col">Email</th>
//               <th scope="col">Company</th>
//               <th scope="col">Role</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.values(userValue).map((x, index) => {
//               return (
//                 <>
//                   <tr className="table-light">
//                     <th scope="row">{index + 1}</th>
//                     <td>{x.name}</td>
//                     <td>{x.email}</td>
//                     <td>{x.company}</td>
//                     <td>{x.role}</td>
//                   </tr>
//                 </>
//               );
//             })}
//           </tbody>
//         </table> */}
//       </div>
//     </div>
//   );
// };

// export default SignupForm;

// import Image from "next/image";
// import styles from "./page.module.css";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//       <div className="container">
//         <h1>This is Home Page</h1>

//       </div>
//     </>
//   );
// }
