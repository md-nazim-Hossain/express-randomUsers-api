# express random users api;

# describe the all api uses note: all route are include in v1 folder v1 means version 1

#base url with port uses :http://localhost:5000;
#live server base url:https://express-random-users-i1yu1dfyr-md-nazim-hossain.vercel.app
#vercel live srever link get all users: https://express-random-users-i1yu1dfyr-md-nazim-hossain.vercel.app/api/v1/user/all

#get method description #<ul>

<li>Get all user Api endpoints: /api/v1/users/all</li>
<li>You can get users with limit you can pass query paramitter endpoints:/api/v1/users/all?limit=1</li>

</ul>

#post method description #<ul>

<li>you can save user pass json data with body endpoints: /api/v1/users/save/</li>
</ul>

#delete method description #<ul>

<li>you can delete user pass params id in api  endpoints: /api/v1/users/random/1</li>

</ul>

#update a specific single users method description #<ul>

<li>you can updated single user in json data pass params id in api and pass updated data in body  endpoints: /api/v1/users/update/1</li>

</ul>

#update a multiple users data description #<ul>

<li>you can updated multiple user data you can pass json array in body  endpoints: /api/v1/users/bulk-update</li>
<li>Array elements must have  object json data </li>
<li>Array elements object contains on id property which users data you can modify </li>

</ul>
