import { NavLink } from "react-router-dom"
import "./Headers.css"
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import flag2 from "../../Assets/img/Flag_of_Syria.svg.png"
import flag1 from "../../Assets/img/flag_of_american-svg.png"
import logo from    "../../Assets/img/logo.png"
import { useEffect } from "react";
const Headers = () => {
    const { t, i18n } = useTranslation();
    const body = document.querySelector("body")
    const changeEn = ()=>{
        i18n.changeLanguage('en')
    }
    const changeAR =()=>{
        i18n.changeLanguage('ar')
    }
//     useEffect(()=>{
// if(i18n.language == "ar"){
//     body.dir="rtl"
// }
// else{
//     body.dir="ltr"
// }
//     },[i18n.language])

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <div className="nav-logo">
                            <img src={logo} />
                        </div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to="/about">{t("ABOUT")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/departments">{t("DEPARTMENTS")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="finmaterials">{t("MATERIALS")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="projects">{t("PROJECTS")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact">{t("CONTACT")}</NavLink>
                            </li>
                        </ul>
                        <div className="nav-drop">
                        <div class="btn-group">
                            <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <MdLanguage /> {t("language")} 
                            </button>
                            <ul class="dropdown-menu">
                                <li onClick={changeEn}><div className="img-flag center"><img src={flag1} /></div>english</li>
                                <li onClick={changeAR}><div className="img-flag center"><img src={flag2} /></div>arabic</li>
                            </ul>
                        </div>
                    </div>
                    </div>

                </div>
            </nav>
        </>
    )
}
export default Headers