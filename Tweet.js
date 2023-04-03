const tweetForm = document.querySelector('#tweetForm');
const tweetList = document.querySelector("#tweetList");

tweetForm.addEventListener('submit', function(e){
    e.preventDefault();
//    let username = document.querySelectorAll('input')[0];
//    let tweet = document.querySelectorAll('input')[1];

   const usernameInput = tweetForm.elements.username;
   const tweetInput = tweetForm.elements.tweet;

   addTweet(usernameInput.value, tweetInput.value);
//    let li = document.createElement('li');
//    let bTag = document.createElement('b');
//    const tweeting = `${username.value} - ${tweet.value}`;
//    bTag.append(username);
//    li.append(bTag);
//    li.append(`- ${tweet}`);
//    tweetList.appendChild(li);
//    username = '';
//    tweet = '';

usernameInput.value = '';
tweetInput.value = '';
});

const addTweet = (username, tweet)=>{
    const bTag = document.createElement('b');
    const list = document.createElement('li');
    bTag.append(username);
    list.append(bTag);
    list.append(`-${tweet}`);
    tweetList.append(list);

}