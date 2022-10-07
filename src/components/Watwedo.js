import React from 'react'
import {Link} from "react-router-dom"

function Watwedo() {
  return (
    <div>
    
    <header class="header">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="logo">
            <img src={require("../images/line.png")}></img>
            </div>
            <button type="button" class="nav-toggler">
               <span></span>
            </button>
            <nav class="nav">
               <ul>
                  <li><Link to="about.html" >About</Link></li>
                  <li><Link to="whatwedo.html" class="active">What we do</Link></li>
                  <li><Link to="digitalproduct.html">Solutions</Link></li>
                  <li><Link to="digitalproduct copy 2.html">Technologies</Link></li>
                  <li><Link to="digitalproduct copy.html" >Products</Link></li>
                  <li><Link to="#">Cloud Services</Link></li>
                  <li><Link to="#">Careers</Link></li>
               </ul>
            </nav>
        </div>
    </div>
 </header>

  <div class="first-max">
    <div class="hero">
      <div class="hero-1">
        <div class="first-2">
          IT services you need to modernize operations
        </div>
        <div class="first-3">
          <Link to="#" class="main-nav"> Our Products  </Link>
        </div>
      </div>

      <div class="hero-2"></div>
    </div>
  </div>


  <div class="body">
    <div class="s">
      <div class="s-1">
        We are committed to providing flexible, low-cost solutions to our
        customers that will help make their businesses run more smoothly and
        profitably.
      </div>
    </div>


    <div class="second grid-3-cols">

      <div class="second-1">
        <div class="pic">
        <img src={require("../images/line.png")}></img>
        </div>
        <div class="pic-1">Consulting</div>
        <div class="pic-2">
          Experts analyze the existing problems and needs in order to define a
          clear set of goals to be reached with CRM implementation. With the
          involvement of your management team our consultants define your “as
          is” process and create the final “to be” scheme.
        </div>
        <div class="pic-3">
          <a href="#">Explore <l>here</l></a>
        </div>
      </div>
   
      <div class="second-1">
        <div class="pic">
        <img src={require("../images/line.png")}></img>
        </div>
        <div class="pic-1">Project Planning</div>
        <div class="pic-2">
          We calculate the budget and development time frames. For larger
          projects with heavy customization and/or integration requirements,
          it may be necessary to deliver the solution in several iterations,
          in order to minimize the time before the most critical changes are
          made.
        </div>
        <div class="pic-3">
          <Link to="#">Explore <l>here</l></Link>
        </div>
      </div>
     
      <div class="second-1">
        <div class="pic">
        <img src={require("../images/line.png")}></img>
        </div>
        <div class="pic-1">Tranning</div>
        <div class="pic-2">
          Trainings on using the new system are organized for your staff
          members so they feel comfortable with utilizing its vast
          functionality once the system is installed.
        </div>
        <div class="pic-3">
          <Link href="#">Explore <l>here</l></Link>
        </div>
      </div>
  
      <div class="second-1">
        <div class="pic">
        <img src={require("../images/line.png")}></img>
        </div>
        <div class="pic-1">Prototype Creation</div>
        <div class="pic-2">
          To enhance your understanding of the future system’s capabilities,
          our consultants use your requirements to prepare a live demo
          (working prototype) of the key elements of your targeted “to be”
          process. This lets your team see and review the look of the end
          result.
        </div>
        <div class="pic-3">
          <link to="#">Explore <l>here</l></link>
        </div>
      </div>
   
      <div class="second-1">
        <div class="pic">
        <img src={require("../images/line.png")}></img>
        </div>
        <div class="pic-1">Design</div>
        <div class="pic-2">
          Trainings on using the new system are organized for your staff
          members so they feel comfortable with utilizing its vast
          functionality once the system is installedExperts analyze the
          existing problems and needs in order to define a clear set of goals
          to be reached with CRM implementation. With the involvement of your
          management team our consultants define your “as is” process and
          create the final “to be” scheme.
        </div>
        <div class="pic-3">
          <link to="#">Explore <l>here</l></link>
        </div>
      </div>
  
      <div class="second-1">
        <div class="pic">
        <img src={require("../images/line.png")}></img>
        </div>
        <div class="pic-1">Development</div>
        <div class="pic-2">
          We calculate the budget and development time frames. For larger
          projects with heavy customization and/or integration requirements,
          it may be necessary to deliver the solution in several iterations,
          in order to minimize the time before the most critical changes are
          made.
        </div>
        <div class="pic-3">
          <link to="#">Explore <l>here</l></link>
        </div>
      </div>
    
      <div class="second-1">
        <div class="pic">
        <img src={require("../images/line.png")}></img>
        </div>
        <div class="pic-1">Party integration</div>
        <div class="pic-2">
          While CAS genesisWorld is a good tool on its own, you may gain even
          more from its integration with existing ECM, ERP or Portal products.
          CAS genesisWorld comes with out of box integration components common
          ERP suites such as SAGE, Navision, SAP and Oracle.
        </div>
        <div class="pic-3">
          <a href="#">Explore <l>here</l></a>
        </div>
      </div>
     
      <div class="second-1">
        <div class="pic">
        <img src={require("../images/line.png")}></img>
        </div>
        <div class="pic-1">Cloud</div>
        <div class="pic-2">
          Make the right technology investments at the right time and on the
          right platforms to drive innovation, increase customer loyalty and
          grow your business.
        </div>
        <div class="pic-3">
          <a href="#">Explore <l>here</l></a>
        </div>
      </div>
     
      <div class="second-1">
        <div class="pic">
        <img src={require("../images/line.png")}></img>
        </div>
        <div class="pic-1">Support</div>
        <div class="pic-2">
          Post implementation – ISSL will hold your hands until you are
          comfortable and your new processes are well entrenched in the
          business DNA. Plus, our staff remains available to address any
          issues that may arise
        </div>
        <div class="pic-3">
          <a href="#">Explore <l> here</l></a>
        </div>
      </div>
    </div>
  
    <div class="third">
      <div class="none">What Our Customers are saying about us</div>
      <div class="third-1">
        <div class="three">What Our Customers are saying about us</div>
        <div class="five-0">
          <div class="five">
            <div class="fi-1">
              I was reluctant to call because I didn’t believe they would
              really be of help but they surprised me and changed my mind.
            </div>
            <div class="fi-2">Babajide</div>
            <div class="fi-3">Island Microfinance Bank</div>
          </div>
    
          <div class="five">
            <div class="fi-1">
              I was reluctant to call because I didn’t believe they would
              really be of help but they surprised me and changed my mind.
            </div>
            <div class="fi-2">Babajide</div>
            <div class="fi-3">Island Microfinance Bank</div>
          </div>
      
          <div class="five">
            <div class="fi-1">
              I was reluctant to call because I didn’t believe they would
              really be of help but they surprised me and changed my mind.
            </div>
            <div class="fi-2">Babajide</div>
            <div class="fi-3">Island Microfinance Bank</div>
          </div>
        
          <div class="five">
            <div class="fi-1">
              I was reluctant to call because I didn’t believe they would
              really be of help but they surprised me and changed my mind.
            </div>
            <div class="fi-2">Babajide</div>
            <div class="fi-3">Island Microfinance Bank</div>
          </div>
     
          <div class="five">
            <div class="fi-1">
              I was reluctant to call because I didn’t believe they would
              really be of help but they surprised me and changed my mind.
            </div>
            <div class="fi-2">Babajide</div>
            <div class="fi-3">Island Microfinance Bank</div>
          </div>
      
          <div class="five">
            <div class="fi-1">
              I was reluctant to call because I didn’t believe they would
              really be of help but they surprised me and changed my mind.
            </div>
            <div class="fi-2">Babajide</div>
            <div class="fi-3">Island Microfinance Bank</div>
          </div>
    
          <div class="five">
            <div class="fi-1">
              I was reluctant to call because I didn’t believe they would
              really be of help but they surprised me and changed my mind.
            </div>
            <div class="fi-2">Babajide</div>
            <div class="fi-3">Island Microfinance Bank</div>
          </div>
      
          <div class="five">
            <div class="fi-1">
              I was reluctant to call because I didn’t believe they would
              really be of help but they surprised me and changed my mind.
            </div>
            <div class="fi-2">Babajide</div>
            <div class="fi-3">Island Microfinance Bank</div>
          </div>
        
          <div class="five">
            <div class="fi-1">
              I was reluctant to call because I didn’t believe they would
              really be of help but they surprised me and changed my mind.
            </div>
            <div class="fi-2">Babajide</div>
            <div class="fi-3">Island Microfinance Bank</div>
          </div>
        
        </div>
      </div>
    </div>
   
  </div>

  <div class="connectwithus">
      <div class="connectdiv">
          <div class="connecttext">Connect with ISSL</div>
          <div class="connectbtn">
             <button type="button" value="Contact Us" class="contactbtn button1"> click</button>
          </div>
      </div>
          </div>


</div>



  )
}

export default Watwedo