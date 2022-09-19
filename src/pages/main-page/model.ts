import { createStore } from "effector"

type Student = {
    name?: string,
    geoLocation?: string
}
const $students = createStore<Student[]>([])

export {$students}