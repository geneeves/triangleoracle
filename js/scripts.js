/*determines if we have a triangle or not*/
function isValid(number1, number2, number3) {
  return (number1 + number2) >= number3 && ((number2 + number3) >= number1) && ((number3 + number1) >= number2);
}

/*determines an equilateral triangle*/
function isEquilateral(number1, number2, number3) {
  return (number1 === number2) && (number2 === number3) && (number1 === number3); 
}

/*determines Isosceles triangle*/
function isIsosceles(number1, number2, number3) {
  return (number1 === number2 || number1 === number3) && (number2 === number3 || number2 === number1)
}

/*determines Scalene triangle*/
function isScalene(number1, number2, number3) {
  return ((!(number1 === number2)) && (!(number2 === number3)) && (!(number3 === number1)))
}

function triangleType(number1, number2, number3) {
  if (isEquilateral(number1, number2, number3)) {
    return "equilateral";
  } else if (isIsosceles(number1, number2, number3)) {
      return "isosceles";
  } else if (isScalene(number1, number2, number3)) {
      return "scalene";
  } else {
      return false;
  }
}   

/*WATCH OUT! IT'S JQUERY TIME*/
$(function() {
  $("form.calculator").submit(function() {
    var number1 = parseInt($("input#number1").val());
    var number2 = parseInt($("input#number2").val());
    var number3 = parseInt($("input#number3").val());

    if (isValid(number1, number2, number3)) {
      if (triangleType(number1, number2, number3) === 'equilateral') {
        $('.equilateral').fadeIn();
        $('.isosceles').hide();
        $('.scalene').hide();
        $('.not-valid').hide();
      } else if (triangleType(number1, number2, number3) === 'isosceles') {
        $('.isosceles').fadeIn();
        $('.equilateral').hide();
        $('.scalene').hide();
        $('.not-valid').hide();
      } else if (triangleType(number1, number2, number3) === 'scalene') {
        $('.scalene').fadeIn();
        $('.equilateral').hide();
        $('.isosceles').hide();
        $('.not-valid').hide();
      } else {
        return false;
      }
    } else {
      $('.not-valid').show();
      $('.equilateral').hide();
      $('.isosceles').hide();
      $('.scalene').hide();
    }
    $('input#number1').val('');
    $('input#number2').val('');
    $('input#number3').val('');
    return false;
  });
});
