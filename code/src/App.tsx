

function App(){

    return (
        <div className="w-full min-h-screen flex justify-center items-center">
     <TipCalculator />
        </div>
    )
}


function TipCalculator(){
    return (
        <div className="flex flex-col gap-3">
        <BillInput />
        <SelectPercentage about="How did you like the service ?"/>
        <SelectPercentage about="How did your friend like the service ?"/>
        <Output />
        <Reset />
        </div>
    )
}


function BillInput() {
    return (
        <div>
            <label className="text-black font-bold text-xl">  How much was the bill ?</label>
            <input className="bg-gray-200 border border-gray-600 outline-none py- px-5 rounded-sm ml-2" type="text"  placeholder="Bill Value"/>

        </div>
    )
}


function SelectPercentage({about}: {
    about: string
}){

    return (
        <div>
            <label className="text-black font-bold text-xl"> {about} </label>
            <select className="border border-gray-400 outline-none rounded-sm py-1 px-2 cursor-pointer">
                <option value="0"> Dissatisfies (0%) </option>
                <option value="5"> It was ok (5%) </option>
                <option value="10"> It was good (10%) </option>
                <option value="20"> Absolutly Amazing (20%) </option>
            </select>

        </div>
    )


}

function Output() {

    return (
        <div>
        <h2 className="text-2xl font-extrabold"> You pay X ($A + $B tip) </h2>
        </div>
    )
}

function Reset() {
    return (
        <div>
      <button className="bg-rose-200 border border-rose-600 py-1 px-4 cursor-pointer rounded-lg"> Reset </button>
        </div>
    )
}

export default App;