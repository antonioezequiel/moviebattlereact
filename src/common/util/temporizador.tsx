export const temporizador = (temp: number, setTempoRedirect: React.Dispatch<React.SetStateAction<number>>) =>{
    setTimeout(()=>{
        if(temp > 0 ){
            setTempoRedirect(temp);
            return temporizador(temp - 1, setTempoRedirect);
        }
    }, 1000);
}