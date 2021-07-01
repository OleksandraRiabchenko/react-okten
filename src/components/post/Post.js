export default function Post({item, showComments}) {
  return (
      <div>
        {item.id} - {item.body}
        <button onClick={
          () => showComments(item.id)
        }>show comments</button>
      </div>
  )
}
