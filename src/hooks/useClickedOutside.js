import {useEffect, useRef} from "react";

export default function useClickedOutside(passedFunction){
    const domNode = useRef()
    console.log("Rendering useClickedOutside: ", domNode);

    useEffect(() => {
        const handler = (event) => {
            console.log("Running in clicked outside!")
            if(domNode.current && !domNode.current.contains(event.target)){
                passedFunction()
            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    return domNode
}