import React, { useState, useEffect } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";
import { db, storage } from "@/services/firebaseConnection";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
export default function EditProjetos() {

  const projetosRef = collection(db, "projetos");
  const [avatarUrlProjetos, setAvatarUrlProjetos] = useState("");
  const [avatarUrlProjetosFirebase, setAvatarUrlProjetosFirebase] = useState("");
  const [imageAvatarProjetos, setImageAvatarProjetos] = useState(null);
  const [projetos, setProjetos] = useState([]);
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [nome, setNome] = useState("");
  const [entregue, setEntregue] = useState("");
  const [endereco, setEndereco] = useState("");
  const [caracteristica, setCaracteristica] = useState("");
  const [textButton, setTextButton] = useState("Enviar alterações");

  useEffect(() => {
    const getProjetos = async () => {
      const data = await getDocs(projetosRef);
      const projetosData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setProjetos(projetosData);
    };
    getProjetos();
  }, []);


  async function sendProjeto(e) {
    e.preventDefault();
    setTextButton("Enviando...");

    const imageUrl = await handleUpload();

    await addDoc(collection(db, "projetos"), {
      imagem: imageUrl,
      caracteristica: caracteristica,
      dia: dia,
      endereco: endereco,
      entregue: entregue,
      mes: mes,
      nome: nome,
    });

    setTextButton("Enviado!");
    const projetosQuery = query(collection(db, "projetos"));
    const projetosSnapshot = await getDocs(projetosQuery);
    const updatedProjetos = projetosSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProjetos(updatedProjetos);

  }
  async function handleUpload() {
    if (avatarUrlProjetos !== null) {
      const imagesRef = ref(storage, `imagesProjetos/${imageAvatarProjetos.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, imageAvatarProjetos);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => { },
          (error) => {
            reject(error);
          },
          () => {
            resolve();
          }
        );
      });

      const url = await getDownloadURL(imagesRef);
      return url;
    }

    return null;
  }

  async function deleteItem(id) {

    try {
      const itemRef = doc(db, "projetos", id);
      await deleteDoc(itemRef);

      setProjetos((prevProjetos) =>
        prevProjetos.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar o item:", error);
    }
  }

  function handleFileProjetos(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarProjetos(image);
        setAvatarUrlProjetos(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarProjetos(null);
        return null;
      }
    }
  }


  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl">Projetos</h1>
      <p>Alterações para cada item</p>
      <form
        className="mt-5 w-fit flex flex-col items-center justify-center gap-2"
        onSubmit={sendProjeto}
      >
        <div className="flex items-center gap-5">
          <label className="w-9/12 mt-10 m-auto h-[200px] z-10 bg-zinc-300 rounded flex items-center justify-center cursor-pointer">
            <span className="absolute opacity-50">
              <FaUpload size={30} color="white" />
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileProjetos}
            />
            {imageAvatarProjetos === null ? (
              <img
                src={imageAvatarProjetos}
                width="250"
                height="250"
                alt="Foto do projeto"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={avatarUrlProjetos}
                className="w-full h-full object-cover"
                alt="Foto do projeto"
              />
            )}
          </label>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"

                placeholder="Dia"
                onChange={(e) => setDia(e.target.value)}
                className="p-2 rounded"
              ></input>
              <input
                type="text"

                placeholder="Mês"
                onChange={(e) => setMes(e.target.value)}
                className="p-2 rounded"
              ></input>
            </div>

            <input
              type="text"

              placeholder="Nome"
              onChange={(e) => setNome(e.target.value)}
              className="p-2 rounded"
            ></input>
            <input
              type="text"

              placeholder="Característica"
              onChange={(e) => setCaracteristica(e.target.value)}
              className="p-2 rounded"
            ></input>
            <input
              type="text"

              placeholder="Entregue em"
              onChange={(e) => setEntregue(e.target.value)}
              className="p-2 rounded"
            ></input>
            <input
              type="text"

              placeholder="Endereço"
              onChange={(e) => setEndereco(e.target.value)}
              className="p-2 rounded"
            ></input>
          </div>
        </div>
        <button className="text-center bg-bg-arch px-14 py-3 rounded-3xl text-white text-sm mt-10  font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
          {textButton}
        </button>
      </form>

      <div className="mt-10 text-center">
        <p>Projetos já cadastrados:</p>

        {projetos.map((item) => (
          <div className="flex flex-col items-center" key={item.id}>
            <div className="flex mt-5 justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200">
                <img
                  src={item.imagem}
                  width="250"
                  height="250"
                  alt="Foto do projeto"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <div className="flex gap-2 text-center items-center justify-center">
                  <strong className="text-xl">{item.dia}</strong>
                  <strong className="text-xl">{item.mes}</strong>
                </div>
                <strong className="text-xl">{item.caracteristica}</strong>
                <strong className="text-xl">{item.nome}</strong>
                <strong className="text-xl">{item.entregue}</strong>
                <strong className="text-xl">{item.endereco}</strong>
              </div>
            </div>
            <span
              className="mt-5 flex gap-2"
              onClick={() => deleteItem(item.id)}
            >
              <FaTrash color="red" size={30} />
              <p className="font-extrabold">Deletar</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
