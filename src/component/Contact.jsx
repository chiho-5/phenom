import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
// import formInfo from "../content/form.json"
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next';




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
    <div data-aos= "fade-up" style={{ marginBottom:" 5rem", backgroundColor: "rgb(24, 33, 109)", color: "white"  }} class='container'>
        <div class="row  d-flex align-items-center p-5">
              <div class="col-md-6 ">
                    <h6>{t("contactForm")}</h6>
                    <p style={{ fontSize: "21px" }}>{t("pContact")}</p>
              </div>
              <div class="col-md-6 form">
                
                    <button class='BTN'>{t("submit")}</button>
                
                
              </div>
        </div>
        
    </div>
  )
}

export default Contact