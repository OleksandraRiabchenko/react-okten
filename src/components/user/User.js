export default function User({item, showPosts}) {
    return (
        <div>
          {item.id} - {item.name}
          <button onClick={
            () => showPosts(item.id)
          }>show posts</button>
        </div>
    )
}
