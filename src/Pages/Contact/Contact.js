import { Messages } from "../../Components";
import { Footer } from "../../Sections";
import { useTranslation } from "react-i18next";
import "./Contact.css";
const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="container contact">
        <div className="row row-cols-md-2 row-cols-1">
          <div className="col">
            <div className="content-contact">
              <div className="call-contact">
                <h3>{t("CALL")}</h3>
                <p>188214477 </p>
              </div>
              <div className="address-contact">
                <h3>{t("ADDRESS")} </h3>
                <p>
                  {t("Farwaniya- Al Dajeej")}, <br />
                  {t("Al Sayer Complex, Kuwait")}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <h3 className="text-contact">{t("LOCATION")}</h3>
            <div className="img-contact">
                <div className="map">
                <iframe
                  width="100%"
                  height="440"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20GraftonFarwaniya-%20Al%20Dajeej,%20Al%20Sayer%20Complex,%20Kuwait%20Street,%20Dublin,%20Ireland+(architecture)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">{t("gps trackers")}</a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Messages />
      <Footer />
    </>
  );
};
export default Contact;
