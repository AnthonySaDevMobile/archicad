import { db, storage } from "@/services/firebaseConnection";
import {
  collection,
  doc,
  getDocs, setDoc
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";

export default function EditHome() {

  const quemSomosRef = collection(db, "quemSomos");
  const quemSomosId = "sobre";
  const [imageAvatar, setImageAvatar] = useState(null)
  const [imageAvatarUrl, setImageAvatarUrl] = useState('')
  const [imageAvatar2, setImageAvatar2] = useState(null)
  const [imageAvatarUrl2, setImageAvatarUrl2] = useState('')
  const [quemSomos, setQuemSomos] = useState([])
  const [texto, setTexto] = useState("");
  const [texto2, setTexto2] = useState("");
  const [titulo, setTitulo] = useState("");
  const [titulo2, setTitulo2] = useState("");
  const [textButton, setTextButton] = useState("Enviar alterações")



  useEffect(() => {
    const getQuemSomos = async () => {
      const data = await getDocs(quemSomosRef);
      setQuemSomos([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
      ]);
    };
    getQuemSomos();
  }, []);


  function handleFileQuemSomos(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatar(image);
        setImageAvatarUrl(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatar(null);
        return null;
      }
    }
    setTextButton("Enviar alterações")
  }

  function handleFileQuemSomos2(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatar2(image);
        setImageAvatarUrl2(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatar(null);
        return null;
      }
    }
    setTextButton("Enviar alterações")
  }


  async function handleSave(e) {
    e.preventDefault();
    setTextButton("Enviando...");
    const quemSomosRef = doc(db, "quemSomos", quemSomosId);
    const imageUrl = await handleUpload();
    const imageUrl2 = await handleUpload2();
    const updatedData = {
      imagem1: imageUrl || home.imagem,
      imagem2: imageUrl2 || home.imagem,
      texto:texto,
      texto2:texto2,
      titulo:titulo,
      titulo2:titulo2,
    };
  
  
    try {
      await setDoc(quemSomosRef, updatedData);
      // Update successful
      setTextButton("Enviado!");
    } catch (error) {
      // Handle error
      console.error(error);
    }
  }
  
  async function handleUpload() {
    if (imageAvatarUrl !== null) {
      const imagesRef = ref(storage, `imagesQuemSomos/${imageAvatar.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, imageAvatar);

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
  async function handleUpload2() {
    if (imageAvatarUrl2 !== null) {
      const imagesRef = ref(storage, `imagesQuemSomos/${imageAvatar2.name}`);
      const uploadTask = uploadBytesResumable(imagesRef, imageAvatar2);

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

 


  return (
    <div className=" text-center text-white py-10">
      <h1 className="text-3xl">Quem Somos</h1>
      <p>Alterações para as textos e imagens exibidos</p>
      <div className=" py-10">
        {quemSomos.map((imagem) => (
          <div key={imagem.id}>
            <form onSubmit={handleSave}>
              <div className="md:flex flex-col gap-4 items-center justify-center">
                <div className="flex gap-4  justify-between">
                <input type="text" placeholder="Primeiro título" className=" text-black py-2 px-4 w-1/2 rounded-lg text-sm" onChange={(e) => setTitulo(e.target.value)} />
                <input type="text" placeholder="Segundo título" className="text-black py-2 px-4 w-1/2 rounded-lg text-sm" onChange={(e) => setTitulo2(e.target.value)} />
                </div>
                <div className="flex gap-4 justify-between">
                <textarea placeholder="Primeiro Texto" className="text-black resize-none py-2 px-4 w-1/2 rounded-lg text-sm" onChange={(e) => setTexto(e.target.value)} />
                <textarea placeholder="Segundo Texto" className="text-black resize-none py-2 px-4 w-1/2 rounded" onChange={(e) => setTexto2(e.target.value)} />
                </div>
                <div className="flex gap-3">
                <label className="w-[500px] m-auto h-[300px]  z-10 bg-amber-800 rounded flex items-center justify-center cursor-pointer">
                  <span className="absolute opacity-10">
                    <FaUpload size={30} />
                  </span>
                  <input className="hidden" type="file" onChange={(e) => handleFileQuemSomos(e)} />
                  {imageAvatar === null ? (
                    <img
                      src={imagem.imagem}
                      width="250"
                      height="250"
                      alt="Foto Quem Somos"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={imageAvatarUrl}
                      width="250"
                      height="250"
                      alt="Foto Quem Somos"
                    />
                  )}
                </label> <label className="w-[500px] m-auto h-[300px]  z-10 bg-amber-800 rounded flex items-center justify-center cursor-pointer">
                  <span className="absolute opacity-10">
                    <FaUpload size={30} />
                  </span>
                  <input className="hidden" type="file" onChange={(e) => handleFileQuemSomos2(e)} />
                  {imageAvatar2 === null ? (
                    <img
                      src={imagem.imagem2}
                      width="250"
                      height="250"
                      alt="Foto Quem Somos"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={imageAvatarUrl2}
                      width="250"
                      height="250"
                      alt="Foto Quem Somos"
                    />
                  )}
                </label>
                </div>
                <button className="text-center bg-bg-arch px-14 py-3 rounded-3xl text-white font-extrabold text-sm mt-10 sm:drop-shadow-3xl drop-shadow-md mb-10">
                  {textButton}
                </button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  )
}
