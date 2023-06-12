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
import { useEffect, useState } from "react";
import { FaTrash, FaUpload } from "react-icons/fa";
export default function EditLancamentos() {
 
  const lancamentosRef = collection(db, "lancamentos");
  const [avatarUrlLancamentos, setAvatarUrlLancamentos] = useState("");
  const [imageAvatarLancamentos, setImageAvatarLancamentos] = useState(null);
  const [lancamentos, setLancamentos] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [nome, setNome] = useState("");
  const [caracteristica, setCaracteristica] = useState("");
  const [textButton, setTextButton] = useState("Enviar alterações");

  useEffect(() => {
    const getLancamentos = async () => {
      const data = await getDocs(lancamentosRef);
      const lancamentosData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setLancamentos(lancamentosData);
    };
    getLancamentos();
  }, []);

  async function handleSave(e) {
    e.preventDefault();
    setTextButton("Enviando...");
    const imageUrl = await handleUpload();
    const lancamentosData = {
      categoria: categoria,
      caracteristica: caracteristica,
      nome: nome,
      imagem: imageUrl,
    };
    await addDoc(collection(db, "lancamentos"), lancamentosData);
    setTextButton("Enviado!");

    const lancamentosQuery = query(collection(db, "lancamentos"));
    const lancamentosSnapshot = await getDocs(lancamentosQuery);

    const updateLancamentos = lancamentosSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setLancamentos(updateLancamentos);
    setNome("");
    setCaracteristica("");
    setCategoria("");
    setImageAvatarLancamentos(null);
    setAvatarUrlLansetImageAvatarLancamentos("");
  }

  async function handleUpload() {
    if (avatarUrlLancamentos !== null) {
      const imagesRef = ref(storage, `imagesLancamentos/${imageAvatarLancamentos.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, imageAvatarLancamentos);

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
      const itemRef = doc(db, "lancamentos", id);
      await deleteDoc(itemRef);
    
      setLancamentos((prevLancamentos) =>
        prevLancamentos.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar o item:", error);
    }
  }

  function handleFileLancamentos(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatarLancamentos(image);
        setAvatarUrlLancamentos(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarLancamentos(null);
        return null;
      }
    }
  }


  return (
    <div className="py-10 bg-zinc-200 flex flex-col items-center justify-center">
    <h1 className="text-3xl">Lançamentos</h1>
    <p>Alterações para cada item</p>
    <form
      className="mt-5 w-fit flex flex-col items-center justify-center gap-2"
      onSubmit={handleSave}
    >
      <div className="flex items-center gap-5">
        <label className="w-9/12 mt-10 m-auto h-[200px] z-10 bg-zinc-300 rounded flex items-center justify-center cursor-pointer">
          <span className="absolute opacity-50">
            <FaUpload size={30} color="white" />
          </span>
          <input
            type="file"
            className="hidden"
            onChange={handleFileLancamentos}
          />
          {imageAvatarLancamentos === null ? (
            <img
              src={imageAvatarLancamentos}
              width="250"
              height="250"
              alt="Foto do Lançamento"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={avatarUrlLancamentos}
              className="w-full h-full object-cover"
              alt="Foto do Lançamento"
            />
          )}
        </label>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            required
            placeholder="Categoria"
            onChange={(e) => setCategoria(e.target.value)}
            className="p-2 rounded"
          ></input>
          <input
            type="text"
            required
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
            className="p-2 rounded"
          ></input>
          <input
            type="text"
            required
            placeholder="Característica"
            onChange={(e) => setCaracteristica(e.target.value)}
            className="p-2 rounded"
          ></input>
        </div>
      </div>
      <button className="text-center bg-bg-arch px-14 py-3 rounded-3xl text-white text-sm mt-10  font-bold sm:drop-shadow-3xl drop-shadow-md mb-10">
        {textButton}
      </button>
    </form>

    <div className="mt-10 text-center">
      <p>Lançametos já cadastrados:</p>

      {lancamentos.map((item) => (
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
              <strong className="text-xl">{item.categoria}</strong>
              <strong className="text-xl">{item.nome}</strong>
              <strong className="text-xl">{item.caracteristica}</strong>
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
