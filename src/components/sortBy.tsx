import { useEffect } from "react";
import { UserData } from "../types/userData";
import CustomButton from "./button";

const SortBy = (props: {
  setUsers: React.Dispatch<React.SetStateAction<UserData[]>>;
  sortedBy: {
    field: "twubric" | "friends" | "influence" | "chirpiness";
    order: "asc" | "desc";
  };
  setSortedBy: React.Dispatch<
    React.SetStateAction<{
      field: "twubric" | "friends" | "influence" | "chirpiness";
      order: "asc" | "desc";
    }>
  >;
}) => {
  const { setUsers, setSortedBy, sortedBy } = props;
  const twubricScoreClickHandler = (
    field: "twubric" | "friends" | "influence" | "chirpiness"
  ) => {
    if (sortedBy.field === field) {
      if (sortedBy.order === "asc") {
        setUsers((user) => {
          user.sort(
            (a, b) =>
              b["twubric"][field === "twubric" ? "total" : field] -
              a["twubric"][field === "twubric" ? "total" : field]
          );
          return user;
        });
        setSortedBy({ field: field, order: "desc" });
      } else {
        setUsers((user) => {
          user.sort(
            (a, b) =>
              a["twubric"][field === "twubric" ? "total" : field] -
              b["twubric"][field === "twubric" ? "total" : field]
          );
          return user;
        });
        setSortedBy({ field: field, order: "asc" });
      }
    } else {
      setUsers((user) => {
        user.sort(
          (a, b) =>
            a["twubric"][field === "twubric" ? "total" : field] -
            b["twubric"][field === "twubric" ? "total" : field]
        );
        return user;
      });
      setSortedBy({ field: field, order: "asc" });
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if(e.key === "t"){
        twubricScoreClickHandler("twubric");
      }else if(e.key === "f"){
        twubricScoreClickHandler("friends");
      }else if(e.key === "i"){
        twubricScoreClickHandler("influence");
      }else if(e.key === "c"){
        twubricScoreClickHandler("chirpiness");
      }
    });
    return () => {
      document.removeEventListener("keydown", () => {});
    };
  });
  return (
    <div className="w-full">
      <h1 className="text-xl font-medium">Sort By</h1>
      <CustomButton
        clickHandler={() => twubricScoreClickHandler("twubric")}
        rightClose
      >
        Twubric Score(T)
      </CustomButton>
      <CustomButton
        clickHandler={() => twubricScoreClickHandler("friends")}
        rightClose
      >
        Friends(F)
      </CustomButton>
      <CustomButton
        clickHandler={() => twubricScoreClickHandler("influence")}
        rightClose
      >
        Infuence(I)
      </CustomButton>
      <CustomButton clickHandler={() => twubricScoreClickHandler("chirpiness")}>
        Chirpiness(C)
      </CustomButton>
    </div>
  );
};

export default SortBy;
