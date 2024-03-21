const getPosts = async () => {
    const posts = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(posts);
        const data = await response.json();
        data.slice(0, 20).forEach(item => {
            console.log(item.title);
        });
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

const resolverInfo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Información Enviada correctamente");
        }, 3000);

    });
}

const mensaje = async () => {
    try {
        const mensaje = await resolverInfo();
        console.log(mensaje);

        await getPosts();
    } catch (error) {
        console.error('Error al mostrar el mensaje:', error);
    }
}

mensaje();