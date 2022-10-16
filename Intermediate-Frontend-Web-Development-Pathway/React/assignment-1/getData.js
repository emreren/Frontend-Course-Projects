import axios from "axios";

export default async userId => {
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/"+userId);

    const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+userId);

    console.log("User "+userId, users);
    console.log("User "+userId+" Posts", posts);
}


