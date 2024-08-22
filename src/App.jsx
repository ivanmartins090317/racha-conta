import { useState } from "react";
import { ListOfFriends } from "./components/list-of-friend";
import { ButtonShowForm } from "./components/button-show-form";
import { FormAddFriends } from "./components/form-add-friend"
import { FormSplitBill } from "./components/form-split-bill"


const initalFriends = [
  {id: crypto.randomUUID(), name: 'John', balance: 0, image:"https://randomuser.me/api/portraits/men/1.jpg"},
  {id: crypto.randomUUID(), name: 'Johane', balance: 0, image:"https://randomuser.me/api/portraits/women/4.jpg"},
  {id: crypto.randomUUID(), name: 'Elisa', balance: 0, image:"https://randomuser.me/api/portraits/men/2.jpg"}
];



const App =() =>{
  const [selectedFriend, setSelectedfriend] = useState(null)
  const [friend, setfriend] = useState(initalFriends)
  const [showFormAddFriends, setShowFormAddFriends] = useState(false)
 
  
  const handleClickShowForm = () => setShowFormAddFriends(b => !b)
  
  

 
  const handleSubmitAddFriend = newFriend =>{
    setfriend(prev =>[...prev, newFriend])
    setShowFormAddFriends(false)
  }
  
 const handleSubmitShareBill = friend =>{
   setfriend(prev => prev.map(p => p.id === friend.id ? friend : p))
   setSelectedfriend(null)
 }

  const handleClickFriend = friend => setSelectedfriend(p => p?.id === friend.id ? null : friend)

  return(
  <main className="flex flex-col">
      <ListOfFriends 
       friend={friend}
       selectedFriend={selectedFriend}
       onClickFriend={handleClickFriend}
      />
      
     <ButtonShowForm
      onClickShowForm={handleClickShowForm}
      showFormAddFriends={showFormAddFriends}
     />
    
    <FormAddFriends 
     onSubmitAddFriend={handleSubmitAddFriend}
     showFormAddFriends={showFormAddFriends}
    
    />
      {/* // FORM SPLIP BILL */}
      
      <FormSplitBill
       selectedFriend={selectedFriend}
       onSubmitShareBill={handleSubmitShareBill}
      />

  </main>
  )


}


export { App }