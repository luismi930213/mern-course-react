import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'inputChange':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (!state.inputs[inputId])
                    continue;
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid },
                },
                isValid: formIsValid
            }
        case 'setData':
            return {
                inputs: action.inputs,
                isValid: action.formIsValid
            }
        default:
            return state
    }
}

export const useForm = (initialInputs, initialValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialValidity
    })

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({ type: 'inputChange', inputId: id, value: value, isValid: isValid })
    }, [])

    const setData = useCallback((inputData, validity) => {
        dispatch({ type: 'setData', inputs: inputData, formIsValid: validity })
    }, [])

    return [formState, inputHandler, setData];
}
