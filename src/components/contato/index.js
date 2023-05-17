import React, {useState} from 'react'

export default function Contato() {
  
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Lógica para enviar a mensagem
  
      // Resetar os campos do formulário
      setNome('');
      setEmail('');
      setAssunto('');
    };
  
    return (
    <div className='text-center flex flex-col items-center justify-center mt-10' id="contato">
        <h1 className='font-extrabold text-2xl mt-10'>Contato</h1>
        <p className='text-zinc-400'>Entre em contato com nosco preenchendo o formulário abaixo:</p>
        <div className="w-9/12 mx-auto p-6">
      <form onSubmit={handleSubmit} className="w-full m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-4">
          <div className="mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Nome"
              className="w-full px-4 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-black bg-zinc-200"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 md:mb-0">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-black bg-zinc-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Assunto"
              className="w-full px-4 py-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-black bg-zinc-200"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Mensagem"
            className="w-full px-4 py-2 resize-none border rounded-md  focus:outline-none focus:ring-2 focus:ring-black bg-zinc-200"
            rows="4"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-bg-arch text-black font-bold w-fit h-fit py-4 px-12 rounded-3xl"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
        
    </div>
  )
}
