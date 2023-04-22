import React from 'react'
import { useState,useEffect } from 'react'
import cherry from '../img/cherry.jpg'
import seven from '../img/lemon.jpg'
import bar from '../img/bar.jpg'
import luffy from '../img/luffy.png'
import sexy1 from '../img/nomi1.jpg'
import sexy2 from '../img/robin.jpg'
import slot from '../sound/slot.wav'
import coinup from '../sound/coinup.wav'
import jugada from '../sound/bonus.wav'
import falla from '../sound/fail.mp3'

import '../estilos.css'



const Panel = () => {

   //Hooks
    const [saldo, setsaldo] = useState(0)
    const [respuesta, setrespuesta] = useState(`Oprime el botòn `)
    const [ingresar, setingresar] = useState(250)
    const [image1, setimage1] = useState(luffy)
    const [image2, setimage2] = useState(luffy)
    const [image3, setimage3] = useState(luffy)
    
    useEffect(() => {
        let jugar= document.getElementById('jugar')
      if (saldo<=0){ jugar.style.display='none'
        setrespuesta('Introduce mas dinero para seguir jugando')
        setsaldo(0)
        sound4.play()}
      else{jugar.style.display='inline'} 
      
      
    }, [saldo])
    

    //Otros
    const girl1=sexy1
    const girl2=sexy2
    const sound=new Audio()
    sound.src=slot
    const sound2=new Audio()
    sound2.src=coinup
    const sound3=new Audio()
    sound3.src=jugada
    const sound4 = new Audio()
    sound4.src=falla
    
    
    //Funcion Principal
    const cambiaImg=()=>{
        
         sound3.play()

        const rnd1=Math.floor(Math.random() * 3);
        let valor1=0
        const rnd2=Math.floor(Math.random() * 3);
        let valor2=0
        const rnd3=Math.floor(Math.random() * 3);
        let valor3=0

        switch (rnd1) {
            case 0:
                setimage1(cherry)
                 valor1=0
                 console.log(valor1)
                break;
            case 1:
                setimage1(seven)
                 valor1=1
                 console.log(valor1)
                break;
            case 2:
                setimage1(bar)
                 valor1=2
                 console.log(valor1)
                break;
            default:
                break;
        }
        switch (rnd2) {
            case 0:
                setimage2(cherry)
                 valor2=0
                 console.log(valor2)
                break;
            case 1:
                setimage2(seven)
                 valor2=1
                 console.log(valor2)
                break;
            case 2:
                setimage2(bar)
                 valor2=2
                 console.log(valor2)
                break;
            default:
                break;
        }
        switch (rnd3) {
            case 0:
                setimage3(cherry)
                 valor3=0
                 console.log(valor3)
                break;
            case 1:
                setimage3(seven)
                 valor3=1
                 console.log(valor3)
                break;
            case 2:
                setimage3(bar)
                 valor3=2
                 console.log(valor3)
                break;
            default:
                break;
        }
        
        
        if((valor1===valor2 ) && (valor1===valor3 )){
            setsaldo(saldo+1000);setrespuesta('!!Has Ganado¡¡¡');sound.play()}
           else{  setsaldo(saldo-250);
            setrespuesta('¡¡¡Has Perdido !! :(')
            }
    }    
     
    //Funcion del input
    let cambiarInput=(valor)=>{
        setingresar(valor)
    }

    //Función para ingresar monto
    let adicionar=()=>{
        setingresar(250)
        const suma=(parseInt(saldo)+parseInt(ingresar))
        console.log(typeof suma)
        setsaldo(suma)
        console.log(saldo)
        sound2.play()
        
        setrespuesta('¡¡Gracias por tu dinero SIGUE JUGANDO!! >:)')
        
    }
   
    
  return (
   
    <div >
       <div className='container'>

            <div >
            <img  width= '200px' height='250px' src={girl1} alt="" />
            </div>

            <div className='tarjeta'>
            <img width= '200px'src= {image1} alt="" />
            </div>

            <div className='tarjeta'>
            <img width= '200px'src= {image2} alt="" />
            </div>

            <div className='tarjeta'>
            <img width= '200px'src= {image3} alt="" />
            </div> 
            
            <div>
            <img width= '200px' height='250px' src={girl2}alt="" />
            </div> 
      </div >
        <div className='modulo'>
            <h2 className='blink'>Haz Click en el botòn</h2>
            <p style={{marginTop:-35}}>Cada Ficha vale 250</p>
            
            <button className="button-14"  onClick={()=>adicionar()}>INGRESAR</button>
           
        </div> 
        <div>
        <button id='jugar' className="button-14 blink"  onClick={()=>{cambiaImg()}} >JUGADA</button>
        </div>
       
            
           
        <div>
            <h2   style={{color:'#ba4cb7',textShadow:'1px 1px 1px white',marginTop:'-5px'}}>{respuesta}</h2>
            <h1 style={{marginTop:'-40px'}}>{`tu saldo es de ${saldo}`}</h1>
            
        </div>



    </div>
    
  )
  }

export default Panel