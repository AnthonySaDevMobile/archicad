import Image from 'next/image';
import Link from 'next/link';
import {
  FaRoute,
  FaStar,
  FaStarHalf,
  FaStreetView,
} from "react-icons/fa";
import { FiMapPin } from 'react-icons/fi';
import { MdOutlineCall, MdOutlineEmail } from 'react-icons/md';
import mapa from '../../../public/mapa.png';
export default function Mapa() {

  return (
    <div className="w-full mt-10 bg-bg-arch" id="mapa">
    <div className="md:h-fit h-auto relative w-11/12 md:w-9/12 m-auto">
        <Image src={mapa} alt='mapa' className="object-cover md:h-full h-60 w-full" />
        <div className="bg-[#372d27] w-2/5 md:w-1/4 p-2 md:p-4 absolute top-0 md:top-1/4 md:left-20 flex justify-between">
          <div>
            <div className="text-white text-xs">
              <strong>Archicad</strong>
              <p className="text-zinc-200 md:mt-5">
                Rua tal,10
              </p>
              <p className="text-zinc-200">Bairro tal</p>
              <p className="text-zinc-200 ">Montes Claros | MG</p>
            </div>
            <div className="hidden md:flex items-center text-white mt-5 gap-1">
              <strong>4.5</strong>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <p className="text-zinc-200 text-xs">105 views</p>
          </div>

          <div className="hidden md:flex md:flex-col  justify-center text-xs">
            <div className="flex md:gap-2">
              <Link href="https://www.google.com/maps/dir//ArchiCAD+Construtora+-+n%C2%BA,+R.+Santa+Maria,+182+-+sala+05%2F06+-+Centro,+Montes+Claros+-+MG,+39400-115/@-16.7204515,-43.8682803,19z/data=!4m9!4m8!1m0!1m5!1m1!1s0xab5369e7d02c71:0xaddebd641b58c187!2m2!1d-43.8682485!2d-16.7203103!3e0?entry=ttu" target='_blank'>
                <div className="bg-[#4b423d] w-14 text-center h-24 flex flex-col items-center justify-center text-white gap-2">
                  <FaRoute size={30} />
                  <p className="text-zinc-200">Rota</p>
                </div>
              </Link>
              <Link href="https://www.google.com/maps/@-16.7204515,-43.8682803,3a,75y,12.64h,90.43t/data=!3m6!1e1!3m4!1sDT5y0jjEco-cbPZTNVIrIQ!2e0!7i16384!8i8192?entry=ttu" target='_blank'>
                <div className="bg-[#4b423d] w-14 text-center h-24 flex flex-col items-center justify-center text-white gap-2">
                  <FaStreetView size={30} />
                  <p className="text-zinc-200">Street View</p>
                </div>
              </Link>
            </div>
            <Link href="https://www.google.com/maps/place/ArchiCAD+Construtora/@-16.7203051,-43.8708234,17z/data=!3m1!4b1!4m6!3m5!1s0xab5369e7d02c71:0xaddebd641b58c187!8m2!3d-16.7203103!4d-43.8682485!16s%2Fg%2F11b6hwvngd?entry=ttu" target='_blank'>
              <button className="bg-white mt-5 rounded-xl font-semibold text-[#4b423d] px-6 py-4">VER NO MAPA</button>
            </Link>
          </div>
        </div>
        <div className='flex md:flex-row gap-2 flex-col justify-between py-8'>
          <div className='flex gap-2 items-center'>
            <MdOutlineCall size={26} />
            <div className='text-zinc-700'>
              <p className='font-extrabold text-black'>Telefones</p>
              <p>Fixo: (38) 3214-9990</p>
              <p>Celular: (38) 99999-9999</p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>

            <FiMapPin size={26} />
            <div className='text-zinc-700'>
              <p className='font-extrabold text-black'>Endereço</p>
              <p>Rua tal, 10</p>
              <p>Centro | Montes Claros | MG</p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>

            <MdOutlineEmail size={26} />
            <div className='text-zinc-700'>
              <p className='font-extrabold text-black'>Email</p>
              <p>contato@archicad.com.br</p>
              <p>comercial@archicad.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
