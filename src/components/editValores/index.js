import React, { useState, useEffect } from "react";
import {
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "@/services/firebaseConnection";
export default function EditValores() {

  const valoresRef = collection(db, "valores");
  const [avatarUrlDepoimentos, setAvatarUrlDepoimentos] = useState("");
  const [valores, setValores] = useState([]);
  const [missao, setMissao] = useState("");
  const [visao, setVisao] = useState("");
  const [valorest, setValorest] = useState("")
  const [textButton, setTextButton] = useState("Enviar alterações");


  async function handleSave(e) {
    e.preventDefault();
    setTextButton("Enviando...");
    const valoresRef = doc(db, "valores", 'valores');

    const updatedData = {
      textoMissao:missao,
      textoValores:valorest,
      textoVisao:visao
    };
    await setDoc(valoresRef, updatedData)
      .then(() => {
      
      })
      .catch((e) => {
    
      });
    setTextButton("Enviado!");
  }



  return (
    <div className="py-10 bg-zinc-200 flex flex-col items-center justify-center">
      <h1 className="text-3xl">Valores</h1>
      <p>Alterações para cada item</p>
      <form
        className="mt-5 w-fit flex flex-col items-center justify-center gap-2"
        onSubmit={handleSave}
      >
        <div className="flex items-center gap-5">
            <div className="grid grid-cols-3 mt-10 gap-2">
          <textarea
              type="text"
              
              placeholder="Missão"
              onChange={(e) => setMissao(e.target.value)}
              className="p-2 resize-none rounded"
            />
            <textarea
              type="text"
              
              placeholder="Visão"
              onChange={(e) => setVisao(e.target.value)}
              className="p-2 pb-16 resize-none rounded"
           />
            <textarea
              type="text"
              
              placeholder="Valores"
              onChange={(e) => setValorest(e.target.value)}
              className="p-2 resize-none rounded"
            />
          </div>
        </div>
        <button className="text-center bg-bg-arch px-14 py-3 rounded-3xl text-white text-sm mt-10  font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
          {textButton}
        </button>
      </form>
      </div>
  
  )
}
