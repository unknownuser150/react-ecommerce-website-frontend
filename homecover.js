
import Slider from "./slider"

import "./home.css"
import mainimg1 from './images/ecommerce_logo2.png'

function Home(){
    return(

        <>
         <div className="container-fluid main-image row">
        <div className="col-lg-12 logo  mx-auto align-self-center justify-content-center">
          <div className="col-lg-8  mx-auto  ">
            <img src={mainimg1} alt="Ecommerce logo/" 
              className="logoimg img-fluid mx-auto  align-self-center justify-content-center " />
    
    
          </div>
          <p className="text-center text-white fs-6 fw-semibold display-6 ">Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quod aliquid fugit veniam voluptate ducimus. Non animi
            .</p>
        </div>
       </div>
        <div>
      <h1 class="display-3 text-center fw-semibold">Featured Product</h1>
      <div className="App">
          <Slider />
         </div>
    </div>
        </>
   
        )}

export default Home;