function add_item(){
    
        // let btn = document.querySelector('.adding_item');
        // btn.remove();
    let newdiv = document.createElement("div");
newdiv.innerHTML =  "<div class='main_calc_block'><table border='0' cellspacing='4' cellpadding='4' style='width: 100%;'><tr><th>Услуга</th><th>Формат</th><th>Количество стр.</th><th>Плотность</th><th>Цветность</th><th>Заливка</th></tr><tr><td><select name='products' id='products'><option value=''>Выберите</option><option value=''>Печать</option></select></td><td><select name='paper_format' id='paper_format'><option value=''>Выберите</option><option value=''>А4</option><option value=''>А3</option></select></td><td><input type='text' name='page_count'></td><td><select name='paper_weight' id='paper_weight'><option value=''>Выберите</option><option value=''>80 гр</option><option value=''>120 гр</option><option value=''>170 гр</option><option value=''>200 гр</option><option value=''>300 гр</option><option value=''>400 гр</option></select></td><td><select name='paper_color' id='paper_color'><option value=''>Выберите</option><option value=''>ЧБ</option><option value=''>Цветная</option></select></td><td><select name='paper_fill' id='paper_fill'><option value=''>Выберите</option><option value=''>Да</option><option value=''>Нет</option></select></td></tr></table><button  class='delete_item'>X</button></div><div id='new_calc_block'></div>";
document.getElementById("new_calc_block").appendChild(newdiv);
  addingListenerDeleteBtn();
  
}

function delete_item(event){  
    
    let div = event.target;
    let parent = div.closest(".main_calc_block");
    parent.remove();
    

}

function addingListenerDeleteBtn(){
    let deleteBtn = document.querySelectorAll('.delete_item');
    deleteBtn.forEach(item => {
        item.addEventListener('click', delete_item);
    })
}
adding_item.addEventListener("click", add_item);



    
// console.log(buttons);
// for (index = 0; index < buttons.length; index++) {
//     button = buttons[index];
//     button.addEventListener('click', delete_item);
    
// }

// document.querySelectorAll('.delete_item').forEach(item => {
//     item.addEventListener('click', delete_item);
//   })