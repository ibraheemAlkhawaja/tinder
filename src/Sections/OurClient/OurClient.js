import "./OurClient.css";
import {motion} from "framer-motion"
import {  fadeInOurClient } from "../../Utils/Motion/motion";
import DataOurClient from "../../Assets/DataOurClient/DataOurClient";
import { useTranslation } from "react-i18next";
const OurClient =()=>{
    const { t, i18n } = useTranslation();
    return(
        <>
        <div className="container ourclient">
        <p className="title-ourclient">{t("Our Client")}</p>
        <div className="row row-cols-lg-8 row-cols-md-6 row-cols-sm-4">
            {DataOurClient.map((item)=>(
                <motion.div
                variants={fadeInOurClient}
                initial="initial"
                // animate="animate"
                transition={{
                    duration: 1
                }}
                whileInView="animate" className="col" key={item.id}>
                               <div className="img-ourclient">
                    <img src={item.img} />
                </div>
                    </motion.div>
            ))}
        </div>
        </div>
        </>
    )
}
export default OurClient