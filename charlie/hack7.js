
let numbers = [100,200,300,400,500,600,700]
let quantity = numbers.length - 1

for (times = 0; times <= quantity; times++) {

    if (numbers[times] == 300 ) {
        numbers.splice(times,1, "charlie")
        console.log(numbers)
    }
}