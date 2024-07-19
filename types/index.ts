import { MouseEventHandler } from "react";


export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface searchManufacturerProps {
    manufacture : string;
    setManufacture : (manufacture : string) => void
}