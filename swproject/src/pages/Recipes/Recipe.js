import './Recipe.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Recipe.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Recipe() {
    return (  
        
        <div className='Recipe'>                       
            
            <div className='RecipeContainer ' style={{display:"flex", flexDirection:"column", justifyContent:"center", padding: "85px"  }}>
                
                <form>
                    <h1>Fit Eats</h1>
                    <label for="inlineCheckbox1">Write Your Ingridients:</label>

                </form>                
            </div>
            <div class="input-group ">
            <label>
            Choose your Ingridients from this list: &nbsp;
            <input list="Ingridients" class="input" name="myIngridients" />  
            </label>   
            <datalist id="Ingridients">
                <option value="kek" />
                <option value="pasta" />
                <option value="muz" />
                <option value="salata" />
                <option value="havuç" />
                <option value="patates" />   
            </datalist>
            </div>
            <div class="select  ">
                <form>
                    <select class="form-select my-5 " aria-label="Default select example">
                        <option selected>kategoriye göre ara</option>
                        <option value="1">Ara sıcak</option>
                        <option value="2">Atıştırmalık</option>
                        <option value="3">Tatlı</option>
                     </select>                     
                </form>                            
                
           
            </div>                           
            
        </div>
    );
}

export default Recipe;