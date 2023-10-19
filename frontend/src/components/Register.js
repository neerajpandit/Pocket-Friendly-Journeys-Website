// // import React from "react";
// // import './Register.css';
// // // import './App.css';
// // function Register(){
// //     return(
// //         <>
// //         <div class="container">

// // <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
// //   <div class="container">
// //     <div class="row justify-content-center">
// //       <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

// //         <div class="d-flex justify-content-center py-4">
// //           <a href="index.html" class="logo d-flex align-items-center w-auto">
// //             {/* <img src="assets/img/logo.png" alt=""/> */}
// //             <span class="d-none d-lg-block">Register</span>
// //           </a>
// //         </div>

// //         <div class="card mb-3">

// //           <div class="card-body">

// //             <div class="pt-4 pb-2">
// //               <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
// //               <p class="text-center small">Enter your personal details to create account</p>
// //             </div>

// //             <form class="row g-3 needs-validation" novalidate>
// //               <div class="col-12">
// //                 <label for="yourName" class="form-label">Your Name</label>
// //                 <input type="text" name="name" class="form-control" id="yourName" required/>
// //                 <div class="invalid-feedback">Please, enter your name!</div>
// //               </div>

// //               <div class="col-12">
// //                 <label for="yourEmail" class="form-label">Your Email</label>
// //                 <input type="email" name="email" class="form-control" id="yourEmail" required/>
// //                 <div class="invalid-feedback">Please enter a valid Email adddress!</div>
// //               </div>

// //               <div class="col-12">
// //                 <label for="yourUsername" class="form-label">Username</label>
// //                 <div class="input-group has-validation">
// //                   <span class="input-group-text" id="inputGroupPrepend">@</span>
// //                   <input type="text" name="username" class="form-control" id="yourUsername" required/>
// //                   <div class="invalid-feedback">Please choose a username.</div>
// //                 </div>
// //               </div>

// //               <div class="col-12">
// //                 <label for="yourPassword" class="form-label">Password</label>
// //                 <input type="password" name="password" class="form-control" id="yourPassword" required/>
// //                 <div class="invalid-feedback">Please enter your password!</div>
// //               </div>

// //               <div class="col-12">
// //                 <div class="form-check">
// //                   <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required/>
// //                   <label class="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
// //                   <div class="invalid-feedback">You must agree before submitting.</div>
// //                 </div>
// //               </div>
// //               <div class="col-12">
// //                 <button class="btn btn-primary w-100" type="submit">Create Account</button>
// //               </div>
// //               <div class="col-12">
// //                 <p class="small mb-0">Already have an account? <a href="/login">Log in</a></p>
// //               </div>
// //             </form>

// //           </div>
// //         </div>

// //         <div class="credits">
// //           </div>

// //       </div>
// //     </div>
// //   </div>

// // </section>

// // </div>
// //         </>
// //     );
// // }
// // export default Register;

// import React, { useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// // import { signup } from '../auth/actions/auth';
// import axios from 'axios';

// const Signup = ({ signup, isAuthenticated }) => {
//     const [accountCreated, setAccountCreated] = useState(false);
//     const [formData, setFormData] = useState({
//         first_name: '',
//         last_name: '',
//         email: '',
//         password: '',
//         re_password: ''
//     });

//     const { first_name, last_name, email, password, re_password } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = e => {
//         e.preventDefault();

//         if (password === re_password) {
//             signup(first_name, last_name, email, password, re_password);
//             setAccountCreated(true);
//         }
//     };


   

//     if (isAuthenticated) {
//         return <Redirect to='/' />
//     }
//     if (accountCreated) {
//         return <Redirect to='/login' />
//     }

//     return (
//         <div className='container mt-5'>
//             <h1>Sign Up</h1>
//             <p>Create your Account</p>
//             <form onSubmit={e => onSubmit(e)}>
//                 <div className='form-group'>
//                     <input
//                         className='form-control'
//                         type='text'
//                         placeholder='First Name*'
//                         name='first_name'
//                         value={first_name}
//                         onChange={e => onChange(e)}
//                         required
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <input
//                         className='form-control'
//                         type='text'
//                         placeholder='Last Name*'
//                         name='last_name'
//                         value={last_name}
//                         onChange={e => onChange(e)}
//                         required
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <input
//                         className='form-control'
//                         type='email'
//                         placeholder='Email*'
//                         name='email'
//                         value={email}
//                         onChange={e => onChange(e)}
//                         required
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <input
//                         className='form-control'
//                         type='password'
//                         placeholder='Password*'
//                         name='password'
//                         value={password}
//                         onChange={e => onChange(e)}
//                         minLength='6'
//                         required
//                     />
//                 </div>
//                 <div className='form-group'>
//                     <input
//                         className='form-control'
//                         type='password'
//                         placeholder='Confirm Password*'
//                         name='re_password'
//                         value={re_password}
//                         onChange={e => onChange(e)}
//                         minLength='6'
//                         required
//                     />
//                 </div>
//                 <button className='btn btn-primary' type='submit'>Register</button>
//             </form>
           
            
           
//             <p className='mt-3'>
//                 Already have an account? <Link to='/login'>Sign In</Link>
//             </p>
//         </div>
//     );
// };

// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { signup })(Signup);
