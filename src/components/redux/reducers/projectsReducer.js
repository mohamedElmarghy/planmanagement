const initState = [
      {id: '1', title: 'help me find peach', content: 'blah blah blah'},
      {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
      {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
]
export  const projectReducer = (state = initState,action) => {
      switch (action.type) {
          case 'CREATE_PROJECT' : 
             return state;  
            default :
             return state
      }
}