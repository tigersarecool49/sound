function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/GZF5UxBue/model.json' , modelReady); 
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error){
        console.error(error)

    }else{
            console.log(results);
            random_number_r = Math.floor(Math.random() * 255) + 1;
            random_number_g = Math.floor(Math.random() * 255) + 1;
            random_number_b = Math.floor(Math.random() * 255) + 1;
            document.getElementById("result_label").innerHTML ='I can hear - ' +
            result[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
            (results[0].confidence*100).toFixed(2)+"%";
            document.getElementById("result_label").style.color = "rgb("+random_number_r+")";
            document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

            img = document.getElementById('catimg');
            img1 = document.getElementById('dogimg');
            img2 = document.getElementById('birdimg');
            img3 = document.getElementById('tigerimg');

            if(results[0].label == "chirp"){
                img.src = 'birdgif.gif'
                img1.src = 'catimg.jpg'
                img2.src = 'dogimg.jpg'
                img3.src = 'tigerimg.webp'
            }
            else if (results[0].label == "meow") {
                img.src = 'birdimg.png'
                img1.src = 'catgif.gif'
                img2.src = 'dogimg.jpg'
                img3.src = 'tigerimg.webp'
            }
            else if (results[0].label == "bark") {
                img.src = 'birdimg.png'
                img1.src = 'catimg.jpg'
                img2.src = 'doggif.gif'
                img3.src = 'tigerimg.webp'
            }
            else if (results[0].label == "roar") {
                img.src = 'birdimg.png'
                img1.src = 'catimg.jpg'
                img2.src = 'dogimg.jpg'
                img3.src = 'tigergif.webp'
            }

        }
    }