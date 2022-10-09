import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  var [name, setName] = useState('')
  var [email, setEmail] = useState('')
  var [message, setMessage] = useState('')

  function sendEmail(event) {
    event.preventDefault()

    if(name === '' || email === '' || message === '') {
      alert('Preencha todos os campos abaixo.')
      return
    }

    var templateParams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs.send("service_tsd9xoc", "template_x6k2hkq", templateParams, "NNNuEz0RtARX27ec4")
      .then((response) => {
        console.log("E-mail Enviado", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (error) => {
        console.log(error)
      })
  }

  return (
    <main>
      <h1>Contato</h1>

      <form onSubmit={sendEmail}>
        <input 
          type="text"
          placeholder="Digite seu Nome"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />

        <input 
          type="email"
          placeholder="Digite seu E-mail"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />

        <textarea
          placeholder="Digite sua mensagem"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />

        <input 
          type="submit"
          value="Enviar"
        />
      </form>

    </main>
  );
}

export default App;
