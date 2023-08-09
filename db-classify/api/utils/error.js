export const creatError = (staus, message) => {
    const err = new Error()
    err.status= staus
    err.message= message
    return err
}