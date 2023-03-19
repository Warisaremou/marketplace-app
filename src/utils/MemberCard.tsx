import { userType } from "../types/entities";
import Avatar from "./Avatar";

type MemberProps = {
  memberData: userType;
};

function MemberCard({ memberData }: MemberProps) {
  return (
      <div className="flex mb-2 border-b pb-5">
          {/* {console.log(memberData)} */}
          <div>{memberData?.photo == null ? <Avatar /> : <Avatar src={memberData?.photo?.path} />}</div>
          <div>
            <h3>{memberData?.username}</h3>
          </div>
    </div>
  );
}

export default MemberCard;
