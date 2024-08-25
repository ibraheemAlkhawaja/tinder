import "./Departments.css";
import { Footer } from "../../Sections";
import { motion } from "framer-motion";
import { fadeleft, faderight } from "../../Utils/Motion/motion";
import dataDepartment from "../../Assets/dataDepartment/DataDepartment"
import { useTranslation } from "react-i18next";
const Departments = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
        <div className="container departments">
            {dataDepartment.map((item)=>(
                <div className="row row-cols-md-2 row-cols-1" key={item.id}>
                    <div className="col">
                    <motion.div
                    variants={fadeleft}
                    initial="initial"
                     animate="animate"
                    transition={{
                        duration :1
                    }}
                    whileInView="animate"
                    className="img-departments">
                        <img src={item.img} />
                    </motion.div>
                </div>
                <div className="col">
                    <motion.div
                    variants={faderight}
                    initial = "initial"
                    animate="animate"
                    transition={{
                        duration :1
                    }}
                    whileInView="animate"
                    className="content-departments">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <div className="btn-departments">
                            <p>projects <img src={item.arrowBtn} /></p>
                        </div>
                    </motion.div>
                </div>
                </div>
            ))}
            </div>
            <Footer />
        </>
    )
}
export default Departments