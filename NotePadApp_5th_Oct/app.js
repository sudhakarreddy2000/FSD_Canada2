const addBtn=document.querySelector("#addBtn")
const main=document.querySelector('#main')
addBtn.addEventListener('click',function(){
    addNote()
})

function addNote(){
    //createElement
   const note=document.createElement('div')
   note.classList.add('note')
   note.innerHTML=`
   <div class="tool"> 
   <i class="trash fa-solid fa-trash" style="color: #fafafa;"></i>
</div>
<textarea></textarea>
   `
  main.appendChild(note) 
  note.querySelector('.trash').addEventListener('click',function(){
    note.remove()
  })
}