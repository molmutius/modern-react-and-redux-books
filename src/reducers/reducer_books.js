export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    console.log(action)
  }
  return [
    {title: 'Javascript', pages: 213},
    {title: 'Harry Pothead', pages: 55},
    {title: 'The Dark Tower', pages: 540},
    {title: 'Eloquent Ruby', pages: 1002}
  ]
}
