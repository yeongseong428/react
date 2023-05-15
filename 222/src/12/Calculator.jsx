import { useState } from "react"
import BoilingVerdict from "./BoilingVerdict";
import TemparatureInput from "./TemparatureInput";

function Calculator(props) {
    const [temparature, setTemparature] = useState('')
    const [scale, setScale] = useState('c')
    const handleCelsiusChange = (temparature) => {
        setTemparature(temparature);
        setScale('c')
    }
    const handleFahrenheitChange = (temparature) => {
        setTemparature(temparature);
        setScale('f')
    }
    function tryConvert(temparature, convert) {
        const input = parseFloat(temparature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }
    const celsius = scale === 'f' ? tryConvert(temparature, toCelius) : temparature;
    const fahrenheit = scale === 'c' ? tryConvert(temparature, toFahrenheit) : temparature;

    function toCelius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9
    }
    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32
    }
    return (
        <div>
            <TemparatureInput scale="c" temparature={celsius} onTemparatureChange={handleCelsiusChange} />
            <TemparatureInput scale="f" temparature={fahrenheit} onTemparatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    )
}

export default Calculator;