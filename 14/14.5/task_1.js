// Почему побитовые операции в примерах ниже не меняют число? Что они делают внутри?

// // alert( 123 ^ 0 ); // 123
// // alert( 0 ^ 123 ); // 123
// // alert( ~~123 ); // 123
// 1)
// - Операция XOR (^) сравнивает соответствующие биты двух чисел. Если биты разные, результат будет 1, если одинаковые — 0.
// - В случае 123 (в бинарной системе это 01111011) и 0 (это 00000000)
// - все биты числа 123 останутся неизменными, так как XOR с 0 не меняет биты. Поэтому результат будет 123.
// 2)- Здесь ситуация аналогична предыдущему примеру. Порядок операндов не важен для XOR. Результат будет тем же, так как 123 и 0 всё равно сохранят все биты 123.
// - Результат: 123.

// 3) т.к. используем 2 раза ~~ будет 123, если бы использовали ~ то было бы -124 