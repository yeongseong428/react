import { useState } from "react"
function NameForm(props) {
    const [value, setValue] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value.toUpperCase()); //대문자로 변경되어 set
    }
    const handleSubmit = (event) => {
        alert(`입력한 이름: ${value}`)
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                이름:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <label htmlFor="">
                요청사항:
                <textarea value={value} onChange={handleChange}></textarea>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

export default NameForm