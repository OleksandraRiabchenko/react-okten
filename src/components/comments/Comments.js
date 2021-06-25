import Comment from '../comment/Comment'

export default function Comments({ items }) {
  return (
      <div>
        {
          items.map(value => <Comment item={value}/>)
        }
      </div>
  )
}
