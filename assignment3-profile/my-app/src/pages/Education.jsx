
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

const Education = () => {
    return (
        <div>
            <br />
            <Card  bg='secondary'>

            <Card.Header><b>My Education</b></Card.Header>
            <Card.Body>
                <Card.Title>2008 - 2012</Card.Title>
                <Card.Text>SMA N 11 Yogyakarta</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Title>2016 - 2020</Card.Title>
                <Card.Text>Telkom University</Card.Text>
            </Card.Body>
        </Card>
      </div>
    )
}

export default Education