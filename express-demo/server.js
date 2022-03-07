document.body.onload = main();
//keeps track of how many tweets exist
numTweets = 5;

//runs when the html is accessed to initialize
//the starting tweets
function main() {

//calls the get request to recieve the tweet data
const options = {
    method: 'GET',

};
//fetches the required data and organizes it into respective DOMs
 fetch( '/api/tweets', options )
 .then( response => response.json() )
 .then( response => {
     for(let i = 0; i<response.length; i++){
        var ul = document.getElementById("tweet" + i + "userName");
        ul.style.listStyleType = 'none';
        var tweet = response[i];
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(tweet.user.name + '\n'));
        ul.appendChild(li);
        ul = document.getElementById("tweet" + i + "userScreen_Name");
        ul.style.listStyleType = 'none';
        tweet = response[i];
        li = document.createElement('li');
        li.appendChild(document.createTextNode("@" + tweet.user.screen_name + '\n'));
        ul.appendChild(li);
        ul = document.getElementById("tweet" + i + "userID");
        ul.style.listStyleType = 'none';
        tweet = response[i];
        li = document.createElement('li');
        li.appendChild(document.createTextNode("User ID: " +tweet.user.id));
        ul.appendChild(li);
        ul = document.getElementById("tweet" + i + "text");
        ul.style.listStyleType = 'none';
        tweet = response[i];
        li = document.createElement('li');
        li.appendChild(document.createTextNode(tweet.text + '\n'));
        ul.appendChild(li);
        ul = document.getElementById("tweet" + i + "time");
        ul.style.listStyleType = 'none';
        tweet = response[i];
        li = document.createElement('li');
        li.appendChild(document.createTextNode("Posted: " + tweet.created_at + "\n"));
        ul.appendChild(li);
        ul = document.getElementById("tweet" + i + "ID");
        ul.style.listStyleType = 'none';
        tweet = response[i];
        li = document.createElement('li');
        li.appendChild(document.createTextNode("ID: " + tweet.id + "\n"));
        ul.appendChild(li);
     }
 } );
 
}

//brings up the text boxes to change a name
//and hides all other text boxes
function changeNameText(){
    if (document.getElementById("nameText")) {
        document.getElementById("nameText").style.display = 'block';
        document.getElementById("newNameText").style.display = 'block';
        document.getElementById("nameTextTitle").style.display = 'block';
        document.getElementById("newNameTextTitle").style.display = 'block';
        document.getElementById("textInput").style.display = '';
        document.getElementById("textInputTitle").style.display = '';
        document.getElementById("tweetID").style.display = '';
        document.getElementById("tweetIDTitle").style.display = '';
        document.getElementById("deleteText").style.display = '';
        document.getElementById("deleteTextTitle").style.display = '';
        document.getElementById("postTweet").style.display = '';
        document.getElementById("updateName").style.display = 'block';
        document.getElementById("deleteTweet").style.display = '';
        document.getElementById("findText").style.display = '';
        document.getElementById("findTextTitle").style.display = '';
        document.getElementById("findTweet").style.display = '';
    } 
    //if there is an error
    else {
      alert("No");
    }
}

//takes te input from the text boxes
//and changes the screen name accordingly
function changeName(){
    for(let i = 0; i < numTweets; i++){
        let s1 = document.getElementById("nameText").value + "\n";
        let s2 = document.getElementById("tweet" + i + "userName").textContent;
        console.log(s1);
        console.log(s2);
        if(s1 === s2){
            document.getElementById("tweet" + i + "userScreen_Name").textContent = '@' + document.getElementById("newNameText").value;
        }
    }
}

//brings up the text boxes to make a post
//and hides all other text boxes
function makePostText(){
    if (document.getElementById("textInput")) {
        document.getElementById("textInput").style.display = 'block';
        document.getElementById("textInputTitle").style.display = 'block';
        document.getElementById("tweetID").style.display = 'block';
        document.getElementById("tweetIDTitle").style.display = 'block';
        document.getElementById("deleteText").style.display = '';
        document.getElementById("deleteTextTitle").style.display = '';
        document.getElementById("nameText").style.display = '';
        document.getElementById("newNameText").style.display = '';
        document.getElementById("nameTextTitle").style.display = '';
        document.getElementById("newNameTextTitle").style.display = '';
        document.getElementById("postTweet").style.display = 'block';
        document.getElementById("updateName").style.display = '';
        document.getElementById("deleteTweet").style.display = '';
        document.getElementById("findText").style.display = '';
        document.getElementById("findTextTitle").style.display = '';
        document.getElementById("findTweet").style.display = '';
    }
    //if there is an error
    else {
      alert("No");
    }
}

