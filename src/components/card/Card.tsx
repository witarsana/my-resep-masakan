import { createPublicKey } from "crypto";
import React from "react";
import { Masakan } from "../../types/Resep";

type Props = {
  item: Masakan;
  clickHandle: (item: Masakan) => void;
};

const Card: React.FC<Props> = ({ item, clickHandle }) => {
  return (
    <div
      onClick={() => {
        clickHandle(item);
      }}
      className="w-full p-2 shadow-xl bg-white flex flex-col hover:opacity-80 cursor-pointer"
    >
      <div className="image">
        <img src={item.thumb} />
      </div>
      <h1
        style={{ minHeight: "100px" }}
        className="text-sm mt-5 px-4  text-center font-semibold"
      >
        {item.title}
      </h1>
      <div className="detail flex flex-col px-4 items-center text-sm">
        <p>Waktu memasak : {item.times}</p>
        <p>Jumlah porsi : {item.portion}</p>
      </div>
      <div className="text-center my-6 p-2 font-semibold rounded-xl text-white bg-red-400">
        {item.dificulty}
      </div>
    </div>
  );
};

export default Card;
