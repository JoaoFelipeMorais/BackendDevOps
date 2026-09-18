import swaggerJSDoc from "swagger-jsdoc";


const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Usuarios",
            version: "1.0.0",
            description: "API para cadastro de usuários..."
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Servidor local"
            },
            {
                url: "http://api.giovanna.com",
                description: "Servidor de Produçao"
            }
        ]
    },
    apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJSDoc(options);
