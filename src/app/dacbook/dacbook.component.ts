import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dacbook',
  templateUrl: './dacbook.component.html',
  styleUrls: ['./dacbook.component.css']
})
export class DacbookComponent {

 title="DACKBOOK";
 post='';
 editpost='';
 
postList=[];

 postHere(){
   if(this.post!=''){
   const postObject={};
   postObject['like']=0;
   postObject['dislike']=0;
   postObject['post']=this.post;
   postObject['editpost']='';
   
  
   this.postList.splice(0,0,postObject);
   this.post='';
   }else{
     alert("Your Post Is Empty...!!!")
   }
 }

 likecount(item){
   item.like += 1;
 }

 dislikecount(item){
  item.dislike += 1;
}

delete(item){
  this.postList.splice(this.postList.indexOf(item),1);
}

edit(item){
 
  item.post=this.editpost;
  
  this.editpost='';
}



}
