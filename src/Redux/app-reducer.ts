const initialState: InitialStateType = {
	status: 'idle',
	error: null
}

const SET_ERROR = 'app/SET-ERROR'
const SET_STATUS = 'app/SET-STATUS'

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case SET_STATUS:
			return {...state, status: action.status}
		case SET_ERROR:
			return {...state, error: action.error}
		default:
			return {...state}
	}
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
	// происходит ли сейчас взаимодействие с сервером
	status: RequestStatusType
	// если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
	error: string | null
}

export const setAppErrorAC = (error: string | null) => ({type: SET_ERROR, error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: SET_STATUS, status} as const)

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>

type ActionsType =
	| SetAppErrorActionType
	| SetAppStatusActionType