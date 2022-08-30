# Scandiweb Test Assigment

This project was created as test assigment for Junior Web Developer in Skandiweb.

## Junior Developer Test Task

### Outcome of the test

A web-app (accessible by an URL) containing two pages for:

1. Product list page
2. Adding a product page

## 1. Product List

This is the first page of the website, accessible by **<your_website>/**
![screencapture-oleksii-roshchupkin-test-task-000webhostapp-2022-08-30-16_35_09](https://user-images.githubusercontent.com/106179118/187451409-9b0f9b9c-a4b4-4266-a667-6d7595d5cc6b.png)

### HAVE for the list items:

- SKU (unique for each product)
- Name
- Price in $
- One of the product-specific attributes and its value
    - Size (in MB) for DVD-disc
    - Weight (in Kg) for Book
    - Dimensions (HxWxL) for Furniture

## 2. Adding a product page

This page open once button "ADD" is pressed, and accessible by: **<your_website>/add-product**
![screencapture-oleksii-roshchupkin-test-task-000webhostapp-add-product-2022-08-30-16_37_31](https://user-images.githubusercontent.com/106179118/187451766-6b5ebf8a-9ff3-4b74-a666-8e0d97820f3b.png)


### The page display a form with id: #product_form, with the following fields:

- SKU (id: #sku)
- Name (id: #name)
- Price (id: #price)

- Product type switcher (id: #productType) with following options:
    - DVD (can be value or text)
    - Book (can be value or text)
    - Furniture (can be value or text)
    
- Product type-specific attribute
    - Size input field (in MB) for DVD-disc have an ID: #size
    - Weight input field (in Kg) for Book have an ID: #weight
    - Each from Dimensions input fields (HxWxL) for Furniture have an appropriate ID:
        - Height - #height
        - Width - #width
        - Length - #length
