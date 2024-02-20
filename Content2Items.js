import Content2 from "./Content2";

function Content2Items(props){
    return <div className="cardHome">
        <img src={props.itemObj.photo} style={{width:props.itemObj.wdt, height:props.itemObj.ht, display:props.itemObj.dp,}} />
        <div className="cardHome-desc"  style= {{backgroundColor:props.itemObj.bgcolor, color:props.itemObj.color}}     >
            <h1>{props.itemObj.title}</h1>
            <p>{props.itemObj.desc}</p>
            <button style ={{color:props.itemObj.color, marginTop:props.itemObj.btnmrg, borderColor:props.itemObj.color}}>{props.itemObj.btn}</button>
        </div>
    </div>
}

export default Content2Items;