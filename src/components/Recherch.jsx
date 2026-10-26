
function Recherch ({RecherchHandler}){
    let value=''
    return (
        <div>
            <input type="text" value={value}/>
            <button onClick={()=>{RecherchHandler(value)}}> Rechercher</button>
        </div>
    )
}
export default Recherch