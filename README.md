# SHOPBALO

MOCKUP

url:
fe: http://localhost:3000/admin/
be: http://127.0.0.1:8000/api/

Install Project
BackEnd:
+Composer: https://getcomposer.org/download/
+Laravel:9
+Php: 8
FrontEnd
+Node: 16
+Reactjs: 18
+Bookstrap: 5

Install introduction
B1: Create folder on my PC
B2: git clone https://github.com/tanthuan031/SHOPBALO.git
B3:
**\*\***\*\*\***\*\***Setup FrontEnd**\*\***\*\*\***\*\***
cd fe_shop_balo
npm install
npm start

**\*\***\*\*\*\***\*\***Setup BackEnd**\*\***\*\*\*\***\*\***
cd be_shop_balo
composer install
rename file .env.example to .env
php artisan server

<!-- Features Admin-->

        Dashboard
        Category
        Product
        Promotion
        Order
        Staff
        Customer
        Review
        Decentralization

create Resource
php artisan make:resource User --collection
