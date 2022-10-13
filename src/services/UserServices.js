export async function getAllUsers() {
    try {
        const response = await fetch('http://localhost:8080/api/users');
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}