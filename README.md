# js-workshop
<!DOCTYPE html>
<html>
<body>

<h2>For Loop</h2>

<p id="demo"></p>

<script>
var text = "";
var i;
for (i = 0; i < 8; i++) {

        if (i <= 4) {
            text += "*".repeat(i);
            text += "<br>";
        } else {
            text += "*".repeat(8 - i);
            text += "<br>";
        }
    }
 
 
var j=1;
while (j < 8) {

        if (j <= 4) {
            text += "*".repeat(j);
            text += "<br>";
        } else {
            text += "*".repeat(8 - j);
            text += "<br>";
        }
        
        j++;
    }
document.getElementById("demo").innerHTML = text;



</script>

</body>
</html>
