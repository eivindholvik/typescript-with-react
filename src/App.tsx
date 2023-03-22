import "./App.css";
import { useEffect, useState } from "react";
import { IUser, IData } from "./interfaces";
import User from "./User";

let url: string = "https://jsonplaceholder.typicode.com/posts";

function App(): JSX.Element {
  const [data, setData] = useState<IData[] | undefined>([]);

  const [user, setUser] = useState<IUser | undefined>({
    id: -1,
    userName: "",
    age: -1,
    siblings: [],
  });

  useEffect(() => {
    async function getData(): Promise<any> {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (e) {
        console.log(e);
      } finally {
        console.log(data);
      }
    }
    console.log("hei", getData());
  }, [url]);

  return (
    <div className="App">
      <div>En liten endring</div>
      {data &&
        data.map((user) => {
          return (
            <User
              key={user.id}
              userId={user.userId}
              title={user.title}
              body={user.body}
            />
          );
        })}
    </div>
  );
}

export default App;
