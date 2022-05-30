import React from 'react'

const Dashboard = () => {
  return (
      <>
    
        <div class="page-content">
            <div class="container-fluid">

                
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0"> Dashboard</h4>
                        </div>
                    </div>
                </div>
             

                <div class="row">
                    <div class="col-sm-6 col-lg-3">
                        <div class="card text-center">
                            <div class="card-body">
                                <h4 class="card-title text-muted">Total Projects</h4>
                                <h2 class="mt-3 mb-2"><i class="mdi mdi-arrow-down text-danger me-2"></i><b>952</b>
                                </h2>
                                <p class="text-muted mb-0 mt-3"><b>48%</b> From Last 24 Hours</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="card text-center">
                            <div class="card-body p-t-10">
                                <h4 class="card-title text-muted mb-0">Project Status</h4>
                                <h2 class="mt-3 mb-2"><i class="mdi mdi-arrow-up text-success me-2"></i><b>521</b></h2>
                                <p class="text-muted mb-0 mt-3"><b>42%</b>  Reviewed in Last 10 months</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="card text-center">
                            <div class="card-body p-t-10">
                                <h4 class="card-title text-muted mb-0">Company Visitors</h4>
                                <h2 class="mt-3 mb-2"><i class="mdi mdi-arrow-up text-success me-2"></i><b>452</b></h2>
                                <p class="text-muted mb-0 mt-3"><b>22%</b> From Last 24 Hours</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3">
                        <div class="card text-center">
                            <div class="card-body p-t-10">
                                <h4 class="card-title text-muted mb-0">yearly Earnings</h4>
                                <h2 class="mt-3 mb-2"><i class="mdi mdi-arrow-down text-danger me-2"></i><b>$365,000</b>
                                </h2>
                                <p class="text-muted mb-0 mt-3"><b>35%</b> From Last 1 Month</p>
                            </div>
                        </div>
                    </div>
                </div>
               

                <div class="row">

                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="mt-0 card-title">Email Sent</h4>

                                <ul class="list-inline d-flex justify-content-around mt-3">
                                    <li class="list-inline-item">
                                        <h5 class="text-center"><b>3654</b></h5>
                                        <p class="text-muted mb-0">Marketplace</p>
                                    </li>
                                    <li class="list-inline-item">
                                        <h5 class="text-center"><b>954</b></h5>
                                        <p class="text-muted mb-0">Last week</p>
                                    </li>
                                    <li class="list-inline-item">
                                        <h5 class="text-center"><b>8462</b></h5>
                                        <p class="text-muted mb-0">Last Month</p>
                                    </li>
                                </ul>
                                
                                <div class="morris-charts" id="morris-donut-example" style={{height: 300}}></div>
                                
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="mt-0 card-title">Revenue</h4>

                                <ul class="list-inline d-flex justify-content-around mt-3">
                                    <li class="list-inline-item">
                                        <h5 class="text-center"><b>5248</b></h5>
                                        <p class="text-muted mb-0">Marketplace</p>
                                    </li>
                                    <li class="list-inline-item">
                                        <h5 class="text-center"><b>321</b></h5>
                                        <p class="text-muted mb-0">Last week</p>
                                    </li>
                                    <li class="list-inline-item">
                                        <h5 class="text-center"><b>964</b></h5>
                                        <p class="text-muted mb-0">Last Month</p>
                                    </li>
                                </ul>
                        <div id="morris-bar-example" style={{height: 300}}></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="mt-0 card-title">Email Sent</h4>

                                <ul class="list-inline d-flex justify-content-around mt-3">
                                    <li class="list-inline-item">
                                        <h5 class="text-center"><b>3654</b></h5>
                                        <p class="text-muted mb-0">Marketplace</p>
                                    </li>
                                    <li class="list-inline-item">
                                        <h5 class="text-center"><b>954</b></h5>
                                        <p class="text-muted mb-0">Last week</p>
                                    </li>
                                    <li class="list-inline-item">
                                        <h5 class="text-center"><b>8462</b></h5>
                                        <p class="text-muted mb-0">Last Month</p>
                                    </li>
                                </ul>
                        <div id="morris-area-example" style={{height: 300}}></div>
                            </div>
                        </div>
                    </div>

                </div>
               

                <div class="row">
                    <div class="col-lg-7">
                        <div class="card card-h-100">
                            <div class="card-body">
                                <h4 class="mb-4 mt-0 card-title">Recent Contacts</h4>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="table-responsive">
                                            <table class="table table-hover mb-0">
                                                <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>

                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>Akshay Chudasama</td>
                                                    <td>Backend Developer</td>
                                                    <td>ShivInfotech</td>
                                                    <td>30</td>
                                                    <td>2011/04/25</td>
                                                    <td>$320,800</td>
                                                </tr>
                                                <tr>
                                                    <td>Parthiv Pithadiya</td>
                                                    <td>Jr. Frontend Developer</td>
                                                    <td>Sperious</td>
                                                    <td>23</td>
                                                    <td>2011/07/25</td>
                                                    <td>$170,750</td>
                                                </tr>
                                                <tr>
                                                    <td>Pataliya Priyank</td>
                                                    <td>Jr. Software Developer</td>
                                                    <td>Sperious</td>
                                                    <td>20</td>
                                                    <td>2009/01/12</td>
                                                    <td>$860,000</td>
                                                </tr>
                                                <tr>
                                                    <td>Mahimna Mehta</td>
                                                    <td>Sr. Frontend Developer</td>
                                                    <td>Sperious</td>
                                                    <td>22</td>
                                                    <td>2012/03/29</td>
                                                    <td>$433,060</td>
                                                </tr>
                                                <tr>
                                                    <td>Rajnik Parmer</td>
                                                    <td>Trainee</td>
                                                    <td>Sperious</td>
                                                    <td>23</td>
                                                    <td>2008/11/28</td>
                                                    <td>$162,700</td>
                                                </tr>
                                                <tr>
                                                    <td>Sagar javiya</td>
                                                    <td>Backend Developer</td>
                                                    <td>Sperious</td>
                                                    <td>23</td>
                                                    <td>2012/12/02</td>
                                                    <td>$372,000</td>
                                                </tr>
                                                <tr>
                                                    <td>vatsal</td>
                                                    <td>trainee</td>
                                                    <td>Sperious</td>
                                                    <td>23</td>
                                                    <td>2012/08/06</td>
                                                    <td>$137,500</td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   

                    <div class="col-lg-5">
                        <div class="card card-h-100">
                            <div class="card-body">
                                <h4 class="mb-4 mt-0 card-title">Goal Completion</h4>

                                <p class="font-600 mb-1">Completed Projects <span class="text-primary float-end"><b>80%</b></span></p>
                                <div class="progress  mb-3">
                                    <div class="progress-bar progress-bar-primary " role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                    </div>
                                </div>

                                <p class="font-600 mb-1">Pursuing Projects Work<span class="text-primary float-end"><b>50%</b></span></p>
                                <div class="progress  mb-3">
                                    <div class="progress-bar progress-bar-primary " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}>
                                    </div>
                                </div>

                                <p class="font-600 mb-1">Testing Reviewed<span class="text-primary float-end"><b>70%</b></span></p>
                                <div class="progress  mb-3">
                                    <div class="progress-bar progress-bar-primary " role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                    </div>
                                </div>

                                <p class="font-600 mb-1">Project Planning <span class="text-primary float-end"><b>65%</b></span></p>
                                <div class="progress  mb-3">
                                    <div class="progress-bar progress-bar-primary " role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}>
                                    </div>
                                </div>

                                <p class="font-600 mb-1">Yearly Completed Projects<span class="text-primary float-end"><b>25%</b></span></p>
                                <div class="progress  mb-3">
                                    <div class="progress-bar progress-bar-primary " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: "25%"}}>
                                    </div>
                                </div>

                                <p class="font-600 mb-1"> Company Visits<span class="text-primary float-end"><b>40%</b></span></p>
                                <div class="progress  mb-0">
                                    <div class="progress-bar progress-bar-primary " role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
               
            </div>

        </div>
      

        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <script>document.write(new Date().getFullYear())</script> © Sperious
                    </div>
                    <div class="col-sm-6">
                        <div class="text-sm-end d-none d-sm-block">
                            Copyrights <i class="mdi mdi-heart text-danger"></i> by Sperious Team
                        </div>
                    </div>
                </div>
            </div>
        </footer>

</>
  )
}

export default Dashboard
