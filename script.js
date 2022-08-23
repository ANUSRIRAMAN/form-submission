let div=document.createElement("div");
div.setAttribute("id","outerdiv");

let div2=document.createElement("div");
div2.setAttribute("id","innerbox");

let firstname=document.createElement("label");
firstname.innerHTML="<b>First Name:";
firstname.setAttribute("for","firstname")

let lb1=document.createElement("br")

let firstnameinput=document.createElement("input");
firstnameinput.setAttribute("id","firstname");
firstnameinput.setAttribute("type","text");

let lb2=document.createElement("br")


let lastname=document.createElement("label");
lastname.innerHTML="<b>Last Name:";
let lb3=document.createElement("br")

let lastnameinput=document.createElement("input");
lastnameinput.setAttribute("id","lastname");
lastnameinput.setAttribute("type","text");

let lb4=document.createElement("br")

let address1=document.createElement("label");
address1.innerHTML="<b>Address line 1:";
let lb5=document.createElement("br")

let address1input=document.createElement("input");
address1input.setAttribute("id","addressline1");
address1input.setAttribute("type","text");

let lb6=document.createElement("br")

let address2=document.createElement("label");
address2.innerHTML="<b>Address line 2:";
let lb7=document.createElement("br")


let address2input=document.createElement("input");
address2input.setAttribute("id","addressline2");
address2input.setAttribute("type","text");

let lb8=document.createElement("br")

let pin=document.createElement("label");
pin.innerHTML="<b>PIN:";
let lb9=document.createElement("br")

let pininput=document.createElement("input");
pininput.setAttribute("id","pin");
pininput.setAttribute("type","text");

let lb10=document.createElement("br")

let gender=document.createElement("label");
gender.innerHTML="<b>Gender:"
let lb11=document.createElement("br")

let input=document.createElement("div")
input.innerHTML=`<span><input type="radio" id="gender0"  name="gender" value="Male">Male<br>
<input type="radio" id="gender1"  name="gender" value="Female">Female<br></span>`



let food=document.createElement("label");
food.innerHTML="<b>Choice of food:</b><span>(must choose atleast 2 out of 5)</span>"

let lb13=document.createElement("br")

let ni=document.createElement("input")
ni.setAttribute("type","checkbox")
ni.setAttribute("value","north indian")
ni.setAttribute("id","ni");
ni.setAttribute("name","pl");


let nilabel=document.createElement("label");
nilabel.innerHTML="North indian"

let lb14=document.createElement("br")

let si=document.createElement("input");
si.setAttribute("type","checkbox");
si.setAttribute("value","south indian");
si.setAttribute("id","si");
si.setAttribute("name","pl");


let silabel=document.createElement("label");
silabel.innerHTML="South indian"


let lb15=document.createElement("br")

let ci=document.createElement("input");
ci.setAttribute("type","checkbox");
ci.setAttribute("value","chinese");
ci.setAttribute("id","ci");
ci.setAttribute("name","pl");


let cilabel=document.createElement("label");
cilabel.innerHTML="chinese"
let lb16=document.createElement("br")

let it=document.createElement("input");
it.setAttribute("type","checkbox");
it.setAttribute("value","italian");
it.setAttribute("id","it");
it.setAttribute("name","pl");


let itlabel=document.createElement("label");
itlabel.innerHTML="Italian"
let lb17=document.createElement("br")

let ar=document.createElement("input")
ar.setAttribute("type","checkbox")
ar.setAttribute("value","arab")
ar.setAttribute("id","ar");
ar.setAttribute("name","pl");


let arlabel=document.createElement("label");
arlabel.innerHTML="arab"
let lb18=document.createElement("br")

let state=document.createElement("label");
state.innerHTML="<b>State:"
let lb19=document.createElement("br");

let stateinput=document.createElement("input");
stateinput.setAttribute("type","text");
stateinput.setAttribute("id","state");

let lb20=document.createElement("br");

let country=document.createElement("label");
country.innerHTML="<b>country:"
let lb21=document.createElement("br");

let countryinput=document.createElement("input");
countryinput.setAttribute("type","text");
countryinput.setAttribute("id","country");

let lb22=document.createElement("br");
let lb23=document.createElement("br");

let submit=document.createElement("button");
submit.innerHTML="Submit"
submit.addEventListener("click",foo)

let con=document.createElement("div");
con.setAttribute("id","content");

let h1=document.createElement("h1")
h1.innerHTML="TEMPORARY DATABASE:"
h1.setAttribute("id","heading");


div.append(div2,firstname,lb1,firstnameinput,lb2,lastname,lb3,lastnameinput,lb4
    ,address1,lb5,address1input,lb6,address2,lb7,address2input,
    lb8,pin,lb9,pininput,lb10,gender,input,lb11,
    food,lb13,ni,nilabel,lb14,si,silabel,lb15,ci,cilabel,lb16,
    it,itlabel,lb17,ar,arlabel,lb18,state,lb19,stateinput,lb20,country,lb21,countryinput,lb22,lb23,submit,con,h1)
document.body.append(div)

function foo(){
    let res0=document.getElementById("firstname").value;
    let res1=document.getElementById("lastname").value;
    let res2=document.getElementById("addressline1").value;
    let res3=document.getElementById("addressline2").value;
    let res4=document.getElementById("pin").value;
    var val = '';
if(document.getElementById('gender0').checked) {
  val = document.getElementById('gender0').value
}else if(document.getElementById('gender1').checked) {
  val = document.getElementById('gender1').value
}
console.log(val);

var checkboxes = document.getElementsByName('pl');
var val1 = "";
for (var i=0, n=checkboxes.length;i<n;i++) 
{
    if (checkboxes[i].checked) 
    {
        val1 +=checkboxes[i].value+",";
    }
}
console.log(val1)
let res5=document.getElementById("state").value;
let res6=document.getElementById("country").value;


 
  
  
    con.innerHTML=`<table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">Address line1</th>
        <th scope="col">Address line2</th>
        <th scope="col">pin</th>
        <th scope="col">gender</th>
        <th scope="col">choice of food</th>
        <th scope="col">state</th>
        <th scope="col">country</th>
   
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>${res0}</td>
        <td>${res1}</td>
        <td>${res2}</td>
        <td>${res3}</td>
        <td>${res4}</td>
        <td>${val}</td>
        <td>${val1}</td>
        <td>${res5}</td>
        <td>${res6}</td>
        
        
        
        
        
        
        
       
        
      </tr>
    </tbody>
    </table>`
}

  foo()