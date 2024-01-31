import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    return(
        <main>
            {/*articles generated here*/}
            {posts.map((post)=>(
                <Article 
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
                />
            ))}
            
        </main>
    )
}
export default ArticleList;