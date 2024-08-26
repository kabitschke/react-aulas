"use client"

import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";

const page = () => {

  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  const OpenModal = (id: number) => {
    const photo = photoList.find(iten => iten.id == id);
    if (photo) {
      setShowModal(true);
      setImageOfModal(photo.url);
    }

  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="mx-2">
      <h1 className="text-center text-3xl text-white font-bold my-10">Photos Bear</h1>

      <section className="container max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {
          photoList.map(list => (
            <PhotoItem
              key={list.id}
              onClick={() => OpenModal(list.id)}
              photo={list}
            />
          ))}

      </section>

      {
        showModal &&
        <Modal
          closeModal={closeModal}
          image={imageOfModal}
        />
      }

    </div>
  )
}

export default page;