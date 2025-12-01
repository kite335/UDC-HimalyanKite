
const HeroForm=()=>{
     const SelectText=[{id:"Theme",value:["Activity-1","Activity-2","Activity-3"],name:"Theme"},{id:"destination",value:["destination:1","destination-2","destination-3"]},{id:"days/Night",value:["night-1","day-2","night-4"]}]
    return(
        <form>
            <label htmlFor="cars"/>

            <div className="flex justify-around py-4 px-4 bg-sky-600">
                <span className="py-2 font-bold text-2xl text-white">Choose a Adventure</span>
                 {SelectText.map(innerText=>(
                    
                    <select  className=" text-white focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none w-[200px] text-center border rounded-sm outline-sky-500 focus:outline-3 border-indigo-900  py-2 bg-white px-7 outline-offset-0" id={innerText.id} name={innerText.id}>
                        {innerText.value.map(listItem=>(
                            <option  className="text-black" value={listItem}>{listItem}</option>
                        ))}
               
            </select>
           
            ))}
            <button className="border cursor-pointer shadow-inner border-red-300 btn-accent font-medium focus:ring-pink-200 hover:bg-gradient-to-bl bg-gradient-to-br from-pink-500 to-orange-400 text-white dark:focus:ring-pink-800   w-[200px] rounded-sm">Submit</button>
            </div>
           
           
        </form>
    )
}

export default HeroForm