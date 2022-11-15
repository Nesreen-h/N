import { Component } from "react";
import { Carousel, Container, Card, Button } from "react-bootstrap";
import HomeStyle from "./HomeStyled";
import Dip1 from "../images/dip1.png";
import Dip2 from "../images/dip2.png";
import Dip3 from "../images/dip3.png";
import Train1 from "../images/train1.png";
import Train2 from "../images/train2.png";
import Train3 from "../images/train3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeHigh, faUsers, faUserGraduate, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Logo from "../images/logo.png";

class Home extends Component {
  render() {
    return (
      <HomeStyle className="App-Home">
        <section className="App-Landing">
          <Carousel className="Slider">
            <Carousel.Item className="Slider-Image">
              <div className="carousel-inner one">
                <Carousel.Caption className="Slider-Text">
                  <h3>تعلم التسويق الالكتروني باحترافية</h3>
                </Carousel.Caption>
              </div>

            </Carousel.Item>
            <Carousel.Item className="Slider-Image">
              <div className="carousel-inner two">
                <Carousel.Caption className="Slider-Text">
                  <h3>دبلوم كتابة المحتوى التسويقي</h3>
                </Carousel.Caption>
              </div>

            </Carousel.Item>
            <Carousel.Item className="Slider-Image">
              <div className="carousel-inner three">
                <Carousel.Caption className="Slider-Text">
                  <h3>دبلوم الاخراج السينيمائي</h3>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </section>

        <section className="App-Deploma">
          <Container>
            <h2 className="Main-Heading">الدبلومات المميزة</h2>
            <div className="Deploma-Content row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <Card style={{ width: "18rem" }} className="Box">
                  <Card.Img variant="top" src={Dip1} className="Card-Image" />
                  <Button variant="primary" className="Hover-Btn">
                    إقرأ النفاصيل
                  </Button>
                  <img src={Train1} alt="train" className="Train-Image" />
                  <h5 className="Train-Name">المُدرب \ ماجد</h5>
                  <Card.Body>
                    <Card.Title className="Card-Title">
                      تعلم التسويق الإلكتروني باحترافية
                    </Card.Title>
                    <div className="Card-Bottom">
                      <span>250.000 ر.س</span>
                      <Button variant="primary" className="Card-Btn">
                        سجل الأن
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <Card style={{ width: "18rem" }} className="Box">
                  <Card.Img variant="top" src={Dip2} className="Card-Image" />
                  <Button variant="primary" className="Hover-Btn">
                    إقرأ النفاصيل
                  </Button>
                  <img src={Train2} alt="train" className="Train-Image" />
                  <h5 className="Train-Name">المُدرب \ محمد أبو القمبز</h5>
                  <Card.Body>
                    <Card.Title className="Card-Title">
                      دبلوم كتابة المحتوى التسويقي
                    </Card.Title>
                    <div className="Card-Bottom">
                      <span>300.000 ر.س</span>
                      <Button variant="primary" className="Card-Btn">
                        سجل الأن
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <Card style={{ width: "18rem" }} className="Box">
                  <Card.Img variant="top" src={Dip3} className="Card-Image" />
                  <Button variant="primary" className="Hover-Btn">
                    إقرأ النفاصيل
                  </Button>
                  <img src={Train3} alt="train" className="Train-Image" />
                  <h5 className="Train-Name">المُدرب \مالك عتمان</h5>
                  <Card.Body>
                    <Card.Title className="Card-Title">
                      دبلوم الإخراج السينيمائي
                    </Card.Title>
                    <div className="Card-Bottom">
                      <span>300.000 ر.س</span>
                      <Button variant="primary" className="Card-Btn">
                        سجل الأن
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        <section className="App-Blog">
          <Container>
            <div className="Blog-Content">
              <div className="text">
                <h2 className="Main-Heading">كلمة المؤسس والرئيس التنفيذي</h2>
                <h4>عبد الله سعيد باقلاقل</h4>
                <p>
                  الشَّغَف لطالما كَان وقودنا نَحْو النَّجَاح ، لِهَذَا استثمرنا
                  فِي كُلِّ مَا نُمْلَك ، مِنْ أَجْلِ النُّهُوض بفنون الْكِتَابَة
                  و التَّأْلِيف فِي الْعَالَمِ العَرَبِيِّ ، فَقُمْنَا بِدَمْج
                  رَوْحِ الْمُبَادَرَة مَعَ الِالْتِزَامِ ، و صَنَعْنَا نَمُوذَجًا
                  يُحْتَذَى بِهِ فِي حُبِّ الْعَمَل وَالْإِتْقَان ، فَجَعَلْنَا
                  نواكب الْإِيقَاع السَّرِيع لِلتَّطَوُّر الْعَالَمِيّ ، و
                  اتَّخَذْنَا مِنْ الْأَصَالَة و الرقمنة أَهَمّ ركائزنا .
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="App-Stats">
          <Container>
            <div className="Stats-Content row">
              <div className="col-lg-3 col-md-6 col-sm-12 Box">
                <FontAwesomeIcon icon={faGaugeHigh} className="Icon"></FontAwesomeIcon>
                <h3>100%</h3>
                <h4>معدل النجاح</h4>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 Box">
                <FontAwesomeIcon icon={faUsers} className="Icon"></FontAwesomeIcon>
                <h3>10</h3>
                <h4>فريق العمل</h4>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 Box">
                <FontAwesomeIcon icon={faUser} className="Icon"></FontAwesomeIcon>
                <h3>200</h3>
                <h4>طالب</h4>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 Box">
                <FontAwesomeIcon icon={faUserGraduate} className="Icon"></FontAwesomeIcon>
                <h3>35</h3>
                <h4>كتاب منشور للخريجين</h4>
              </div>
            </div>
          </Container>
        </section>

        <section className="App-Contact">
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
        </section>

        <section className="App-About">
          <Container>
            <div className="About-Content">
              <div className="About-Head">
                <img src={Logo} alt="logo"></img>
                <h2>أكاديمية أجاد</h2>
              </div>
              <p>
                اكاديمية اجاد علامة تجارية ملك شركة اجاد المحدودة. مسجلة في سجل
                المملكة المتحدة لمقدمي خدمات التعليم برقم 10088684
              </p>
              <p>شركة مسجلة في انجلترا وويلز برقم 13063025 .</p>
              <div className="About-Foot">
                <span>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="Icon"
                  ></FontAwesomeIcon>
                  <span>لديك أي استفسار؟</span>
                </span>
                <span>00966550087807</span>
              </div>
            </div>
          </Container>
        </section>
      </HomeStyle>
    );
  }
}

export default Home;
