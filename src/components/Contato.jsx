import React from 'react';
import { Card } from 'react-bootstrap';
import { BsPhoneFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { GrMapLocation } from 'react-icons/gr';

function Contato() {
  return (
    <div
      id="contato"
      className="bg-black-1 items-center flex justify-around py-24 px-32 w-full flex-wrap"
    >
      <h2 className="text-white text-center w-full pb-8">Meu Contato</h2>

      <Card
        bg="dark"
        text="white"
        className="m-1 p-5 items-center !min-w-[222px] w-72"
      >
        <Card.Body className="flex items-center text-center p-0 flex-col justify-center w-full">
          <Card.Title className="text-center">
            <BsPhoneFill className="text-black" />
          </Card.Title>
          <Card.Subtitle className="text-xl font-extrabold">
            TELEFONE
          </Card.Subtitle>
          <hr className="w-full" />
          <Card.Text className="text-gray-500">73 99944-6310</Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg="dark"
        text="white"
        className="m-1 p-5 items-center !min-w-[222px] w-72"
      >
        <Card.Body className="flex items-center text-center p-0 flex-col justify-center w-full">
          <Card.Title className="text-center">
            <MdOutlineEmail className="text-black" />
          </Card.Title>
          <Card.Subtitle className="text-xl font-extrabold">
            E-MAIL
          </Card.Subtitle>
          <hr className="w-full" />
          <Card.Text className="text-gray-500">
            pereiravitor1218@gmail.com
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg="dark"
        text="white"
        className="m-1 p-5 items-center !min-w-[222px] w-72"
      >
        <Card.Body className="flex items-center text-center p-0 flex-col justify-center w-full">
          <Card.Title className="text-center">
            <GrMapLocation className="text-black" />
          </Card.Title>
          <Card.Subtitle className="text-xl font-extrabold">
            ENDEREÇO
          </Card.Subtitle>
          <hr className="w-full" />
          <Card.Text className="text-gray-500">
            Teixeira de Freitas - BA
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  );
}

export default Contato;
