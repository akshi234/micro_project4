let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {

                let result = eval(string);


                if (!isNaN(result)) {

                    result = parseFloat(result.toFixed(6));
                    string = result.toString();
                }

                input.value = string;
            } catch (error) {

                input.value = 'Error';
                string = '';
            }
        }
        else if (e.target.innerHTML == 'RESET') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {

            string = string.slice(0, -1);
            input.value = string;
        }
        else {

            string += e.target.innerHTML;
            input.value = string;
        }
    });
});