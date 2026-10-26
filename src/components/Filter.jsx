
function Filtrer ({SelectHandler,types}){
    let val=''
    return (
        <div>
            <select name="type" value={val} onChange={SelectHandler(val)} >
            {types.map((el)=>{<option value={el}/>})}
            </select>
        </div>
    )
}
export default Filtrer