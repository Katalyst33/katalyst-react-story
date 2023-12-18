import './App.css'
import TextSwap from "./stories/effects/TextSwap.tsx";
import {textSwapData} from "./data";

function App() {


    return (
        <>
            <TextSwap textArray= {textSwapData}/>
        </>
    )
}

export default App
