import { topDealUsers } from "../../../../data.ts"
import { Amount, ContainerTopBox, Email, List, User, UserTexts, Username } from "./style.ts"

export function TopBox() {
  return (
    <ContainerTopBox>
      <h1>Principais Ofertas</h1>
      <List>
        {topDealUsers.map(user => (
          <div className="listItem" key={user.id}>
            <User>
              <img src={user.img} alt="" />
              <UserTexts>
                <Username>{user.username}</Username>
                <Email>{user.email}</Email>
              </UserTexts>
            </User>
            <Amount>${user.amount}</Amount>
          </div>
        ))}
      </List>
    </ContainerTopBox>
  )
}