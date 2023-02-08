import { randomUUID } from "crypto"

export class User {
    public readonly id?: string 
    public name: string
    public email: string

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props)
        
        if (id === undefined) {
            this.id = randomUUID()
        }
    }
}