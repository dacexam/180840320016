import { Component, OnInit } from '@angular/core';
import { isEmbeddedView } from '@angular/core/src/view/util';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
title="DACBOOK";
name="Ajinkya Kamble";
post = '';
postList = [];
  posthere(){
    if(this.post.length>0){
      const postObject={}
      postObject['like']=0;
      postObject['dislike']=0;
      postObject['commentcount']=0;
      postObject['post']=this.post;
      postObject['commentList']=[];
      postObject['d']=new Date();
      this.postList.splice(0,0,postObject);
    this.post='';
    }
  }
  like(item){
    item.like += 1;
  }
  dislike(item){
    item.dislike += 1;
  }
  commenthere(item){
    if(item.comment.length>0){
      item.commentcount += 1;
      item.commentList.splice(0,0,item.comment);
    item.comment='';
    }
  }
  edit(item){
    if(this.post.length>0){
      item.post=this.post;
    this.post='';
    }
  }
  del(item){
    this.postList.splice(item,1);
  }
  delcomment(item,com){
    item.commentcount -= 1;
    item.commentList.splice(com,1);
  }
  editcomment(item,com){
    if(item.comment.length>0){
      var a = item.commentList.indexOf(com);
      item.commentList[a]=item.comment;
    item.comment = '';
    }
  }
}
