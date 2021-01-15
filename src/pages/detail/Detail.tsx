import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import { getDetailResepByKey } from "../../apis/Resep";

import { DetilMasakan } from "../../types/Resep";

interface RouteParam {
  id: string;
}

interface Detail extends RouteComponentProps<RouteParam> {}

const Detail: React.FC<Detail> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [detailResep, setDetailResep] = useState<DetilMasakan | undefined>();

  const getDetail = async () => {
    setLoading(true);
    const id = props.match.params.id;
    try {
      const res = await getDetailResepByKey(id);
      setDetailResep(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <MainLayout>
      <div className="p-3 flex flex-col overflow-y-auto">
        <div className="img w-full h-32 bg-gray-400">
          {detailResep && detailResep.thumb && <img src={detailResep?.thumb} />}
        </div>
        <h1>{detailResep && detailResep.title}</h1>
        <p>{detailResep && detailResep.desc}</p>
        <h2>Bahan - bahan</h2>
        {detailResep &&
          detailResep.ingredient.length > 0 &&
          detailResep.ingredient.map((bahan) => <p key={bahan}>{bahan}</p>)}
        <h2>Langkah memasak</h2>
        {detailResep &&
          detailResep.step.length > 0 &&
          detailResep.step.map((step) => <p key={step}>{step}</p>)}
      </div>
    </MainLayout>
  );
};

export default Detail;
