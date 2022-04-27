export const reducer = (state,action)=>{
    if(action.type === 'ADD_ITEM'){
        const newPeople = [...state.people,action.payload];
        return {
            ...state,
            people : newPeople,
            isModel : true,
            modelContent : 'item Added'
        }
    }
    if(action.type === 'NO_ITEM'){
        return {
            ...state,
            isModel : true,
            modelContent:'please enter a name'
        }
    }
    if(action.type === 'CLOSE_MODEL'){
        return {
            ...state,
            isModel : false,
            modelContent:''
        }
    }
    if(action.type === 'REMOVE_ITEM'){
        const newPeople = state.people.filter((eachPeople)=>{
            return eachPeople.id != action.payload
        })
        return {
            ...state,
            people : newPeople,
            isModel:false,
            modelContent: ''
        }
    }
    throw new Error('No matching type');
}
