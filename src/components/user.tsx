import { useCallback, useEffect, useState } from "react";
import { months } from "../data/months";
import { UserData } from "../types/userData";

const Users = (props: {
  users: UserData[];
  setUsers: React.Dispatch<React.SetStateAction<UserData[]>>;
}) => {
  const { users, setUsers } = props;
  const removeUserClickHandler = (userId: number) => {
    setUsers((users) => users.filter((user) => user.uid !== userId));
  };
  const [selected, setSelected] = useState(0);
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    console.log(e.key);
    if (e.key === "ArrowUp") {
      if (selected > 2) {
        setSelected(selected - 3);
      }
    } else if (e.key === "ArrowRight") {
      if (selected < 9) {
        setSelected(selected + 1);
      }
    } else if (e.key === "ArrowLeft") {
      if (selected > 0) {
        setSelected(selected - 1);
      }
    } else if (e.key === "ArrowDown") {
      if (selected < 8) {
        setSelected(selected + 3);
      }
    }else if(e.key === "Delete"){
        setUsers((users) => users.filter((_, index) => index !== selected))
    }
  }, [selected, setUsers]);
  useEffect(() => {
    console.log("hiii");
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  return (
    <div className="w-full flex items-center flex-wrap">
      {users.map((user) => {
        const date = new Date(user.join_date);
        const fullDate =
          months[date.getMonth()] +
          " " +
          date.getDate() +
          ", " +
          date.getFullYear();
        return (
          <div
            className={`w-1/4 border-black mx-10 mt-5 ${
              users[selected].uid === user.uid ? `border-2` : `border`
            }`}
            key={user.uid}
          >
            <div className="flex justify-between w-full">
              <div>
                <h1 className="text-lg pl-1 font-medium">{user.username}</h1>
              </div>
              <div>
                <h1 className="text-lg pr-1 font-medium">
                  {user.twubric.total}
                </h1>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/3 py-1 px-3 border border-black border-l-0">
                <center>
                  <h1 className="text-lg font-medium">
                    {user.twubric.friends}
                  </h1>
                  <h1 className="text-lg">Friends</h1>
                </center>
              </div>
              <div className="w-1/3 py-1 px-3 border border-black border-l-0">
                <center>
                  <h1 className="text-lg font-medium">
                    {user.twubric.influence}
                  </h1>
                  <h1 className="text-lg">Influence</h1>
                </center>
              </div>
              <div className="w-1/3 py-1 px-3 border border-black border-l-0 border-r-0">
                <center>
                  <h1 className="text-lg font-medium">
                    {user.twubric.chirpiness}
                  </h1>
                  <h1 className="text-lg">Chirpness</h1>
                </center>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/3 border-r border-black text-center font-medium">
                {fullDate}
              </div>
              <div className="w-2/3 text-right pr-1">
                <button
                  className="font-medium"
                  onClick={() => removeUserClickHandler(user.uid)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
