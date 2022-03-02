import { useState } from "react"
import AddCategory from "./AddCategory"
import { GifGrid } from "./GifGrid"

function GifExpertApp() {



    
    const [categories, setCategories] = useState(["One Punch"])
    

    return(
        <>
        
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

 

            <ol>
                {categories.map( (categorie,i) => (
                    <GifGrid 
                    key={categorie}
                    categories={categorie} 
                    />)   
                )}
                
            </ol>
        
        </>



    )

}

export default GifExpertApp