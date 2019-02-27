var myPosts=[{
    text :' ',
time:' '
}];
document.addEventListener("click", createPost);
function createPost(){
  var postContent=document.getElementById('myPost');
 
  var postContainer=document.getElementById('postContainer');
  postContainer.innerHTML=' ';
  myPosts.push({
      text: postContent.value,
      time:new Date()});
  for(var i=myPosts.length-1;i>=0;i--){
  var myCard = `<div class="card">
  <div class="card-body">${myPosts[i].text} ${myPosts[i].time}
  </div>
</div>`;
postContainer.innerHTML+=myCard;
  }
postContent.value=" ";
}