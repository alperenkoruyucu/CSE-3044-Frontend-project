import './Recipe.css'
import './Recipe.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import list from './../../recipies.json';
import CardList from '../../Components/CardList';
import { useEffect, useState } from 'react';



function Recipe() {
    console.log('list', list)
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        setRecipes(list["Recipe"])
    }, []);
    console.log("=>", recipes)
    return (
        <div class="container" style={{ marginTop: 120 }}>
            <div class="row">
                <div class="col-12">
                    <div>
                    <h1>Fit Eats</h1>
                        <label>
                            Choose your Recipe from this list: &nbsp;
                            <input list="recipies" class="input" name="myIngridients" />
                        </label>
                        <datalist id="recipies">
                            {
                                Object.values(recipes).map(item => <option value={item.Name} />)
                            }
                        </datalist>
                        <button class="button-18" role="button">OK</button>
                    </div>
                </div>
                <div class="col-12 mt-2">
                    <div>
                        <label>
                            Choose your Catagory from this list: &nbsp;
                            <input list="category" class="input" name="myCategory" />
                        </label>
                        <datalist id="category">
                            {
                                Object.values(recipes).map(item => <option value={item.MainCategory} />)
                            }
                        </datalist>
                        <button class="button-18" role="button">OK</button>
                        <CardList/>                       
                        
                    </div>
                    
                </div>
            </div>

        </div>


    );
}

export default Recipe;