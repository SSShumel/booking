import st from './ModalCounter.module.css'

export default function ModalCounter({options, keyName, setOptions}) {
    const handleOption = (keyName, operation) => {
        setOptions(prev=>{
            return {
                ...prev, 
                [keyName]: operation === 'i' ? options[keyName] + 1 : options[keyName] - 1
            }
        })
      }

    return (
        <div className={st.optionItem}>
            <span className={st.optionText}>{keyName}</span>
            <div className={st.optionCounter}>
                <button className={st.optionCounterBtn} onClick={()=>handleOption(keyName, 'i')}>+</button>
                <span className={st.optionCounterNumber}>{options[keyName]}</span>
                <button disabled={options[keyName] <= 0} className={st.optionCounterBtn} onClick={()=>handleOption(keyName, 'd')}>-</button>
            </div>
        </div>
    )
}