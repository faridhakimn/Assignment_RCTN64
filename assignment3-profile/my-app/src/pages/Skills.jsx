import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
const Skills = () => {
    return (
        <div>
        <br />
        <Card  bg='secondary'>
        <Card.Header><b>My Skills</b></Card.Header>
        <Card.Body >
            <Card.Text>
                .NET Developer<br />
                C# Programming
            </Card.Text>
        </Card.Body>
    </Card>
  </div>
    )
}

export default Skills