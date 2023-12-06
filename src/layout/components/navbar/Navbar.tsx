import { Icons, Logo, Navigation, Notification, Span, User } from ".";

export function Navbar() {
  return (
    <Navigation>
      <Logo>
        <span>Nova Software</span>
      </Logo>
      <Icons>
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <Notification>
          <img src="/notifications.svg" alt="" />
          <Span>1</Span>
        </Notification>
        <User>
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Kauê</span>
        </User>
      </Icons>
      <img src="/settings.svg" alt="" className="icon" />
    </Navigation>
  );
}
