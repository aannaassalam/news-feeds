import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/card";
import Sidebar from "./components/sidebar/sidebar";
import { ReactComponent as ChevronLeft } from "./assets/chevrons-left.svg";
import { ReactComponent as ChevronRight } from "./assets/chevrons-right.svg";

function App() {
  const [view, setView] = useState("card");
  const [extend, setExtend] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [lowerLimit, setLowerLimit] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data.splice(0, 24)))
      .catch((err) => console.log(err));
  }, []);

  const removeItem = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Sidebar
        view={view}
        setView={(view) => setView(view)}
        extend={extend}
        setExtend={() => setExtend((prev) => !prev)}
      />
      <div className={extend ? "container blur" : "container"}>
        <div className="cards">
          {data.map((item, index) =>
            view === "card"
              ? index + 1 > lowerLimit * 8 &&
                index + 1 <= page * 8 && (
                  <Card
                    item={item}
                    view={view}
                    key={item.id}
                    removeItem={() => removeItem(item.id)}
                  />
                )
              : index + 1 > lowerLimit * 5 &&
                index + 1 <= page * 5 && (
                  <Card
                    item={item}
                    view={view}
                    key={item.id}
                    removeItem={() => removeItem(item.id)}
                  />
                )
          )}
        </div>
        <div className="pagination">
          {/* <img src={chevron_left} alt="" /> */}
          {page > 1 && (
            <ChevronLeft
              color="#aaa"
              onClick={() => {
                setPage((prevPage) => prevPage - 1);
                setLowerLimit((prev) => prev - 1);
              }}
            />
          )}
          <span
            className={page === 1 && "active"}
            onClick={() => {
              setPage(1);
              setLowerLimit(0);
            }}
          >
            1
          </span>
          <span
            className={page === 2 && "active"}
            onClick={() => {
              setPage(2);
              setLowerLimit(1);
            }}
          >
            2
          </span>
          <span
            className={page === 3 && "active"}
            onClick={() => {
              setPage(3);
              setLowerLimit(2);
            }}
          >
            3
          </span>
          {page < 3 && (
            <ChevronRight
              color="#aaa"
              onClick={() => {
                setPage((prevPage) => prevPage + 1);
                setLowerLimit((prev) => prev + 1);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
