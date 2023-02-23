import Header from "../Header/Header";
import Item from "../Item/Item";
import "./ReadAll.css";
export default function ReadAll() {
// Mock Items (exatamente a mesma estrutura que o back traria)
// Isso facilita o trabalho aqui no Front, para conseguir estruturar
// comportamento, sem precisar depender do back para receber dados
  const items = [
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

/*
- Para cada item da lista, exibe um card do Rick Sanchez
- Pegar a informação de cada item e enviar para o componente <Card />
- A informação recebida no card deve ser exibida no console.log
- Pegar cada parte da informação recebida e colocá-la nos elementos de HTML
*/

/**
 * Desafios!
 *
 * Primeiro: HTML/CSS; Criação de componente.
 * OK ~ 1. Criar um componente <Header /> que possua um logo na esquerda e dois itens
 * clicáveis:
 * - Home
 * - Criar
 * OK ~ 2. Estilizar o Header com uma cor de fundo, o logo com tamanho pequeno e
 * os itens com uma cor que contraste bem com o fundo
 *
 * Segundo: JS; Lista; Map;
 * OK ~ 1. Para cada item da lista de itens, crie uma propriedade chamada `tags`;
 * OK ~ 2. Essa propriedade `tags` deve conter uma lista de strings;
 * OK ~ 3. Cada string representa uma tag daquele personagem;
 * OK ~ 4. Crie um componente <Tag /> que recebe uma `string` como
 * propriedade (`props`) e exibia um <div> com o texto informado.
 * OK ~ 5. Estilize o componente <Tag /> para ter uma cor de fundo que contraste com
 * o card.
 * OK ~ 6. Utilizando o map, exiba dentro do componente <Card />, uma renderização
 * desse componente <Tag /> recém criado.
 */

  return (
    <>
      <Header/>
      <div className="itens">
        {items.map( function (item) {
          // console.log(tags)
          // console.log(item._id)
          return <Item key={'card:'+item._id} item={item} />;
        })}
      </div>
    </>
  )
}
/*
https://css-tricks.com/snippets/css/complete-guide-grid/
https://cssgridgarden.com/
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
*/
/**
 * Exercício 1:
 * Dentro do componente ReadAll, crie um div com a classe "Card"
 * Dentro do Card, exiba uma imagem de qualquer personagem
 * Além disso, tb exiba o nome da parsonagem
 * 
 * OBS: caso vc tenha escolhido algo diferente no backend, pode manter o tema original
 * Não precisa ser integrado com o Back! Apenas a exibição dos dados no Front.
 * 
 * 
 * Exercício 2 (bônus!):
 * Pegue o div com a classe "Card" e extraia em um componente JSX, seguindo os mesmos
 * passos que fizemos para a criação do componente ReadAll
 */