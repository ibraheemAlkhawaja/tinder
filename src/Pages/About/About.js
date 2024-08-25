import "./About.css"
import img1 from "../../Assets/img/Rectangle 56.png";
import { Footer, OurClient } from "../../Sections";
import { useTranslation } from "react-i18next";
const About = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className="container about center">
                <div className="row row-cols-md-2 row-cols-sm-1">
                    <div className="col">
                        <div className="text-about">
                            <h3>{t("DRIVEN BY SOLUTIONS")}</h3>
                            <p><span>{t("Customer-focused")}:</span> {t("We are driven by the desire to meet the specific needs and challenges of customers. We prioritize understanding customers requirements and finding effective solutions to address them.")}<br/>
                                <span>{t("Problem-solving")}:</span> {t("We are determined to find solutions, dedicated to overcoming obstacles that may arise during the projects")}.<br/>
                                <span>{t("Expertise and knowledge")}:</span> {t("We have the necessary expertise and knowledge in the finishing & interior fit-out industries. We are trusted by international brands that offer technical materials and guidance to ensure successful project outcomes")}.<br/>
                                <span>{t("Adaptability")}:</span>{t("We are willing to customize our offerings to meet the unique requirements of each project")}.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img-about">
                            <img src={img1} />
                        </div>
                        <div className="content-about center">
                            <div className="desc-one-about">
                            <p>{t("over")}</p>
                            <p>500</p>
                            </div>
                            <div className="desc-two-about">
                                <p>{t("projects")}</p>
                                <p>{t("around Kuwait and GCC countries")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurClient />
            <Footer />
        </>

    )
}
export default About