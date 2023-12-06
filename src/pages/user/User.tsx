import { Single } from "../../components/single/Single"
import { singleUser } from "../../data"

export function User() {
  return (
    <div className="user">
      <Single {...singleUser}/>
    </div>
  )
}