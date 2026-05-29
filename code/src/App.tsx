import { useState } from "react"


function App() {

    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <TipCalculator />
        </div>
    )
}


function TipCalculator() {

    const [bill, setBill] = useState<string>('0');
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);


    const tip =  ((percentage1 + percentage2) / 2)



    return (
        <div className="flex flex-col gap-3">
            <BillInput bill={bill} onsetBill={setBill} />
            <SelectPercentage percentage={percentage1} onSelect={setPercentage1} about="How did you like the service ?" />
            <SelectPercentage percentage={percentage2} onSelect={setPercentage2} about="How did your friend like the service ?" />
            <Output bill={bill} tip={tip} />
            <Reset />
        </div>
    )
}


function BillInput({ bill, onsetBill }: {
    bill: string,
    onsetBill: any
}) {
    return (
        <div>
            <label className="text-black font-bold text-xl">  How much was the bill ?</label>
            <input
                value={bill}
                onChange={(e) => onsetBill(Number(e.target.value))}
                className="bg-gray-200 border border-gray-600 outline-none py- px-5 rounded-sm ml-2" type="text" placeholder="Bill Value" />

        </div>
    )
}


function SelectPercentage({ about, percentage, onSelect }: {
    about: string,
    percentage: number,
    onSelect: (a: any) => void
}) {

    return (
        <div>
            <label className="text-black font-bold text-xl"> {about} </label>
            <select value={percentage} onChange={(e) => onSelect(Number(e.target.value))} className="border border-gray-400 outline-none rounded-sm py-1 px-2 cursor-pointer">
                <option value="0"> Dissatisfies (0%) </option>
                <option value="5"> It was ok (5%) </option>
                <option value="10"> It was good (10%) </option>
                <option value="20"> Absolutly Amazing (20%) </option>
            </select>

        </div>
    )


}

function Output({ bill, tip }: {
    bill: string,
    tip: number
}) {

    return (
        <div>
            <h2 className="text-2xl font-extrabold"> You pay {bill + tip} (${bill} + ${tip} tip) </h2>
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