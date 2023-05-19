import "./App.css";
import Signup from "./pages/SignUp/Signup";
import Recipe from "./pages/Recipes/Recipe";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Card from "./Components/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbarx from "./Components/navbar/navbar";
import recipies from './recipies.json';

function App() {

  console.log(recipies);

  let ingredients = [[]];
  let recipeDetails = [[]];

  let images = [];
  let foodNames = [];
  let prepDetails = [[]]

  let i = 0;
  // JSON dosyasını burada okuyorum
  for(let recipe in recipies["Recipe"]) {
    recipeDetails[i] = recipies["Recipe"][recipe].RecipeDetails.split('\n');
    images.push(recipies["Recipe"][recipe].Image);
    ingredients[i] = recipies["Recipe"][recipe].Ingridients.split('\n');
    foodNames.push(recipies["Recipe"][recipe].Name);
    prepDetails[i] = recipies["Recipe"][recipe].PrepDetails.split(';');
    i++;
  }

  return (
    <div className="App">
      <div className="row">
        <Navbarx />
      </div>
      <Router>
        <Routes>
          <Route exact path="/Signup" element={<Signup />}></Route>
          <Route exact path="/Profile" element={<ProfilePage />}></Route>
          <Route exact path="/Recipe" element={<Recipe />}></Route>
          <Route
            exact
            path="/Card"
            element={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "80px",
                  width: "100%"
                }}
              >
                <div style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%"
                }}>
                <Card
                  name={foodNames[12]}
                  image={
                    images[12]
                  }
                  ingredients={ingredients[12]}
                  recipeDetails={recipeDetails[12]}
                  prepHours={prepDetails[12][1]}
                  numberOfPeople={prepDetails[12][0].split(" ")[0]}
                  id={"1"}
                />
                <Card
                  name={foodNames[16]}
                  image={
                    images[16]
                  }
                  ingredients={ingredients[16]}
                  recipeDetails={recipeDetails[16]}
                  prepHours={prepDetails[16][1]}
                  numberOfPeople={prepDetails[16][0].split(" ")[0]}
                  id={"2"}
                />
                <Card
                  name={foodNames[500]}
                  image={
                    images[500]
                  }
                  ingredients={ingredients[500]}
                  recipeDetails={recipeDetails[500]}
                  prepHours={prepDetails[500][1]}
                  numberOfPeople={prepDetails[500][0].split(" ")[0]}
                  id={"3"}
                />
                </div>
                <div style={{
                  display: "flex",
                  flexDirection: "row"
                }}>
                <Card
                  name={foodNames[331]}
                  image={
                    images[331]
                  }
                  ingredients={ingredients[331]}
                  recipeDetails={recipeDetails[331]}
                  prepHours={prepDetails[331][1]}
                  numberOfPeople={prepDetails[331][0].split(" ")[0]}
                  id={"4"}
                />
                </div>
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
