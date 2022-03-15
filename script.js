const obj = {
    a0:{aa:[3,9], bb:2, cc:{aaa:4,bbb:-5}},
    a1:{aa:[0,8], bb:-7, cc:{aaa:8,bbb:7}},
    a2:{aa:[9,-4], bb:1, cc:{aaa:-1,bbb:8}},
    a3:{aa:[8,-1], bb:7, cc:{aaa:3,bbb:0}},
    a4:{aa:[-4,-2], bb:-2, cc:{aaa:8,bbb:9}}
}

document.getElementById('a0').innerHTML = obj.a0.aa;
document.getElementById('a1').innerHTML = obj.a1.aa;
document.getElementById('a2').innerHTML = obj.a2.aa;
document.getElementById('a3').innerHTML = obj.a3.aa;
document.getElementById('a4').innerHTML = obj.a4.aa;

document.getElementById('b0').innerHTML = obj.a0.bb;
document.getElementById('b1').innerHTML = obj.a1.bb;
document.getElementById('b2').innerHTML = obj.a2.bb;
document.getElementById('b3').innerHTML = obj.a3.bb;
document.getElementById('b4').innerHTML = obj.a4.bb;

document.getElementById('c0').innerHTML = [obj.a0.cc.aaa, obj.a0.cc.bbb];
document.getElementById('c1').innerHTML = [obj.a1.cc.aaa, obj.a1.cc.bbb];
document.getElementById('c2').innerHTML = [obj.a2.cc.aaa, obj.a2.cc.bbb];
document.getElementById('c3').innerHTML = [obj.a3.cc.aaa, obj.a3.cc.bbb];
document.getElementById('c4').innerHTML = [obj.a4.cc.aaa, obj.a4.cc.bbb];

var blockFill = document.querySelector(".tm-block");
document.querySelectorAll(".tm-table-flex__cell").forEach(function(element) {
    element.addEventListener("click", function() {
        blockFill.textContent = element.textContent;
    });
});

var blockClear = document.querySelector(".tm-block");
document.querySelectorAll(".tm-block").forEach(function(element) {
    element.addEventListener("mouseover", function() {
        blockClear.innerHTML = element.innerHTML = '';
    });
});

var numbers = [];
Object.values(obj).forEach(function (item) {
    numbers = numbers.concat(item.aa);
    numbers.push(item.bb);
    numbers.push(item.cc.aaa);
    numbers.push(item.cc.bbb);
});

const min = Math.min.apply(null, numbers);
document.getElementById('min').innerHTML = "Минимальное значение: " + min

const max = Math.max.apply(null, numbers);
document.getElementById('max').innerHTML = "Максимальное значение: " + max
