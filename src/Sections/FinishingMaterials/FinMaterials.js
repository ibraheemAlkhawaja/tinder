import "./FinMaterials.css";
import { Footer } from "../index";
import { motion } from "framer-motion";
import {  fadeleftMat, faderightMat } from "../../Utils/Motion/motion";
import DataMaterials from "../../Assets/DataMaterials/DataMaterials";
const FinMaterials = () => {
  return (
    <>
      <div className="container finmaterials">
        {DataMaterials.map((item) => (
          <div className="row row-cols-md-2 row-cols-1">
            <div className="col order-1">
              <motion.div
                variants={fadeleftMat}
                initial="initial"
                // animate="animate"
                transition={{
                  duration: 1,
                }}
                whileInView="animate"
                className="img-finmaterials"
              >
            <img src={item.img} />
              </motion.div>
            </div>
            <div className="col order-2">
                        <motion.div
                            variants={faderightMat}
                            initial="initial"
                            // animate="animate"
                            transition={{
                                duration: 1.5
                            }}
                            whileInView="animate"
                            className="content-finmaterials">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default FinMaterials;
