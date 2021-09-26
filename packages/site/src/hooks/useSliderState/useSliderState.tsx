import { useStore } from "react-context-hook"

function useSliderState(): [boolean, ()=>void] {
    const [isOpen, setOpen] = useStore('count', false) as [boolean, (value: boolean)=>void, ()=>void]

    function toggle() {
        setOpen(!isOpen)
    }

    return [isOpen, toggle]
}

export default useSliderState