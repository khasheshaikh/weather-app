var city;
      function my() {
        city = document.getElementById("myText").value;
        console.log(city);
        var s =
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&appid=043568f38a610c9e3c6c32258ab2faac";

        fetch(s)
          .then((res) => res.json())
          .then((data) => {
            for (var i = 0; i <= 4; i++) {
              document.getElementById("today"+i).innerHTML = parseInt(
                data.list[5*i].main.temp - 273
              );
              document.getElementById("ic"+i).src =
                "http://openweathermap.org/img/wn/" +
                data.list[5*i].weather[0].icon +
                "@2x.png";
                document.getElementById("t"+i).innerHTML=(data.list[5*i].dt_txt.split(" ")[0]);
            }
          });
      }