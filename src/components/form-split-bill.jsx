import { useState } from "react"

const FormSplitBill = ({
  selectedFriend,
  onSubmitShareBill,
}) =>{
  
  const [totalBill, setTotalBill] = useState('0')
  const [mySpend, setMySpend] = useState('0')
  const [whoWillPay, setWhoWillPay] = useState('você')

  const handleTotalBill = (e) => setTotalBill(e.target.value)
  const handleMySpend = (e) => setMySpend(e.target.value)
  const handleWhoWillPay = (e) => setWhoWillPay(e.target.value)

   const handleSubmitShareBill = () =>{
     onSubmitShareBill(
          {
            ...selectedFriend,
            balance: whoWillPay === 'você'
            ? selectedFriend.balance + (+totalBill - +mySpend)
            : selectedFriend.balance - +mySpend
          }
      )
      setTotalBill('')
      setMySpend('')
      setWhoWillPay('você')
  }

  return  selectedFriend && <div className="flex w-full flex-col justify-center items-center">

          <div className="mt-10 sm:mx-auto w-8/12 ">
            <form onSubmit={handleSubmitShareBill} className="space-y-6  w-full" >
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
       </div>
   
  
}

export {FormSplitBill}