export default function Post({item}) {
    return (
        <div>
            {item.id} - {item.title}
            <p>{item.body}</p>
        </div>
    )
}