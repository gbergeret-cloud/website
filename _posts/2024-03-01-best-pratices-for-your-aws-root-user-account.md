---
layout: post
title: Best practices for your AWS root user account
date:  2024-03-01 08:59:36 +0100
authors:
  - name: Geoffrey Bergeret
    title: Platform Engineer & DevOps Consultant
    picture: /assets/posts/authors/geoffrey-bergeret.jpg
cover:
  alt:
  original: /assets/posts/covers/2024-03-01-best-pratices-for-your-aws-root-user-account.svg
  thumbnail: /assets/posts/thumbnails/2024-03-01-best-pratices-for-your-aws-root-user-account.svg
reading_time: 3
categories: ideas
tags: platformengineering devops devsecops cloud cloudnative
---

The most common question I’m asked by clients is “can I have admin access?”

The worry is that if I suddenly wasn’t around, they’d be locked out of their AWS
account. But admin access isn’t necessarily the answer, since you should already
be able to recover your login yourself.

## How to recover AWS root access

When you create an AWS account, that first sign-identity has complete access.
This is called the “root user”.

Depending on your role, you may already have access to an inbox connected to the
root user account. This could be through your email address, an email alias or a
group email, so you should be able to reset the password if you need to.

By being the owner of the company AWS account, you basically have admin access.
That’s because a password reset would allow you to escalate your privileges to
the highest level, if you needed to. (Though with the
[principle of least privilege (POLP)](https://www.blueicon-it.com/post/the-principle-of-least-privilege-a-key-to-enhancing-security){:target="_blank"},
which prevents mistakes, I’d only recommend elevating your access if it’s
absolutely necessary.)

As long as the person in charge of your AWS has set up a proper email address
structure, you’re safe. Anyone managing that email address can add you in, so you
can become an admin.

## What is a proper email address structure?

With Gmail and Microsoft 365, you can create variations of your email address by
adding a plus sign (+) and any word before the @ symbol. It’s a feature I use a
lot myself and I encourage my customers to do the same.

When I start working with a new client, I usually ask them to create a group
email with the appropriate people in it. This includes those responsible for the
AWS cost and those in charge of AWS management.

Usually that means me, as tech lead, and the key stakeholder(s) in the client’s
business, who owns the account. We’d use this group email as the AWS account root
user. Here’s the format I usually use: “aws@company.com”.

If my clients use an email service with the + feature, then it’s quick and easy
to create variations of this email, like “aws+prod@company.com”. Otherwise we’d
have to set up a new alias for the group each time.

Overall, the idea is that group emails make it easier to set up AWS, particularly
if you can multiply them. As long as the client’s in the group, they’ll be able
to see what is going on. As long as I'm in the group, I can work efficiently.

## Mitigating the “bus factor”

Let’s say you’re working on a project and one person has done a lot of important
work. If something were to happen to that person, your project would be in
trouble. This is a form of “key person risk”, which some people refer to as the
“[bus factor](https://en.wikipedia.org/wiki/Bus_factor){:target="_blank"}”.

If you’re the founder of a business, the truth is you probably don’t need admin
access. In fact, it may well do more harm than good: you might choose a weak
password, for example, or forget the credentials when you need them most.

Whether you work with a consultant or look after your AWS yourself, mitigating
the “bus factor” is easy. All you need is a group email address, which the
relevant people have access to.
