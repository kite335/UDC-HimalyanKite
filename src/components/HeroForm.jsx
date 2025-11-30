
const HeroForm=()=>{
     const SelectText=[{id:"Theme",value:["Activity-1","Activity-2","Activity-3"],name:"Theme"},{id:"destination",value:["destination:1","destination-2","destination-3"]},{id:"days/Night",value:["night-1","day-2","night-4"]}]
    return(
        <form>
            <label htmlFor="cars"/>

            <div className="flex justify-around py-4 px-4 bg-sky-600">
                <span>Choose a Adventure</span>
                 {SelectText.map(innerText=>(
                    
                    <select  className=" border rounded-sm outline-sky-500 focus:outline-3 border-indigo-900  py-2 bg-white px-4 outline-offset-0" id={innerText.id} name={innerText.id}>
                        {innerText.value.map(listItem=>(
                            <option value={listItem}>{listItem}</option>
                        ))}
               
            </select>
           
            ))}
            <button>Submit</button>
            </div>
           
           
        </form>
    )
}

export default HeroForm