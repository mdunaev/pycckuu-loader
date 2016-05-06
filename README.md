# pycckuu-loader

Loader для Webpack для руссификации JavaScript. Позволяет заменить английские ключевые слова на русские.   
   
Пример:
```javascript
пер сотрудники = ['Владимир', 'Дмитрий', 'Николай']

пер приветствовать = функция(имя){
    консоль.логировать('Привет ' + имя + '!')
}

цикл(пер и=0; и<сотрудники.длинна; и++){
    приветствовать(сотрудники[и])
}
```
будет транслирован в:
```javascript
var сотрудники = ['Владимир', 'Дмитрий', 'Николай']

var приветствовать = function(имя){
    console.log('Привет ' + имя + '!')
}

for(var и=0; и<сотрудники.length; и++){
    приветствовать(сотрудники[и])
}
```

Минимальная конфигурация webpack.config.js:
```javascript
module.exports = {
    entry: "./тест.яс",
    output: {
        path: __dirname,
        filename: "result.js"
    },
    module: {
        loaders: [
            { test: /\.яс$/, loader: "pycckuu" }
        ]
    }
};
```

Таблица соответствия:   

Русское значение | Английское значение
------------ | -------------
alert | внимание
console | консоль
log | логировать
break | стоп
case | случай
class | класс
catch | поймать
const | константа
continue | продолжить
default | поумолчанию
delete | удалить
do | сделай
else | иначе
export | экспортировать
extends | расширяет
finally | вконце
for | цикл
function | функция
if | если
import | импортировать
 in  |  в 
instanceof | экземпляр
let | пусть
new | новый
 of  |  из 
return | вернуть
super | супер
switch | перебрать
this | тут
throw | бросить
try | попробывать
typeof( | тип(
var  | пер 
void | пусто
while | пока
with | совместно
yield | уступить
pop | вставить
push | впихнуть
reverse | отразить
shift | сдвинуть
sort | сортировать
splice | соединить
unshift | раздвинуть
concat | связать
join | объединить 
slice | часть
toString | вСтроку
indexOf | номерВ
forEach | дляКаждого
every | каждый
some | хотьОдин
filter | фильтр
map | карта
reduce | уменьшить
prototype | прототип
length   | длинна


