import React from "react";
import { Container, Row, Col } from "bootstrap-4-react";
import { Card } from "bootstrap-4-react";

const BootstrapTemplate = () => {
  return (
    <>
      <h1 className="text-center my-5">Bootstrap Template</h1>
      <Container>
        <Row>
          <Col col="sm">
            <Card>
              <Card.Header>Feature</Card.Header>
              <Card.Image
                src="https://picsum.photos/200/300"
                style={{ height: 200 }}
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle mb="2" text="muted">
                  Card subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col col="sm">
            <Card>
              <Card.Header>Feature</Card.Header>
              <Card.Image
                src="https://picsum.photos/200/301"
                style={{ height: 200 }}
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle mb="2" text="muted">
                  Card subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col col="sm">
            <Card>
              <Card.Header>Feature</Card.Header>
              <Card.Image
                src="https://picsum.photos/200/302"
                style={{ height: 200 }}
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Subtitle mb="2" text="muted">
                  Card subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BootstrapTemplate;
