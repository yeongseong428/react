import {useState} from "react"
function Reservation(props) {
    const [haveBraekFast, setHaveBreaeFast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);
    const handleSubmit = (event) => {
        alert(`아침식사 여부: ${haveBraekFast ? "먹음" : "안먹음"}, 방문객 수: ${numberOfGuest}`)
        event.preventDefault()
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">
                아침식사:
                <input type="checkbox" name="" id="" checked={haveBraekFast} onChange={(event) => {
                    setHaveBreaeFast(event.target.checked); }}/>
            </label>
            <br />
            <label htmlFor="">
                방문객 수:
                <input type="number" name="" id="" value={numberOfGuest} onChange={(event)=>{
                    setNumberOfGuest(event.target.value);}}/>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}
export default Reservation