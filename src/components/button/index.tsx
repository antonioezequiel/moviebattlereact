import styles from './Button.module.scss';
const Button = ({tipo, valor, onclick} : {tipo: string, valor: string, onclick: () => void}) => {
    return (
        <input type={tipo} value={valor} onClick={onclick}/>
    )
}

export default Button;