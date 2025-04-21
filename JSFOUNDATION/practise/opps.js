const user = {
  username: "neyaz",
  loginCount: 10,
  singnedIn: true,

  getUserDetails: function (){
    // console.log("got user details from database");
    // console.log(`username: ${this.username}`);
    console.log(this);
    
  }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

function User(username, loginCount,isloggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isloggedIn = isloggedIn

  return this
}
const userOne =  new user("hitesh", 13, true);
const userTwo =  new user("neyaz", 18, false);

console.log(userOne);
console.log(userTwo);





