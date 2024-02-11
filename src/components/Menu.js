import React from 'react'
import recipes from '../recipes';
import Swal from 'sweetalert2';

const Menu = () => {
    const handleOrder= (id)=>{
        console.log(id,"id is clicked")
        Swal.fire({
            title: "Are you sure you want to order this dish?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Order now"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Order succesful",
                text: "A tasty dish is on the way",
                icon: "success"
              });
            }
          });
    }

  return (
    <div className='menu-container'>
        <div className='menu-header'>
            <h2>This weeks special</h2>
            <button>order Menu</button>
        </div>
        <div className='cards'>
            {
                recipes.map(recipes => <div key={recipes.id} className='menu-items'>
                    <img src={recipes.image} alt='' />
                    <div className='menu-content'>
                        <div className='heading'>
                            <h4>{recipes.title}</h4>
                            <p>{recipes.price}$</p>
                        </div>
                        <p>{recipes.description}</p>
                        <button className='orderBtn' onClick={()=>handleOrder(recipes.id)}>Order Now</button>
                    </div>

                </div>)
            }
        </div>
    </div>
  )
}

export default Menu