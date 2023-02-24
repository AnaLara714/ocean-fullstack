import { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ReadAll.css";

/**
 * Novos desafios!
 *
 * Tecnologias: ReactJS; Criação de componente; UseState; UseEffect.
 * 1. Criar um componente ReadById
 * 2. Dentro do componente, realizar uma requisição para o endpoint de Read by ID no backend
 * 3. Pegar as informações do backend e enviar para o componente Card
 *
 * Dica: Pode ocultar o componente ReadAll enquanto tiver construindo o ReadById, para não
 * se confundir nas requisições
 */

export default function ReadAll() {

// Mock Items (exatamente a mesma estrutura que o back traria)
// Isso facilita o trabalho aqui no Front, para conseguir estruturar
// comportamento, sem precisar depender do back para receber dados
  const itemsMock = [
    {
      _id: '1',
      nome: 'Café',
      imagemUrl: 'https://cdn-icons-png.flaticon.com/128/4748/4748544.png',
      tag: ['Mercearia']
    },
    {
      _id: '2',
      nome: 'Pão',
      imagemUrl: 'https://cdn-icons-png.flaticon.com/128/4748/4748475.png',
      tag: ['Padaria']
    },
    {
      _id: '3',
      nome: 'Papel Higienico',
      imagemUrl: 'https://cdn-icons-png.flaticon.com/128/4748/4748752.png',
      tag: ['Higiene', 'Ecólogico']
    },
    {
      _id: '4',
      nome: 'Cenoura',
      imagemUrl: 'https://cdn-icons-png.flaticon.com/128/4748/4748505.png',
      tag: ['Hortifruti', 'Saudável']
    },
    {
      _id: '5',
      nome: 'Banana',
      imagemUrl: 'https://cdn-icons-png.flaticon.com/128/4748/4748481.png',
      tag: ['Hortifruti', 'Saudável']
    },
    {
      _id: '6',
      nome: 'Melancia',
      imagemUrl: 'https://cdn-icons-png.flaticon.com/128/4748/4748788.png',
      // tag: ['Hortifruti', 'Saudável']
    }
  ];


//transfomar em estado para rederizar quando mudar 
  // useState retorna 2 coisas:
  // 1: o valor do estado
  // 2: a função que atualiza o valor do estado
  //   const estadoItems = useState([]);
  //   const items = estadoItems[0];
  //   const setItems = estadoItems[1];
const [items, setItems] = useState([]);

//Realizar a requisicao p backend
  async function realizarRequisicao() {
    // const url = "http://localhost:3000/item";
    const url = "https://jornada-fullstack-ocean.onrender.com/item";
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    setItems(data);
  }

  //  useEffect permite controlar quantas vezes a fucncao vai ser executada
  //1: uma funcao q sera executada
  //2: lista de dependencias, se alguma coisa q ta nessa lista mudar, ele executa dnv, 
  //  como nao tem nada ele só executa uma vz
  useEffect(function () {
    realizarRequisicao();
  }, []);
 
  return (
    <div className="itens">
      {items.map( function (item) {
        return <Item key={'card:'+item._id} item={item} className="card"/>;
      })}
    </div>       
  )
}

/*
https://css-tricks.com/snippets/css/complete-guide-grid/
https://cssgridgarden.com/
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
*/

//