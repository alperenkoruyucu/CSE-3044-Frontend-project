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
        <div class="container " style={{ marginTop: 120 }}>
            <div class="row col-12">
                <div class="input-container col-12 mx-2">
                    <div>
                        <header >
                            <h1 style={{fontSize: 60}}>Fit Eats</h1>
                        </header>
                        <label style={{fontSize: 20}}>
                            Choose your Recipe from this list: &nbsp;
                            <input list="recipies" class="input" name="myIngridients" placeholder='Choose Receipe'/>
                        </label>
                        <datalist id="recipies">
                            {
                                Object.values(recipes).map(item => <option value={item.Name} />)
                            }
                        </datalist>
                        <button class="button-18 mx-1" role="button" >OK</button>
                    </div>
                </div>
                <div class="input-container col-12 mt-2 ">
                    <div>
                        <label style={{fontSize: 20}}>
                            Choose your Category from this list: &nbsp;
                            <input list="category" class="input" name="myCategory" placeholder='Choose Category'/>
                        </label>
                        <datalist id="category">
                            {
                                Object.values(recipes).map(item => <option value={item.MainCategory} />)
                            }
                        </datalist>
                        <button class="button-18 mx-1" role="button">OK</button>
                        

                    </div>

                </div>
                <CardList />
            </div>

        </div>


    );
}

export default Recipe;