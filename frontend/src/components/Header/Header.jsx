import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <img
        src='https://cdn-icons-png.flaticon.com/512/4748/4748649.png'
        width={70} height={70}
      />
     <h1>Minha lista de Compras</h1>
      <a href="#" className='button'>Adicionar</a>
      <a href="#" className='button'>Home</a>
    </div>
  )
}