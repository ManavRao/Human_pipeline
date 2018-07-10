function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

function switch_visibility(id1, id2){
    toggle_visibility(id1);
    toggle_visibility(id2);
}

function zoom(id){
    if (id.height == 500){
    	id.width = 900;
        id.height = 900;}
    else{
        id.height = 500;
        id.width = 500;}
}


function test1(numb){
    var structure = {other_characters:[]};
    var final_images = [];
    var final_images_others = structure.other_characters;
    var e = document.getElementById("card-deck").childNodes;
    var f = document.getElementById("dump-deck").childNodes;
    var i;
    for (i = 0; i < e.length; i++) {
        if (e[i].nodeName === "IMG"){
            final_images.push(e[i].getAttribute('src'));
        }
    }
    for (i = 0; i < f.length; i++) {
        if (f[i].nodeName === "IMG") {
            final_images_others.push(f[i].getAttribute('src'));
        }
    }
    sessionStorage.setItem("teyey", "asdad")
    var temp_name = "cluster" + numb;
    structure[temp_name] = final_images;
    structure.other_characters = final_images_others;
    sessionStorage.setItem("cluster", JSON.stringify(structure));
    var temp123 = sessionStorage.getItem("cluster");
}

function glow(id, color){
    id.style.background = color;
}

function startTutorial(){
    document.getElementById('popupBoxOnePosition').style.display = 'block';
    document.getElementById('wrapper').style.display = 'none';
    document.getElementById('popupBoxOnePosition2').style.display = 'none';
    document.getElementById('popupBoxOnePosition3').style.display = 'none';
    document.getElementById('popupBoxOnePosition4').style.display = 'none';
    document.getElementById('popupBoxOnePosition5').style.display = 'none';
    document.getElementById('popupBoxOnePosition6').style.display = 'none';
    document.getElementById('popupBoxOnePosition7').style.display = 'none';
    document.getElementById('popupBoxOnePosition8').style.display = 'none';
    document.getElementById('popupBoxOnePosition9').style.display = 'none';
    document.getElementById('popupBoxOnePosition10').style.display = 'none';
}

function startTutorial1(){
    document.getElementById('popupBoxOnePosition2').style.display = 'block';
    document.getElementById('mega').style.display = 'none';
    document.getElementById('popupBoxOnePosition3').style.display = 'none';
    document.getElementById('popupBoxOnePosition4').style.display = 'none';
    document.getElementById('popupBoxOnePosition5').style.display = 'none';
}

function startTutorial2(){
    document.getElementById('mega').style.display = 'none';
    document.getElementById('popupBoxOnePosition7').style.display = 'block';
    document.getElementById('popupBoxOnePosition8').style.display = 'none';
    document.getElementById('popupBoxOnePosition9').style.display = 'none';
    document.getElementById('popupBoxOnePosition10').style.display = 'none';
}

function closeTutorial1(){
    document.getElementById('mega').style.display = 'flex';
    document.getElementById('popupBoxOnePosition2').style.display = 'none';
    document.getElementById('popupBoxOnePosition3').style.display = 'none';
    document.getElementById('popupBoxOnePosition4').style.display = 'none';
    document.getElementById('popupBoxOnePosition5').style.display = 'none';
    document.getElementById('popupBoxOnePosition6').style.display = 'none';
}

function closeTutorial2(){
    document.getElementById('mega').style.display = 'flex';
    document.getElementById('popupBoxOnePosition7').style.display = 'none';
    document.getElementById('popupBoxOnePosition8').style.display = 'none';
    document.getElementById('popupBoxOnePosition9').style.display = 'none';
    document.getElementById('popupBoxOnePosition10').style.display = 'none';
}


function checkFinish(){
	var temp_Name = document.getElementById("card-deck").innerText;
	if(temp_Name.length < 1)
		alert("THANK YOU!");
	else
		alert("Please Empty the red panel");
}

function newFunction() {
	document.getElementById('section').innerHTML +='<div data-draggable="target" ondragover="glow(this, \'black\');" ondragend="glow(this, \'darkolivegreen\')" ondragleave="glow(this, \'darkolivegreen\')" class="deck" id="character"></div>';
}

(function()
{

    //exclude older browsers by the features we need them to support
    //and legacy opera explicitly so we don't waste time on a dead browser
    if
    (
        !document.querySelectorAll 
        || 
        !('draggable' in document.createElement('span')) 
        || 
        window.opera
    ) 
    { return; }
    
    //get the collection of draggable items and add their draggable attribute
    for(var 
        items = document.querySelectorAll('[data-draggable="item"]'), 
        len = items.length, 
        i = 0; i < len; i ++)
    {
        items[i].setAttribute('draggable', 'true');
    }

    //variable for storing the dragging item reference 
    //this will avoid the need to define any transfer data 
    //which means that the elements don't need to have IDs 
    var item = null;

    //dragstart event to initiate mouse dragging
    document.addEventListener('dragstart', function(e)
    {
        //set the item reference to this element
        item = e.target;
        
        //we don't need the transfer data, but we have to define something
        //otherwise the drop action won't work at all in firefox
        //most browsers support the proper mime-type syntax, eg. "text/plain"
        //but we have to use this incorrect syntax for the benefit of IE10+
        e.dataTransfer.setData('text', '');
    
    }, false);

    //dragover event to allow the drag by preventing its default
    //ie. the default action of an element is not to allow dragging 
    document.addEventListener('dragover', function(e)
    {
        if(item)
        {
            e.preventDefault();
        }
    
    }, false);  

    //drop event to allow the element to be dropped into valid targets
    document.addEventListener('drop', function(e)
    {
        //if this element is a drop target, move the item here 
        //then prevent default to allow the action (same as dragover)
        if(e.target.getAttribute('data-draggable') == 'target')
        {
            e.target.appendChild(item);
            
            e.preventDefault();
        }
    
    }, false);
    
    //dragend event to clean-up after drop or abort
    //which fires whether or not the drop target was valid
    document.addEventListener('dragend', function(e)
    {
        item = null;
    
    }, false);

})();   