import {FormValuesType} from "../Components/Contacts/Form/Form";
import axios from "axios";


const instance = axios.create({
    baseURL: 'https://gmail-smpt.vercel.app/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const api = {
    sendForm(values: FormValuesType) {
        return instance.post('sendMessage', values)
    }
}