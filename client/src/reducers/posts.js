const postReducer  = (posts=[],action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...posts,action.payload];
        case 'ADD_COMMENT':
        case 'LIKE':
        case 'UPDATE_POST':
            return posts.map(post => post._id === action.payload._id?action.payload : post)
        case 'DELETE':
            return posts.filter(post => post._id !== action.payload.id)
            default:
            return posts
    }
}
export default postReducer;