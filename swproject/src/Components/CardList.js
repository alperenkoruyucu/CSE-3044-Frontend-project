import Card from "./Card";
import recipies from "../recipies.json"

function CardList() {
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
    <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap:"5px",
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
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%"
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
                <Card
                  name={foodNames[33]}
                  image={
                    images[33]
                  }
                  ingredients={ingredients[33]}
                  recipeDetails={recipeDetails[33]}
                  prepHours={prepDetails[33][1]}
                  numberOfPeople={prepDetails[33][0].split(" ")[0]}
                  id={"5"}
                />
                <Card
                  name={foodNames[231]}
                  image={
                    images[231]
                  }
                  ingredients={ingredients[231]}
                  recipeDetails={recipeDetails[231]}
                  prepHours={prepDetails[231][1]}
                  numberOfPeople={prepDetails[231][0].split(" ")[0]}
                  id={"6"}
                />


                </div>
              </div>
  );
}

export default CardList;
