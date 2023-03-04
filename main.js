function zodiac(day, month) {
    var zodiac = ['', 'Capricorn&#9809;', 'Aquarius&#9810;', 'Pisces&#9811;', 'Aries&#9800;', 'Taurus&#9801;', 'Gemini&#9802;', 'Cancer&#9803;', 'Leo&#9804;', 'Virgo&#9805;', 'Libra&#9806;', 'Scorpio&#9807;', 'Sagittarius&#9808;', 'Capricorn&#9809;'];
    var lastDay = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19] 
    
    if (day > lastDay[month]) {
      return zodiac[month*1 + 1];
    } else {
      return zodiac[month];
    }
  }
   
   document.getElementById('test_z').onclick = function(){
    document.getElementById('zodiac').innerHTML = zodiac(document.getElementById('days').value, document.getElementById('month').value);
   }