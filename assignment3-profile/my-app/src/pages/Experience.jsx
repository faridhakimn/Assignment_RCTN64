
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

const Experience = () => {
    return (
        <div>
            <br />
            <Card  bg='secondary'>
            <Card.Header><b>My Experience</b></Card.Header>
            <Card.Body>
                <Card.Title>2016 - 2020</Card.Title>
                <Card.Text>Software Tester - PT. Astra Graphia</Card.Text>
            </Card.Body>
            
            <Card.Body>
                <Card.Title>2020 - Now</Card.Title>
                <Card.Text>IT Developer - PT. PermataBank</Card.Text>
            </Card.Body>
        </Card>
      </div>
    )
}

export default Experience