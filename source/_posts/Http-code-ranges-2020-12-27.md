---
title: Http Status Code Ranges
tags:
    - Web
    - Http
icon: fas fa-server
date: 2020-12-27 13:15:21
---

## What is it?

They indicate the status of the request sent to the server. Server responds with a specific HTTP status code for each request. Let's see what they mean with respect to their range.

## Range of HTTP Status Codes

-   1XX - Informational
-   2XX - Success
-   3XX - Redirection
-   4XX - Client Error
-   5XX - Server Error

## 1XX - Informational

Server: _Got your request and I am working on it_

-   100 - Continue
-   101 - Switching Protocols
-   102 - Processing

## 2XX - Success

Server: _Yo, I am done_

-   200 - Ok
-   201 - Created
-   202 - Accepted
-   204 - No Content

## 3XX - Redirection

Server: _Oke! I am not doing this!_

-   301 - Moved Permanently
-   302 - Found
-   304 - Not modified
-   305 - Use proxy

## 4XX - Client Error

Server: _Dude... You fucked up!_

-   400 - Bad Request
-   401 - Unauthorized
-   402 - Payment required
-   403 - Forbidden
-   404 - Not found

## 5XX - Server Error

Server: _Okay! I fucked up!!_

-   500 - Internal Server Error
-   502 - Bad gateway
-   503 - Service unavailable
-   504 - Gateway Timeout

**Pro Tip:** With the rising culture of API first development, knowing these status codes and meaning them well in your API can reduce a lot of data being transferred from the server. For instance, _you could just reply with a specific code instead of the default 200 Ok with error messages in the response body_ >\_O
