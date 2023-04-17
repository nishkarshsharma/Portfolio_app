import React from 'react';
import audioReactorImage from './images/Audio Reactor.png'
// import bouncingBallImage from './images/BouncingBall.png'
import canDissolveImage from './images/Can.png'
import candyImage from './images/Candy.png'
import cubeImage from './images/Cube.png'
import dancerImage from './images/Dancer.png'
import donutImage from './images/Donut.png'
import dragonFireImage from './images/DragonFire.png'
// import dragonSceneImage from './images/DragonScene.png'
// import helicopterImage from './images/Helicopter.png'
// import idleImage from './images/IdleAnim.png'
import landscapeImage from './images/Landscape.png'
import medVillageImage from './images/MedievalVillage.png'
// import pendulumImage from './images/Pendulum.png'
import portalImage from './images/Portal.png'
import skullImage from './images/Skull.png'
import twisterImage from './images/Twister.png'
import tyreBurnImage from './images/Tyre Burn.png'
import nordicBeachImage from './images/Nordic Beach Scene.png'
import forestImage from './images/Forest.png'
import empireImage from './images/Empire.png'


export default function Gallery() {
    return( 
    <>
        <h1 className='text-center text-success my-5'>
            Hi, I'm Nishkarsh Sharma.
        </h1>

        <h1 className='text-center text-success my-5'>
            Renders
        </h1>
        <h2 className='text-center text-success my-5'>
            Maya
        </h2>


        <div className='container'>
            <div className='row mx-4'>
                <div className = "col-sm">
                    <div className="card">
                        <img src={portalImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Portal Effect</h5>
                            <p className="card-text">This render was made fully using Autodesk Maya. In this project, I learned how "n particles" in Maya...</p>
                            <a href="https://www.youtube.com/watch?v=yz1LjccofTM" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm">
                    <div className="card">
                        <img src={candyImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Creamy Candy</h5>
                            <p className="card-text">Level designing in Unreal Engine. All the assets use were taken from Quixel Megascans Library.</p>
                            <a href="https://youtu.be/KWKCG91fd4g" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm">
                    <div className="card">
                        <img src={dancerImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Dragon Scene</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://youtu.be/9-Bvxs7qmwY" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row mx-4'>
                <div className = "col-sm">
                    <div className="card">
                        <img src={donutImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Dragon Scene</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://youtu.be/mYAo-Ijf3qE" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm">
                    <div className="card">
                        <img src={twisterImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Medieval Village Scene</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://youtu.be/zStzSmWdBWE" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <h2 className='text-center text-success my-5'>
            Houdini
        </h2>
        <div className='container'>
            <div className='row mx-4'>
                <div className = "col-sm">
                    <div className="card">
                        <img src={audioReactorImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Audio Reactor</h5>
                            <p className="card-text">This render was made fully using Autodesk Maya. In this project, I learned how "n particles" in Maya...</p>
                            <a href="https://youtu.be/CJ6-GjEI4iU" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm">
                    <div className="card">
                        <img src={canDissolveImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Can Disintegration</h5>
                            <p className="card-text">Level designing in Unreal Engine. All the assets use were taken from Quixel Megascans Library.</p>
                            <a href="https://youtu.be/EEEssavEYPE" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm">
                    <div className="card">
                        <img src={cubeImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Solving Rubik's Cube</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://youtu.be/lDPNPYVlw8s" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row mx-4'>
                <div className = "col-sm">
                    <div className="card">
                        <img src={landscapeImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Landscape</h5>
                            <p className="card-text">This render was made fully using Autodesk Maya. In this project, I learned how "n particles" in Maya...</p>
                            <a href="https://youtu.be/-h4FShVZRnk" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm">
                    <div className="card">
                        <img src={skullImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Suction Skull</h5>
                            <p className="card-text">Level designing in Unreal Engine. All the assets use were taken from Quixel Megascans Library.</p>
                            <a href="https://youtu.be/0ae1zqKzqnU" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm">
                    <div className="card">
                        <img src={tyreBurnImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Burning Tyre</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://youtu.be/FfIJUFxCpcw" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm">
                    <div className="card">
                        <img src={dragonFireImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Burning Dragon</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://youtu.be/y7I1MLqYun8" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <h2 className='text-center text-success my-5'>
            Unreal Engine
        </h2>
        <div className='container'>
            <div className='row mx-4'>
                <div className = "col-sm">
                    <div className="card">
                        <img src={medVillageImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Medieval Village Level</h5>
                            <p className="card-text">This render was made fully using Autodesk Maya. In this project, I learned how "n particles" in Maya...</p>
                            <a href="https://youtu.be/HhrU78-T87E" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm">
                    <div className="card">
                        <img src={nordicBeachImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Nordic Beach Level</h5>
                            <p className="card-text">Level designing in Unreal Engine. All the assets use were taken from Quixel Megascans Library.</p>
                            <a href="https://youtu.be/_ZXQgfucOps" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='container'>
            <div className='row mx-4'>
                <div className = "col-sm">
                    <div className="card">
                        <img src={empireImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Empire Level</h5>
                            <p className="card-text">This render was made fully using Autodesk Maya. In this project, I learned how "n particles" in Maya...</p>
                            <a href="https://youtu.be/7GqSvaNbQJ8" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
                <div className = "col-sm">
                    <div className="card">
                        <img src={forestImage} className="card-img-top" alt="renderPic"/>
                        <div className="card-body">
                            <h5 className="card-title">Forest Level</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://youtu.be/O7NHsK6ViEM" className="btn btn-primary">Check out the Video</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
