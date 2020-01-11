# Tech challenge

## Email problem

### Background

Suppose you are working for a company that allows its users to list their properties for sale. The following database tables are part of the platform the company uses for its business.

#### Users

| field   | type    | description             | sample data |
|---------|---------|-------------------------|-------------|
| id      | integer | The primary key         | 1           |
| name    | string  | The name of the user    | Mike        |
| surname | string  | The surname of the user | Kirilov     |
| email   | string  | The email of the user   | mike@me.com |

####  Listings

| field    | type    | description                 | sample data  |
|----------|---------|-----------------------------|--------------|
| id       | integer | The primary key             | 1            |
| user_id  | integer | The user foreign key        | 1            |
| address  | string  | The address of the listing  | 72 Long Road |
| postcode | string  | The postcode of the address | SE78ST       |

#### ListingViews

| field           | type    | description                                   | sample data |
|-----------------|---------|-----------------------------------------------|-------------|
| id              | integer | The primary key                               | 1           |
| listing_id      | integer | The listing foreign key                       | 1           |
| number_of_views | integer | The total number of views the listing has had | 1003        |

There is a microservice which manages the ListingViews table and updates the number of views accordingly. When it notices that the number of views for a particular listing has reached 1000, it needs to have a way of emailing the owner of the listing, informing them that they have more than 1000 views. We would like this process (informing the listing owner that they have more than 1000 view) to be handled by a separate micorservice.

---

### Your task

Your task is to implement a lite version of the email microservice described above. Your application needs to expose an endpoint. A successful request to this endpoint will result in an email being sent to the relevant customer. Your application does not need to send an actual email, an output to the console will be sufficient, similar to the following:

```
Pretending to send email...
---
To: mike@me.com
From: hello@settled.co.uk

Subject: Your listing is getting popular
Content:
Hi Mike,

Your listing for 72 Long Road, SE78ST has been viewed over 1000 times. Congratulations!

Kind regards,
The Settled Team
---
```

You may mock the data you expect to receive in the request body of your endpoint and you may also mock any data you will lookup from the database. Please clearly indicate whether the mocked data came from the request body or you looked it up in the database.

#### Requirements

Your solution should satisfy the following:

- The language used must be Node.js
- The application needs to run
- The API endpoint needs to be accessible
- The email needs to be printed to the console when a request is processed

Please compress your solution as a zip file and send it to us via email.
