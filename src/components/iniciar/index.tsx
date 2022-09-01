import Button from "components/button";

const Iniciar = ({estado, setEstado}: {estado: boolean, setEstado: React.Dispatch<React.SetStateAction<boolean>>}) => {
    
    return (
        <Button tipo="button" valor="Iniciar" onclick={() => {setEstado(false)}} />
    )
}

export default Iniciar;