// ункция sayHi использует имя внешней переменной. Какое значение будет использоваться при выполнении функции?

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // что будет показано: "John" или "Pete"?
// Такие ситуации встречаются как при разработке для браузера, так и для сервера. Функция может быть назначена на выполнение позже, чем она была создана, например, после действия пользователя или сетевого запроса.

// Pete- т.к. функция учитывает последние значения