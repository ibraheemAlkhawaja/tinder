import "./Footer.css"
import { useTranslation } from "react-i18next";
const Footer =()=>{
    const { t, i18n } = useTranslation();
    return(
        <>
        <div className="container-fluid footer">
            <p className="title-footer">© {t("Copyright 2024 - ibraheem.kh")}</p>
        </div>
        </>
    )
}
export default Footer