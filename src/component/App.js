import { Image } from "./Image";
import { Header } from "./Header";

const App = () => {
  const row = 256;
  const column = 128;

  //creating a 2D array
  let colors = Array.from(Array(row), () => new Array(column));

  //populating colors array with rgb combination color code
  const pixel =() => {
    let arrayRow = 0;
    let newArray = [];
    for (let x = 8; x <= 256; x += 8) {
      for (let y = 8; y <= 256; y += 8) {
        for (let z = 8; z <= 256; z += 8) {

          //pushing into inner array
          newArray.push([x, y, z]);
          
          //every inner array will have 128 element
          if (newArray.length === column) {
            colors[arrayRow] = newArray;
            arrayRow += 1;
            newArray = [];
          }
        }
      }
    }
  }
  pixel();

  return (
    <div>
      <Header />
      <Image colors={colors} />
    </div>
  );
};

export default App;
