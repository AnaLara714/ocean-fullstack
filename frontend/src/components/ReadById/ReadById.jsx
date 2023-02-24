import { useEffect, useState } from "react";
import Item from "../Item/Item";

export default function ReadById() {
  const id = "63e656fa677387ebba28d14c";
  const [item, setItem] = useState([]);

  async function realizarRequisicao() {
    const url = "http://localhost:3000/item/" + id; //concatencaçao normal
    // const url = `http://localhost:3000/item/${id}`; //template string
    const response = await fetch(url);
    const data = await response.json();
    // console.log("data", data)
    setItem(data);
    // {console.log("aqui" + item)}

  };

  useEffect(function () {
    console.log("executar apenas uma vez");
    realizarRequisicao();
  }, []);

  return ( 
    <div>
      <Item item={item}/>
    </div>
  );
};
