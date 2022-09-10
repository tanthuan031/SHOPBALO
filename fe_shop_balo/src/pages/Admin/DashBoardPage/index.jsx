import React from "react";
import { FaArtstation } from "react-icons/fa";
import InfoTile from "../../../components/Layouts/Widget";
export function DashBoardPage(props) {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <InfoTile
            iconInfo={<FaArtstation />}
            titleInfo="Likes"
            numberInfo="41,30330"
            dateInfo="2022-09-09"
            backgroundInfo="#00a65a"
          />
          <InfoTile
            iconInfo={<FaArtstation />}
            titleInfo="Likes"
            numberInfo="41,30330"
            dateInfo="2022-09-09"
            backgroundInfo="#dbcb0d"
          />
          <InfoTile
            iconInfo={<FaArtstation />}
            titleInfo="Likes"
            numberInfo="41,30330"
            dateInfo="2022-09-09"
            backgroundInfo="#0dc145"
          />
          <InfoTile
            iconInfo={<FaArtstation />}
            titleInfo="Likes"
            numberInfo="41,30330"
            dateInfo="2022-09-09"
            backgroundInfo="#c10d92"
          />
        </div>
      </div>
    </>
  );
}
