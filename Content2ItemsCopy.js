import Content2Copy from "./Content2Copy";

function Content2ItemsCopy(props){
    return <div className="cardHome">
        <img src={props.itemObjCopy.photo} style={{width:props.itemObjCopy.wdt, height:props.itemObjCopy.ht, display:props.itemObjCopy.dp,}} />
        <div className="cardHome-desc"  style= {{backgroundColor:props.itemObjCopy.bgcolor, color:props.itemObjCopy.color}}     >
            <h1>{props.itemObjCopy.title}</h1>
            <p>{props.itemObjCopy.desc}</p>
            <button style ={{color:props.itemObjCopy.color, marginTop:props.itemObjCopy.btnmrg, borderColor:props.itemObjCopy.color}}>{props.itemObjCopy.btn}</button>
        </div>
    </div>
}

export default Content2ItemsCopy;