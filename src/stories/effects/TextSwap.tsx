import './effect.css'


type TextSwapProps = {
    textArray: string[];
}

function TextSwap({ textArray }: TextSwapProps) {

    console.log(textArray)

    return (
        <div>
            <h1 className={`title`}>Here i come</h1>
        </div>
    )


}

export default TextSwap;
