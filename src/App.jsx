import Card from "./components/Card";
import Reportcard from "./components/Reportcard";
import myData from "./data.json";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <>
      <div className="cards-container">
        <Reportcard />
        {myData.map((info) => {
          console.log(info);
          return (
            <Card
              key={uuidv4()}
              title={info.title}
              current={info.timeframes.weekly.current}
              previous={info.timeframes.weekly.previous}
              img={info.img}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
