import React from "react";
import ButtonCore from "../../components/Button";
import { Button } from "@mui/material";
import { Trash } from "@phosphor-icons/react";
const Demo = () => {
 return (
  <div className="container row flex flex-1">
   <div className="flex-1">
    <div className="h-8" />
    <ButtonCore typeIcon={"plus"}>Thêm mới</ButtonCore>
    <div className="h-8" />
    <ButtonCore size="medium" startIcon={<Trash size={20} />}>
     Thêm mới
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore size="large" disabled>
     Thêm mới
    </ButtonCore>

    <div className="h-8" />
    <ButtonCore variant="text">Thêm add</ButtonCore>
    <div className="h-8" />
    <ButtonCore type="link" href={"#text-buttons"}>
     Tlink
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore>Thêm mới</ButtonCore>
    <div className="h-8" />
    <ButtonCore typeIcon="bin">delete</ButtonCore>
    <div className="h-8" />
    <ButtonCore type="outlined" color={"error"}>
     xoa tat ca
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore variant="text">Thêm add</ButtonCore>
    <div className="h-8" />
    <ButtonCore type="link" href={"#text-buttons"}>
     Tlink
    </ButtonCore>
   </div>
   <div className="flex-1">
    <div className="h-8" />
    <ButtonCore typeIcon={"plus"} type="outlined">
     Thêm mới
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore size="medium" type="outlined">
     Thêm mới
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore size="large" disabled type="outlined">
     Thêm mới
    </ButtonCore>

    <div className="h-8" />
    <ButtonCore type="outlined">Thêm add</ButtonCore>
    <div className="h-8" />
    <ButtonCore type="link" href={"#text-buttons"}>
     Tlink
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore>Thêm mới</ButtonCore>
    <div className="h-8" />
    <ButtonCore typeIcon="bin">delete</ButtonCore>
    <div className="h-8" />
    <ButtonCore type="outlined" color={"error"}>
     xoa tat ca
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore type="text" disabled>
     Thêm add
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore type="link" href={"#text-buttons"}>
     Tlink
    </ButtonCore>
   </div>
   <div className="flex-1">
    <div className="h-8" />
    <ButtonCore typeIcon={"plus"}>Thêm mới</ButtonCore>
    <div className="h-8" />
    <ButtonCore size="medium">Thêm mới</ButtonCore>
    <div className="h-8" />
    <ButtonCore size="large" disabled>
     Thêm mới
    </ButtonCore>

    <div className="h-8" />
    <ButtonCore variant="text">Thêm add</ButtonCore>
    <div className="h-8" />
    <ButtonCore type="link" href={"#text-buttons"}>
     Tlink
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore>Thêm mới</ButtonCore>
    <div className="h-8" />
    <ButtonCore typeIcon="bin" type="outlined">
     delete
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore type="outlined" color={"error"}>
     xoa tat ca
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore variant="text">Thêm add</ButtonCore>
    <div className="h-8" />
    <ButtonCore type="link" href={"#text-buttons"}>
     Tlink
    </ButtonCore>
   </div>
   <div className="flex-1">
    <div className="h-8" />
    <ButtonCore typeIcon={"plus"} color={"warning"}>
     Thêm mới
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore size="medium">Thêm mới</ButtonCore>
    <div className="h-8" />
    <ButtonCore size="large" disabled>
     Thêm mới
    </ButtonCore>

    <div className="h-8" />
    <ButtonCore variant="text">Thêm add</ButtonCore>
    <div className="h-8" />
    <ButtonCore type="link" disabled href={"#text-buttons"}>
     Tlink111
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore>Thêm mới</ButtonCore>
    <div className="h-8" />
    <ButtonCore typeIcon="bin">delete</ButtonCore>
    <div className="h-8" />
    <ButtonCore type="outlined" color={"error"}>
     xoa tat ca
    </ButtonCore>
    <div className="h-8" />
    <ButtonCore variant="text">Thêm add</ButtonCore>
    <div className="h-8" />
    <ButtonCore type="link" href={"#text-buttons"}>
     Tlink
    </ButtonCore>
   </div>
  </div>
 );
};

export default Demo;