//takes the input from the text boxes
//and makes a new post accordingly
function makePost(){

    for(let i = numTweets; i<numTweets+1; i++){
        var ul = document.getElementById("tweet" + i + "userName");
        ul.style.listStyleType = 'none';
        var li = document.createElement('li');
        li.appendChild(document.createTextNode("Current User" + '\n'));
        ul.appendChild(li);
        ul = document.getElementById("tweet" + i + "userScreen_Name");
        ul.style.listStyleType = 'none';
        li = document.createElement('li');
        li.appendChild(document.createTextNode("@Me" + '\n'));
        ul.appendChild(li);
        ul = document.getElementById("tweet" + i + "userID");
        ul.style.listStyleType = 'none';
        li = document.createElement('li');
        li.appendChild(document.createTextNode("User ID: 113113113"));
        ul.appendChild(li);
        ul = document.getElementById("tweet" + i + "text");
        ul.style.listStyleType = 'none';
        li = document.createElement('li');
        li.appendChild(document.createTextNode(document.getElementById("textInput").value + '\n'));
        ul.appendChild(li);
        ul = document.getElementById("tweet" + i + "time");
        ul.style.listStyleType = 'none';
        li = document.createElement('li');
        li.appendChild(document.createTextNode("Posted: Just Now \n"));
        ul.appendChild(li);
        ul = document.getElementById("tweet" + i + "ID");
        ul.style.listStyleType = 'none';
        li = document.createElement('li');
        li.appendChild(document.createTextNode("ID: " + document.getElementById("tweetID").value + "\n"));
        ul.appendChild(li);
        document.getElementById("tweet" + i).style.display = "block"
     }
     //increases the number of tweets
     numTweets++;
}

//brings up the text box to delete a tweet
//and hides all the other text boxes
function deletePostText(){
    if (document.getElementById("deleteText")) {
        document.getElementById("deleteText").style.display = 'block';
        document.getElementById("deleteTextTitle").style.display = 'block';
        document.getElementById("textInput").style.display = '';
        document.getElementById("textInputTitle").style.display = '';
        document.getElementById("tweetID").style.display = '';
        document.getElementById("tweetIDTitle").style.display = '';
        document.getElementById("nameText").style.display = '';
        document.getElementById("newNameText").style.display = '';
        document.getElementById("nameTextTitle").style.display = '';
        document.getElementById("newNameTextTitle").style.display = '';
        document.getElementById("postTweet").style.display = '';
        document.getElementById("updateName").style.display = '';
        document.getElementById("deleteTweet").style.display = 'block';
        document.getElementById("findText").style.display = '';
        document.getElementById("findTextTitle").style.display = '';
        document.getElementById("findTweet").style.display = '';
    } 
    //if there is an error
    else {
      alert("No");
    }
}

//deletes a tweet from view
function deletePost(){
    for(let i = 0; i < numTweets; i++){
        let s1 = "ID: " + document.getElementById("deleteText").value + "\n";
        let s2 = document.getElementById("tweet" + i + "ID").textContent;
        console.log(s1);
        console.log(s2);
        if(s1 === s2){
            document.getElementById("tweet" + i).style.display = 'none';
        }
    }
    
}

//brings up the text box to find a tweet
//and hides all the other text boxes
function findPostText(){
    if (document.getElementById("findText")) {
        document.getElementById("findText").style.display = 'block';
        document.getElementById("findTextTitle").style.display = 'block';
        document.getElementById("findTweet").style.display = 'block';
        document.getElementById("deleteText").style.display = '';
        document.getElementById("deleteTextTitle").style.display = '';
        document.getElementById("textInput").style.display = '';
        document.getElementById("textInputTitle").style.display = '';
        document.getElementById("tweetID").style.display = '';
        document.getElementById("tweetIDTitle").style.display = '';
        document.getElementById("nameText").style.display = '';
        document.getElementById("newNameText").style.display = '';
        document.getElementById("nameTextTitle").style.display = '';
        document.getElementById("newNameTextTitle").style.display = '';
        document.getElementById("postTweet").style.display = '';
        document.getElementById("updateName").style.display = '';
        document.getElementById("deleteTweet").style.display = '';
    } 
    //if there is an error
    else {
      alert("No");
    }

}

//creates and alert with the specified 
//tweets details
function findPost(){
    for(let i = 0; i < numTweets; i++){
        let s1 = "ID: " + document.getElementById("findText").value + "\n";
        let s2 = document.getElementById("tweet" + i + "ID").textContent;
        console.log(s1);
        console.log(s2);
        if(s1 === s2){
            alert(document.getElementById("tweet" + i + "userName").textContent +
                document.getElementById("tweet" + i + "text").textContent 
                + document.getElementById("tweet" + i + "time").textContent );
        }
    }
}

function test_print() {
    consol.log('test code');

}