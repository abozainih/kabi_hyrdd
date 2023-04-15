import Data from "@/userData"


const testPage = () => {
    const users = Data
    const getUser = users.find(user=> user.email == "abo.zanih1@gmail.com" && user.password == "123456")
    console.log(getUser)
    return (  
        "G!"
    );
}
 
export default testPage;