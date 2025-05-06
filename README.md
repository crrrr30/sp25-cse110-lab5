# Lab 5 - Starter

- Name: Jonathan Cui
- Lab Partner: None
- Link to `expose.html`: [https://crrrr30.github.io/sp25-cse110-lab5/expose.html](https://crrrr30.github.io/sp25-cse110-lab5/expose.html)
- Link to `explore.html`: [https://crrrr30.github.io/sp25-cse110-lab5/explore.html](https://crrrr30.github.io/sp25-cse110-lab5/explore.html)

---

**1.** Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

*Response.* No, I would likely avoid unit testing for higher-level functionalities like sending messages between users. These generally require other kinds of test, like integration or end-to-end tests, which validates the interaction *among many components*.

**2.** Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

*Response.*  Yes. For these smaller bits and pieces of domain logic, it's suitable to employ unit testing to validate each component works as intended.
