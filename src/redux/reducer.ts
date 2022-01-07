export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type ActionsType = InferActionsType<typeof actions>

const initialState = null

export const reducer = (state= initialState, action: ActionsType) => {
    switch (action.type) {
        default:
            return state
    }
}

export const actions = {
    test: () => {
        return {
            type: 'Test'
        } as const
    }
}