import React, { useState, useEffect } from 'react'
import Header from './Header'
import Axios from 'axios'

const Receipe = () => {
  const [search, setSearch] = useState("")

  const [receipe, setReceipe] = useState([])

  function onchange(e) {
    setSearch(e.target.value)
  }
  function add() {
    getReceipe()
  }
  const id = "618f4565"
  const key = "6b5fc7184434b3e3d3cc11c61a7542b7	"

  useEffect(() => {

  }, [])

  async function getReceipe() {
    const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${id}&app_key=${key}`)
    setReceipe(result.data.hits)
    console.log(result.data.hits)
  }

  return (

    <div >
      <Header search={search} onchange={onchange} add={add} />
      <div className="main">
        {receipe.map((ele) => {
          return (
            <div  >
              <div className='main5'>
                <div className='card-body'>
                  <div className='containe'>
                    <h3 > {ele.recipe.label}</h3>
                    <img src={ele.recipe.image} className="img-fluid w-150 mx-150 rounded-circle" />

                    <ol className='main6'>
                      <h2>Ingredients</h2>
                      {
                        ele.recipe.ingredientLines.map((ele1) => {
                          return (
                            <li  > {ele1} </li>

                          )
                        })


                      }
                       
                      <ol  className='main7'>
                        <h2 >Health</h2>
                        {
                          ele.recipe.healthLabels.map((ele) => {
                            return (<li> {ele} </li>)

                          })
                        }

                     

                    </ol>
                      <ol className="main8">  {
                        ele.recipe.dietLabels

.map((ele2)=>{
                          return(
                            <li> {ele2} </li>
                          )
                        })

                      } </ol>
                     
</ol>
                  </div>


                </div>

              </div>


            </div>

          )
        })}
      </div>

    </div>


  )
}

export default Receipe