import { useState } from "react";



const initalFriends = [
  {id: crypto.randomUUID(), name: 'John', balance: -10, image:"https://randomuser.me/api/portraits/men/1.jpg"},
  {id: crypto.randomUUID(), name: 'Johane', balance: 40, image:"https://randomuser.me/api/portraits/men/14.jpg"},
  {id: crypto.randomUUID(), name: 'Elisa', balance: 0, image:"https://randomuser.me/api/portraits/men/2.jpg"}
];

const getMessageInfo = (balance) => balance < 0 
 ? {message: `Você deve ${Math.abs(balance) } reais`, color: 'text-red-500'}
 : balance > 0
 ? {message: `Te deve ${balance} reais`, color: 'text-green-500'}
 : {message: `Estamos quites ${balance} reais`, color: ""}



const App =() =>{
  const [selectedFriend, setSelectedfriend] = useState(null)
  const handleClickFriend = friend => setSelectedfriend(p => p?.id === friend.id ? null : friend)
  console.log(selectedFriend);
  return(
  <main className="flex">
    <ul className=" w-1/2 mt-10">
    
      { 
      initalFriends.map(friend => {
        const {message, color} = getMessageInfo(friend.balance)
        const isSelectedFriend = friend.id === selectedFriend?.id
        console.log(isSelectedFriend)
        return (

              <>
                  <li className="border w-1/2 rounded-md flex justify-between px-6 items-center mb-4">
                    <div className="flex space-x-3 mr-46 ">
                        <img src={friend.image} alt={friend.name} className="w-16 h-16 rounded-full"/>
                      <div className="mr-30">
                        <h2>{friend.name}</h2>
                        <p className={color}>{message}</p>
                      </div>
                    </div>
                    <div>
                    <button onClick={() => handleClickFriend(friend)} className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 button ${isSelectedFriend ? "bg-red-400": ""}`}>
                        {isSelectedFriend ? "Fechar" : "Selecionar"}
                      </button>
                    </div>
                  </li>
              </>
                )
          }
    
      )
    }
      
    </ul>
    {
      selectedFriend && <div className="flex w-1/2 flex-col justify-center ">

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="Nome" className="block text-sm font-medium leading-6 text-gray-900">{selectedFriend.name}</label>
        <div className="mt-2">
      
          <input id="Nome" name="Nome" type="Nome" autoComplete="Nome" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="Valor" className="block text-sm font-medium leading-6 text-gray-900">Valor</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500"></a>
          </div>
        </div>
        <div className="mt-2">
          <input id="Valor" name="Valor" type="Valor" autoComplete="current-Valor" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      {/* Select do Tailwind */}

      

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Rachar conta</button>
      </div>
    </form>

  </div>
</div>
    }

  </main>
  )


}


export { App }