// Change Image On Click
var flag = document.getElementById("flagid");
flag.addEventListener('click', function(flag)
{
    var i = 0;

    // flag.target.classList.toggle('flag2');
    // console.log(flag.target.classList[0]);

    // Get to the flag that you need to add
    while(flag.target.classList[i] != undefined)
    {
        i++;
    }
    i++;

    // Wrap to the first flag
    if( i == 6 )
    {
        i = 1;
        flag.target.classList = [];
    }

    console.log("i = " + i);

    var str = "flag" + i;
    console.log("str = " + str);
    
    flag.target.classList.add(str);
    console.log("array = " + flag.target.classList);
    console.log("");
})

// Change navigation tab colors on hover
function changeColor(id)
{
    document.getElementById(id).style.color = "magenta";
}

function restoreColor(id)
{
    document.getElementById(id).style.color = "white";
}

// Skills tab
function getData()
{
    var name = document.getElementById("iName").value;
    var skill = document.getElementById("iSkill").value;
    var level = document.getElementById("iLevel").value;

    // nameArray.push(document.getElementById("iName").value);
    // console.log(nameArray);

    // skillArray.push(document.getElementById("iSkill").value);
    // console.log(skillArray);

    // levelArray.push(document.getElementById("iLevel").value);
    // console.log(levelArray);

    // document.write('<table><tr><td>' + name + '</td><td>' + skill + '</td><td>' + level + '</td></tr></table>');
    // document.getElementById("output").innerHTML = '<div class="box"><table><tr><th>' + 'Name' + '</th><th>' + 'Skill' + '</th><th>' + 'Level' + '</td></tr></table></div>';

    document.getElementById("output").innerHTML += '<div class="box"><table><tr><td>' + name + '</td><td>' + skill + '</td><td>' + level + '</td></tr></table></div>';

    document.getElementById("iName").value = null;
    document.getElementById("iSkill").value = null;
    document.getElementById("iLevel").value = null;
}

// Flip education cards
function flipSchool()
{
    // console.log("hello");
    document.getElementById("fSchool").innerHTML = "Bishop Cotton Boy's School";
}

function flipCollege()
{
    // console.log("hello");
    document.getElementById("fCollege").innerHTML = "RVPU College";
}

function flipUni()
{
    // console.log("hello");
    document.getElementById("fUni").innerHTML = "IIT-Hyderabad";
}

function flipCourse1()
{
    // console.log("hello");
    document.getElementById("fCourse1").innerHTML = "HTML, CSS and JavaScript";
}

function flipCourse2()
{
    // console.log("hello");
    document.getElementById("fCourse2").innerHTML = "Real Analysis";
}

function flipCourse3()
{
    // console.log("hello");
    document.getElementById("fCourse3").innerHTML = "Discrete Structures";
}