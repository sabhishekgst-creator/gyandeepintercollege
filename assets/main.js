// DARK MODE
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// FORM OPEN
function openForm(){
  document.getElementById("formPopup").style.display = "flex";
}

// SUPABASE CONNECT
const supabase = supabase.createClient(
  "YOUR_SUPABASE_URL",
  "YOUR_ANON_KEY"
);

// SEND DATA
async function sendData(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let course = document.getElementById("course").value;

// DATABASE INSERT
const {data,error} = await supabase
.from("students")
.insert([{name,phone,course}]);

if(error){
alert(error.message);
}else{
alert("Success 🚀");
}

// WHATSAPP FIX
let msg = `New Admission:%0AName:${name}%0APhone:${phone}%0ACourse:${course}`;
let url = `https://wa.me/6387729799?text=${msg}`;

window.open(url);

}
