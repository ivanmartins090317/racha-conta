const ButtonShowForm = ({onClickShowForm, showFormAddFriends }) =>{
  return (
    <button  
        onClick={onClickShowForm} 
        className={`mt-5 flex w-80 justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-auto ${showFormAddFriends ? "bg-gray-500" : "bg-indigo-500" }`}
      >
        {showFormAddFriends ? "Fechar" : "Adicionar amigo"}
    </button>
  )
}

export {ButtonShowForm}