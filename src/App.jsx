import { useState } from "react";
import { ListOfFriends } from "./components/list-of-friend";


const initalFriends = [
  {id: crypto.randomUUID(), name: 'John', balance: 0, image:"https://randomuser.me/api/portraits/men/1.jpg"},
  {id: crypto.randomUUID(), name: 'Johane', balance: 0, image:"https://randomuser.me/api/portraits/men/14.jpg"},
  {id: crypto.randomUUID(), name: 'Elisa', balance: 0, image:"https://randomuser.me/api/portraits/men/2.jpg"}
];




const App =() =>{
  const [selectedFriend, setSelectedfriend] = useState(null)
  const [friend, setfriend] = useState(initalFriends)
  const [totalBill, setTotalBill] = useState('0')
  const [mySpend, setMySpend] = useState('0')
  const [whoWillPay, setWhoWillPay] = useState('você')
  const [showFormAddFriends, setShowFormAddFriends] = useState(false)
  const [nameOfFriend, setNameOfFriend] = useState('')
  const [imageOfFriend, setImageOfFriend] = useState('')

  const handleTotalBill = (e) => setTotalBill(e.target.value)
  const handleMySpend = (e) => setMySpend(e.target.value)
  const handleWhoWillPay = (e) => setWhoWillPay(e.target.value)
  const handleClickShowForm = () => setShowFormAddFriends(b => !b)
  const handleClickNamefriend = (e) => setNameOfFriend(e.target.value)
  const handleClickImagefriend = (e) => setImageOfFriend(e.target.value)

  
  const handleSubmit = (e) =>{
   e.preventDefault()
   setfriend(prev => prev.map(friend => 
    selectedFriend.id === friend.id 
    ? {
      ...friend,
      balance: whoWillPay === 'você'
      ? friend.balance + (+totalBill - +mySpend)
      : friend.balance - +mySpend
    }
    : friend
  ))
  }

  const handleSubmitAddFriend = e =>{
    e.preventDefault()

    setfriend(prev =>[
      ...prev,
      {id: crypto.randomUUID(), name: nameOfFriend, balance: 0, image: imageOfFriend }
    ])

    setNameOfFriend('')
    setImageOfFriend('')
    setShowFormAddFriends(false)
  }
  const handleClickFriend = friend => setSelectedfriend(p => p?.id === friend.id ? null : friend)

  return(
  <main className="flex flex-col">
      <ListOfFriends 
       friend={friend}
       selectedFriend={selectedFriend}
       onClickFriend={handleClickFriend}
      />
       <button  
          onClick={handleClickShowForm} 
          className={`mt-5 flex w-80 justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-auto ${showFormAddFriends ? "bg-gray-500" : "bg-indigo-500" }`}
        >
          {showFormAddFriends ? "Fechar" : "Adicionar amigo"}
        </button>
    
     { showFormAddFriends &&  <div className="flex w-full flex-col justify-center items-center">

          <div className="mt-10 sm:mx-auto w-8/12 flex flex-col items-center justify-center">
            <form  
            onSubmit={handleSubmitAddFriend}
            className="space-y-6 w-full">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium leading-6 text-gray-900">
                nome 
              </label>
              <div className="mt-2">
                <input
                value={nameOfFriend}
                onChange={handleClickNamefriend}
                  id="nome"
                  name="nome"
                  type="sting"
                  required
                  autoComplete="nome"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="imagem" className="block text-sm font-medium leading-6 text-gray-900">
                  imagem
                </label>
                
              </div>
              <div className="mt-2">
                <input
                value={imageOfFriend}
                  onChange={handleClickImagefriend}
                  id="imagem"
                  name="imagem"
                  type="imagem"
                  autoComplete="current-imagem"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Adicionar
              </button>
            </div>
          </form>
        </div>
      </div>
    }

      {/* // FORM SLIP BILL */}
       { selectedFriend && <div className="flex w-full flex-col justify-center items-center">

          <div className="mt-10 sm:mx-auto w-8/12 ">
            <form onSubmit={handleSubmit} className="space-y-6  w-full" >
              <h2 className="font-bold">Rachar conta com {selectedFriend.name}</h2>
              <div>
                <label htmlFor="Nome" className="block text-sm font-medium leading-6 text-gray-900">Valor Total</label>
                <div className="mt-2">
              
                  <input onChange={handleTotalBill} id="Nome" name="Nome" type="Nome" autoComplete="Nome" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="Valor" className="block text-sm font-medium leading-6 text-gray-900">Seus Gastos</label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500"></a>
            </div>
          </div>
          <div className="mt-2 mb-3">
            <input onChange={handleMySpend} id="Valor" name="Valor" type="Valor" autoComplete="current-Valor" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        {/* Select do Tailwind */}
      <label>Quem paga?
        <select onChange={handleWhoWillPay} className="flex flex-col border rounded-md font-bold">
          <option value="Você">Você</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
      </label>

        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Rachar conta</button>
        </div>
      </form>

    </div>
  </div>}
    

  </main>
  )


}


export { App }