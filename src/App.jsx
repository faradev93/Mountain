import { useState } from "react";
import "./global-tailwind.css";
import "./App.css";
import Cardwrapper from "./components/CardWrapepr";
import Flex from "./components/Flex";
import DivTest from "./components/DivTest";

const dragon = [
  {
    id: 1,
    email: "Sincere@april.biz",
    name: "Leanne Graham",
    image: "https://robohash.org/1?set=set2&size=290x290",
  },
  {
    id: 2,
    email: "Shanna@melissa.tv",
    name: "Ervin Howell",
    image: "https://robohash.org/2?set=set2&size=290x290",
  },
  {
    id: 3,
    email: "Nathan@yesenia.net",
    name: "Clementine Bauch",
    image: "https://robohash.org/3?set=set2&size=290x290",
  },
  {
    id: 4,
    email: "Julianne.OConner@kory.org",
    name: "Patricia Lebsack",
    image: "https://robohash.org/4?set=set2&size=290x290",
  },
  {
    id: 5,
    email: "Lucio_Hettinger@annie.ca",
    name: "Chelsey Dietrich",
    image: "https://robohash.org/5?set=set2&size=290x290",
  },
  {
    id: 6,
    email: "Karley_Dach@jasper.info",
    name: "Mrs. Dennis Schulist",
    image: "https://robohash.org/6?set=set2&size=290x290",
  },
  {
    id: 7,
    email: "Telly.Hoeger@billy.biz",
    name: "Kurtis Weissnat",
    image: "https://robohash.org/7?set=set2&size=290x290",
  },
  {
    id: 8,
    email: "Sherwood@rosamond.me",
    name: "Nicholas Runolfsdottir V",
    image: "https://robohash.org/8?set=set2&size=290x290",
  },
  {
    id: 9,
    email: "Chaim_McDermott@dana.io",
    name: "Glenna Reichert",
    image: "https://robohash.org/9?set=set2&size=290x290",
  },
  {
    id: 10,
    email: "Rey.Padberg@karina.biz",
    name: "Clementina DuBuque",
    image: "https://robohash.org/10?set=set2&size=290x290",
  },
];

let funfuni = () => {
  {
    [1, 2, 3, 4].map(() => {
      console.log("salam2");
    });
  }
};
let arrrrrrrrr2ar = { [1]: "chang", fml: "khanloyu", age: "31" };

export default function App() {
  return (
    <div>
      <Flex>
        {dragon.map((monsterman) => {
          return <Cardwrapper data={monsterman} key={monsterman.id} />;
        })}
        <DivTest>
          {funfuni()}
          {console.log(Object.values(arrrrrrrrr2ar))}
        </DivTest>
      </Flex>
    </div>
  );
}
