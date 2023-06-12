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
export default function EditDepoimentos() {

  const depoimentosRef = collection(db, "depoimentos");
  const [avatarUrlDepoimentos, setAvatarUrlDepoimentos] = useState("");
  const [imageAvatarDepoimentos, setImageAvatarDepoimentos] = useState(null);
  const [depoimentos, setDepoimentos] = useState([]);
  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");
  const [facebook, setFacebook] = useState("")
  const [google, setGoogle] = useState("")
  const [instagram, setInstagram] = useState("")
  const [twitter, setTwitter] = useState("")
  const [profissao, setProfissao] = useState("")
  const [user, setUser] = useState("")
  const [textButton, setTextButton] = useState("Enviar alterações");

  useEffect(() => {
    const getDepoimentos = async () => {
      const data = await getDocs(depoimentosRef);
      const depoimentosData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDepoimentos(depoimentosData);
    };
    getDepoimentos();
  }, []);


  async function sendDepoimento(e) {
    e.preventDefault();
    setTextButton("Enviando...");
    
    const imageUrl = await handleUpload();
    
    await addDoc(collection(db, "depoimentos"), {
      imagem:imageUrl,
      nome:nome,
      comentario:comentario,
      user:user,
      twitter:twitter,
      profissao:profissao,
      facebook:facebook,
      google:google,
      instagram:instagram,
    });

    setTextButton("Enviado!");
    const depoimentosQuery = query(collection(db, "depoimentos"));
    const depoimentosSnapshot = await getDocs(depoimentosQuery);
    const updateDepoimentos = depoimentosSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setDepoimentos(updateDepoimentos);
  
  }
  async function handleUpload() {
    if (avatarUrlDepoimentos !== null) {
      const imagesRef = ref(storage, `imagesLancamentos/${imageAvatarDepoimentos.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, imageAvatarDepoimentos);

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
      const itemRef = doc(db, "depoimentos", id);
      await deleteDoc(itemRef);
    
      setDepoimentos((prevDepoimentos) =>
        prevDepoimentos.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar o item:", error);
    }
  }

  function handleFileDepoiments(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarDepoimentos(image);
        setAvatarUrlDepoimentos(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarDepoimentos(null);
        return null;
      }
    }
  }


  return (
    <div className="py-10 bg-zinc-200 flex flex-col items-center justify-center">
      <h1 className="text-3xl">Depoimentos</h1>
      <p>Alterações para cada item</p>
      <form
        className="mt-5 w-fit flex flex-col items-center justify-center gap-2"
        onSubmit={sendDepoimento}
      >
        <div className="flex items-center gap-5">
          <label className="w-9/12 mt-10 m-auto h-[200px] z-10 bg-zinc-300 rounded flex items-center justify-center cursor-pointer">
            <span className="absolute opacity-50">
              <FaUpload size={30} color="white" />
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleFileDepoiments}
            />
            {imageAvatarDepoimentos === null ? (
              <img
                src={imageAvatarDepoimentos}
                width="250"
                height="250"
                alt="Foto comentario"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={avatarUrlDepoimentos}
                className="w-full h-full object-contain"
                alt="Foto comentario"
              />
            )}
          </label>
          
          <div className="grid grid-cols-2 mt-10 gap-2">
          <textarea
              type="text"
              
              placeholder="Comentário"
              onChange={(e) => setComentario(e.target.value)}
              className="p-2 resize-none rounded"
            />
            <input
              type="text"
              
              placeholder="Nome"
              onChange={(e) => setNome(e.target.value)}
              className="p-2 rounded"
            ></input>
            <input
              type="text"
              
              placeholder="Usuário"
              onChange={(e) => setUser(e.target.value)}
              className="p-2 rounded"
            ></input>
            <input
              type="text"
              
              placeholder="Profissão"
              onChange={(e) => setProfissao(e.target.value)}
              className="p-2 rounded"
            ></input>
            <input
              type="text"
              
              placeholder="Twitter"
              onChange={(e) => setTwitter(e.target.value)}
              className="p-2 rounded"
            ></input>
            <input
              type="text"
              
              placeholder="Facebook"
              onChange={(e) => setFacebook(e.target.value)}
              className="p-2 rounded"
            ></input>
            <input
              type="text"
              
              placeholder="Google"
              onChange={(e) => setGoogle(e.target.value)}
              className="p-2 rounded"
            ></input>
            <input
              type="text"
              
              placeholder="Instagram"
              onChange={(e) => setInstagram(e.target.value)}
              className="p-2 rounded"
            ></input>
          </div>
        </div>
        <button className="text-center bg-bg-arch px-14 py-3 rounded-3xl text-white text-sm mt-10  font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
          {textButton}
        </button>
      </form>

      <div className="mt-10 text-center">
        <p>Depoimentos já cadastrados:</p>

        {depoimentos.map((item) => (
          <div className="flex flex-col items-center" key={item.id}>
            <div className="flex mt-5 justify-around p-4 bg-white">
              <div className="h-[250px] w-[240px] bg-zinc-200">
                <img
                  src={item.imagem}
                  width="250"
                  height="250"
                  alt="Foto do lançamento"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/3 flex flex-col justify-around px-2 py-6">
                <strong className="text-base">{item.comentario}</strong>
                <strong className="text-base">{item.nome}</strong>
                <strong className="text-base">{item.user}</strong>
                <strong className="text-base">{item.profissao}</strong>
                <strong className="text-base">{item.twitter}</strong>
                <strong className="text-base">{item.facebook}</strong>
                <strong className="text-base">{item.instagram}</strong>
                <strong className="text-base">{item.google}</strong>
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
