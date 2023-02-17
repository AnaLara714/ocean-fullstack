import Item from "../item/Item";

export default function ReadAll() {
// Mock Items (exatamente a mesma estrutura que o back traria)
// Isso facilita o trabalho aqui no Front, para conseguir estruturar
// comportamento, sem precisar depender do back para receber dados
  const items = [
    {
      _id: '1234',
      nome: 'Café',
      imagemUrl: 'https://cdn-icons-png.flaticon.com/128/4748/4748544.png'
    },
    {
      _id: '12345',
      nome: 'Pão',
      imagemUrl: 'https://cdn-icons-png.flaticon.com/128/4748/4748475.png'
    }
  ];

/*
- Para cada item da lista, exibe um card do Rick Sanchez
- Pegar a informação de cada item e enviar para o componente <Card />
- A informação recebida no card deve ser exibida no console.log
- Pegar cada parte da informação recebida e colocá-la nos elementos de HTML
*/

  return (
    <>
      <h1>Minha lista de Compras</h1>
      <div className="itens">
        {items.map( function (item) {
          // console.log(item._id)
          return <Item key={'card:'+item._id} item={item}/>;
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