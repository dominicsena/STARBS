import Content2Items from "./Content2Items";
import Content2ItemsCopy from "./Content2ItemsCopy";

const contentDataCopy = [
    {
        photo:"./images/matcha1.jpeg",
        title: "Reiniciar y recargar",
        desc: "Deliciosamente dulce y perfectamente afrutado, disfruta cada sorbo del Honey Plum Pure Matcha Latte",
        btn: "Bebe, bebe, vete",
        bgcolor: "#1E3932",
        color: "#D4E9E2",
       
    },
    {
        photo:"./images/cakes.jpeg",
        title: "Bueno come todo el día",
        desc: " Encuentra momentos de calma y conexión con estas deliciosas delicias.",
        btn: "Explorar",
        bgcolor: "#1E3932",
        color: "#D4E9E2",
        btnmrg: "-0.96rem",
    },
    {
        photo:"./images/tumbler.jpeg",
        title: "Vaso de café y té",
        desc: "Llena tu bebida favorita y ve a donde te lleve el día.",
        btn: "Ver más",
        bgcolor: "#D4E9E2",
    },
    {
        photo:"https://starbucks.ph/seed_data/Starbucks_Delivers_-_Homepage.jpg",
        title: "¿No hay tiempo para salir?",
        desc: "Haga que sus favoritas sean entregadas directamente a su puerta.",
        btn: "Aprende más",
        bgcolor: "#D4E9E2",
        wdt: "100%",
        ht:"20.82rem",
        dp: "inline"

    },
];


function Content2 (){
    return <div className="content-card-container">
       
                {contentDataCopy.map( cardHome => <Content2ItemsCopy itemObjCopy={cardHome}/>)}

                 
       
            
    </div>
}
export default Content2;