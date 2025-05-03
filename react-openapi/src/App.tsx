import "./App.css";
import { PetApi } from "./shared/api/generated";
import { createFrontendApi } from "./utils/commonUtils";

function App() {
  const handleClick = async () => {
    const api = new PetApi(createFrontendApi());
    try {
      const response = await api.getPetById({ petId: 1 });
      console.log(response);
      console.log("OpenAPI call triggered");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="card">
        <button onClick={handleClick}>Call api</button>
      </div>
    </>
  );
}

export default App;
