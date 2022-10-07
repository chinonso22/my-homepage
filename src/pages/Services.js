import React,{useState} from 'react';
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

import "./About"
import About from './About';

const Services = () => {


  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `newPath`; 
    navigate(path);
  }

  return (
    <>
    



            <div class="isslsolutionflex">
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
    
                <div class="tab-slider--nav">
                    <ul class="tab-slider--tabs slidercontents">
                    <li class="tab-slider--trigger" onClick={() => About.push('/About')}>Banking Solution</li>
                        <li class="tab-slider--trigger active"  rel="tab1">Banking Solution</li>
                       <Link to='/About'> <li class="tab-slider--trigger "  rel="tab2">Biometrics</li></Link>
                        <li class="tab-slider--trigger "  rel="tab3">CRM Solution</li>
                        <li class="tab-slider--trigger "  rel="tab4"> Financial Services</li>
                        <li class="tab-slider--trigger "  rel="tab5">Authentication</li>
    
    
                    </ul>
                </div>
    
            </div>
            </div>


        
          

                        
    </> 






    







  )
}

export default Services