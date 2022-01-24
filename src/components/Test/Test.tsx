import {useState} from "react";
import {ContentModal} from "../ContentModal/ContentModal";



export const Test = () => {

    const [modalActive, setModalActive] = useState<boolean>(true);

    return (
        <ContentModal active={modalActive} setActive={setModalActive}>TEST</ContentModal>
    )
}