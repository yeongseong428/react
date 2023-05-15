import React, {useState} from "react"
function SignUp(props){
    const [name, setName] = useState('')
    const [gender, setGender] = useState('M')
    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }
    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`)
        event.preventDefault();
    }
    return (
        <form action="" onSubmit={handleSubmit} style={{padding:10}}>
            <label htmlFor="">
                이름:
                <input type="text" name="" id="" value={name} onChange={handleChangeName}/>
            </label>
            <label htmlFor="" style={{padding:5}}>
                성별:
                <input type="radio" id="" name="gender" value="M" checked={gender==='M'} onChange={handleChangeGender}/>남
                <input type="radio" id="" name="gender" value="F" checked={gender==='F'} onChange={handleChangeGender}/>여
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
export default SignUp;