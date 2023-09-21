import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"



const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball'])

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([newCategory, ...categories])
    }



  return (
    <>
        {/*titulo*/}
        <h1>Gif Expert app</h1>

        {/*input*/}
        <AddCategory 
            setCategories={ setCategories } 
            onNewCategory={ onAddCategory }
        />

        {/*Listado de Gif*/}
        {/* <button onClick={ onAddCategory }>Agregar</button> */}

        {categories.map(category => 
            // {
            // return (
            //     <div key={ category }>
            //         <li> { category } </li>
            //     </div>
            // )})
            (
                <GifGrid 
                    key={ category }
                    category={ category }
                />
            ))
        }

            {/*Gif item*/}
    </>
  )
}

export default GifExpertApp