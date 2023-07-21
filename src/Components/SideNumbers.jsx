



export const SideNumbers = () => {
    const terminalNumbers = [];
    for(let i = 1; i <= 20; i++) {
        terminalNumbers.push(<p key={i}>{`${i}`}</p>);
    }


   return <>{terminalNumbers}</>



}