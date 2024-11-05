import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
// import formInfo from "../content/form.json"
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next';
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";




const Contact = () => {
    const { register, handleSubmit, watch, formState:{errors}  } = useForm()
    const suusss = (data) => console.log(data)
    
    console.log(watch("Name"))
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, []);

    const [ t, i18n ] = useTranslation("global");

  return (
<div data-aos="fade-up" style={{ marginBottom: "5rem", backgroundColor: "rgb(24, 33, 109)", color: "white" }} className="container">
  <div className="row d-flex align-items-center p-5">
    <div className="col-md-6">
      <h6>{t("contactForm")}</h6>
      <p style={{ fontSize: "21px" }}>{t("pContact")}</p>
    </div>
    <div className="col-md-6 form d-flex justify-content-center">
      <div className="button-group d-flex">
        <a
          href="https://chat.whatsapp.com/E1hNLKxhucc9SR0Sv7ecoe"
          target="_blank"
          rel="noopener noreferrer"
          className="BTN mx-2 d-flex align-items-center justify-content-center"
          style={{ fontWeight: "bold", padding: "12px 20px", fontSize: "24px", borderRadius: "8px", backgroundColor: "white", color: "rgb(24, 33, 109)" }}
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://t.me/+-CG28QA9DYA3YzQ8"
          target="_blank"
          rel="noopener noreferrer"
          className="BTN mx-2 d-flex align-items-center justify-content-center"
          style={{ fontWeight: "bold", padding: "12px 20px", fontSize: "24px", borderRadius: "8px", backgroundColor: "white", color: "rgb(24, 33, 109)" }}
        >
          <FaTelegramPlane />
        </a>
      </div>
    </div>
  </div>
</div>


  )
}

export default Contact