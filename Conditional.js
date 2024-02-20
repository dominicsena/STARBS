import App from "./App";
import App2 from "./App2";

export default function Conditional(){
    let content;
    const isSpanishAndDark=true;
   

    if (isSpanishAndDark){
        return <App2 />
    }else {
        return <App />
    }
}