import React from 'react'
import { useParams } from 'react-router-dom'
import { placesStore } from '../Store/MainStore';



const CardsDetail = () => {
    const {id} = useParams();

     const getdetailing = placesStore.find((item) => item.id === id);

    const { name, homeMainPic, price, stars, carouselPic1, carouselPic2,
         carouselPic3, carouselPic4, carouselPic5 } =  getdetailing 

  return (
    <>  
          <div className="card-detail" style = {{margin:'5%'}}>
                     Id is -  {id}
                        <div className="item-name">
                            <span> {name} </span>
                            <span> star - {stars} </span>
                            <span> Reviews - {Math.floor(Math.random() * (999 - 100 + 1) + 100)} </span>
                        </div>
                        <div className="main-image" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                                <div className="first-img-side">
                                    <span style = {{textAlign:'center'}}>
                                        <img src = {carouselPic1}  alt = "first-img"  style = {{width:'90%'}} />
                                    </span>
                                </div>

                                <div className="second-img-side" style = {{display:'grid',gridTemplateColumns:'1fr 1fr',margin:'1%'}}>
                                    <span>
                                    <img src = {carouselPic2}  alt = "second-img"  style = {{width:'80%'}} />
                                    </span>
                                    <img src = {carouselPic3}  alt = "third-img"  style = {{width:'80%'}} />
                                    <img src = {carouselPic4}  alt = "fourth-img" style = {{width:'80%'}} />
                                    <img src = {carouselPic5}  alt = "fifth-img"  style = {{width:'80%'}} />
                                </div>
                        </div>
                        
          </div>
    </>
  )
}

export default CardsDetail