import React, {useEffect} from 'react'
import middleBlock from "../content/middleBlock.json"
import Aos from 'aos'
import  'aos/dist/aos.css'
import { useTranslation } from 'react-i18next'
const MiddelBlock = () => {
    const [t] = useTranslation("global")
    useEffect(() => {
        Aos.init({
            duration: 3000
        })
    }, []);
  return (
    <div style={{ margin: "100px auto" }} data-aos = "fade-up" class='text-center middl container'>
        <h6>{t("titleMidel")}</h6>
        <p> {t("textMidel")} </p>
        <a href="https://chat.whatsapp.com/E1hNLKxhucc9SR0Sv7ecoe">
        <button class='BTN'>{t("buttonMidel")} </button>
</a>
    </div>
  )
}

export default MiddelBlock
