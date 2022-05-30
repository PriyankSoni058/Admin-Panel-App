import React from 'react'

const Changepassword = () => {
  return (
    <>
    <div class="accountbg"></div>
    <div class="wrapper-page">
        <div class="card">

            <div class="card-body">
                <h3 class="text-center mt-0 mb-2">
                    <a href="index.html" class="logo"><img src="https://sperious.com/images/services/shiv.png" height="36" alt="logo-img"/> SPERIOUS </a>
                </h3>
                <h5 class="text-center mt-0 text-color"><b>Change Password</b></h5>

                <form class="form-horizontal mt-4" action="index.html">

                    <div class="form-group mb-3">
                        <div class="col-12">
                            <input class="form-control" type="Old Password" required="" placeholder="Enter Your Old Password"/>
                        </div>
                        <hr/>

                        <div class="col-12">
                            <input class="form-control" type="New Password" required="" placeholder="Enter Your New Password"/>
                        </div>
                        <br/>
                        <div class="col-12">
                            <input class="form-control" type="Confirm Password" required="" placeholder="Enter Your Confirm Password"/>
                        </div>
                    </div>

                    <div class="form-group text-center mt-3">
                        <div class="col-12">
                            <button class="btn btn-primary btn-block btn-lg waves-effect waves-light w-100" type="submit">Reset Password</button>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    </div>
    </>
    
  )
}

export default Changepassword


