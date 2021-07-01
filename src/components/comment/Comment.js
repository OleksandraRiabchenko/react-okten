export default function Comment({item}) {
  return (
      <div>
        <h4>{`Comment on this post ${item.postId}:`}</h4>
        {item.id} - {item.body}
      </div>
  )
}
