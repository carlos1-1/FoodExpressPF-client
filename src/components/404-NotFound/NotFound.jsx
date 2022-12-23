import React from "react";
import { Link } from "react-router-dom";
import style from "./NotFound.module.css";


export default function NotFound() {
    return (
        <div >
            <div  >
                <img className={style.conteiner} src="https://res.cloudinary.com/dowhfu3fj/image/upload/v1668910361/recipes/404-NOT1_an7gdr.png" alt="NotFound" />
            </div>
        </div>
    )
}