// import { useEffect, useState } from "react";
import User from '../user/User';

export default function Users({items, showPosts}) {


    return(
        <div>
          {
            items.map(value => <User key={value.id} item={value} showPosts={showPosts}/>)
          }
        </div>
    )
}
