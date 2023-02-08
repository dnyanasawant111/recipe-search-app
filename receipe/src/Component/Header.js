import React from 'react'

const Header = (props) => {
  return (
    <div className='jumbotron'> 

       <h1> <img className="rounded-circle"width="70px" height="70px" src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=2000"/> 
          { } Food Receipe App</h1> <br/>

          <div className="input-group flex-nowrap">

  <input onChange={props.onchange} type="text" className="form-control" placeholder=" Enter here to Search receipe" aria-label="Username" aria-describedby="addon-wrapping" value={props.search}/>
</div> <br/>

          <button  className="btn btn-info" onClick={props.add}>Click here to Search Receipe</button>

    </div>
  )
}

export default Header