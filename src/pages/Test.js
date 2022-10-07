import React,{useState} from 'react';
import { Container } from "react-bootstrap";
import Footer from '../components/Footer';
import {ReactComponent as house} from "./../images/house.svg"
import "./Test.css"




function Test()
{
 const[showtab, setShowtab]= useState(1);

 const handletab = (e)=>{
  setShowtab(e);
    }
    return(
        <React.Fragment>
             <div class="w-100">

             <div class="isslsolutionflex" id='rat'>
             <div class="isslsolutiontext">
                 <div class="isslsolutionheader">
                     Re-think applications;
                      <p>
                         Re-imagine business
                      </p> 
                 </div>
                 <div class="isslsolutionbody">
                     We support brand and products to stand out in this modern age.
                 </div>
             </div>
             <div class="isslsolutionimage">
   
             </div>
         </div>
         <div class="isslsolutionscontainer">
             <div class="soughtsol">
     
     
     <div class="tabslider2">
         <div class="slidercontents">
     
         </div>
     </div>

     
             </div>
             </div>

      <div className="game row p-3 vertical-center-row">
  
        <div className="let col-sm-12 w-90 p-3 align-items-center justify-content-center" >   
        
        

              
       <ul class="mmm nav nav-pills mb-3 mt-1" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
          <button className=  {showtab===1? "nav-link active": "nav-link" }  onClick={()=>handletab(1)}>Banking Solution</button>
          </li>
          <li class="nav-item" role="presentation">
            <button className={ showtab===2 ? "nav-link active": "nav-link"}  onClick={()=>handletab(2)}>Biometrics</button>
          </li>

          <li class="nav-item" role="presentation">
            <button className={ showtab===3 ? "nav-link active": "nav-link"}  onClick={()=>handletab(3)}>CRM Solution</button>
          </li>
          
          <li class="nav-item" role="presentation">
            <button className={ showtab===4 ? "nav-link active": "nav-link"}  onClick={()=>handletab(4)}>Financial Services</button>
          </li>
          <li class="nav-item" role="presentation">
          <button className={ showtab===5 ? "nav-link active": "nav-link"}  onClick={()=>handletab(5)}>Authentication</button>
        </li>
      </ul>

      <div class="tab-content text-dark" id="pills-tabContent">

           {/* start tab 1*/} 
           <div  className= { showtab===1 ? "tab-pane fade show active":"tab-pane fade show"} > 
         <div className='tab-content'>
         <div class="cont-fl d-flex">
         <div>
         <p className='banking'>  Banking system revolution</p>
         <p class="">
       
         From internet banking and mobile banking to real-time core banking and Know Your Customer (KYC) solutions, Africa is witnessing a banking system revolution. Today, competitive banks need to offer a combination of online banking and branch solutions that do everything from allowing a customer to send a mobile payment, to checking the verification of a new customer through KYC rules and regulations.
         </p>
         </div>
         <div className='text-img'>
         <img src={require("../images/bussiness.png")} id="img2"></img>
         </div>

         </div>
         <div class="text">
         ISSL offers a combination of online banking and branch solutions that do everything from allowing a customer to send a mobile payment, to checking the verification of a new customer through KYC rules and regulations.

         </div>
         <div class="cont-cont">
        <div class="now">
        <div>
        <img src={require("../images/house.svg")}></img>
        <p>Core Banking</p>
        <p>ISSL’s core banking solution, IntegraBanking Products, will allow your customers to do just that. What’s more, IntegraBanking will integrate your accounting, transaction handling, customer service and management reporting into one system, making it easier and faster for your employees to handle your customers’ requests. Becoming a more efficient bank has never been so easy!
      <br></br>
      Request Details 
        </p>

        
        
        </div>
        <div>
        <img src={require("../images/house.svg")}></img>
        <p>Core Banking</p>
        <p>ISSL’s core banking solution, IntegraBanking Products, will allow your customers to do just that. What’s more, IntegraBanking will integrate your accounting, transaction handling, customer service and management reporting into one system, making it easier and faster for your employees to handle your customers’ requests. Becoming a more efficient bank has never been so easy!
      <br></br>
      Request Details 
        </p>

        
        
        </div>

        </div>
        <div class="now">
        <div>
        <img src={require("../images/house.svg")}></img>
        <p>Core Banking</p>
        <p>ISSL’s core banking solution, IntegraBanking Products, will allow your customers to do just that. What’s more, IntegraBanking will integrate your accounting, transaction handling, customer service and management reporting into one system, making it easier and faster for your employees to handle your customers’ requests. Becoming a more efficient bank has never been so easy!
      <br></br>
      Request Details 
        </p>

        
        
        </div>
        <div>
    <house/>
        <p>Core Banking</p>
        <p>ISSL’s core banking solution, IntegraBanking Products, will allow your customers to do just that. What’s more, IntegraBanking will integrate your accounting, transaction handling, customer service and management reporting into one system, making it easier and faster for your employees to handle your customers’ requests. Becoming a more efficient bank has never been so easy!
      <br></br>
      Request Details 
        </p>

        
        
        </div>
        </div>
        
         </div>
         </div>
          </div>
          {/* close tab 1*/} 


         {/* start tab 2*/} 
          <div  className= { showtab===2 ? "tab-pane fade show active": "tab-pane fade"} > 
          <div className='tab-content'>
          <div class="cont-fl d-flex">
          <div>
          <p className='banking'>Integration at a low-cost</p>
          <p class="">
        
          Biometrics technology has become a fast and reliable solution for access control, duplicate identity and time and attendance challenges. From an access control system for warehouses and company computers to eliminating “ghost workers”, ISSL can integrate a low-cost biometric verification system into your technology platform that will help you improve your security and boost your profitability.          </p>
          </div>
          <div>
          <img src={require("../images/bussiness.png")}></img>
          </div>
 
          </div>
          <div class="text">
          ISSL offers a combination of online banking and branch solutions that do everything from allowing a customer to send a mobile payment, to checking the verification of a new customer through KYC rules and regulations.
 
          </div>
          <div class="cont-cont">
         <div class="now">
         <div>
         <img src={require("../images/house.svg")}></img>
         <p>Time and attendance</p>
         <p>
         Losing money due to time and attendance management issues? Employees using time punch cards that can be easily lost, forgotten or “buddy punched”? HR team spend too much time on payroll and attendance disputes? “Ghost workers” on your payroll? In partnership with ZKTeco and FingerTec, we can solve your time attendance issues by implementing biometrics software that keeps your employees honest, improve efficiency and boost profitability.       <br></br>
       Request Details 
         </p>
 
         
         
         </div>
         <div>
         <img src={require("../images/house.svg")}></img>
         <p>Access Control</p>
         <p>
         Biometric software for access control can be used for controlling access to workstations, networks and physical locations. Whether you have one facility that requires restricted access, or a number of sites, you can use biometric verification technology to limit access and see real-time who is gaining access. Through our partner, we most commonly install fingerprint readers and facial recognition devices. These can replace card and PIN identification systems, both of which can be lost or stolen, increasing your risk exposure. Access control via biometric verification is easy to use, secure and fast.
Request Details
       <br></br>
       Request Details 
         </p>
 
         
         
         </div>
 
         </div>
        
         
          </div>
          <div className='products'>
          <div className='product1'>
          <div>our Products</div>
          <div>view all</div>
          </div>
          <div className='product1'>
          <div>
          <img src={require("../images/Rect1.png")}></img>
      
          </div>
          <div>
          <img src={require("../images/Rect2.png")}></img>
        
          </div>
          <div>
          <img src={require("../images/Rect3.png")}></img>
      
          </div>
          <div>
          <img src={require("../images/Rect4.png")}></img>
         
          </div>
          
          </div>
          
          </div>
          </div>
          
          </div>
          {/* close tab 2*/} 


           {/* start tab 3*/} 
           <div  className= { showtab===3 ? "tab-pane fade show active": "tab-pane fade"} > 
           <div className='tab-content'>
           <div class="cont-fl d-flex">
           <div>
           <p className='banking'> CASgenesis - CRM Solution</p>
           <p class="">
         
           From sales force automation to channel management, we deploy the award-winning genesisWorld CRM from our CRM partner, CAS-CRM, to provide flexible solutions that can be tailored precisely to your needs and seamlessly extended as your business expands. With an extensive scope of features that gives you valuable insight into your operations and new opportunities.The solution is equipped with many customizable features, has a familiar feel, and is very affordable.           </p>
           </div>
           <div>
           <img src={require("../images/bussiness.png")}></img>
           </div>
  
           </div>
           <div class="text">
           Our CRM solution for marketing, sales, project management and customer relations is your gateway to motivated employees, satisfied customers and increased revenue.  
           </div>
           <div class="cont-cont">
          <div class="now">
          <div>
          <img src={require("../images/house.svg")}></img>
          <p className='sales'>Sales Force Automation</p>
          <p>ISSL’s core banking solution, IntegraBanking Products, will allow your customers to do just that. What’s more, IntegraBanking will integrate your accounting, transaction handling, customer service and management reporting into one system, making it easier and faster for your employees to handle your customers’ requests. Becoming a more efficient bank has never been so easy!
        <br></br>
        Request Details 
          </p>
  
          
          
          </div>
          <div>
          <img src={require("../images/house.svg")}></img>
          <p className='sales'>Events Management</p>
          <p>
          Our event management software lets you manage your events using just one simple tool. Instead of relying on multiple tools to properly manage all event activities. This means your everyone can access and share information remotely, at any time of day or night.        <br></br>
        Request Details 
          </p>
  
          
          
          </div>
  
          </div>
          <div class="now">
          <div>
          <img src={require("../images/house.svg")}></img>
          <p>Project Management</p>
          <p className='sales'>
          ISSL’s project management software, developed by CAS CRM, a leading provider of CRM solutions, lets you manage your projects using just one simple tool. Instead of relying on multiple software packages for emailing, managing customer information, billing and more, our software solution centralizes this information and makes it available 24/7 from anywhere around the world.        <br></br>
        Request Details 
          </p>
  
          
          
          </div>
          <div>
      <house/>
          <p className='sales'>Partnership Relationship</p>
          <p>
          Channel management using specialized CRM software can significantly increase your channel sales. By facilitating joint marketing campaigns, order processing, lead management and sales forecasting, you can boost partner loyalty and expand reseller-based revenue. We offer channel management CRM software that does all that.        <br></br>
        Request Details 
          </p>
  
          
          
          </div>
          </div>
          
           </div>
           </div>
       
       
          </div>
          {/* close tab 3*/} 
          <div  className= { showtab===4 ? "tab-pane fade show active":"tab-pane fade show"}   class="p-3 mb-2 bg-info text-white"> 
          <p>Tab 1 Content</p>
        <p class="bg-black-400">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
       praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
       vel voluptatum?
        </p>
     </div>
     <div  className= { showtab===5 ? "tab-pane fade show active":"tab-pane fade show"} > 
     <p>Tab 1 Content</p>
   <p class="text-white bg-dark">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
  praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
  vel voluptatum?
   </p>
</div>
          


     </div>

   </div>     
</div>
            </div>
            <Footer/>

        </React.Fragment>
    );
}
export default Test;
