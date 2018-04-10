
function myfunc()
    {
    	var s = document.getElementsByName('newSkill')[0];
		var text = s.options[s.selectedIndex].text;
		console.log(text)
    }