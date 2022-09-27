# Back-end

## 1. Setup Project 
### 1.1 Install packages:
````
composer install
````
### 1.2 Setup .env in Laravel
````
cp .env.example .env
````
#### Edit your .env:
````
DB_CONNECTION=mysql          
DB_HOST=127.0.0.1    // your host name        
DB_PORT=3306         // mysql port      
DB_DATABASE=bookstore // database name  
DB_USERNAME=root      // database username       
DB_PASSWORD=   // database password
````
#### Generate key for project:
````
php artisan key:generate
````
### 1.3 Setup Database
````
php artisan migrate
php artisan db:seed
````
### 1.4 Setup Storage
````
php artisan storage:link
````
## 2. Run Project
````
php artisan serve
````
