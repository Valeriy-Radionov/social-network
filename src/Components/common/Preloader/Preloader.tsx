import React from "react"
import loaderImg from "../../../assets/images/loader.svg";

type PreloaderPropsType = {}
export const Preloader = (props: PreloaderPropsType) => {
    return (
        <img src={loaderImg}/>
    )
}