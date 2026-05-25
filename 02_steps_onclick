import { useState } from "react"


const messages = [
  "This is the first step",
  "This is the second step",
  "This is the last step.... STOP"
]


function App() {

  const [step, setStep] = useState<number>(1);

  function handlePrevious() {
    if (step > 1) return setStep((s) => s - 1);

  }

  function handleNext() {
    if (step < 3) return setStep((s) => s + 1);
  }

  return (
    <div className="w-full h-screen flex  items-center  justify-center">

      <div className="w-1/3 h-1/3 bg-gray-600 rounded-lg">

        <div className="flex items-center justify-center gap-12 mt-15">
          <span className={` ${step >= 1 ? "bg-red-800": "bg-red-300"} rounded-full flex text-2xl py-3 px-6   items-center justify-center`}> 1 </span>
          <span className={` ${step >= 2 ? "bg-red-800": "bg-red-300"} rounded-full flex text-2xl py-3 px-6  items-center justify-center`}> 2 </span>
          <span className={` ${step >= 3 ? "bg-red-800": "bg-red-300"} rounded-full flex text-2xl py-3 px-6  items-center justify-center`}> 3 </span>
        </div>

        <div className="content flex items-center justify-center py-8">
          <h1 className="text-gray-50 font-bold tracking-wide text-2xl"> {step}. {messages[step - 1]} </h1>
        </div>


        <div className="flex items-center justify-between mt-12 px-20">
          <button className="bg-amber-600 py-2 px-5 rounded-2xl cursor-pointer active:scale-95" onClick={handlePrevious}> Previous </button>
          <button className="bg-amber-600 py-2 px-5 rounded-2xl cursor-pointer active:scale-95" onClick={handleNext}> Next </button>

        </div>


      </div>




    </div>
  )


}

export default App