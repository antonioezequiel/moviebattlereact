import styles from './Input.module.scss';

interface Props {
    tipo: string, 
    placeholder: string, 
    label: string, 
    required: boolean, 
    estado: string, 
    setEstado: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({tipo, placeholder, label, required, estado, setEstado} : Props) => {
    return (
        <>
            <label>{label}</label>
            <input
                type={tipo}
                placeholder={placeholder}
                required={required}
                value={estado}
                onChange={event => setEstado(event.target.value)}
            />
        </>
    )
}

export default Input;