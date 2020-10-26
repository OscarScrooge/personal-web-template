

const defaultState={
    language:"",
};

export default function reducer(state = defaultState,action) {

    switch (action.type) {

        case 'set_language':
             return {...state,language:action.language};

        default: return state;

    }
}
