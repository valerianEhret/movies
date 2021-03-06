import React from "react";
import s from "./ContentModal.module.css";

type ContentModalPropsType = {
    active: boolean
    setActive: (active: boolean) => void
    children: React.ReactNode
}




export const ContentModal: React.FC<ContentModalPropsType> = ({active, children, setActive}) => {

    const setModalActive = () => {
        setActive(false)
    }

    const classForModal = active ? `${s.modal} ${s.active}` : `${s.modal}`;


    return (
        <div className={classForModal} onClick={setModalActive} >
                {children}
        </div>
    )
}