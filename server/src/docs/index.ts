import swaggerJSDoc from "swagger-jsdoc";

const initializeSwagger = () => {
  const options = {
    swaggerDefinition: {
      info: {
        title: "Cosuno API",
        version: "1.0.0",
        description: "Swagger API documentation, basically to perform provides contractors and thier specialities",
        contact: {
          email: "https://github.com/ravisankarchinnam",
        },
      },
    },
    apis: ["swagger.yaml"],
  };

  return swaggerJSDoc(options);
};

export default initializeSwagger;
