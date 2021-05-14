import "./App.css";
import KTP from "./KTP";
import StateManagement from "./StateManagement";
import ID from "./ID";
import BlogSpot from "./BlogSpot";
import Posts from "./Posts";

function App() {
  return (
    <div className="App">
      {/* <KTP
        namaDepan="Budi"
        namaBelakang="H"
        tahunKelahiran={1990}
      />
      <KTP
        namaDepan="Handoko"
        namaBelakang="Halim"
        tahunKelahiran={1970}
        alamat="Semarang"
      />
      <StateManagement
        initialValue=""
      />

      <ID /> */}
      {/* <BlogSpot /> */}
      <Posts />
    </div>
  );
}

export default App;
