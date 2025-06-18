import { useCallback, useState } from "react"
import { UseCounterProps } from "./useCounter.types"

export const useCounter = ({initialCount = 0}: UseCounterProps) => {
    const [count, setCount] = useState<number>(initialCount)
    
    const increment = useCallback(() => setCount(count + 1), [count])

    const decrement = useCallback(() => setCount(count - 1), [count])

    const reset = () => setCount(initialCount)
    
    return { count, increment, decrement, reset }
}   