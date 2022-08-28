
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

const Awards = () => {
    return (
        <div>
            <br />
            <Card  bg='secondary'>
            <Card.Header><b>Award List</b></Card.Header>
            <Card.Body>
                <Card.Title>2021</Card.Title>
                <Card.Text>Juara 1 - Lomba makan kerupuk</Card.Text>
            </Card.Body>
            
            <Card.Body>
                <Card.Title>2022</Card.Title>
                <Card.Text>Juara 1 - Lomba balap karung</Card.Text>
            </Card.Body>
        </Card>
      </div>
    )
}

export default Awards