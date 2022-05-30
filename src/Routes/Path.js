import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Front from '../Components/Component/Front';
import Login from '../Components/Component/Login';
import Changepassword from '../Components/Password/Changepassword';
import Forgotpassword from '../Components/Password/Forgotpassword';
import Profile from '../Components/Component/Profile';
import Category from '../Components/Category/Category';
import AllCategory from '../Components/Category/AllCategory';
import EditCategory from '../Components/Category/EditCategory';
import AllPortfolio from '../Components/Portfolio/AllPortfolio';
import Portfolio from '../Components/Portfolio/Portfolio';
import EditPortfolio from '../Components/Portfolio/EditPortfolio';
import Testimonial from '../Components/Testimonial/Testimonial';
import AllTestimonial from '../Components/Testimonial/AllTestimonial';
import EditTestimonial from '../Components/Testimonial/EditTestimonial';

const Path = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />

                {/* Forgot Password */}

                <Route path="/forgotpassword" element={<Forgotpassword />} />

                {/* Dashboard  */}

                <Route path="/" element={<Front />} />

                {/* Change Password  */}

                <Route path="/changepassword" element={<Changepassword />} />

                {/* Profile */}

                <Route path="/profile" element={<Profile />} />

                {/* <-- Category --> */}

                <Route path="/category" element={<AllCategory />} />
                <Route path="/addcategory" element={<Category />} />
                <Route path="/editcat/:id" element={<EditCategory />} />

                {/* <-- Portfolio --> */}

                <Route path="/portfolio" element={<AllPortfolio />} />
                <Route path="/addportfolio" element={<Portfolio />} />
                <Route path="/editprt/:id" element={<EditPortfolio />} />

                {/* <-- Testimonials --> */}

               <Route path="/testimonial" element={<AllTestimonial />} />
               <Route path="/addtestimonial" element={<Testimonial />} />
               <Route path="/editt/:id" element={<EditTestimonial />} />
            </Routes>
        </div>
    )
}

export default Path
