module.exports = function(content) {
  [
    [/внимание\s*\(/g, 'alert('],                        // alert
    [/консоль\./g, 'console.'],                          // console
    [/console\.(логировать|лог)\s*\(/g, 'console.log('], // log
    [/стоп(;|\s+)/g, 'break$1'],                         // break
    [/случай\s+/g, 'case '],                             // case
    [/класс\s+/g, 'class '],                             // class
    [/поймать\s*\(/g, 'catch('],                         // catch
    [/константа\s+/g, 'const '],                         // const
    [/продолжить(;|\s+)/g, 'continue$1'],                // continue
    [/поумолчанию\s*:/g, 'default:'],                    // default
    [/удалить\s+/g, 'delete '],                          // delete
    [/сделай(\s*{|\s+)/g, 'do$1'],                       // do
    [/иначе(\s+|\{)/g, 'else$1'],                        // else
    [/экспортировать\s+/g, 'export '],                   // export
    [/\s+расширяет\s+/g, ' extends '],                   // extends
    [/вконце(\s+|\{)/g, 'finally$1'],                    // finally
    [/цикл(\s*\()/g, 'for ('],                           // for
    [/функция(\s+|\()/g, 'function$1'],                  // function
    [/если\s*\(/g, 'if ('],                              // if
    [/импортировать\s+/g, 'import '],                    // import
    [/\s+в\s+/g, ' in '],                                // in
    [/\s+экземпляр(\s+|\()/g, ' instanceof$1'],          // instanceo
    [/пусть\s+/g, 'let '],                               // let
    [/новый\s+/g, 'new '],                               // new
    [/\s+из\s+/g, ' of '],                               // of
    [/вернуть\s+/g, 'return '],                          // return
    [/супер\s*\(/g, 'super('],                           // super
    [/перебрать\s*\(/g, 'switch ('],                     // switch
    [/тут|этот/g, ' this'],                              // this
    [/бросить\s+/g, 'throw '],                           // throw
    [/попробывать(\s+|\s*{)/g, 'try$1'],                 // try
    [/тип(\s+|\s*\()/g, 'typeof$1'],                     // typeof
    [/пер(еменная)?\s+/g, 'var '],                       // var
    [/пусто\s*\(/g, 'void('],                            // void
    [/пока\s*\(/g, 'while ('],                           // while
    [/совместно\s*\(/g, 'with ('],                       // with
    [/уступить\s+/g, 'yield '],                          // yield
    [/\.сократить\(\)/g, '.pop()'],                      // pop
    [/\.добавить\(/g, '.push('],                         // push
    [/\.отразить\(\)/g, '.reverse()'],                   // reverse
    [/\.сдвинуть\(\)/g, '.shift()'],                     // shift
    [/\.сортировать\(/g, '.sort('],                      // sort
    [/\.соединить\(/g, '.splice('],                      // splice
    [/\.раздвинуть\(/g, '.unshift('],                    // unshift
    [/\.связать\(/g, '.concat('],                        // concat
    [/\.объединить\(/g, '.join('],                       // join
    [/\.срез\(/g, '.slice('],                            // slice
    [/\.в(c|С)троку\(\)/g, '.toSrtring()'],              // toString
    [/\.номер(В|в)\(/g, '.indexOf('],                    // indexOf
    [/\.для(К|к)аждого\(/g, '.forEach('],                // forEach
    [/\.каждый\(/g, '.every('],                          // every
    [/\.хоть(О|о)дин\(/g, '.some('],                     // some
    [/\.фильтр\(/g, '.filter('],                         // filter
    [/\.карта\(/g, '.map('],                             // map
    [/\.свести\(/g, '.reduce('],                         // reduce
    [/\.прототип(\.|\s+)/g, '.prototype$1'],             // prototype
    [/\.длина/g, '.length'],                            // length
  ].forEach(function(en) {
    content = content.replace(en[0], en[1]);
  });

  return content;
}