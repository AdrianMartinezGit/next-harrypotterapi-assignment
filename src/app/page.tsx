'use client'

import getHarryPotterData from "@/utils/dataservices";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ICharacterProps } from "@/interfaces/interface";

import PotterLogo from '@/app/assets/Harry_Potter_Logo.svg'
import ModalComponent from "@/Components/ModalComponent";
import CardComponent from "@/Components/CardComponent";

export default function Home() {
  const [charaData, setCharaData] = useState([]);
  const [filteredCharas, setFilteredCharas] = useState([]);
  const [selectChara, setSelectChara] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await getHarryPotterData();
      setCharaData(fetchedData);
      setFilteredCharas(fetchedData);
      console.log(fetchedData);
    };

    getData();
  }, [])

  const handleCharacterClick = (character: any) => {
    setSelectChara(character);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectChara(null);
  };

  return (
    <>
      <main className={`flex min-h-screen flex-col items-center justify-between py-12 px-6`}>
        <Image src={PotterLogo} alt="Harry Potter Logo" className="bg-white rounded-md px-12 py-2" width={480} height={480}/>
        <div className="grid grid-cols-4 gap-12 pt-12">
          {filteredCharas.length > 0 ? (
            filteredCharas.map((chara: any, index: any) => (
              <div className="bg-white w-72 h-auto rounded-md" key={index}>
                  <img src={chara.image} alt={chara.name || 'Question Mark'} className="w-72 h-96 object-cover rounded-tr-sm rounded-tl-sm hover:opacity-50 cursor-pointer" onClick={() => handleCharacterClick(chara)}/>
                  <p className="text-black text-2xl text-center font-semibold my-3">{chara.name}</p>
              </div>
            ))
          ) : (
            <p>Please Wait</p>
          )}
        </div>
      </main>

      {isModalOpen && (
        <ModalComponent chara={selectChara} close={closeModal} />
      )}
    </>
  );
}
