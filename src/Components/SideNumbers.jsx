



export const SideNumbers = ({number = 20}) => {
    const terminalNumbers = [];
    for(let i = 1; i <= number; i++) {
        terminalNumbers.push(<p key={i}>{`${i}`}</p>);
    }


   return <>{terminalNumbers}</>



}