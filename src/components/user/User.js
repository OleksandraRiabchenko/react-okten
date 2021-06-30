export default function User({item, showPost}) {

    return (
        <div>
            {item.id} - {item.name}
            <button onClick={
              () => showPost(item.id)
            }>show posts</button>
        </div>
            )
}
