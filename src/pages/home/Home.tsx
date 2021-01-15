import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

//layout
import MainLayout from "../layout/MainLayout";

//ui component
import Card from "../../components/card/Card";

//types
import { Masakan } from "../../types/Resep";

//api
import { getResepByPage } from "../../apis/Resep";

const Home = () => {
  const history = useHistory();

  const [listResep, setListResep] = useState<Masakan[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getList = async (page: number) => {
    setIsLoad(true);
    try {
      const data = await getResepByPage(page);
      setListResep(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoad(false);
    }
  };

  const getDetail = (item: Masakan) => {
    history.push(`/detail/${item.key}`);
  };

  const pageHandle = (inc: number) => {
    let curPage = page;
    curPage = curPage + inc;
    if (curPage <= 0) return null;
    getList(curPage);
    setPage(curPage);
  };

  useEffect(() => {
    getList(1);
  }, []);

  return (
    <MainLayout>
      <div className="content flex-1 overflow-y-auto flex flex-col p-5">
        <h1 className="text-3xl">Beranda</h1>
        <div className="filter flex flex-row justify-between items-center">
          <div className="search flex-1"></div>
          <div className="paging flex ">
            {page !== 1 && (
              <button
                onClick={() => {
                  pageHandle(-1);
                }}
                className="focus:outline-none h-8 text-white px-4 rounded-xl mr-2 hover:opacity-90 cursor-pointer bg-blue-400"
              >
                Back
              </button>
            )}
            <button
              onClick={() => {
                pageHandle(1);
              }}
              className="focus:outline-none h-8 text-white px-4 rounded-xl mr-2 hover:opacity-90 cursor-pointer bg-blue-400"
            >
              Next
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-10">
          {!isLoad &&
            listResep &&
            listResep.map((item, index) => (
              <Card clickHandle={getDetail} item={item} key={index} />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
