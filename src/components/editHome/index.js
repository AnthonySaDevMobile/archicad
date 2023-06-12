import React, { useState, useEffect } from "react";
import { db, storage } from "@/services/firebaseConnection";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FaUpload } from "react-icons/fa";

export default function EditHome() {

  const homeCollectionRef = collection(db, "home");
  const homeId = "MaCfeFSlem7aaWrmuhAE";
  const [imageAvatarHome, setImageAvatarHome] = useState(null);
  const [avatarUrlHome, setAvatarUrlHome] = useState("");
  const [homeImages, setHomeImages] = useState([]);
  const [textButton, setTextButton] = useState("Enviar alterações")

  useEffect(() => {
    const getHomeImages = async () => {
      const data = await getDocs(homeCollectionRef);
      setHomeImages([
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0],
      ]);
    };
    getHomeImages();
  }, []);


  function handleFileHome(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      if (
        image.type === "image/jpeg" ||
        image.type === "image/png" ||
        image.type === "image/jpg"
      ) {
        setImageAvatarHome(image);
        setAvatarUrlHome(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatarHome(null);
        return null;
      }
    }
    setTextButton("Enviar alterações")
  }

  async function handleSave(e) {
    e.preventDefault();
    setTextButton("Enviando...");
    const homeRef = doc(db, "home", homeId);
    const imageUrl = await handleUpload();
    const updatedData = {
      imagem: imageUrl || home.imagem
    };
  
  
    try {
      await setDoc(homeRef, updatedData);
      // Update successful
      setTextButton("Enviado!");
    } catch (error) {
      // Handle error
      console.error(error);
    }
  }
  

 
  async function handleUpload() {
    if (avatarUrlHome !== null) {
        const imagesRef = ref(storage, `imageHome/${homeId}`);
        const uploadTask = uploadBytesResumable(imagesRef, imageAvatarHome);

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
    <div className="bg-bg-slide text-center text-white py-10">
      <h1 className="text-3xl">Home</h1>
      <p>Alterações para as imagens exibidas</p>
      <div className=" py-10">
        {homeImages.map((item) => (
          <div key={item.id}>
            <form onSubmit={handleSave}>
              <div className="md:flex flex-col gap-4 items-center justify-center">
                <label className="w-[800px] m-auto h-[400px]  z-10 bg-amber-800 rounded flex items-center justify-center cursor-pointer">
                  <span className="absolute opacity-10">
                    <FaUpload size={30} />
                  </span>
                  <input className="hidden" type="file" onChange={(e) => handleFileHome(e)} />
                  {imageAvatarHome === null ? (
                    <img
                      src={item.imagem}
                      width="250"
                      height="250"
                      alt="Foto da Home"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={avatarUrlHome}
                      width="250"
                      height="250"
                      alt="Foto da Home"
                    />
                    )}
                    </label>

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
