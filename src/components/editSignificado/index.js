import React, { useState, useEffect } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db, storage } from "@/services/firebaseConnection";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FaUpload } from "react-icons/fa";

export default function EditHome() {

  const significadoRef = collection(db, "significado");
  const significadoId = "construcao";
  const significadoId2 = "arquitetura";
  const significadoId3 = "interior";
  const significadoId4 = "realizacao";
 
  const [significadoTexts, setSignificadoTexts] = useState([]);
  const [significadoTexts2, setSignificadoTexts2] = useState([]);
  const [significadoTexts3, setSignificadoTexts3] = useState([]);
  const [significadoTexts4, setSignificadoTexts4] = useState([]);
  const [descricaoConstruc1, setDescricaoConstruc1] = useState("");
  const [descricaoConstruc2, setDescricaoConstruc2] = useState("");
  const [descricaoConstruc3, setDescricaoConstruc3] = useState("");
  const [detalhesConstruc, setDetalhesConstruc] = useState("");
  const [descricaoArquitetura1, setDescricaoArquitetura1] = useState("");
  const [descricaoArquitetura2, setDescricaoArquitetura2] = useState("");
  const [descricaoArquitetura3, setDescricaoArquitetura3] = useState("");
  const [detalhesArquitetura, setDetalhesArquitetura] = useState("");
  const [descricaoInterior1, setDescricaoInterior1] = useState("");
  const [descricaoInterior2, setDescricaoInterior2] = useState("");
  const [descricaoInterior3, setDescricaoInterior3] = useState("");
  const [detalhesInterior, setDetalhesInterior] = useState("");
  const [descricaoRealizacao1, setDescricaoRealizacao1] = useState("");
  const [descricaoRealizacao2, setDescricaoRealizacao2] = useState("");
  const [descricaoRealizacao3, setDescricaoRealizacao3] = useState("");
  const [detalhesRealizacao, setDetalhesRealizacao] = useState("");
  const [textButton, setTextButton] = useState("Enviar alterações")
  const [textButton2, setTextButton2] = useState("Enviar alterações")
  const [textButton3, setTextButton3] = useState("Enviar alterações")
  const [textButton4, setTextButton4] = useState("Enviar alterações")

  useEffect(() => {
    const getSignificado = async () => {
      const data = await getDocs(significadoRef);
      setSignificadoTexts2([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0],
      ]);
      setSignificadoTexts([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[1],
      ]);
      setSignificadoTexts3([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[2],
      ]);
      setSignificadoTexts4([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[3],
      ]);
    };
    getSignificado();
  }, []);


  async function handleSave(e) {
    e.preventDefault();

    setTextButton("Enviando...");
   const significadoRef = doc(db, "significado", significadoId);

    // Wait for handleUpload() to complete and set the download URL before updating Firestore
    const updatedData = {
      descricao1: descricaoConstruc1,
      descricao2: descricaoConstruc2,
      descricao3: descricaoConstruc3,
      detalhamento: detalhesConstruc,
    };
    await setDoc(significadoRef, updatedData)
      .then(() => {
    
      })
      .catch((e) => {
       
      });
    setTextButton("Enviado!");
  }

  async function handleSave2(e) {
    e.preventDefault();

    setTextButton2("Enviando...");
   const significadoRef = doc(db, "significado", significadoId2);

    // Wait for handleUpload() to complete and set the download URL before updating Firestore
    const updatedData = {
      descricao1: descricaoArquitetura1,
      descricao2: descricaoArquitetura2,
      descricao3: descricaoArquitetura3,
      detalhamento: detalhesArquitetura,
    };
    await setDoc(significadoRef, updatedData)
      .then(() => {
       
      })
      .catch((e) => {
       
      });
    setTextButton2("Enviado!");
  }

  async function handleSave3(e) {
    e.preventDefault();

    setTextButton3("Enviando...");
   const significadoRef = doc(db, "significado", significadoId3);

    // Wait for handleUpload() to complete and set the download URL before updating Firestore
    const updatedData = {
      descricao1: descricaoInterior1,
      descricao2: descricaoInterior2,
      descricao3: descricaoInterior3,
      detalhamento: detalhesInterior,
    };
    await setDoc(significadoRef, updatedData)
      .then(() => {
        
      })
      .catch((e) => {
 
      });
    setTextButton3("Enviado!");
  }
  async function handleSave4(e) {
    e.preventDefault();

    setTextButton4("Enviando...");
   const significadoRef = doc(db, "significado", significadoId4);

    // Wait for handleUpload() to complete and set the download URL before updating Firestore
    const updatedData = {
      descricao1: descricaoRealizacao1,
      descricao2: descricaoRealizacao2,
      descricao3: descricaoRealizacao3,
      detalhamento: detalhesRealizacao,
    };
    await setDoc(significadoRef, updatedData)
      .then(() => {
        
      })
      .catch((e) => {
 
      });
    setTextButton("Enviado!");
  }
 

  return (
    <div className="bg-bg-slide text-center text-white py-10">
      <h1 className="text-3xl">Significado</h1>
      <p>Alterações para as textos exibidos</p>
      <div className=" py-10">
        {significadoTexts.map((imagem) => (
          <div key={imagem.id}>
            <form onSubmit={handleSave}>
              <div className="md:flex flex-col gap-4 items-center justify-center">  
              <input type="text" placeholder="Primeira descrição para contrução" className=" text-black py-2 px-4 w-1/3 rounded-lg text-sm" onChange={(e)=>setDescricaoConstruc1(e.target.value)}/>    
              <input type="text" placeholder="Segunda descrição para contrução"  className="text-black py-2 px-4 w-1/3 rounded-lg text-sm" onChange={(e)=>setDescricaoConstruc2(e.target.value)}/>    
              <input type="text" placeholder="Terceira descrição para contrução" className="text-black py-2 px-4 w-1/3 rounded-lg text-sm" onChange={(e)=>setDescricaoConstruc3(e.target.value)}/>    
               <textarea placeholder="Detalhamento" className="text-black resize-none py-2 px-4 w-1/3 rounded" onChange={(e)=>setDetalhesConstruc(e.target.value)}/>
                <button className= "text-center bg-bg-arch px-14 py-3 rounded-3xl text-white font-extrabold text-sm mt-10 sm:drop-shadow-3xl drop-shadow-md mb-10">
                  {textButton}
                </button>
              </div>
            </form>
          </div>
        ))}
        {significadoTexts2.map((imagem) => (
          <div key={imagem.id}>
            <form onSubmit={handleSave2}>
              <div className="md:flex flex-col gap-4 items-center justify-center"> 
              <input type="text" placeholder="Primeira descrição para arquitetura" className="text-black py-2 px-4 w-1/3 rounded-lg text-sm" onChange={(e)=>setDescricaoArquitetura1(e.target.value)}/>    
              <input type="text" placeholder="Segunda descrição para arquitetura"  className="text-black py-2 px-4 w-1/3 rounded-lg text-sm" onChange={(e)=>setDescricaoArquitetura2(e.target.value)}/>    
              <input type="text" placeholder="Terceira descrição para arquitetura" className="text-black py-2 px-4 w-1/3 rounded-lg text-sm" onChange={(e)=>setDescricaoArquitetura3(e.target.value)}/>    
               <textarea placeholder="Detalhamento" className="text-black resize-none py-2 px-4 w-1/3 rounded" onChange={(e)=>setDetalhesArquitetura(e.target.value)}/>     
                <button className="text-center bg-bg-arch px-14 py-3 rounded-3xl text-white font-extrabold text-sm mt-10 sm:drop-shadow-3xl drop-shadow-md mb-10">
                  {textButton2}
                </button>
              </div>
            </form>
          </div>
        ))}
        {significadoTexts3.map((imagem) => (
          <div key={imagem.id}>
            <form onSubmit={handleSave3}>
              <div className="md:flex flex-col gap-4 items-center justify-center">
              <input type="text" placeholder="Primeira descrição para Interior" className="text-black py-2 px-4 w-1/3 rounded-lg text-sm" onChange={(e)=>setDescricaoInterior1(e.target.value)}/>    
              <input type="text" placeholder="Segunda descrição para Interior"  className="text-black py-2 px-4 w-1/3 rounded-lg text-sm" onChange={(e)=>setDescricaoInterior2(e.target.value)}/>    
              <input type="text" placeholder="Terceira descrição para Interior" className="text-black py-2 px-4 w-1/3 rounded-lg text-sm" onChange={(e)=>setDescricaoInterior3(e.target.value)}/>    
               <textarea placeholder="Detalhamento" className="text-black resize-none py-2 px-4 w-1/3 rounded" onChange={(e)=>setDetalhesInterior(e.target.value)}/>  
                <button className="text-center bg-bg-arch px-14 py-3 rounded-3xl text-white font-extrabold text-sm mt-10 sm:drop-shadow-3xl drop-shadow-md mb-10">
                  {textButton3}
                </button>
              </div>
            </form>
          </div>
        ))}
        {significadoTexts4.map((imagem) => (
          <div key={imagem.id}>
            <form onSubmit={handleSave4}>
              <div className="md:flex flex-col gap-4 items-center justify-center">      
            <input type="text" placeholder="Primeira descrição para realização" className="text-black py-2 px-4 w-1/3 rounded-lg text-sm" onChange={(e)=>setDescricaoRealizacao1(e.target.value)}/>    
              <input type="text" placeholder="Segunda descrição para realização"  className="text-black py-2 px-4 w-1/3 rounded-lg text-sm" onChange={(e)=>setDescricaoRealizacao2(e.target.value)}/>    
              <input type="text" placeholder="Terceira descrição para realização" className="text-black py-2 px-4 w-1/3 rounded-lg text-sm" onChange={(e)=>setDescricaoRealizacao3(e.target.value)}/>    
               <textarea placeholder="Detalhamento" className="text-black resize-none py-2 px-4 w-1/3 rounded" onChange={(e)=>setDetalhesRealizacao(e.target.value)}/>
                <button className="text-center bg-bg-arch px-14 py-3 rounded-3xl text-white font-extrabold text-sm mt-10 sm:drop-shadow-3xl drop-shadow-md mb-10">
                  {textButton4}
                </button>
              </div>
            </form>
          </div>
        ))}

      </div>
    </div>
  )
}
