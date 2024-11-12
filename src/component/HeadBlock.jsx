import React, {useEffect} from 'react'
import Aos from 'aos'
import dev from "../assests/phenom1.jpeg"
import 'aos/dist/aos.css'

import { useTranslation } from 'react-i18next';

const HeadBlock = () => {
    const [ t, i18n ] = useTranslation("global");
    

    useEffect(() => {
        Aos.init({
            duration: 3000
        })
    }, []);
  return (
  <div className="container">
  <div style={{ padding: "50px 0px" }} data-aos="fade-right" className="row">
    <div style={{ padding: "20px" }} className="intro col-md-6">
      {/* <button onClick={()=>{HandelchangeLanguage("en")}}>English</button>
      <button onClick={()=>{HandelchangeLanguage("ar")}}>عربية</button> */}
      <h6>{t("title")}</h6>
      <p>{t("text")}</p>
      <div className="d-flex justify-content-center mt-3">
          <a href='https://chat.whatsapp.com/E1hNLKxhucc9SR0Sv7ecoe'>
        <button class="BTN">Contact Us</button>
              </a>
{/*         <button style={{ color: "rgb(46, 24, 106)" }} className="BTN bg-white ms-2">Coming Soon</button> */}
      </div>
    </div>
    <div className="d-flex justify-content-center align-items-center col-md-6">
      <div style={{ borderRadius: "50%", overflow: "hidden", width: "100%", maxWidth: "400px" }}>
        <img style={{ width: "100%", height: "auto" }} src={dev} alt="Developer" />
      </div>
    </div>
  </div>
</div>


  )
}

export default HeadBlock
