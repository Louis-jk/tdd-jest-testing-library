import { act, renderHook } from "@testing-library/react"
import { useCounter } from "./useCounter"

describe("useCounter", () => {
    test("should render the initial count", () => {
        const { result } = renderHook(() => useCounter({ initialCount: 0 }))
        expect(result.current.count).toBe(0)
    })

    test("Initial count test", () => {
        const { result } = renderHook(() => useCounter({ initialCount: 10 }))
        expect(result.current.count).toBe(10)
    })

    test("Increment count test", () => {
        const { result } = renderHook(() => useCounter({ initialCount: 0 }))
        expect(result.current.count).toBe(0)
        act(() => result.current.increment())
        expect(result.current.count).toBe(1)
    })
})