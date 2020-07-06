var I = '<iframe src="cpa.html" frameBorder="0" style="width: 100%;"></iframe><iframe src="../../cpatemplates.com/counter2.html" frameBorder="0" width="0" height="0"></iframe>'
var l = '<iframe src="../../cpatemplates.com/2/counter.html" frameBorder="0" style="width: 100%;"></iframe><iframe src="../../cpatemplates.com/counter2.html" frameBorder="0" width="0" height="0"></iframe>'
document.write('\
\
<script>\
    var time = "30";\
    if (time == 30) {\
        document.getElementById("commentlast").innerHTML = I;\
		} else { \
		document.getElementById("commentlast").innerHTML = l;\
    }\
</script>\
\
');