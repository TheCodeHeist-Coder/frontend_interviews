
interface Friends {
    id: number;
    name: string;
    image: string;
    balance: number
}



const initialFriends: Friends[] = [
    {
        id: 1234,
        name: "chocks",
        image: "https://i.pravatar.cc/150?u=1234",
        balance: -7
    },
    {
        id: 3452,
        name: "pop",
        image: "https://i.pravatar.cc/150?u=3452",
        balance: 20
    },
    {
        id: 2543,
        name: "lost",
        image: "https://i.pravatar.cc/150?u=2543",
        balance: 0
    },
]


function App() {

    return (
        <div className="w-full  min-h-screen grid grid-cols-5 ">
            <div className="sidebar flex items-center justify-center  col-span-2">
                <FriendsList />
            </div>
            <div className="col-span-3 bg-green-300">
           
            </div>
        </div>
    )

}


function FriendsList() {
    return <ul className="flex flex-col gap-6">
        {initialFriends.map((friend: Friends) => (
            <Friend friend={friend} key={friend.id} />

        ))}
    </ul>
}




function Friend({ friend }: { friend: Friends }) {
    return (
        <li className="flex items-center justify-between gap-2">
            <img className="w-15 h-15 rounded-full" src={friend.image} alt={friend.name} />
            <div className="flex flex-col">

            <h3 className="font-semibold"> {friend.name} </h3>
            {friend.balance < 0 && (
                <p className="text-red-700"> You owe {friend.name} {Math.abs(friend.balance)}$ </p>)}

            {friend.balance === 0 && (
                <p className="">You and {friend.name} are even </p>)}


            {friend.balance > 0 && (
                <p className="text-green-700">{friend.name} owes you {Math.abs(friend.balance)}$ </p>)}
                </div>

            <button className="bg-yellow-600 py-2 px-6 rounded-full cursor-pointer"> Select </button>
        </li>
    )
}


export default App;