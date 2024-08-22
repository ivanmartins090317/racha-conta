import { useState } from "react"

const FormAddFriends = ({onSubmitAddFriend,showFormAddFriends}) =>{
  const [nameOfFriend, setNameOfFriend] = useState('')
  const [imageOfFriend, setImageOfFriend] = useState('')

  const handleClickNamefriend = (e) => setNameOfFriend(e.target.value)
  const handleClickImagefriend = (e) => setImageOfFriend(e.target.value)

   const handleSubmitAddFriend = e =>{
    e.preventDefault()
    const newFriend = {id: crypto.randomUUID(), name: nameOfFriend, balance: 0, image: imageOfFriend }

    onSubmitAddFriend(newFriend)
    setNameOfFriend('')
    setImageOfFriend('')
    
  }
  return showFormAddFriends && (

      <div className="flex w-full flex-col justify-center items-center">
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
                  type="string"
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
  )

  
}

export {FormAddFriends}