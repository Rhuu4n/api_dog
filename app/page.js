"use client"

import axios from "axios";
import { useState, useEffect } from "react";
import "./dog.css"

export default function Dogs(){

    const [racas, alteraRacas] = useState([]);
    const [imagem, alteraIMG] = useState([]);
    const [nome, alteraNome] = useState([]);

    function buscarDogguinho(){

        axios.get("https://dog.ceo/api/breeds/list/all")
        .then( function(response){
            alteraRacas( Object.keys( response.data.message ) )
        })
    }

    function buscarIMG(raca_dog){
        axios.get("https://dog.ceo/api/breed/"+raca_dog+"/images")
        .then( function(response){
            alteraIMG(( response.data.message ))
        })
    }

    function buscarTodos(){
        axios.get("https://dog.ceo/api/breeds/image/random/20")
        .then( function(response){
            alteraIMG(( response.data.message ))
        })
    }

    useEffect( () => {
        buscarDogguinho();
        buscarTodos();
    } , []);

    return(
    <div id="dog">
        <div>
            <h1>Página dos dog</h1>
            <h2> consulte e encontre fotos de dogguinhos</h2>
        </div>
        <div className="layout-central">
            <div className="layout-menu">
                <h3>dogguinhos</h3>
                <ul>
                    <li onClick={()=>{buscarTodos(); alteraNome("Todos os dog")}}>Todos os dog</li>
                    {racas.map((r, index) => {return(<li key={r} onClick={()=> {buscarIMG(r); alteraNome(r)}}>{r}</li>)})}
                </ul>
            </div>
            <div>
                <h2>{nome}</h2>
                {imagem.map((i, index) => {return(<img key={i} src={i}/>)})}
            </div>
        </div>
    </div>
    );
}