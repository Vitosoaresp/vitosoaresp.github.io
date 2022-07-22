import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { BsPhoneFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { GrMapLocation } from 'react-icons/gr';

function Contato() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const submitEmail = e => {
    e.preventDefault();
    window.open(
      `mailto:pereiravitor1218@gmail.com?subject=${assunto}&body=${mensagem}`
    );
    setNome('');
    setEmail('');
    setAssunto('');
    setMensagem('');
  };

  return (
    <div
      id="contato"
      className="bg-black-1 items-center flex flex-col py-16 px-32 w-full"
    >
      <h2 className="text-white text-center w-full pb-8">CONTATOS</h2>
      <form className="flex flex-col gap-2 mb-5 md:w-3/4">
        <input
          type="text"
          placeholder="nome"
          name="nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className="p-3 bg-transparent border-b border-black-3 text-white"
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="p-3 bg-transparent border-b border-black-3 text-white"
        />
        <input
          type="text"
          placeholder="Assunto"
          name="Assunto"
          value={assunto}
          onChange={e => setAssunto(e.target.value)}
          className="p-3 bg-transparent border-b border-black-3 text-white"
        />
        <textarea
          placeholder="Mensagem..."
          name="Mensagem"
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
          className="bg-transparent border-b border-black-3 p-3 h-40 text-white"
        />
        <button
          className="bg-btn-gihub p-2 mt-2 rounded text-white font-bold hover:bg-btn-git-hover max-w-md transition-colors md:w-[360px] md:self-center"
          onClick={e => submitEmail(e)}
        >
          ENVIAR
        </button>
      </form>

      <div className="flex w-full flex-wrap justify-around items-center">
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
    </div>
  );
}

export default Contato;
