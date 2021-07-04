export default function UserDetails(props) {
    console.log(props)
    const {location: {state}} = props;
    return (
        <div>
            {
                JSON.stringify(state)
            }
        </div>
    )
}

