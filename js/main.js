var screen = document.getElementById("display");

var value = {
    prev: null,
    new: null,
    oprType: null
}
var isLastNumber = false;

function getNumber(num) {
    if (isLastNumber) {
        var result;
        if (value.new) {
            result = value.new + '' + num;
            value.new = result;
            screen.value = result;
        } else {
            result = value.prev + '' + num;
            value.prev = result;
            screen.value = result;
        }

    } else {

        screen.value = num;
        if (value.prev) {
            value.new = num;
        } else {
            value.prev = num;
        }
        isLastNumber = true;
    }

}

function getOperator(opr) {
    value.oprType = opr
    isLastNumber = false;

    if (value.oprType == '₪ to $') {

        var newValue = value.prev / 3.82;
        screen.value = newValue.toFixed(3);
        value.prev = newValue;

    }
    if (value.oprType == '₪ to €') {

        var newValue = value.prev / 4.023;
        screen.value = newValue.toFixed(3);
        value.prev = newValue;

    }
    if (value.oprType == '$ to €') {

        var newValue = value.prev * 1.06;
        screen.value = newValue.toFixed(3);
        value.prev = newValue;

    }
    if (value.oprType == '€ to $') {

        var newValue = value.prev / 1.06;
        screen.value = newValue.toFixed(3);
        value.prev = newValue;

    }
    if (value.oprType == '₪ to £') {

        var newValue = value.prev / 4.6511;
        screen.value = newValue.toFixed(3);
        value.prev = newValue;

    }




}

function Calculate() {
    console.log(value)

    if (!value.new && value.new !== 0) return;
    if (value.prev && value.new !== null && value.oprType) {
        if (value.oprType == '+') {
            var newValue = Number(value.prev) + Number(value.new);
            screen.value = newValue;
            value.prev = newValue
        }
        if (value.oprType == '-') {
            var newValue = Number(value.prev) - Number(value.new);
            screen.value = newValue;
            value.prev = newValue
        }
        if (value.oprType == '*') {
            var newValue = Number(value.prev) * Number(value.new);
            screen.value = newValue;
            value.prev = newValue
        }
        if (value.oprType == '%') {
            var newValue = Number(value.new) % Number(value.prev);
            screen.value = newValue;
            value.prev = newValue
        }
        if (value.oprType == '/') {
            if (value.new == 0) {
                screen.value = 'خطأ';
            } else {

                var newValue = Number(value.prev) / Number(value.new);
                screen.value = newValue;
                value.prev = newValue
            }
        }
        if (value.oprType == '₪') {

            var newValue = value.prev / 3.82;
            screen.value = newValue;

        }


    }
    isLastNumber = false

}