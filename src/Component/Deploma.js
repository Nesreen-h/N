import { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Dip1 from "../images/dip1.png";
import Dip2 from "../images/dip2.png";
import Dip3 from "../images/dip3.png";
import Train1 from "../images/train1.png";
import Train2 from "../images/train2.png";
import Train3 from "../images/train3.png";

class SecOne extends Component {
  render() {
    return (
      <SecOneStyle className="App-Deploma">
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
      </SecOneStyle>
    );
  }
}

export default SecOne;
