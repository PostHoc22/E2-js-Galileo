const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Ejercicio a): Las pizzas que tengan un id impar:
console.log("// Ejercicio a) - Las pizzas que tengan un id impar. //");
console.log(
  "Las pizzas que tienen un id impar y de las cuales vas a poder aprovechar su descuento son:"
);
const idImpar = () => {
  pizzas.forEach((pizza) => {
    if (pizza.id % 2 != 0)
      console.log(`* La "${pizza.nombre}", con ID ${pizza.id}`);
  });
};
idImpar();

// Ejercicio b) Responder: ¿Hay alguna pizza que valga menos de $600?
console.log(
  "// Ejercicio b) Responder: ¿Hay alguna pizza que valga menos de $600? //"
);
const cuestaMenosQue600 = () => {
  pizzas.forEach((pizza) => {
    if (pizza.precio < 600 && pizza.precio >= 0)
      console.log(
        `La "${pizza.nombre}" actualmente esta a la venta con un valor de $${pizza.precio}. Aprovecha su precio en promoción, valida solo por este fin de semana!.-`
      );
  });
  pizzas.every((pizza) => {
    if (pizza.precio > 600)
      console.log(
        "Lamentablemente, de momento no tenemos a la venta ninguna variedad de pizzas con un precio menor a $600.- Igualmente, te invitamos a que conozcas todas las opciones de nuestro Menú."
      );
  });
};
cuestaMenosQue600();

//  Ejercicio c): El nombre de cada pizza con su respectivo precio.
console.log(
  "// Ejercicio c): El nombre de cada pizza con su respectivo precio. //"
);
console.log("Nuestro Menu:");
pizzas.forEach((pizza) => {
  console.log(`* ${pizza.nombre} - $${pizza.precio}`);
});

// Ejercicio d): Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
console.log("// Ejercicio d): Todos los ingredientes de cada pizza //");
console.log("Te detallamos los ingredientes de cada una de nuestras pizzas:");
pizzas.forEach((pizza) => {
  console.log(
    `*  ${pizza.nombre} - Ingredientes: ${pizza.ingredientes.join(", ")}.`
  );
});
