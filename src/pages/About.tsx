import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function About() {
  return (
    <>
      <Card>
        <Card.Header>About Me</Card.Header>
        <Card.Body>
          <Card.Title>Matias Stefanutti</Card.Title>
          <Card.Text>
            I've developed this web application and am eager to discuss my
            approach, decisions, and potential enhancements in an upcoming
            interview.
          </Card.Text>
          <Button
            variant="primary"
            href="https://www.linkedin.com/in/matiasstefanutti/"
            target="blank"
          >
            Check my Linkedin profile
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
