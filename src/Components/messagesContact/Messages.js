import "./Messages.css"
import { useTranslation } from "react-i18next";
const Messages =()=>{
    const { t, i18n } = useTranslation();
    return(
        <>
        <div className="container messages">
            <div className="row row-cols-md-2 row-cols-sm-1">
                <div className="col">
                    <div className="text-messages">
                        <input type="text" placeholder={t("write here your message")} />
                    </div>
                </div>
                <div className="col">
                    <div className="content-messages">
                        <h3>{t("SEND A MESSAGE")}</h3>
                        <div className="input-messages">
                            <input type="text" placeholder={t("your name")} />
                        </div>
                        <div className="input-messages">
                            <input type="text" placeholder={t("your email")} />
                        </div>
                        <div className="input-messages">
                            <input type="text" placeholder={t("contact number")} />
                        </div>
                        <button>{t("send")}</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Messages