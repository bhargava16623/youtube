import React from 'react';
import user from './assets/user.png';


const commentsData =[
     {
        name:"Ram",
        text:"This is a comment",
        replies:[],
     },
     {
        name:"Rahim",
        text:"This is a comment",
        replies:[
            {
                name:"Arjun",
                text:"This is a comment",
                replies:[{
                    name:"Jim Balssie",
                    text:"This is a comment",
                    replies:[],
                 },],
             },
             {
                name:"Satya",
                text:"This is a comment",
                replies:[{
                    name:"Steve",
                    text:"This is a comment",
                    replies:[],
                 },],
             },
        ],
     },
     {
        name:"Robert",
        text:"This is a comment",
        replies:[
            {
                name:"Wahidduddin",
                text:"This is a comment",
                replies:[{
                    name:"Martin",
                    text:"This is a comment",
                    replies:[
                        {
                            name:"Malcolm",
                            text:"This is a comment",
                            replies:[],
                         },
                    ],
                 },
                 {
                    name:"Abraham",
                    text:"This is a comment",
                    replies:[],
                 },],
             },
             {
                name:"Ibrahim",
                text:"This is a comment",
                replies:[
                    {
                        name:"Alan Turing",
                        text:"This is a comment",
                        replies:[],
                     },
                ],
             },
        ],
     },      

];

const  Comment = ({data})=>{
      const {name,text} = data;
      return(
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg'>
            <img className='w-12 h-12' alt='user-avatar' src={user}/>
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
      )
};


const CommentsList =({comments})=>{
    return comments.map((comment,index)=>(
        <div key={index}>
             <Comment data={comment}/>
             <div className="pl-5 border border-l-black ml-5">
                <CommentsList comments={comment.replies}/>
             </div>
        </div>
    ));
}

const CommentsContainer = () => {
  return (
    <div className='pb-4'>
        <h1 className='font-bold text-xl font-sans'>Comments</h1>
        <CommentsList comments={commentsData}/>
    </div>
  );
};

export default CommentsContainer;
