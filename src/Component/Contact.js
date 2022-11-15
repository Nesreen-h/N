import { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

class SecFour extends Component {
  render() {
    return (
      <SecFourStyle className="App-Contact">
        <Container>
          <div className="Contact-Content row">
            <div className="col-lg-6 col-md-12 col-sm-12 Send-Part">
              <h2 className="Main-Heading">مراسلتنا</h2>
              <p>
                فريقنا مسخر لخدمتك , نرجوا إرسال رسالة لطلبات أو إقتراحاتنك
                وإستفسارك , وتأكد بأنه محل إهتمامانا
              </p>
              <div className="Send-Content">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="user"
                      className="form-control"
                      placeholder="*أدخل الإسم"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="email"
                      name="mail"
                      className="form-control"
                      placeholder="*أدخل الإيميل"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="sub"
                    className="form-control"
                    placeholder="*الموضوع"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="msg"
                    placeholder="رسالتك"
                  ></textarea>
                </div>
                <div className="form-group button">
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                    value="إرسال"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 Call-Part">
              <div className="Call-Content">
                <h2 className="Main-Heading">إتصل بنا</h2>
                <p>
                  سعدنا بزيارتكم أكاديمية إجادة للتدريب والتطوير , ونتشرف
                  بخدمتكم
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 Sec">
                    <div className="Con">
                      <h4>قسم التسويق والمبيعات</h4>
                      <div>
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="Icon"
                        ></FontAwesomeIcon>
                        <span>0565464315</span>
                      </div>
                    </div>
                    <div className="Con">
                      <h4>الإدارة العامة</h4>
                      <div>
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="Icon"
                        ></FontAwesomeIcon>
                        <span>0565464315</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 Sec">
                    <div className="Con">
                      <h4>خدمة العناية بالعملاء</h4>
                      <div>
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="Icon"
                        ></FontAwesomeIcon>
                        <span>0565464315</span>
                      </div>
                    </div>
                    <div className="Con">
                      <h4>شؤون الطلاب</h4>
                      <div>
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="Icon"
                        ></FontAwesomeIcon>
                        <span>0565464315</span>
                      </div>
                    </div>
                  </div>
                  <div className="Con">
                    <h4>العنوان الرسمي</h4>
                    <div>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="Icon"
                      ></FontAwesomeIcon>
                      <span className="Loc">
                        Lytchett House, 13 Freeland Park, Wareham Road, Poole
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SecFourStyle>
    );
  }
}

export default SecFour;
