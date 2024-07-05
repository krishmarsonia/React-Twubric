import { useState } from "react";

import Users from "./components/user";
import SortBy from "./components/sortBy";
import usersData from "./data/users.json";
import JoinedTwitter from "./components/joinedTwitter";

import "./App.css";
import { UserData } from "./types/userData";

function App() {
  // const [count, setCount] = useState(0)
  const [users, setUsers] = useState<UserData[]>(usersData);
  const [sortedby, setSortedBy] = useState<{
    field: "twubric" | "friends" | "influence" | "chirpiness";
    order: "asc" | "desc";
  }>({ field: "twubric", order: "asc" });

  return (
    <main className="p-5">
      <SortBy
        setUsers={setUsers}
        sortedBy={sortedby}
        setSortedBy={setSortedBy}
      />
      <JoinedTwitter setUsers={setUsers} />
      <Users users={users} setUsers={setUsers} />
    </main>
  );
}

export default App;
