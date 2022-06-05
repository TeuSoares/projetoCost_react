import styles from "./Select.module.css"

function Select({ text, name, option, handleOnChange, value }){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ""}>
                <option>Selecione uma opção</option>
                {option.map((options) => (
                    <option value={options.id} key={options.id}>{options.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select