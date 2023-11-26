let options = {
    startAngle: -1.55,
    size: 120,
    value: 0.80,
    fill: {gradient: ['hsl(250,69%,61%)']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".css .bar").circleProgress({
    value: 0.75
});
$(".js .bar").circleProgress({
    value: 0.70
});
$(".rjs .bar").circleProgress({
    value: 0.65
});
$(".py .bar").circleProgress({
    value: 0.80
});
$(".java .bar").circleProgress({
    value: 0.75
});

function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');
    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }
    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}