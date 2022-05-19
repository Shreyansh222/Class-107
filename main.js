function startClassyfication()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundclassyfication('https://teachablemachine.withgoogle.com/models/qpuiZAjfn/model.json',modelReady);
}

function modelready(){
classifier.classify(gotResult);
}

function gotResult(error,results){
if(error){
console.error(error);
}else{
console.log(results);
}
}