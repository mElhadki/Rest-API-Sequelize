# Rest-API-Sequelize


Rest API with Sequelize , nodeJs , and Express 

Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
Rest Apis that can create, retrieve, update, delete and find Books by title.

The following table shows overview of the Rest APIs that will be exported:

Methods	Urls	Actions

get all Books

```
GET	api/books	
```
get Book by id

```
GET	api/books/:id	
```
add new Book
```
POST	api/books	
```
update Book by id
```
PUT	api/books/:id	
```
remove Book by id
```
DELETE	api/books/:id	
```
remove all Boks
```
DELETE	api/books	
```
find all published Books
```
GET	api/book/published	
```
find all Books which title contains 'kw'
```
GET	api/books?title=[kw]
```
 <img src="https://miro.medium.com/max/552/1*eOMPsvxRWrbBFxdg590KKA.jpeg"
 alt="Node.js green hexagon" title="Node.js green hexagon" align="right"/>




## Guides

How to run this Application ?


### Project Setup
```
   npm install 
```

### run

```
   node server.js 
```
