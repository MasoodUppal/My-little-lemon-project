import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../images/restauranfood.jpg'

function Header() {
  return (
    <header className='header'>
        <section>
            {/*banner text for little lemon*/}
            <div className='banner'>
                <h2>Little lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking">
                    <button aria-label='On Click'>
                        Reserve Table
                    </button>
                </Link>
            </div>

            <div className='banner-img'>
                <img src={bannerImg} alt='Banner image' />
            </div>
        </section>
    </header>
  )
}

export default Header