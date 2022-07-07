import React from 'react';
import { Card } from 'react-bootstrap';
import { BsPhoneFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { GrMapLocation } from 'react-icons/gr';
import './Contato.css';

class Contato extends React.Component {
  render() {
    return (
      <div id="contato" className="">
        <h2>Contato</h2>
        <Card style={{ width: '18rem' }} bg="dark" text="white">
          <Card.Body>
            <Card.Title><BsPhoneFill className="card-icon" /></Card.Title>
            <Card.Subtitle>TELEFONE</Card.Subtitle>
            <hr />
            <Card.Text>73 99944-6310</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} bg="dark" text="white">
          <Card.Body>
            <Card.Title><MdOutlineEmail className="card-icon" /></Card.Title>
            <Card.Subtitle>E-MAIL</Card.Subtitle>
            <hr />
            <Card.Text>pereiravitor1218@gmail.com</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} bg="dark" text="white">
          <Card.Body>
            <Card.Title><GrMapLocation className="card-icon" /></Card.Title>
            <Card.Subtitle>ENDEREÇO</Card.Subtitle>
            <hr />
            <Card.Text>Teixeira de Freitas - BA</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Contato;
