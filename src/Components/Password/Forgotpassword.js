import React from 'react'

const Forgotpassword = () => {
  return (
      <>
    <div class="accountbg"></div>
    <div class="wrapper-page">
        <div class="card">

            <div class="card-body">
                <h3 class="text-center mt-0 mb-2">
                    <a href="index.html" class="logo"><img src="https://sperious.com/images/services/shiv.png" height="38" alt="logo-img"/>  SPERIOUS</a>
                </h3>
                <h5 class="text-center mt-0 text-color"><b>Reset Password</b></h5>

                <form class="form-horizontal mt-4" action="index.html">

                    <div>
                        <div class="alert alert-info alert-dismissible">
                            Enter your <b>Email</b> and instructions will be sent to you!
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <div class="col-12">
                            <input class="form-control" type="email" required="" placeholder="Email"/>
                        </div>
                    </div>

                    <div class="form-group text-center mt-3">
                        <div class="col-12">
                            <button class="btn btn-primary btn-block btn-lg waves-effect waves-light w-100" type="submit">Send Mail</button>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    </div>
    </>
  )
}

export default Forgotpassword
