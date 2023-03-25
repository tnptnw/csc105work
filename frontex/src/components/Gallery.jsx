import React from 'react'
import "../styles/Gallery.css"
const Gallery = () => {
  return (
    <section className='gallery'>
        <h2>
        Gallery
        </h2>
        <ul>
            <li>
                <img width={200} src='https://en.meming.world/images/en/7/7f/Polish_Jerry.jpg'></img>               
                
            </li>
            <li>
            <img width={200} src='https://files.cults3d.com/uploaders/17095298/illustration-file/ed35eb8e-5e86-4ecf-af0c-e8cbbcfacdda/jerrymeme_meme.jpg'></img>
            </li>
            <li>
            <img width={200} src='https://www.scrolldroll.com/wp-content/uploads/2020/09/Jerry-Dancing-Tom-Jerry-Memes-.jpg'></img>
            </li>
        </ul>
    </section>
  )
}

export default Gallery