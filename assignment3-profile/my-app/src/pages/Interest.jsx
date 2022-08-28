import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';

const Interest = () => {
    return (
        <div>
            <br />
            <Card  bg='secondary'>

            <Card.Header><b>My Interest</b></Card.Header>
            <Card.Body >
                <Card.Text>
                    Music<br />
                    Video Games<br />
                    Films
                </Card.Text>
            </Card.Body>
        </Card>
      </div>
    )
}

export default Interest