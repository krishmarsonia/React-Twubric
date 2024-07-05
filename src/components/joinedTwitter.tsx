import { UserData } from "../types/userData";
import DateInput from "./dateInput";

const JoinedTwitter = (props: {
  setUsers: React.Dispatch<React.SetStateAction<UserData[]>>;
}) => {
    const {setUsers} = props;
  const startDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setUsers((user) => {
        return user.filter((us) => us.join_date > date.getTime());
    })
  };
  const endDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setUsers((user) => {
        return user.filter((us) => us.join_date < date.getTime());
    })
  }
  return (
    <div className=" w-full mt-5">
      <h1 className="text-xl font-medium">Joined Twitter between</h1>
      <div className="flex w-full">
        <DateInput changeHandler={startDateHandler} rightClose>
          Start Date
        </DateInput>
        <DateInput changeHandler={endDateHandler}>End Date</DateInput>
      </div>
    </div>
  );
};

export default JoinedTwitter;
