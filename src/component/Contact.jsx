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
  <div data-aos="fade-up" style={{ marginBottom: "5rem", backgroundColor: "rgb(24, 33, 109)", color: "white" }} className="container">
  <div className="row d-flex align-items-center p-5">
    <div className="col-md-6">
      <h6>{t("contactForm")}</h6>
      <p style={{ fontSize: "21px" }}>{t("pContact")}</p>
    </div>
    <div className="col-md-6 form d-flex justify-content-center">
      <div className="button-group d-flex">
        <button className="BTN mx-2">{t("submit")}</button>
        <button className="BTN mx-2">{t("submit")}</button>
        <button className="BTN mx-2">{t("submit")}</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact