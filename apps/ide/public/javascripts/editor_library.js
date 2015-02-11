/*!
* -------------------------------------------------------
* SIMPLE TEXT SELECTION LIBRARY FOR ONLINE TEXT EDITING
* -------------------------------------------------------
*
* Author => Taufik Nurrohman
* URL => http://www.dte.web.id, http://latitudu.com
*
*/
var Editor=function(source){var base=this,history=[],undo=0,redo=null;base.area=typeof source!="undefined"?source:document.getElementsByTagName('textarea')[0];history[undo]={value:base.area.value,selectionStart:0,selectionEnd:0};undo++;base.selection=function(){var start=base.area.selectionStart,end=base.area.selectionEnd,value=base.area.value.substring(start,end),before=base.area.value.substring(0,start),after=base.area.value.substring(end),data={start:start,end:end,value:value,before:before,after:after};return data;};base.select=function(start,end,callback){base.area.focus();base.area.setSelectionRange(start,end);if(typeof callback=="function")callback();};base.replace=function(from,to,callback){var sel=base.selection(),start=sel.start,end=sel.end,selections=sel.value.replace(from,to);base.area.value=sel.before+selections+sel.after;base.select(start,start+selections.length);if(typeof callback=="function"){callback();}else{base.updateHistory({value:base.area.value,selectionStart:start,selectionEnd:start+selections.length});}};base.insert=function(insertion,callback){var sel=base.selection(),start=sel.start,end=sel.end;base.area.value=sel.before+insertion+sel.after;base.select(start+insertion.length,start+insertion.length);if(typeof callback=="function"){callback();}else{base.updateHistory({value:base.area.value,selectionStart:start+insertion.length,selectionEnd:start+insertion.length});}};base.wrap=function(open,close,callback){var sel=base.selection(),selections=sel.value,before=sel.before,after=sel.after;base.area.value=before+open+selections+close+after;base.select(before.length+open.length,before.length+open.length+selections.length);if(typeof callback=="function"){callback();}else{base.updateHistory({value:base.area.value,selectionStart:before.length+open.length,selectionEnd:before.length+open.length+selections.length});}};base.indent=function(chars,callback){var sel=base.selection();if(sel.value.length>0){base.replace(/(^|\n)([^\n])/gm,'$1'+chars+'$2',callback);}else{base.area.value=sel.before+chars+sel.value+sel.after;base.select(sel.start+chars.length,sel.start+chars.length);if(typeof callback=="function"){callback();}else{base.updateHistory({value:base.area.value,selectionStart:sel.start+chars.length,selectionEnd:sel.start+chars.length});}}};base.outdent=function(chars,callback){var sel=base.selection();if(sel.value.length>0){base.replace(new RegExp('(^|\n)'+chars,'gm'),'$1',callback);}else{var before=sel.before.replace(new RegExp(chars+'$'),"");base.area.value=before+sel.value+sel.after;base.select(before.length,before.length);if(typeof callback=="function"){callback();}else{base.updateHistory({value:base.area.value,selectionStart:before.length,selectionEnd:before.length});}}};base.callHistory=function(index){return(typeof index=="number")?history[index]:history;};base.updateHistory=function(data,index){var value=(typeof data!="undefined")?data:{value:base.area.value,selectionStart:base.selection().start,selectionEnd:base.selection().end};history[typeof index=="number"?index:undo]=value;undo++;};base.undo=function(callback){var data;if(history.length>1){if(undo>1){undo--;}else{undo=1;}
data=base.callHistory(undo-1);redo=undo<=0?undo-1:undo;}else{return;}
base.area.value=data.value;base.select(data.selectionStart,data.selectionEnd);if(typeof callback=="function")callback();};base.redo=function(callback){var data;if(redo!==null){data=base.callHistory(redo);if(redo<history.length-1){redo++;}else{redo=history.length-1;}
undo=redo>=history.length-1?redo+1:redo;}else{return;}
base.area.value=data.value;base.select(data.selectionStart,data.selectionEnd);if(typeof callback=="function")callback();};};function fakePrompt(label,value,isRequired,callback){var overlay=document.createElement('div');overlay.className='custom-modal-overlay';var modal=document.createElement('div');modal.className='custom-modal custom-modal-prompt';modal.innerHTML='<div class="custom-modal-header">'+label+'</div><div class="custom-modal-content"></div><div class="custom-modal-action"></div>';var onSuccess=function(value){overlay.parentNode.removeChild(overlay);modal.parentNode.removeChild(modal);if(typeof callback=="function")callback(value);};var input=document.createElement('input');input.type='text';input.value=value;input.onkeyup=function(e){if(isRequired){if(e.keyCode==13&&this.value!==""&&this.value!==value){onSuccess(this.value);}}else{if(e.keyCode==13){onSuccess(this.value==value?"":this.value);}}};var buttonOK=document.createElement('button');buttonOK.innerHTML='OK';buttonOK.onclick=function(){if(isRequired){if(input.value!==""&&input.value!==value){onSuccess(input.value);}}else{onSuccess(input.value==value?"":input.value);}};var buttonCANCEL=document.createElement('button');buttonCANCEL.innerHTML='Cancel';buttonCANCEL.onclick=function(){overlay.parentNode.removeChild(overlay);modal.parentNode.removeChild(modal);};document.body.appendChild(overlay);document.body.appendChild(modal);modal.children[1].appendChild(input);modal.children[2].appendChild(buttonOK);modal.children[2].appendChild(buttonCANCEL);input.select();}