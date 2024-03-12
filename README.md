# Калькулятор
Это простое веб-приложение калькулятора, реализованное с использованием **HTML**, **CSS** и **JavaScript**.  
[Cсылка на блок-схему](https://miro.com/app/board/uXjVNmvMzO4=/)

![Запись экрана 2024-03-12 в 11 46 58](https://github.com/AV-Loginova/calculator/assets/129111624/60885123-b5ce-4464-a7ed-cbd912d47cec)  



## Возможности
 - Выполняет базовые арифметические операции: сложение, вычитание, умножение и деление  
 - Поддерживает десятичные числа  
 - Позволяет изменять знак отображаемого числа на положительное и отрицательным  
 - Обеспечивает обработку ошибок для различных сценариев, таких как деление на ноль, превышение ограничений на длину ввода и неверные выражения  

## Начало работы
Для использования калькулятора просто откройте файл **index.html** в веб-браузере. На экране будет отображен интерфейс калькулятора, и вы можете начать выполнять вычисления.

## Использование
**Числа**: Нажмите на кнопки с числами, чтобы ввести цифры. Калькулятор поддерживает числа с до трех десятичных знаков.  
**Десятичная точка**: Нажмите кнопку десятичной точки, чтобы добавить десятичную точку к отображаемому числу.  
**Арифметические операции**: Нажмите на кнопки арифметических операций **(+, -, *, /)**, чтобы выполнить вычисления. Результат будет отображаться в реальном времени.  
**Положительное/Отрицательное**: Нажмите кнопку **"+/-"**, чтобы изменить знак отображаемого числа между положительным и отрицательным.  
**Очистить**: Нажмите кнопку **"C"**, чтобы очистить дисплей и сбросить калькулятор.  
**Удаление**: Нажмите кнопку **"Del"**, чтобы удалить последнюю введенную цифру.  
**Равно**: Нажмите кнопку **"="**, чтобы вычислить результат введенного выражения.  

## Обработка ошибок
Калькулятор предоставляет сообщения об ошибках для следующих сценариев:  

1) Деление на ноль.  
2) Попытка сделать результат дробным после вычисления.  
3) Ввод десятичной точки, когда число уже содержит одну.  
4) Удаление символов, когда это символов нет.  
5) Попытка изменить число после выбора арифметического оператора.  
6) Попытка вычислить, когда результат уже отображается.  
7) Превышение ограничения длины вводимых чисел.  
8) Превышение максимальной длины вводимых чисел.  
