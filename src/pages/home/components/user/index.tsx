import { singleUser } from "../../../../data";
import { Single } from "../single";

export function User() {
  return (
    <div className="user">
      <Single {...singleUser}/>
    </div>
  )
}