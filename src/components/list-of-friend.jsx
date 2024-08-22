const getMessageInfo = (balance) => balance < 0 
  ? {message: `Você deve ${Math.abs(balance) } reais`, color: 'text-red-500'}
  : balance > 0
  ? {message: `Te deve ${balance} reais`, color: 'text-green-500'}
  : {message: `Estamos quites ${balance} reais`, color: ""}

const ListOfFriends = ({friend, selectedFriend, onClickFriend}) =>{

  return(

  <ul className=" w-full mt-10 ">
    
      { 
      friend.map(friend => {
        const {message, color} = getMessageInfo(friend.balance)
        const isSelectedFriend = friend.id === selectedFriend?.id
    
        return (

              <>
                  <li className="border w-full rounded-md flex justify-between px-6 items-center mb-4 p-5">
                    <div className="flex space-x-3 mr-46 ">
                        <img src={friend.image} alt={friend.name} className="w-16 h-16 rounded-full"/>
                      <div className="mr-30">
                        <h2>{friend.name}</h2>
                        <p className={color}>{message}</p>
                      </div>
                    </div>
                    <div>
                    <button onClick={() => onClickFriend(friend)} className={`inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 button ${isSelectedFriend ? "bg-red-400": ""}`}>
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
  )
}

export { ListOfFriends }
